import React from 'react';
import { Subtitle } from './missh/Subtitle';
import { MisshCharacter } from './missh/MisshCharacter';
import { MisshBackground } from './missh/MisshBackground';
import { MisshScene1 } from './missh/MisshScene1';
import { MisshScene2 } from './missh/MisshScene2';
import { MisshScene3 } from './missh/MisshScene3';

export const SectionStoryMissh: React.FC = () => {
  return (
    <section className="section-story-missh">
      <Subtitle />
      <MisshCharacter />
      <MisshBackground />
      <MisshScene1 />
      <MisshScene2 />
      <MisshScene3 />
    </section>
  );
};
