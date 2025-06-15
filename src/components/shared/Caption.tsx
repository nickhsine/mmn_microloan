import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import captionData from '../../assets/Captions.json';

gsap.registerPlugin(useGSAP);

export const Caption = () => {
  const captionContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const vh = (coef: number) => window.innerHeight * (coef/100);

    const showCaption = (elements: Element[], duration: number = 1) => {
      gsap.to(elements, { opacity: 1, duration, visibility: 'visible', filter: 'blur(0px)' });
    };
    const hideCaption = (elements: Element[], duration: number = 1) => {
      gsap.to(elements, { 
        opacity: 0, duration, filter: 'blur(15px)',
        onComplete: function() { gsap.set(elements, { visibility: 'hidden' }) } 
      });
    };
    
    ScrollTrigger.batch('.caption', {
      onEnter: (elements) => showCaption(elements, 1),
      onEnterBack: (elements) => showCaption(elements, 0.5),
      onLeave: (elements) => hideCaption(elements, 1),
      onLeaveBack: (elements) => hideCaption(elements, 0.5),
      start: '50% 50%',
      end: `${vh(30)} 50%`
    });

    if (captionContainerRef.current) {
      const captions = captionContainerRef.current.querySelectorAll('.caption');
      captions.forEach((element, index) => {
        ScrollTrigger.create({
          trigger: element,
          start: '50% 50%',
          end: `${vh(30)} 50%`,
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
      {/* 顯示所有字幕資料 */}
      {Object.entries(captionData).map(([_, captions]) => 
        captions.map((caption, index) => (
          <p 
            key={`${caption.type}-${index}`}
            className={`caption ${caption.type}`}
            style={caption.top ? { top: `${(caption.top)}vh` } : undefined}
          >
            {caption.content}
          </p>
        ))
      )}
    </div>
  );
}; 
