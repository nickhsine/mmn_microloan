import { ReactNode, useRef, forwardRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';

interface MessagesProps {
  children?: ReactNode;
  stagger?: number;
}

export const Messages = forwardRef<TimelineHandle, MessagesProps>(
  ({ children, stagger = 0.5 }, ref) => {
    const messagesRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    useImperativeHandle(ref, () => ({
      createStartTimeline: () => {
        const tl = gsap.timeline();

        if (!messagesRef.current) return tl;

        const messageElements = messagesRef.current.querySelectorAll(
          '.messageRecieve, .messageSent'
        );

        if (messageElements.length === 0) return tl;

        // 創建所有消息的動畫
        tl.fromTo(
          messageElements,
          { display: 'none', opacity: 0, y: 10 },
          { display: 'flex', opacity: 1, y: 0, stagger: stagger, duration: 0.3, ease: 'power2.out' }
        );

        // 保存時間線引用以便後續控制
        timelineRef.current = tl;

        return tl;
      },

      createEndTimeline: () => {
        const tl = gsap.timeline();

        if (!messagesRef.current) return tl;

        const messageElements = messagesRef.current.querySelectorAll(
          '.messageRecieve, .messageSent'
        );

        if (messageElements.length === 0) return tl;

        return tl.to(messageElements, {
          opacity: 0,
          y: -10,
          duration: 0.5,
          stagger: 0.1,
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
