import { Brief } from './mickey/Brief';
import { AudioPlayer } from './shared/AudioPlayer';
import { MickeyCharacter } from './mickey/MickeyCharacter';
import { MickeyBackground } from './mickey/MickeyBackground';
import { MickeyScene1 } from './mickey/MickeyScene1';
import { MickeyScene2 } from './mickey/MickeyScene2';
import { MickeyScene3 } from './mickey/MickeyScene3';

export const SectionStoryMickey = () => {
  return (
    <section className="section-story-mickey">
      <Brief />
      {/* <AudioPlayer /> */}
      <MickeyCharacter />
      <MickeyBackground />
      <MickeyScene1 />
      <MickeyScene2 />
      <MickeyScene3 />
    </section>
  );
};
