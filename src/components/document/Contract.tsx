import { useRef, forwardRef, useImperativeHandle, useId } from 'react';
import { gsap } from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';

interface ContractProps {
  contract?: string;
  isHighlight?: boolean;
  highlightIds?: number[];
}

export const Contract = forwardRef<TimelineHandle, ContractProps>(({
  contract = '1B',
  isHighlight = false,
  highlightIds = [2]
}, ref) => {
  const contractRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId();
  const contractSrc = `./assets/img/contract${contract}.svg`;

  if (isHighlight) {
    useImperativeHandle(ref, () => ({
      createTimeline: () => {
        const tl = gsap.timeline();
        if (contractRef.current) {
          tl.to(contractRef.current.querySelectorAll('.contract-highlight'), { 
            opacity: 1, 
            duration: 0.5,
            stagger: 0.2
          });
        }
        return tl;
      },
      domElement: contractRef.current
    }));

    return (
      <div ref={contractRef} className="contract-container" data-contract-id={uniqueId}>
        {highlightIds.map((id, index) => (
          <img 
            key={`${contract}-hl-${id}`} 
            src={`./assets/img/contract${contract}_HL${id}.svg`} 
            className="contract-highlight" 
            alt={`contract highlight ${id}`} 
            style={{ zIndex: index + 1 }}
          />
        ))}
        <img src={contractSrc} className="contract" alt="contract" />
      </div>
    );
  } else {
    return (
      <div ref={contractRef} className="contract-container" data-contract-id={uniqueId}>
        <img src={contractSrc} className="contract" alt="contract" />
      </div>
    );
  }
});