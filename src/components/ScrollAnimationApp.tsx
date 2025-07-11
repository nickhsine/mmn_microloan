import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import { CaptionContainer } from './text/CaptionContainer';
import { SectionLanding } from './SectionLanding';
import { SectionMissh } from './SectionMissh';
import { SectionMickey } from './SectionMickey';
import { ContentBG } from './background/contentBG';

export const ScrollAnimationApp = () => {
  const captionTL = useRef<gsap.core.Timeline | null>(null);
  const landingTL = useRef<gsap.core.Timeline | null>(null);
  const misshTL = useRef<gsap.core.Timeline | null>(null);
  const mickeyTL = useRef<gsap.core.Timeline | null>(null);
  const masterTL = useRef<gsap.core.Timeline | null>(null);
  // scrubValue for timeline speed
  const scrubValue = 5;

  useEffect(() => {
    masterTL.current = gsap.timeline({ paused: true });

    if (captionTL.current) masterTL.current.add(captionTL.current, 0);
    if (landingTL.current) masterTL.current.add(landingTL.current, 0);
    if (misshTL.current) masterTL.current.add(misshTL.current, 0);
    if (mickeyTL.current) masterTL.current.add(mickeyTL.current, 0);

  }, []);

  return (
    <div className="scroll-animation-app">
      <ContentBG scrubValue={scrubValue} />
      <CaptionContainer ref={captionTL} scrubValue={scrubValue} />
      <SectionLanding ref={landingTL} scrubValue={scrubValue} />
      <SectionMissh ref={misshTL} scrubValue={scrubValue} />
      <SectionMickey ref={mickeyTL} scrubValue={scrubValue} />
    </div>
  );
};
