import { ReactNode, useRef, forwardRef, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';

interface PhoneProps {
  children?: ReactNode;
}

export const Phone = forwardRef<HTMLDivElement, PhoneProps>(({ children }, ref) => {
  const phoneRef = useRef(null);
  const combinedRef = useCallback((node: HTMLDivElement | null) => {
    if (node) { (phoneRef as any).current = node; }
    if (typeof ref === 'function') { ref(node); } 
    else if (ref) { (ref as any).current = node; }
  }, [ref]);

  // useGSAP(() => {
  //   gsap.registerPlugin(Draggable);

  //   Draggable.create(phoneRef.current, {
  //     type: "x,y",
  //     inertia: true,
  //     onDragEnd: function() {
  //       gsap.to(this.target, {
  //         x: 0, y: 0,
  //         duration: 3,
  //         ease: "power1.out"
  //       });
  //     }
  //   });
  // }, { scope: phoneRef });

  return (
    <div ref={combinedRef} className="phone">
      <div className="phone-frame">
        <div className="top-bar" />
        <div className="bottom-bar" />
      </div>
      {children}
    </div>
  );
}); 