import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_OFFSET = '45%';
const VH = (coef: number) => window.innerHeight * (coef / 100);

const ANIMATION_CONFIG = {
  show: { opacity: 1, visibility: 'visible', filter: 'blur(0px)' },
  hide: { opacity: 0, filter: 'blur(15px)' },
  duration: { enter: 1, enterBack: 0.5, leave: 1, leaveBack: 0.5 }
};

export const Caption = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [captionData, setCaptionData] = useState<any>(null);

  useEffect(() => {
    fetch('./assets/data/Captions.json')
      .then(response => response.json())
      .then(data => setCaptionData(data));
  }, []);

  useGSAP(() => {
    if (!captionData || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const createAnimation = (element: Element, isShow: boolean, duration: number) => {
        if (isShow) { gsap.to(element, { ...ANIMATION_CONFIG.show, duration }); } else {
          gsap.to(element, { ...ANIMATION_CONFIG.hide, duration,
            onComplete: () => { gsap.set(element, { visibility: 'hidden' }); }
          });
        }
      };

      Object.entries(captionData).forEach(([category, captionArray]: [string, any]) => {
        captionArray.forEach((captionItem: any, index: number) => {
          const selector = `[data-caption-category="${category}"][data-caption-index="${index}"]`;
          const captionElement = containerRef.current?.querySelector(selector);
          
          if (captionElement) {
            const offset = captionItem.offset || DEFAULT_OFFSET;
            
            ScrollTrigger.create({
              trigger: captionElement,
              start: `50% ${offset}`,
              end: `${VH(25)} ${offset}`,
              pin: true,
              scrub: 1,
              markers: true,
              invalidateOnRefresh: true,
              id: `caption-${category}-${index}`,
              onEnter: () => createAnimation(captionElement, true, ANIMATION_CONFIG.duration.enter),
              onEnterBack: () => createAnimation(captionElement, true, ANIMATION_CONFIG.duration.enterBack),
              onLeave: () => createAnimation(captionElement, false, ANIMATION_CONFIG.duration.leave),
              onLeaveBack: () => createAnimation(captionElement, false, ANIMATION_CONFIG.duration.leaveBack),
            });
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, { dependencies: [captionData] });

  if (!captionData) return null;

  return (
    <div className='caption-container' ref={containerRef}>
      {Object.entries(captionData).map(([category, captions]: [string, any]) => 
        captions.map((caption: any, index: number) => (
          <p 
            key={`${category}-${index}`}
            className={`caption ${caption.type}`}
            data-caption-category={category}
            data-caption-index={index}
            style={caption.top ? { top: `${caption.top}vh` } : undefined}
          >
            {caption.content}
          </p>
        ))
      )}
    </div>
  );
}; 
