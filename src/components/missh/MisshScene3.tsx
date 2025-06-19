import { Notification } from '../shared/Notification';
import { FloatingNumbersBG } from './FloatingNumbersBG';
import { Bookkeeping } from '../shared/Bookkeeping';
import { PhoneIn } from '../shared/PhoneIn';
import { Dialogs } from '../shared/Dialogs';
import { AudioPlayer } from '../shared/AudioPlayer';

export const MisshScene3 = () => {
  return (
    <div className="missh-scene3">
      <Notification />
      <FloatingNumbersBG />

      <div className="step-1">
        <Bookkeeping />
      </div>

      <div className="step-2">
        <PhoneIn top="800vh">
          <Dialogs />
        </PhoneIn>
      </div>

      <div className="step-3">
        <Bookkeeping />
      </div>

      <div className="step-4">
        <PhoneIn top="1000vh">
          <Dialogs />
          {/* <AudioPlayer /> */}
        </PhoneIn>
      </div>
    </div>
  );
}; 