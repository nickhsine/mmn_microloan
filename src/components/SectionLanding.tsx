import { Title } from './text/Title';
import { Brief } from './text/Brief';
import { AudioHandler } from './utility/AudioHandler';
export const SectionLanding = () => {
  return (
    <section className="section-landing">
      <Title />
      <Brief />
      <AudioHandler />
    </section>
  );
};
