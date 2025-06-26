import { Notification } from '../Phone/Notification';
import { FloatingNumbersBG } from './FloatingNumbersBG';
import { Bookkeeping } from '../shared/Bookkeeping';
import { Calls } from '../Phone/Calls';
import { Dialogs } from '../Phone/Dialogs';
import { AudioPlayer } from '../Utility/AudioPlayer';

export const MisshScene3 = () => {
  return (
    <div className="missh-scene3">
      <Notification />
      <FloatingNumbersBG />

      <div className="step-1">
        <Bookkeeping />
      </div>

      <div className="step-2">
        <Calls top="800vh">
          <Dialogs />
        </Calls>
      </div>

      <div className="step-3">
        <Bookkeeping />
      </div>

      <div className="step-4">
        <Calls top="1000vh">
          <Dialogs />
          {/* <AudioPlayer /> */}
        </Calls>
      </div>
    </div>
  );
}; 