import { useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface PausePoint {
  index: number;      // 在哪個索引後暫停
  resumeAt: string;   // 在哪個滾動位置恢復
}

interface ScrollPauseProps {
  children?: ReactNode;
  pausePoints: PausePoint[];
  elementSelector: string;
  scrollDistance?: number;
  start?: string;
  end?: string;
  markers?: boolean;
  trigger?: Element | string;
  onGroupsCreated?: (timelines: gsap.core.Timeline[]) => void;
  animation?: (tl: gsap.core.Timeline, elements: NodeListOf<Element> | Element[]) => void;
  scrub?: number | boolean;
}

export const ScrollPause = ({ 
  children,
  pausePoints,
  elementSelector,
  scrollDistance = 300,
  start = '0vh',
  end = '1000vh',
  markers = false,
  trigger,
  onGroupsCreated,
  animation,
  scrub = 1,
}: ScrollPauseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 清除之前的時間軸
    ScrollTrigger.getAll().forEach(st => {
      if (st.vars.id && String(st.vars.id).startsWith('scroll-pause-')) {
        st.kill();
      }
    });
    
    // 獲取觸發器元素
    const triggerElement = trigger 
      ? (typeof trigger === 'string' ? document.querySelector(trigger) : trigger)
      : containerRef.current;
    
    if (!triggerElement) {
      console.warn('ScrollPause: No trigger element found');
      return;
    }
    
    // 獲取要動畫的元素
    const elements = triggerElement.querySelectorAll(elementSelector);
    
    if (elements.length === 0) {
      console.warn(`ScrollPause: No elements found with selector "${elementSelector}"`);
      return;
    }
    
    const timelines: gsap.core.Timeline[] = [];

    // 創建動畫時間軸的函數
    const createTimeline = (
      targetElements: Element[], 
      groupStart: string, 
      groupEnd: string, 
      id: string
    ) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: `${groupStart} 10%`,
          end: `${groupEnd} 10%`,
          scrub: scrub,
          markers: markers,
          id: id,
        }
      });

      if (animation) {
        animation(tl, targetElements as any);
      } else {
        // 默認動畫
        tl.fromTo(targetElements, 
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.25, ease: "power2.out" }
        );
      }
      
      return tl;
    };

    // 如果沒有暫停點，創建單個時間軸
    if (!pausePoints.length) {
      const tl = createTimeline(
        Array.from(elements), 
        start, 
        end, 
        'scroll-pause-all'
      );
      timelines.push(tl);
    } else {
      // 根據暫停點創建多個時間軸
      const sortedPausePoints = [...pausePoints].sort((a, b) => a.index - b.index);
      
      // 創建斷點數組，包含開始和結束
      const breakPoints = [
        { index: -1, resumeAt: start },
        ...sortedPausePoints,
        { index: elements.length - 1, resumeAt: end }
      ];
      
      // 為每個組創建時間軸
      for (let i = 0; i < breakPoints.length - 1; i++) {
        const currentBreak = breakPoints[i];
        const nextBreak = breakPoints[i + 1];
        
        const startIndex = currentBreak.index + 1;
        const endIndex = nextBreak.index + 1;
        
        // 跳過空組
        if (startIndex >= endIndex) continue;
        
        const groupElements = Array.from(elements).slice(startIndex, endIndex);
        const groupStart = currentBreak.resumeAt;
        const groupEnd = i === breakPoints.length - 2 
          ? nextBreak.resumeAt 
          : `+=${scrollDistance}`;
        
        const tl = createTimeline(
          groupElements, 
          groupStart, 
          groupEnd, 
          `scroll-pause-group-${i}`
        );
        
        timelines.push(tl);
      }
    }
    
    // 執行回調
    if (onGroupsCreated) {
      onGroupsCreated(timelines);
    }
    
    // 清理函數
    return () => {
      timelines.forEach(tl => {
        if (tl.scrollTrigger) {
          tl.scrollTrigger.kill();
        }
        tl.kill();
      });
    };
    
  }, { 
    scope: containerRef, 
    dependencies: [pausePoints, elementSelector, scrollDistance, start, end, markers, trigger, animation, scrub] 
  });

  return (
    <div ref={containerRef} style={{ display: 'contents' }}>
      {children}
    </div>
  );
}; 