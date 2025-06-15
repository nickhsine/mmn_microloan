import { MisshCharacter } from './missh/MisshCharacter';
import { MisshBackground } from './missh/MisshBackground';
import { MisshScene1 } from './missh/MisshScene1';
import { MisshScene2 } from './missh/MisshScene2';
import { MisshScene3 } from './missh/MisshScene3';
import { AudioPlayer } from './shared/AudioPlayer';

export const SectionStoryMissh = () => {
  return (
    <section className="section-story-missh">
      <AudioPlayer audioSrc="/src/assets/audio/SFX_CellPhoneVibrate_v2.aac" volume={0.2}/>
      <MisshCharacter />
      <MisshBackground />
      <MisshScene1 />
      <MisshScene2 />
      <MisshScene3 />
    </section>
  );
};
