import { useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 定義暫停點
export interface PausePoint {
  index: number;      // 在哪個索引後暫停
  resumeAt: string;   // 在哪個滾動位置恢復 (例如 "1200vh")
}

interface ScrollPauseProps {
  children?: ReactNode;
  pausePoints: PausePoint[];  // 暫停點數組
  elementSelector: string;    // 要分組的元素選擇器
  scrollDistance?: number;    // 每個組的滾動距離 (vh)
  start?: string;            // 起始滾動位置
  end?: string;              // 結束滾動位置
  markers?: boolean;         // 是否顯示標記
  trigger?: Element | string; // 觸發器元素或選擇器
  onGroupsCreated?: (timelines: gsap.core.Timeline[]) => void; // 創建組後的回調
  animation?: (tl: gsap.core.Timeline, elements: NodeListOf<Element> | Element[]) => void; // 自定義動畫函數
  scrub?: number | boolean;  // ScrollTrigger 的 scrub 選項
}

// 輔助函數：獲取所有斷點
export function getBreakPoints(
  pausePoints: PausePoint[], 
  start: string, 
  end: string, 
  totalElements: number
): (PausePoint & { isBreakPoint?: boolean })[] {
  // 對暫停點進行排序，確保索引是升序的
  const sortedPausePoints = [...pausePoints].sort((a, b) => a.index - b.index);
  
  // 添加開始和結束點，以便處理第一組和最後一組
  return [
    { index: -1, resumeAt: start, isBreakPoint: true }, // 開始點
    ...sortedPausePoints,
    { index: totalElements - 1, resumeAt: end, isBreakPoint: true } // 結束點
  ];
}

// 輔助函數：獲取組信息
export function getGroupInfo(
  breakPoints: (PausePoint & { isBreakPoint?: boolean })[], 
  index: number, 
  scrollDistance: number
) {
  const startIndex = breakPoints[index].index + 1;
  const endIndex = breakPoints[index + 1].index + 1;
  
  // 計算這個組的開始和結束滾動位置
  const groupStart = breakPoints[index].resumeAt;
  const groupEnd = breakPoints[index + 1].isBreakPoint 
    ? breakPoints[index + 1].resumeAt 
    : `+=${scrollDistance}`;  // 使用 GSAP 的相對值語法
  
  return { startIndex, endIndex, groupStart, groupEnd };
}

// 輔助函數：創建動畫時間軸
export function createScrollTimeline(
  elements: NodeListOf<Element> | Element[],
  trigger: Element,
  start: string,
  end: string,
  id: string,
  options: {
    markers?: boolean,
    scrub?: number | boolean,
    toggleActions?: string,
    animation?: (tl: gsap.core.Timeline, elements: NodeListOf<Element> | Element[]) => void
  } = {}
): gsap.core.Timeline {
  // 設置默認選項
  const { markers = false, scrub = 1, toggleActions, animation } = options;
  
  // 創建時間軸
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: start,
      end: end,
      scrub: scrub,
      markers: markers,
      id: id,
      toggleActions: toggleActions || "play none none none"
    }
  });

  // 如果提供了自定義動畫函數，則使用它
  if (animation) {
    animation(tl, elements);
  } else {
    // 默認動畫
    tl.fromTo(elements, 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.25, ease: "power2.out" }
    );
  }
  
  return tl;
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
    gsap.registerPlugin(ScrollTrigger);
    
    // 清除之前可能存在的時間軸
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
    
    // 獲取要分組的元素
    const elements = triggerElement.querySelectorAll(elementSelector);
    
    if (elements.length === 0) {
      console.warn(`ScrollPause: No elements found with selector "${elementSelector}"`);
      return;
    }
    
    const timelines: gsap.core.Timeline[] = [];
    const timelineOptions = { markers, scrub, animation };

    // 如果沒有設置暫停點，則創建單個時間軸
    if (!pausePoints.length) {
      const tl = createScrollTimeline(
        elements, 
        triggerElement, 
        `${start} 10%`, 
        `${end} 10%`, 
        'scroll-pause-all',
        timelineOptions
      );
      timelines.push(tl);
    } else {
      // 創建多個元素組和時間軸
      const breakPoints = getBreakPoints(pausePoints, start, end, elements.length);
      
      // 使用 GSAP 的上下文來簡化代碼
      gsap.context(() => {
        for (let i = 0; i < breakPoints.length - 1; i++) {
          const { startIndex, endIndex, groupStart, groupEnd } = getGroupInfo(
            breakPoints, i, scrollDistance
          );
          
          // 跳過空組
          if (startIndex >= endIndex) continue;
          
          const groupElements = Array.from(elements).slice(startIndex, endIndex);
          
          const tl = createScrollTimeline(
            groupElements, 
            triggerElement, 
            `${groupStart} 10%`, 
            `${groupEnd} 10%`, 
            `scroll-pause-group-${i}`,
            timelineOptions
          );
          
          timelines.push(tl);
        }
      }, containerRef);
    }
    
    // 如果提供了回調，則調用它
    if (onGroupsCreated) {
      onGroupsCreated(timelines);
    }
    
    return () => {
      timelines.forEach(tl => {
        if (tl.scrollTrigger) {
          tl.scrollTrigger.kill();
        }
        tl.kill();
      });
    };
    
  }, { scope: containerRef, dependencies: [pausePoints, elementSelector, scrollDistance, start, end, markers, trigger, animation, scrub] });

  return (
    <div ref={containerRef} style={{ display: 'contents' }}>
      {children}
    </div>
  );
}; 