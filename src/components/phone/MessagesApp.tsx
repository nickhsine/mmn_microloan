import { ReactNode, forwardRef, useRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';

interface MessagesAppProps {
  children?: ReactNode;
  name?: string;
}

export const MessagesApp = forwardRef<TimelineHandle, MessagesAppProps>(
  ({ children, name = '涂專員' }, ref) => {
    const messagesAppRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      createStartTimeline: () => {
        const tl = gsap.timeline();
        if (!messagesAppRef.current) return tl;

        gsap.set(messagesAppRef.current, { opacity: 0, scale: 0.9 });

        tl.to(messagesAppRef.current, { opacity: 1, scale: 1, duration: 2 }, 0);

        return tl;
      },

      createEndTimeline: () => {
        const tl = gsap.timeline();
        if (!messagesAppRef.current) return tl;

        tl.fromTo(messagesAppRef.current, 
          { opacity: 1, scale: 1 }, 
          { opacity: 0, scale: 0.9, duration: 2, ease: 'power2.in' }
        );

        return tl;
      },

      domElement: messagesAppRef.current,
    }));

    return (
      <div className="messages-app" ref={messagesAppRef}>
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
