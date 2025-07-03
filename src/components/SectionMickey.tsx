import { forwardRef, useRef } from 'react';
import { Phone } from './phone/Phone';
import { Calculator } from './calculator/Calculator';
import { Contract } from './document/Contract';
import { Envelope } from './document/Envelope';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export const SectionMickey = forwardRef<gsap.core.Timeline>((_, ref) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const globalmarks = false;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mickeyTL = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=800',
        scrub: 1,
        pin: sectionRef.current,
        markers: globalmarks,
      },
    });

    // 預留擴充動畫位置

    if (ref && typeof ref !== 'function') {
      ref.current = mickeyTL;
    }
  }, []);

  return (
    <section className="section-mickey" ref={sectionRef}>
      {/* <Phone />
      <Calculator markers={globalmarks} />
      <Contract contract="1B" highlightIds={[3]} isHighlight={true} />
      <Envelope markers={globalmarks} /> */}
    </section>
  );
});
