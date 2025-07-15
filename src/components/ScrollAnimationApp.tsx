import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

import { CaptionContainer } from './text/CaptionContainer';
import { SectionLanding } from './SectionLanding';
import { SectionMissh } from './SectionMissh';
import { SectionMickey } from './SectionMickey';
import { ContentBG } from './utility/contentBG';

export const ScrollAnimationApp = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const captionTL = useRef<gsap.core.Timeline | null>(null);
  const landingTL = useRef<gsap.core.Timeline | null>(null);
  const misshTL = useRef<gsap.core.Timeline | null>(null);
  const mickeyTL = useRef<gsap.core.Timeline | null>(null);
  const masterTL = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    masterTL.current = gsap.timeline({ paused: true });

    if (captionTL.current) masterTL.current.add(captionTL.current, 0);
    if (landingTL.current) masterTL.current.add(landingTL.current, 0);
    if (misshTL.current) masterTL.current.add(misshTL.current, 0);
    if (mickeyTL.current) masterTL.current.add(mickeyTL.current, 0);

    // Trigger the opacity transition after a short delay
    setTimeout(() => {
      setIsLoaded(true);
    }, 0);

  }, []);

  return (
    <div className={`scroll-animation-app ${isLoaded ? 'loaded' : ''}`}>
      <ContentBG />
      <CaptionContainer ref={captionTL} />
      <SectionLanding ref={landingTL} />
      <SectionMissh ref={misshTL} />
      <SectionMickey ref={mickeyTL} />
    </div>
  );
};
