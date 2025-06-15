import { AudioPlayer } from '../shared/AudioPlayer';
import { PhoneIn } from '../shared/PhoneIn';
import { Message } from '../shared/Message';
import { Notification } from '../shared/Notification';

export const MisshScene1 = () => {
  return (
    <div className="missh-scene1">
      <AudioPlayer />
      <PhoneIn />
      <Message />
      <Notification />
    </div>
  );
}; 