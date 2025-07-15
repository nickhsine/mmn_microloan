import React, { useState, useEffect, useMemo } from 'react';

const NUM_ENVELOPES = 15;
const ANGLE_SPREAD = 180;
const CENTER_INDEX = Math.floor(NUM_ENVELOPES / 2);
const ANGLE_STEP = ANGLE_SPREAD / (NUM_ENVELOPES > 1 ? NUM_ENVELOPES - 1 : 1);

export const LoadingScreen: React.FC = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2850);

    return () => clearTimeout(timer);
  }, []);

  const envelopes = useMemo(() => {
    return Array.from({ length: NUM_ENVELOPES }).map((_, index) => {
      const angle = (index - CENTER_INDEX) * ANGLE_STEP;
      const translateY = Math.abs(index - CENTER_INDEX) * 10;

      return (
        <img
          key={index}
          src="https://storytelling-storage.twreporter.org/files/envelope-1--HPpP3wIM6jB.svg"
          alt="Loading..."
          style={{
            animationDelay: `${index * 0.125}s`,
            '--angle': `${angle}deg`,
            '--translateY': `${translateY}px`,
            zIndex: NUM_ENVELOPES - index,
          } as React.CSSProperties}
        />
      );
    });
  }, []);

  return (
    <div className="loading-screen">
      <div className={`loading-screen-content ${isFadingOut ? 'fade-out' : ''}`}>
        {envelopes}
      </div>
    </div>
  );
}; 