import { ReactNode, useRef, forwardRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';

interface DialogsProps {
  children?: ReactNode;
}

export const Dialogs = forwardRef<TimelineHandle, DialogsProps>(({ children }, ref) => {
  const dialogsRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    createTimeline: () => {
      const tl = gsap.timeline();
      
      if (!dialogsRef.current) return tl;

      const dialogElements = dialogsRef.current.querySelectorAll('.Recieve, .Sent');
      
      if (dialogElements.length === 0) return tl;

      return tl.fromTo(dialogElements, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0,
          duration: 1,
          stagger: 0.25,
          ease: "power2.out"
        }
      );
    },
    domElement: dialogsRef.current,
  }));

  return (
    <div className="dialogs-container" ref={dialogsRef}>
      {children}
    </div>
  );
}); 