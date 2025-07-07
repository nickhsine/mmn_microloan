import { ReactNode,useRef, forwardRef, useImperativeHandle, CSSProperties } from 'react';
import { gsap } from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';

interface DetailsProps {
  children?: ReactNode;
  stagger?: number;
  style?: CSSProperties;
}

export const Details = forwardRef<TimelineHandle, DetailsProps>(({ children, stagger, style }, ref) => {
  const detailsRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    createStartTimeline: () => {
      const tl = gsap.timeline();

      if (!detailsRef.current) return tl;

      const detailsElements = detailsRef.current.querySelectorAll('.content');

      if (detailsElements.length === 0) return tl;

      return tl
      .fromTo(
        detailsRef.current,
        { opacity: 0, display: 'none' },
        { opacity: 1, display: 'flex', duration: 0.1 }, 0
      )
      .fromTo(
        detailsElements,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 1, stagger: stagger, ease: 'power2.out' }, 0
      );
    },

    createEndTimeline: () => {
      const tl = gsap.timeline();

      if (!detailsRef.current) return tl;

      const detailsElements = detailsRef.current.querySelectorAll('.content');

      if (detailsElements.length === 0) return tl;

      return tl
      .fromTo(
        detailsRef.current,
        { opacity: 1, y: 0 },
        { opacity: 0, y: 10, duration: 0.5, ease: 'power2.in' }, 0
      )
      .fromTo(
        detailsRef.current,
        { opacity: 1, display: 'flex' },
        { opacity: 0, display: 'none', duration: 0 }, '>'
      );
    },

    domElement: detailsRef.current,
  }));

  return <div className="details" ref={detailsRef} style={style}>{children}</div>;
});