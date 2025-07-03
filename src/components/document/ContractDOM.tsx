import { CSSProperties, useRef, forwardRef, useImperativeHandle, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';

// 這個 interface 與 Notification 中的 handle 保持一致，但增加 DOM 引用
interface TimelineComponent {
  createTimeline: () => gsap.core.Timeline;
  domElement: HTMLDivElement | null; // 新增 DOM 引用
}

interface ContractDOMProps {
  contractSrc: string;
  highlightIds: string[];
  stagger?: number;
}

export const ContractDOM = forwardRef<TimelineHandle, ContractDOMProps>(({ 
  contractSrc = './assets/img/contract_1A.svg',
  highlightIds = ['Highlight1', 'Highlight2'],
  stagger = 0.2,
}, ref) => {
  const contractRef = useRef<HTMLDivElement>(null);
  const svgObjectRef = useRef<HTMLObjectElement>(null);
  const [svgLoaded, setSvgLoaded] = useState(false);

  // SVG 載入完成處理
  const handleSvgLoad = () => {
    console.log('SVG loaded');
    setSvgLoaded(true);
  };

  // 暴露 createTimeline 方法和 DOM 引用
  useImperativeHandle(ref, () => ({
    createTimeline: () => {
      const tl = gsap.timeline();
      
      if (!svgLoaded || !svgObjectRef.current) {
        console.warn('SVG not loaded yet');
        return tl;
      }

      const elements: Element[] = [];
      
      try {
        // 獲取 SVG 文檔
        const svgDoc = svgObjectRef.current.contentDocument;
        
        if (svgDoc) {
          highlightIds.forEach(id => {
            const element = svgDoc.getElementById(id);
            if (element) {
              elements.push(element);
              console.log(`Timeline creating for: ${id}`, element);
            } else {
              console.warn(`Element #${id} not found in SVG`);
            }
          });
        } else {
          console.warn('Could not access SVG document');
        }
      } catch (error) {
        console.error('Error accessing SVG elements:', error);
      }
      
      if (elements.length > 0) {
        // 確保初始狀態
        gsap.set(elements, { opacity: 0 });
        
        tl.to(elements, {
          opacity: 1,
          duration: 0.2,
          ease: 'power2.out',
          stagger: stagger,
        }, 0);
        
        console.log(`Animation created for ${elements.length} elements`);
      } else {
        console.warn('No highlight elements found for animation');
      }
      
      return tl;
    },
    domElement: contractRef.current,
  }), [highlightIds, stagger, svgLoaded]);

  return (
    <div ref={contractRef} className="contract-container">
      <object
        ref={svgObjectRef}
        data={contractSrc}
        type="image/svg+xml"
        className="contract"
        onLoad={handleSvgLoad}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
});
