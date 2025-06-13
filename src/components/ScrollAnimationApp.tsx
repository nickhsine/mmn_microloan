import React from 'react';
import { SectionLanding } from './SectionLanding';
import { SectionStoryMissh } from './SectionStoryMissh';
import { SectionStoryMickey } from './SectionStoryMickey';
import { Caption } from './shared/Caption';

export const ScrollAnimationApp: React.FC = () => {
  return (
    <div className="scroll-animation-app">
      <Caption />
      <SectionLanding />
      <SectionStoryMissh />
      <div className="paragraph-divider"/>
      <SectionStoryMickey />
    </div>
  );
}; 