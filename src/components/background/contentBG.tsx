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
        end: '+=200%',
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: true,
      }
    });
    tl.to('.envelope', {
      y: (i, target) => -target.offsetTop,
      stagger: 0.1
    });
  }, { scope: contentBGRef, dependencies: [contentBGRef] });

  return (
    <div className="content-bg" ref={contentBGRef}>
      <Envelope type={0} top={200} left={'10%'} rotate={45}/>
      <Envelope type={1} top={210} left={'20%'} />
      <Envelope type={2} top={230} left={'30%'} />
      <Envelope type={4} top={250} left={'50%'} />
      <Envelope type={5} top={260} left={'60%'} />
      <Envelope type={6} top={270} left={'70%'} />
    </div>
  );
};