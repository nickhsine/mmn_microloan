import { ReactNode, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface DialogsProps {
  children?: ReactNode;
  start?: string;
  end?: string;
  markers?: boolean;
}

export const Dialogs = ({ children, start = 'top 10%', end = '+=500 10%', markers = false }: DialogsProps) => {
  const dialogsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!dialogsRef.current) return;

    const dialogElements = dialogsRef.current.querySelectorAll('.Recieve, .Sent');
    
    if (dialogElements.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: dialogsRef.current,
        start: start,
        end: end,
        scrub: 1,
        markers: markers,
        id: 'dialogs-trigger'
      }
    });

    tl.fromTo(dialogElements, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0,
        duration: 1,
        stagger: 0.5, // 每個元素間隔 0.2 秒出現
        ease: "power2.out"
      }
    );
  }, { scope: dialogsRef, dependencies: [start, end] });

  return (
    <div className="dialogs-container" ref={dialogsRef}>
      {children}
    </div>
  );
}; 