import { ReactNode, useRef, CSSProperties } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface MessagesProps {
  children?: ReactNode;
  start?: string;
  end?: string;
  top?: string;
  markers?: boolean;
}

export const Messages = ({ children, start = 'top 10%', end = '+=600 10%', top, markers = false }: MessagesProps) => {
  const messagesRef = useRef<HTMLDivElement>(null);

  // 計算容器樣式
  const containerStyle: CSSProperties = top ? {
    position: 'absolute',
    top,
    left: '50%',
    transform: 'translate(-50%, 0%)'
  } : {};

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!messagesRef.current) return;

    const messageElements = messagesRef.current.querySelectorAll('.messageRecieve, .messageSent');
    
    if (messageElements.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: messagesRef.current,
        start: start,
        end: end,
        pin: true,
        scrub: 1,
        markers: markers,
        id: 'messages-trigger',
        onEnter: () => { gsap.to(messagesRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" }); },
        onEnterBack: () => { gsap.to(messagesRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" }); },
        onLeave: () => { gsap.to(messagesRef.current, { opacity: 0, duration: 0.5, ease: "power2.out" }); },
        onLeaveBack: () => { gsap.to(messagesRef.current, { opacity: 0, duration: 0.5, ease: "power2.out" }); },
      }
    });

    tl.fromTo(messageElements, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0,
        duration: 1, stagger: 0.5, // 每個元素間隔 0.5 秒出現
        ease: "power2.out"
      }
    );
  }, { scope: messagesRef, dependencies: [start, end] });

  return (
    <div className="messages" ref={messagesRef} style={containerStyle}>
      {children}
    </div>
  );
}; 