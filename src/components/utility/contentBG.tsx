import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { Envelope } from '../document/Envelope';

export const ContentBG = () => {
  const contentBGRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentBGRef.current,
        start: 'top top',
        end: 'bottom bottom',
        // end: '+=300%',
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false,
      }
    });
    tl.to('.envelope', {
      y: (i, target) => -target.offsetTop + i * 20,
      stagger: 0.1
    });
  }, { scope: contentBGRef, dependencies: [contentBGRef] });

  return (
    <div className="content-bg" ref={contentBGRef}>
      {Array.from({ length: 50 }).map((_, i) => (
        <Envelope key={i} />
      ))}
    </div>
  );
};