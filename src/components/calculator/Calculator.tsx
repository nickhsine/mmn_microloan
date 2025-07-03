import { CSSProperties, useRef, forwardRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';

interface CalculatorProps {
  top?: string;
  markers?: boolean;
}

export const Calculator = forwardRef<TimelineHandle, CalculatorProps>(({ top, markers = false }, ref) => {
  const calculatorRef = useRef<HTMLDivElement>(null);

  const containerStyle: CSSProperties = top
    ? {
        position: 'absolute',
        top,
        left: '50%',
        transform: 'translate(-50%, 0%)',
      }
    : {};

  useImperativeHandle(ref, () => ({
    createStartTimeline: () => {
      const tl = gsap.timeline();
      if (calculatorRef.current) {
        gsap.set(calculatorRef.current, { opacity: 0, scale: 0.9 });
        tl.to(calculatorRef.current, { opacity: 1, scale: 1, duration: 0.5 });
      }
      return tl;
    },
    domElement: calculatorRef.current,
  }));

  return <div ref={calculatorRef} className="calculator" style={containerStyle}></div>;
});
