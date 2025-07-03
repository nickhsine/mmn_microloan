import { gsap } from 'gsap';

// 共用的時間軸處理型別
export type TimelineHandle = {
  createTimeline: () => gsap.core.Timeline;
  domElement: HTMLElement | null;
};

// 工具函式：安全地設置 GSAP 屬性
export const safeGsapSet = (ref: { domElement: HTMLElement | null } | null, props: gsap.TweenVars) => {
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

// 工具函式：安全地添加子時間軸
export const safeAddTimeline = (
  parentTimeline: gsap.core.Timeline,
  ref: { createTimeline: () => gsap.core.Timeline } | null,
  position?: string | number
) => {
  if (ref) {
    const childTimeline = ref.createTimeline();
    if (childTimeline) {
      parentTimeline.add(childTimeline, position);
      console.log('Timeline added to parent at position:', position);
    }
  } else {
    console.warn('safeAddTimeline: ref is null');
  }
}; 