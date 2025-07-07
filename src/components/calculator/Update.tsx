import { forwardRef, ReactNode, useRef, useImperativeHandle, CSSProperties } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { TimelineHandle } from '../utility/TimelineHandle';

interface UpdateProps {
  children?: ReactNode;
  type?: string;
  style?: CSSProperties;
}
export const Update = forwardRef<TimelineHandle, UpdateProps>(({ children, type, style }, ref) => {
  const updateRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<Element[] | null>(null);
  const splitRef = useRef<SplitText | null>(null);

  const getChars = () => {
    if (!charsRef.current && updateRef.current) {
      splitRef.current = new SplitText(updateRef.current, {
        type: 'chars',
      });
      charsRef.current = splitRef.current.chars;
    }
    return charsRef.current!;
  };

  useImperativeHandle(ref, () => ({
    createStartTimeline: () => {
      const tl = gsap.timeline();
      const chars = getChars();

      tl.fromTo(chars, 
        { y: -50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.05 }
      );
      return tl;
    },

    createEndTimeline: () => {
      const tl = gsap.timeline();
      const chars = getChars();

      tl.fromTo(chars, 
        { y: 0, opacity: 1 }, 
        { y: 30, opacity: 0, duration: 1, stagger: 0.05 }
      );
      return tl;
    },

    domElement: updateRef.current,
  }));

  return (
    <div ref={updateRef} className={type} style={style}>{children}</div>
  );
});