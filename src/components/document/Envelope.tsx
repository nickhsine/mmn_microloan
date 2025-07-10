import { useRef, forwardRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

interface EnvelopeProps {
  type?: number | string;
  top?: number;
  left?: number | string;
  rotate?: number;
}

export const Envelope = forwardRef<HTMLImageElement, EnvelopeProps>(
  ({ type, top, left, rotate }, forwardedRef) => {

  const envelopeRef = useRef<HTMLImageElement>(null);
  if (forwardedRef && typeof forwardedRef !== 'function') {
    forwardedRef.current = envelopeRef.current;
  }

  const finalType =
    type !== undefined ? type : Math.min(Math.floor(Math.random() * 7), 6);
  const finalRotate =
    rotate !== undefined ? rotate : Math.floor(Math.random() * 360);
  const finalTop =
    top !== undefined ? top : Math.max(Math.floor(Math.random() * 700), 200);
  const finalLeft =
    left !== undefined ? left : Math.floor(Math.random() * 100);
  return (
    <img
      className="envelope"
      style={{ top: `${finalTop}vh`, left: `${finalLeft}%`, rotate: finalRotate + 'deg' }}
      ref={envelopeRef}
      src={`./assets/img/envelope_${finalType}.svg`}
      alt="envelope"
    />
  );
});
