import { forwardRef, useRef, useImperativeHandle, ReactNode } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { TimelineHandle } from '../utility/TimelineHandle';
import { AudioPlayer } from './AudioPlayer';

interface TelepromterProps {
  children?: ReactNode;
  stagger?: number;
  audioSrc?: string;
  volume?: number;
  loop?: boolean;
  audioDuration?: number;
}

interface ExtendedTimelineHandle extends TimelineHandle {
  playAudio: () => void;
  stopAudio: () => void;
}

export const Telepromter = forwardRef<TimelineHandle, TelepromterProps>(({ 
  children,
  stagger = 0.1, 
  audioSrc, 
  volume = 1, 
  loop = false,
  audioDuration
}, ref) => {

  const telepromterRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<Element[] | null>(null);
  const splitRef = useRef<SplitText | null>(null);
  const audioPlayerRef = useRef<ExtendedTimelineHandle | null>(null);

  const getChars = () => {
    if (!charsRef.current && telepromterRef.current) {
      const scriptElements = telepromterRef.current.querySelectorAll('.telepromter-script');
      if (scriptElements.length > 0) {
        splitRef.current = new SplitText(scriptElements, {
          type: 'chars',
        });
        charsRef.current = splitRef.current.chars;
      }
    }
    return charsRef.current || [];
  };

  useImperativeHandle(ref, () => ({
    createStartTimeline: () => {
      const tl = gsap.timeline();

      tl.fromTo(telepromterRef.current, 
        { y: -20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5 }
      ).fromTo('.telepromter-script', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0 }
      );
      return tl;
    },

    createEndTimeline: () => {
      const tl = gsap.timeline();

      tl.fromTo(telepromterRef.current, 
        { y: 0, opacity: 1 }, 
        { y: 10, opacity: 0, duration: 1 }
      );

      if (audioPlayerRef.current) {
        tl.call(() => audioPlayerRef.current?.stopAudio(), [], 0);
      }
      return tl;
    },

    createNoScrubTimeline: () => {
      const tl = gsap.timeline();
      const chars = getChars();

      if (chars.length > 0) {
        tl.fromTo('.telepromter-script', 
          { opacity: 0 }, 
          { opacity: 1, duration: 0 }
        )
        .fromTo(chars, 
          { x: 10, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 1, stagger: stagger }
        );
      }

      if (audioPlayerRef.current) {
        tl.call(() => audioPlayerRef.current?.playAudio(), [], 0);
      }

      return tl;
    },

    domElement: telepromterRef.current,
  }));

  return (
    <div ref={telepromterRef} className="telepromter">
      <AudioPlayer ref={audioPlayerRef} audioSrc={audioSrc} volume={volume} loop={loop} />
      {children}
    </div>
  );
});