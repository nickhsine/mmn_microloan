import { forwardRef, useRef } from 'react';
import { Title } from './text/Title';
import { Brief } from './text/Brief';
import { AudioHandler } from './utility/AudioHandler';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const SectionLanding = forwardRef<gsap.core.Timeline>((_, ref) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const globalmarks = false;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const landingTL = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=0', // 簡單長度，可調整
        scrub: 1,
        pin: sectionRef.current,
        markers: globalmarks,
      },
    });

    // 可在此添加簡單動畫，暫留空，供未來擴充

    if (ref && typeof ref !== 'function') {
      ref.current = landingTL;
    }
  }, []);

  return (
    <section className="section-landing" ref={sectionRef}>
      <Title />
      <Brief />
      <AudioHandler markers={globalmarks} />
    </section>
  );
});
