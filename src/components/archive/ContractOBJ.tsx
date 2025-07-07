import { CSSProperties, useRef, forwardRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContractProps {
  contractSrc: string;
  highlightIds: string[];
  markers?: boolean;
  start?: string;
  end?: string;
  stagger?: number;
}

export const Contract = forwardRef<HTMLDivElement, ContractProps>(
  (
    {
      markers = false,
      start = '100vh',
      end = '500vh',
      contractSrc = './assets/img/contract_1A.svg',
      highlightIds = ['Highlight3'],
      stagger = 0.2,
    },
    ref
  ) => {
    const contractRef = useRef(null);
    const objectRef = useRef<HTMLObjectElement>(null);

    useGSAP(
      () => {
        if (objectRef.current) {
          objectRef.current.onload = () => {
            const svgDoc = objectRef.current?.contentDocument;
            const highlightElements: Element[] = [];

            highlightIds.forEach(id => {
              const element = svgDoc?.getElementById(id);
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
                  trigger: contractRef.current,
                  start: `${start} 10%`,
                  end: `${end} 10%`,
                  scrub: true,
                  markers: markers,
                  id: 'contract-trigger',
                },
              });
            } else {
              console.error(`無法找到任何指定的高亮元素：${highlightIds.join(', ')}`);
            }
          };
        }
      },
      { scope: contractRef, dependencies: [objectRef, highlightIds, stagger] }
    );

    const containerStyle: CSSProperties = {};

    return (
      <div ref={ref || contractRef} className="contract-container" style={containerStyle}>
        <div className="contract">
          <object
            ref={objectRef}
            data={contractSrc}
            type="image/svg+xml"
            className="w-full h-full"
          />
        </div>
      </div>
    );
  }
);
