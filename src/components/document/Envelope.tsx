import { useRef, forwardRef } from 'react';

interface EnvelopeProps {
  type?: number | string;
  top?: number;
  left?: number | string;
  rotate?: number;
  src?: string;
}

export const Envelope = forwardRef<HTMLImageElement, EnvelopeProps>(
  ({ type, top, left, rotate, src }, forwardedRef) => {

  const envelopeRef = useRef<HTMLImageElement>(null);
  if (forwardedRef && typeof forwardedRef !== 'function') {
    forwardedRef.current = envelopeRef.current;
  }

  const srcList = [
    `https://storytelling-storage.twreporter.org/files/envelope-0-jycfEifADdWq.svg`,
    `https://storytelling-storage.twreporter.org/files/envelope-1--HPpP3wIM6jB.svg`,
    `https://storytelling-storage.twreporter.org/files/envelope-2-26aRjcjyNtgE.svg`,
    `https://storytelling-storage.twreporter.org/files/envelope-3--iArtxn2O7ze.svg`,
    `https://storytelling-storage.twreporter.org/files/envelope-4-dcbxwT6Z0WPx.svg`,
    `https://storytelling-storage.twreporter.org/files/envelope-5-bXXZ0VtWdBdp.svg`,
    `https://storytelling-storage.twreporter.org/files/envelope-6-OkGDAVDg4M7s.svg`,
  ]

  if (type === undefined) {
    type = Math.min(Math.floor(Math.random() * 7), 6);
  }
  const finalRotate =
    rotate !== undefined ? rotate : Math.floor(Math.random() * 360);
  const finalTop =
    top !== undefined ? top : Math.max(Math.floor(Math.random() * 700), 200);
  const finalLeft =
    left !== undefined ? left : Math.floor(Math.random() * 100);

  src = srcList[type as number];
  
  return (
    <img
      className="envelope"
      ref={envelopeRef}
      src={src}
      style={{ 
        top: `${finalTop}vh`, 
        left: `${finalLeft}%`, 
        transform: `translate(-50%, -50%) rotate(${finalRotate}deg)` 
      }}
      alt="envelope"
    />
  );
});
