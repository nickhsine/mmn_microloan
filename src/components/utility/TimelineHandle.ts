import { gsap } from 'gsap';

// 共用的時間軸處理型別
export type TimelineHandle = {
  createStartTimeline: () => gsap.core.Timeline;
  createEndTimeline?: () => gsap.core.Timeline;
  createNoScrubTimeline?: () => gsap.core.Timeline; // 專門用於不受 scrub 影響的動畫
  pause?: () => void;
  resume?: () => void;
  stop?: () => void;
  domElement: HTMLElement | null;
};

// 儲存所有noScrub動畫的註冊表
type NoScrubAnimation = {
  id: string;
  ref: { createStartTimeline: () => gsap.core.Timeline; createNoScrubTimeline?: () => gsap.core.Timeline; createEndTimeline?: () => gsap.core.Timeline; domElement?: HTMLElement | null };
  labelName: string;
  exitOffset: number;
  currentTL: gsap.core.Timeline | null;
  isActive: boolean;
};

const noScrubRegistry = new Map<gsap.core.Timeline, NoScrubAnimation[]>();

// 工具函式：安全地設置 GSAP 屬性
export const safeGsapSet = (
  ref: { domElement: HTMLElement | null } | null,
  props: gsap.TweenVars
) => {
  if (ref?.domElement) {
    gsap.set(ref.domElement, props);
  }
};

// 工具函式：安全地添加 tween 到時間軸
export const safeGsapTo = (
  timeline: gsap.core.Timeline,
  ref: { domElement: HTMLElement | null } | null,
  props: gsap.TweenVars,
  position?: string | number
) => {
  if (ref?.domElement) {
    timeline.to(
      ref.domElement,
      { ...props },
      position
    );
  }
};

// 工具函式：安全地添加開始時間軸
export const AddStartTL = (
  parentTimeline: gsap.core.Timeline,
  ref: { createStartTimeline: () => gsap.core.Timeline } | null,
  position?: string | number
) => {
  if (ref) {
    const childTimeline = ref.createStartTimeline();
    if (childTimeline) {
      parentTimeline.add(childTimeline, position);
      // console.log('Start Timeline added to parent at position:', position);
    }
  } else {
    console.warn('AddStartTL: ref is null');
  }
};

// 工具函式：安全地添加結束時間軸
export const AddEndTL = (
  parentTimeline: gsap.core.Timeline,
  ref: { createEndTimeline?: () => gsap.core.Timeline } | null,
  position?: string | number
) => {
  if (ref && ref.createEndTimeline) {
    const endTimeline = ref.createEndTimeline();
    if (endTimeline) {
      parentTimeline.add(endTimeline, position);
    }
  } else {
    console.warn('AddEndTL: ref is null or does not have createEndTimeline method');
  }
};

// 工具函式：安全地暫停時間軸
export const PauseTL = (
  parentTimeline: gsap.core.Timeline,
  ref: { pause?: () => void } | null,
  position?: string | number
) => {
  if (ref && ref.pause) {
    parentTimeline.call(() => {
      // only pause when playing forward (or no ScrollTrigger attached)
      const shouldPause = !parentTimeline.scrollTrigger || parentTimeline.scrollTrigger.direction >= 0;
      if (shouldPause) {
        ref.pause && ref.pause();
      }
    }, [], position);
  } else {
    console.warn('PauseTL: ref is null or does not have pause method');
  }
};

// 工具函式：安全地恢復時間軸
export const ResumeTL = (
  parentTimeline: gsap.core.Timeline,
  ref: { resume?: () => void } | null,
  position?: string | number
) => {
  if (ref && ref.resume) {
    parentTimeline.call(() => ref.resume && ref.resume(), [], position);
  } else {
    console.warn('ResumeTL: ref is null or does not have resume method');
  }
};

// 工具函式：安全地停止時間軸
export const StopTL = (
  parentTimeline: gsap.core.Timeline,
  ref: { stop?: () => void } | null,
  position?: string | number
) => {
  if (ref && ref.stop) {
    parentTimeline.call(() => ref.stop && ref.stop(), [], position);
  } else {
    console.warn('StopTL: ref is null or does not have stop method');
  }
};

export const RefFromTo = (
  timeline: gsap.core.Timeline,
  ref: { domElement: HTMLElement | null } | null,
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars,
  position?: string | number
) => {
  if (ref?.domElement) {
    timeline.fromTo(
      ref.domElement,
      { ...fromVars },
      { ...toVars },
      position
    );
  }
};

export const RefBeginSet = (
  timeline: gsap.core.Timeline,
  ref: { domElement: HTMLElement | null } | null,
  props: gsap.TweenVars,
  position: string | number = 0
) => {
  if (ref?.domElement) {
    timeline.set(ref.domElement, props, position);
  }
};

