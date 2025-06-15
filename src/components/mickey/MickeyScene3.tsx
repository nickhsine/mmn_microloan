import { Bookkeeping } from '../shared/Bookkeeping';
import { Notification } from '../shared/Notification';
import { AudioPlayer } from '../shared/AudioPlayer';

export const MickeyScene3 = () => {
  return (
    <div className="mickey-scene3">
      <Bookkeeping />
      <Notification />
      <AudioPlayer />
    </div>
  );
}; 