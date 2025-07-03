import { ReactNode, useRef, forwardRef, useCallback, useImperativeHandle } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';
import { TimelineHandle } from '../utility/TimelineHandle';

interface PhoneProps {
  children?: ReactNode;
}

export const Phone = forwardRef<TimelineHandle, PhoneProps>(({ children }, ref) => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<HTMLDivElement>(null);

  const combinedRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      (phoneRef as any).current = node;
    }
  }, []);

  useGSAP(
    () => {
      gsap.registerPlugin(Draggable);

      if (!draggableRef.current) return;

      Draggable.create(draggableRef.current, {
        type: 'x,y',
        inertia: true,
        onDragEnd: function () {
          gsap.to(this.target, {
            x: 0,
            y: 0,
            duration: 3,
            ease: 'power1.out',
          });
        },
      });
    },
    { scope: phoneRef }
  );

  useImperativeHandle(ref, () => ({
    createStartTimeline: () => {
      const tl = gsap.timeline();
      if (phoneRef.current) {
        gsap.set(phoneRef.current, { opacity: 0, scale: 0.9 });
        tl.to(phoneRef.current, { opacity: 1, scale: 1, duration: 0.5 });
      }
      return tl;
    },
    domElement: phoneRef.current,
  }));

  return (
    <div ref={combinedRef}>
      <div ref={draggableRef} className="phone-draggable">
        <div className="phone">
          <div className="phone-frame">
            <div className="bottom-bar" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
});
