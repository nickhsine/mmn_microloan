import { forwardRef, ReactNode, useRef, useImperativeHandle } from 'react';
import gsap from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';

interface HighlightProps {
  children?: ReactNode;
}

export const Highlight = forwardRef<TimelineHandle, HighlightProps>(({ children }, ref) => {
  const highlightRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    createStartTimeline: () => {
      const tl = gsap.timeline();

      if (highlightRef.current) {
        const childElements = highlightRef.current.children;
        if (childElements.length > 0) {
          gsap.set(childElements, { y: -20, opacity: 0 });
          tl.fromTo(childElements,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
          );
        }
      }
      return tl;
    },  

    createEndTimeline: () => {
      const tl = gsap.timeline();

      if (highlightRef.current) {
        const childElements = highlightRef.current.children;
        if (childElements.length > 0) {
          tl.fromTo(childElements,
            { y: 0, opacity: 1 },
            { y: 20, opacity: 0, duration: 1, stagger: 0.1 }
          );
        }
      }
      return tl;
    },

    domElement: highlightRef.current,
  }));

  return (
    <div className="highlight" ref={highlightRef}>
      {children}
    </div>
  );
});