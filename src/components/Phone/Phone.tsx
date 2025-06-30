import { CSSProperties, ReactNode, useRef, forwardRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';

interface PhoneProps {
  children?: ReactNode;
}

export const Phone = forwardRef<HTMLDivElement, PhoneProps>(({ children }, ref) => {
  const phoneRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(Draggable);

    Draggable.create(phoneRef.current, {
      type: "x,y",
      inertia: true,
      onDragEnd: function() {
        gsap.to(this.target, {
          x: 0, y: 0,
          duration: 3,
          ease: "power1.out"
        });
      }
    });
  }, []);

  const containerStyle: CSSProperties = {
    position: 'absolute',
  };

  return (
    <div ref={ref || phoneRef} className="phone" style={containerStyle}>
      <div className="phone-frame">
        <div className="top-bar" />
        <div className="bottom-bar" />
      </div>
      {children}
    </div>
  );
}); 