import { ReactNode, forwardRef, useRef, useImperativeHandle, CSSProperties } from 'react';
import gsap from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';

interface BriefProps {
  children: ReactNode;
  type?: 'dark' | 'light' | 'clear';
  style?: CSSProperties;
  textColor?: string;
}

export const Brief = forwardRef<TimelineHandle, BriefProps>(({ 
  children, type = 'dark', style, textColor 
}, ref) => {

  const briefRef = useRef<HTMLDivElement>(null);

  if (type === 'dark') {
    textColor = 'var(--color-gray-50)';
  } else if (type === 'light') {
    textColor = 'var(--color-gray-900)';
  } else if (type === 'clear') {
    textColor = 'var(--color-gray-900)';
  }

  useImperativeHandle(ref, () => ({

    createStartTimeline: () => {
      const tl = gsap.timeline();

      const briefElements = briefRef.current?.querySelectorAll('p');

      if (briefElements) {
        gsap.set(briefRef.current, { color: textColor });
        gsap.set(briefElements, { y: '-10vh', opacity: 0 });
        tl.fromTo(briefRef.current, 
          { opacity: 0 }, 
          { opacity: 1, duration: 1, ease: 'power1.inOut' }
        );
        tl.fromTo(briefElements, 
          { y: '-10vh', opacity: 0 }, 
          { y: 0, 
            opacity: 1, 
            rotate: (index) => (Math.pow(-1, index) * 1), 
            duration: 1, stagger: 1, ease: 'power1.inOut' }
        );
      }
      return tl;
    },
    createEndTimeline: () => {
      const tl = gsap.timeline();

      const briefElements = briefRef.current?.querySelectorAll('p');

      if (briefElements) {
        tl.fromTo(briefElements, 
          { y: 0, opacity: 1 }, 
          { y: '20vh', opacity: 0, duration: 1, stagger: 1, ease: 'power1.out' }
        );
      }
      return tl;
    },

    domElement: briefRef.current,
  }));

  return (
    <div className={`brief ${type}`} ref={briefRef} style={style}>
      {children}
    </div>
  );
});
