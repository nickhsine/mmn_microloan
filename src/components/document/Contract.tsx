import { CSSProperties, useRef, forwardRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContractProps {
  contractSrc: string;
  highlightId: string;
  markers?: boolean;
  start?: string;
  end?: string;
}

export const Contract = forwardRef<HTMLDivElement, ContractProps>(({ 
  markers = false, start = '100vh', end = '500vh',
  contractSrc='./assets/img/contract_1A.svg', 
  highlightId='Highlight3',
}, ref) => {
    const contractRef = useRef(null);
    const objectRef = useRef<HTMLObjectElement>(null);

    useGSAP(
      () => {

        if (objectRef.current) {
          objectRef.current.onload = () => {

            const svgDoc = objectRef.current?.contentDocument;
            const highlightElement = svgDoc?.getElementById(highlightId);
            
            console.log('Searching for #Highlight3:', highlightElement);
            
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
                  trigger: contractRef.current,
                  start: `${start} 10%`,
                  end: `${end} 10%`,
                  scrub: true,
                  markers: markers,
                  id: 'contract-trigger',
                },
              });
            } else {
              console.error(`無法找到元素 #${highlightId}，請檢查 SVG 內容`);
            }
          };
        }
      },
      { scope: contractRef, dependencies: [objectRef] }
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
