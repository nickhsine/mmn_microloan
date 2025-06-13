import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import captionData from '../../assets/Captions.json';

gsap.registerPlugin(useGSAP);

export const Caption: React.FC = () => {
  const captionContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // 使用 ScrollTrigger.batch() 處理所有 caption 元素的淡入淡出
    ScrollTrigger.batch('.caption', {
      onEnter: (elements) => { gsap.to(elements, { opacity: 1, duration: 1, visibility: 'visible' })},
      onEnterBack: (elements) => { gsap.to(elements, { opacity: 1, duration: 1, visibility: 'visible' })},
      onLeave: (elements) => { gsap.to(elements, { 
        opacity: 0, duration: 1, 
        onComplete: function() { gsap.set(elements, { visibility: 'hidden' }) } 
      })},
      onLeaveBack: (elements) => { gsap.to(elements, { 
        opacity: 0, duration: 1, 
        onComplete: function() { gsap.set(elements, { visibility: 'hidden' }) } 
      })},
      start: '50% 50%',
      end: '+=300 50%'
    });

    if (captionContainerRef.current) {
      const captions = captionContainerRef.current.querySelectorAll('.caption');
      captions.forEach((element, index) => {
        ScrollTrigger.create({
          trigger: element,
          start: '50% 50%',
          end: '+=300 50%',
          pin: true,
          scrub: 1,
          markers: true,
          id: `caption-${index+1}`
        });
      });
    }

  }, { scope: captionContainerRef, dependencies: [captionContainerRef] });

  return (
    <div className='caption-container' ref={captionContainerRef}>
      {captionData.missh.map((caption, index) => (
        <p 
          key={index}
          className={`caption ${caption.type}`}
          style={caption.top ? { top: caption.top } : undefined}
        >
          {caption.content}
        </p>
      ))}
    </div>
  );
}; 
