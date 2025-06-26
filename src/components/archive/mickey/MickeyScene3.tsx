import { Bookkeeping } from '../shared/Bookkeeping';
import { Notification } from '../Phone/Notification';
import { AudioPlayer } from '../Utility/AudioPlayer';

export const MickeyScene3 = () => {
  return (
    <div className="mickey-scene3">
      <Bookkeeping />
      <Notification />
      {/* <AudioPlayer /> */}
    </div>
  );
}; 