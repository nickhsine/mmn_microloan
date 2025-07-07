import { useRef, forwardRef, useImperativeHandle, ReactNode, useCallback } from 'react';
import { gsap } from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';

import { Keyboard } from './Keyboard';
import { useGSAP } from '@gsap/react';
import Draggable from 'gsap/Draggable';

interface CalculatorProps {
  children?: ReactNode;
}

export const Calculator = forwardRef<TimelineHandle, CalculatorProps>(({ children }, ref) => {
  const calculatorRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<HTMLDivElement>(null);

  const combinedRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      (calculatorRef as any).current = node;
    }
  }, []);

  useGSAP(
    () => {
      gsap.registerPlugin(Draggable);

      if (!draggableRef.current) return;

      Draggable.create(draggableRef.current, {
        type: 'x,y',
        inertia: true,
        onDragEnd: function () {
          gsap.to(this.target, {
            x: 0,
            y: 0,
            duration: 3,
            ease: 'power1.out',
          });
        },
      });
    },
    { scope: calculatorRef }
  );

  useImperativeHandle(ref, () => ({
    createStartTimeline: () => {
      const tl = gsap.timeline();
      if (calculatorRef.current) {
        gsap.set(calculatorRef.current, { opacity: 0 });
        tl.fromTo(calculatorRef.current, 
          { opacity: 0, },
          { opacity: 1, duration: 0.5, ease: 'power1.out' }
        );
      }
      return tl;
    },
    domElement: calculatorRef.current,
  }));

  return (
    <div ref={combinedRef}>
      <div ref={draggableRef} className="calculator-draggable">
        <div className="calculator">
          <div className="calculator-frame">
            <div className="bottom-bar" />
            <div className="display">
              {children}
            </div>
            <Keyboard />
          </div>
        </div>
      </div>
    </div>
  );
});
