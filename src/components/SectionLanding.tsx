import { Title } from './landing/Title';
import { Brief } from './landing/Brief';
import { AudioHandler } from './landing/AudioHandler';
export const SectionLanding = () => {
  return (
    <section className="section-landing">
      <Title />
      <Brief />
      <AudioHandler />
    </section>
  );
};
