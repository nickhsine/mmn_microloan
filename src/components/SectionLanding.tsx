import { Title } from './text/Title';
import { Brief } from './text/Brief';
import { AudioHandler } from './utility/AudioHandler';
export const SectionLanding = () => {
  const globalmarks = false;
  return (
    <section className="section-landing">
      <Title />
      <Brief />
      <AudioHandler markers={globalmarks} />
    </section>
  );
};
