import { ReactNode, forwardRef, useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface MessagesAppProps {
  children?: ReactNode;
  name?: string;
  start?: string;
  end?: string;
  markers?: boolean;
}

export const MessagesApp = forwardRef<HTMLDivElement, MessagesAppProps>(
  ({ children, name = '涂專員', start = '0', end = '600vh', markers = false }, ref) => {
    const messagesAppRef = useRef<HTMLDivElement>(null);

    const combinedRef = useCallback(
      (node: HTMLDivElement | null) => {
        if (node) {
          (messagesAppRef as any).current = node;
        }
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          (ref as any).current = node;
        }
      },
      [ref]
    );

    useGSAP(
      () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.set(messagesAppRef.current, { opacity: 0, scale: 0.9 });

        ScrollTrigger.create({
          trigger: messagesAppRef.current,
          start: `${start} 10%`,
          end: `${end} 10%`,
          scrub: 1,
          markers: markers,
          id: 'messages-app-trigger',
          onEnter: () => {
            gsap.fromTo(
              messagesAppRef.current,
              { opacity: 0, scale: 0.9 },
              { opacity: 1, scale: 1, duration: 0.5 }
            );
          },
          onLeave: () => {
            gsap.fromTo(
              messagesAppRef.current,
              { opacity: 1, scale: 1 },
              { opacity: 0, scale: 0.9, duration: 0.5 }
            );
          },
          onEnterBack: () => {
            gsap.fromTo(
              messagesAppRef.current,
              { opacity: 0, scale: 0.9 },
              { opacity: 1, scale: 1, duration: 0.25 }
            );
          },
          onLeaveBack: () => {
            gsap.fromTo(
              messagesAppRef.current,
              { opacity: 1, scale: 1 },
              { opacity: 0, scale: 0.9, duration: 0.25 }
            );
          },
        });
      },
      { scope: messagesAppRef }
    );

    return (
      <div className="messages-app" ref={combinedRef}>
        <div className="app-header">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
            <span className="text-lg font-medium">{name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">search</span>
            <span className="material-symbols-outlined">call</span>
            <span className="material-symbols-outlined">density_medium</span>
          </div>
        </div>
        {children}
        <div className="app-footer">
          <span className="material-symbols-outlined">add_2</span>
          <span className="material-symbols-outlined">photo_camera</span>
          <span className="material-symbols-outlined">image</span>
          <div className="flex justify-between w-full rounded-full bg-gray-200/30 px-2 py-1 ml-1">
            <span className="material-symbols-outlined">match_case</span>
            <span className="material-symbols-outlined">sentiment_neutral</span>
          </div>
          <span className="material-symbols-outlined">mic</span>
        </div>
      </div>
    );
  }
);
