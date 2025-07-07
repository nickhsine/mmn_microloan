import { forwardRef, useRef, useImperativeHandle } from 'react';
import gsap from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';

interface PhoneStaticProps {
  src?: string;
}

export const PhoneStatic = forwardRef<TimelineHandle, PhoneStaticProps>(({ src }, ref) => {
  const phoneStaticRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    createStartTimeline: () => {
      const tl = gsap.timeline();

      if (phoneStaticRef.current) {
        tl.fromTo(phoneStaticRef.current, 
          { opacity: 0, scale: 0.9 }, 
          { opacity: 1, scale: 1, duration: 1, ease: 'power1.out' }
        );
      }
      return tl;
    },
    createEndTimeline: () => {
      const tl = gsap.timeline();

      if (phoneStaticRef.current) {
        tl.fromTo(phoneStaticRef.current, 
          { opacity: 1, scale: 1 }, 
          { opacity: 0, scale: 0.9, duration: 1, ease: 'power1.out' });
      }
      return tl;
    },

    domElement: phoneStaticRef.current,
  }));

    return (
    <div className="phone-static" ref={phoneStaticRef}>
      <img className="phone-static-img" src={src} alt="phone-static" />
    </div>
  );
});
