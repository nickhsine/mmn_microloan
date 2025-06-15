import { SectionLanding } from './SectionLanding';
import { SectionStoryMissh } from './SectionStoryMissh';
import { SectionStoryMickey } from './SectionStoryMickey';
import { AudioHandler } from './landing/AudioHandler';
import { Caption } from './shared/Caption';

export const ScrollAnimationApp = () => {
  return (
    <div className="scroll-animation-app">
      <AudioHandler />
      <Caption />
      <SectionLanding />
      <SectionStoryMissh />
      <div className="paragraph-divider"/>
      <SectionStoryMickey />
    </div>
  );
}; 