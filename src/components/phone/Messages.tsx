import { ReactNode, useRef, forwardRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';

interface MessagesProps {
  children?: ReactNode;
  stagger?: number;
}

export const Messages = forwardRef<TimelineHandle, MessagesProps>(
  ({ children, stagger = 1 }, ref) => {
    const messagesRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    useImperativeHandle(ref, () => ({
      createStartTimeline: () => {
        const tl = gsap.timeline();

        if (!messagesRef.current) return tl;

        const messageElements = messagesRef.current.querySelectorAll(
          '.messageRecieve, .messageSent, .messageBlank'
        );

        if (messageElements.length === 0) return tl;

        tl.fromTo(
          messageElements,
          { display: 'none', opacity: 0, y: 10 },
          { display: 'flex', opacity: 1, y: 0, stagger: stagger, duration: 0.5, ease: 'power2.out' }
        );

        timelineRef.current = tl;

        return tl;
      },

      createEndTimeline: () => {
        const tl = gsap.timeline();
        if (!messagesRef.current) return tl;

        const messageElements = messagesRef.current.querySelectorAll(
          '.messageRecieve, .messageSent, .messageBlank'
        );

        if (messageElements.length === 0) return tl;

        return tl.fromTo(messageElements, {
          opacity: 1, y: 0, display: 'flex'
        }, {
          opacity: 0, y: -10, display: 'none',
          duration: 0.2, stagger: 0.1,
          ease: 'power2.in',
        });
      },

      pause: () => {
        if (timelineRef.current) {
          timelineRef.current.pause();
        }
      },

      resume: () => {
        if (timelineRef.current) {
          timelineRef.current.resume();
        }
      },

      stop: () => {
        if (timelineRef.current) {
          timelineRef.current.pause();
          timelineRef.current.seek(0);
        }
      },

      domElement: messagesRef.current,
    }));

    return (
      <div className="messages" ref={messagesRef}>
        {children}
      </div>
    );
  }
);
