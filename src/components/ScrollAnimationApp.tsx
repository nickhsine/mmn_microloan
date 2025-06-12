import React from 'react';
import { SectionLanding } from './SectionLanding';
import { SectionStoryMissh } from './SectionStoryMissh';
import { SectionStoryMickey } from './SectionStoryMickey';

export const ScrollAnimationApp: React.FC = () => {
  return (
    <div className="scroll-animation-app">
      <SectionLanding />
      <SectionStoryMissh />
      <div className="paragraph-divider">
      </div>
      <SectionStoryMickey />
    </div>
  );
}; 