import { ReactNode, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);

interface DialogsProps {
  children?: ReactNode;
  start?: string;
  end?: string;
}

export const Dialogs = ({ children, start = 'top 10%', end = '+=600 10%' }: DialogsProps) => {
  const dialogsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!dialogsRef.current) return;

    const dialogElements = dialogsRef.current.querySelectorAll('.dialogIn, .dialogOut');
    
    if (dialogElements.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: dialogsRef.current,
        start: start,
        end: end,
        scrub: 1,
        markers: true,
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
    <div className="dialogs" ref={dialogsRef}>
      {children}
    </div>
  );
}; 