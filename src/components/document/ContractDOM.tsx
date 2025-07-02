import { CSSProperties, useRef, forwardRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContractDOMProps {
  contractSrc: string;
  highlightIds: string[];
  markers?: boolean;
  start?: string;
  end?: string;
  stagger?: number;
}

export const ContractDOM = forwardRef<HTMLDivElement, ContractDOMProps>(({ 
  markers = false, 
  start = '100vh', 
  end = '500vh',
  contractSrc = './assets/img/contract_1A.svg',
  highlightIds = ['Highlight3'],
  stagger = 0.5,
}, ref) => {
  const contractRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    
    fetch(contractSrc)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then(svgText => {
        setSvgContent(svgText);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('無法載入 SVG 文件:', error);
        setIsLoading(false);
      });
  }, [contractSrc]);

  useGSAP(() => {
    if (!svgContent || isLoading || !containerRef.current) return;
    
    const highlightElements: Element[] = [];
    
    highlightIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        highlightElements.push(element);
        console.log(`SVG Element Found: ${id}`, {
          tagName: element.tagName,
          id: element.id,
        });
      } else {
        console.error(`無法找到元素 #${id}，請檢查 SVG 內容`);
      }
    });
    
    if (highlightElements.length > 0) {
      gsap.set(highlightElements, { opacity: 0 });
      
      gsap.to(highlightElements, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: stagger,
        scrollTrigger: {
          trigger: contractRef.current || containerRef.current,
          start: `${start} 10%`,
          end: `${end} 10%`,
          scrub: true,
          markers: markers,
          id: 'contract-dom-trigger',
        },
      });
    } else {
      console.error(`無法找到任何指定的高亮元素：${highlightIds.join(', ')}`);
    }
  }, { 
    scope: containerRef, 
    dependencies: [svgContent, isLoading, highlightIds, markers, start, end, stagger],
    revertOnUpdate: true
  });

  return (
    <div ref={ref || contractRef} className="contract-container">
      <div 
        ref={containerRef} className = "contract"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
});
