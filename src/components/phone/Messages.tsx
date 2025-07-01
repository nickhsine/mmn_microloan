import { ReactNode, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollPause, PausePoint } from '../utility/ScrollPause';

interface MessagesProps {
  children?: ReactNode;
  start?: string;
  end?: string;
  markers?: boolean;
  pausePoints?: PausePoint[];  // 多個暫停點
  scrollDistance?: number;     // 每個消息組的滾動距離 (vh)
  scrub?: number | boolean;    // ScrollTrigger 的 scrub 選項
  toggleActions?: string;      // ScrollTrigger 的 toggleActions 選項
}

declare global {
  interface Window {
    messagesTimelines?: gsap.core.Timeline[];
  }
}

export const Messages = ({ 
  children, 
  start = '500vh', 
  end = '1000vh', 
  markers = false,
  pausePoints = [],
  scrollDistance = 300,
  scrub = 1,
}: MessagesProps) => {
  const messagesRef = useRef<HTMLDivElement>(null);

  const MessagesAnimation = (tl: gsap.core.Timeline, elements: NodeListOf<Element> | Element[]) => {
    tl.fromTo(elements, 
      { display: "none", opacity: 0, y: 10 },
      { display: "flex", opacity: 1, y: 0,
        stagger: 0.5,
      }
    );
  };

  const handleGroupsCreated = (timelines: gsap.core.Timeline[]) => {
    window.messagesTimelines = timelines;
  };

  return (
    <div className="messages" ref={messagesRef}>
      <ScrollPause
        pausePoints={pausePoints}
        elementSelector=".messageRecieve, .messageSent"
        scrollDistance={scrollDistance}
        start={start}
        end={end}
        markers={markers}
        trigger=".messages"
        onGroupsCreated={handleGroupsCreated}
        animation={MessagesAnimation}
        scrub={scrub}
      >
        {children}
      </ScrollPause>
    </div>
  );
}; 