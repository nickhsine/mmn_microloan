import { CSSProperties, useRef, forwardRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContractDOMProps {
  contractSrc: string;
  highlightId: string;
  markers?: boolean;
  start?: string;
  end?: string;
}

export const ContractDOM = forwardRef<HTMLDivElement, ContractDOMProps>(({ 
  markers = false, 
  start = '100vh', 
  end = '500vh',
  contractSrc = './assets/img/contract_1A.svg',
  highlightId = 'Highlight3',
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
    
    const highlightElement = document.getElementById(highlightId);
    
    console.log(`Searching for #${highlightId}:`, highlightElement);
    
    if (highlightElement) {
      console.log('SVG Element Found:', {
        tagName: highlightElement.tagName,
        id: highlightElement.id,
      });
      
      gsap.set(highlightElement, { opacity: 0 });
      
      gsap.to(highlightElement, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
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
      console.error(`No element #${highlightId} was found`);
    }
  }, { 
    scope: containerRef, 
    dependencies: [svgContent, isLoading, highlightId, markers, start, end],
    revertOnUpdate: true // 更新時自動清理之前的動畫
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