// 工具函式：添加一個不受scrub影響的時間軸，在特定ScrollTrigger位置觸發一次
export const AddNoScrubTL = (
  parentTimeline: gsap.core.Timeline,
  ref: { createStartTimeline: () => gsap.core.Timeline; createNoScrubTimeline?: () => gsap.core.Timeline; createEndTimeline?: () => gsap.core.Timeline; domElement?: HTMLElement | null } | null,
  triggerPosition?: string | number,
  exitOffset: number = 0.05 // 超過標籤位置多少比例後停止動畫 (0.1 = 10%)
) => {
  if (!ref) {
    console.warn('AddNoScrubTL: ref is null');
    return;
  }

  const animationId = `noScrub_${Math.floor(Math.random() * 10000)}`;
  const labelName = `${animationId}_label`;
  parentTimeline.addLabel(labelName, triggerPosition);

  // 創建新的動畫對象
  const newAnimation: NoScrubAnimation = {
    id: animationId,
    ref,
    labelName,
    exitOffset,
    currentTL: null,
    isActive: false
  };

  // 將動畫添加到註冊表
  if (!noScrubRegistry.has(parentTimeline)) {
    noScrubRegistry.set(parentTimeline, []);
    
    // 只在第一次添加時設置 onUpdate 回調
    setupNoScrubUpdateCallback(parentTimeline);
  }
  
  noScrubRegistry.get(parentTimeline)!.push(newAnimation);
};

// 設置單一的 onUpdate 回調來處理所有 noScrub 動畫
const setupNoScrubUpdateCallback = (parentTimeline: gsap.core.Timeline) => {
  parentTimeline.eventCallback('onUpdate', () => {
    if (!parentTimeline.scrollTrigger) return;
    
    const progress = parentTimeline.scrollTrigger.progress;
    const direction = parentTimeline.scrollTrigger.direction;
    const animations = noScrubRegistry.get(parentTimeline) || [];
    
    animations.forEach(animation => {
      const labelPos = getLabelProgress(parentTimeline, animation.labelName);
      const exitPos = labelPos + animation.exitOffset;
      
      // 觸發動畫
      if (direction > 0 && progress >= labelPos && progress < exitPos && !animation.isActive) {
        playNoScrubAnimation(animation);
      }
      
      // 處理動畫狀態
      if (animation.isActive) {
        // 向上滾動時：重置動畫
        if (direction < 0 && progress < labelPos) {
          resetNoScrubAnimation(animation);
        }
        // 向下滾動超過退出點時：快進完成動畫
        else if (direction > 0 && progress > exitPos) {
          fastForwardNoScrubAnimation(animation);
        }
      }
    });
  });
};

// 獲取標籤進度的輔助函數
const getLabelProgress = (timeline: gsap.core.Timeline, labelName: string): number => {
  const labelPosition = timeline.labels[labelName];
  return labelPosition ? labelPosition / timeline.duration() : 0;
};

// 播放 noScrub 動畫
const playNoScrubAnimation = (animation: NoScrubAnimation) => {
  if (animation.isActive) return;
  
  animation.isActive = true;
  const tlFunction = animation.ref.createNoScrubTimeline || animation.ref.createStartTimeline;
  
  if (tlFunction) {
    animation.currentTL = tlFunction();
    animation.currentTL.eventCallback('onComplete', () => {
      animation.isActive = false;
      animation.currentTL = null;
    });
    animation.currentTL.play();
  }
};

// 重置 noScrub 動畫
const resetNoScrubAnimation = (animation: NoScrubAnimation) => {
  if (animation.currentTL) {
    animation.currentTL.kill();
    animation.currentTL = null;
  }
  if (animation.ref.createEndTimeline) {
    const endTL = animation.ref.createEndTimeline();
    endTL.progress(1);
  }
  animation.isActive = false;
};

// 快進 noScrub 動畫
const fastForwardNoScrubAnimation = (animation: NoScrubAnimation) => {
  if (animation.currentTL && animation.isActive) {
    // 先完成動畫到最終狀態
    animation.currentTL.progress(1);
    // 然後停止動畫
    animation.currentTL.kill();
    animation.isActive = false;
    animation.currentTL = null;
  }
};

// 清理函數（可選，用於移除不再需要的動畫）
export const clearNoScrubAnimations = (parentTimeline: gsap.core.Timeline) => {
  const animations = noScrubRegistry.get(parentTimeline);
  if (animations) {
    animations.forEach(animation => {
      if (animation.currentTL) {
        animation.currentTL.kill();
      }
    });
    noScrubRegistry.delete(parentTimeline);
  }
};
