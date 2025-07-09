import { useRef, forwardRef, useImperativeHandle, useId } from 'react';
import { gsap } from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';
import { useGSAP } from '@gsap/react';
import Draggable from 'gsap/Draggable';

interface ContractProps {
  contract?: string;
  isHighlight?: boolean;
  highlightIds?: number[];
  stagger?: number;
}

export const Contract = forwardRef<TimelineHandle, ContractProps>(
  ({ contract = '1B', isHighlight = false, highlightIds = [2], stagger = 2 }, ref) => {
    const contractRef = useRef<HTMLDivElement>(null);
    const uniqueId = useId();
    const contractSrc = `./assets/img/contract${contract}.svg`;
    const draggableRef = useRef<HTMLDivElement>(null);

    useGSAP(
      () => {
        gsap.registerPlugin(Draggable);
  
        if (!draggableRef.current) return;
  
        Draggable.create(draggableRef.current, {
          type: 'x,y',
          inertia: true,
          onDragEnd: function () {
            gsap.to(this.target, {
              // x: 0,
              // y: 0,
              duration: 3,
              ease: 'power1.out',
            });
          },
        });
      },
      { scope: contractRef }
    );

    useImperativeHandle(ref, () => ({
      createStartTimeline: () => {
        const tl = gsap.timeline();
        if (contractRef.current) {
          tl.to(contractRef.current.querySelectorAll('.contract-highlight'), {
            opacity: 1,
            duration: 0.5,
            stagger: stagger,
          });
        }
        return tl;
      },
      domElement: contractRef.current,
    }));
    if (isHighlight) {
      return (
        <div ref={contractRef} data-contract-id={uniqueId}>
          <div className="contract-draggable" ref={draggableRef}>
            <div className="contract-container">
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
          </div>
        </div>
      );
    } else {
      return (
        <div ref={contractRef} data-contract-id={uniqueId}>
          <div className="contract-draggable" ref={draggableRef}>
            <div className="contract-container">
              <img src={contractSrc} className="contract" alt="contract" />
            </div>
          </div>
        </div>
      );
    }
  }
);
