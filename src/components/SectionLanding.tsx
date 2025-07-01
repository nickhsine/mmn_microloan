import { Title } from './texting/Title';
import { Brief } from './texting/Brief';
import { AudioHandler } from './utilities/AudioHandler';
export const SectionLanding = () => {
  return (
    <section className="section-landing">
      <Title />
      <Brief />
      <AudioHandler />
    </section>
  );
};
