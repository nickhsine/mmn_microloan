import { gsap } from 'gsap';

// 共用的時間軸處理型別
export type TimelineHandle = {
  createStartTimeline: () => gsap.core.Timeline;
  createEndTimeline?: () => gsap.core.Timeline;
  pause?: () => void;
  resume?: () => void;
  stop?: () => void;
  domElement: HTMLElement | null;
};

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
    timeline.to(ref.domElement, props, position);
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
    parentTimeline.call(() => ref.pause && ref.pause(), [], position);
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
