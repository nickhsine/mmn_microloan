import React from 'react';
import { Title } from './landing/Title';
import { Brief } from './landing/Brief';
import { AudioHint } from './landing/AudioHint';

export const SectionLanding = () => {
  return (
    <section className="section-landing">
      <Title />
      <Brief />
      <AudioHint />
    </section>
  );
};
