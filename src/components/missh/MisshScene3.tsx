import React from 'react';
import { Notification } from '../shared/Notification';
import { FloatingNumbersBG } from './FloatingNumbersBG';
import { Bookkeeping } from '../shared/Bookkeeping';
import { PhoneIn } from '../shared/PhoneIn';
import { Dialogs } from '../shared/Dialogs';
import { Audio } from '../shared/Audio';

export const MisshScene3 = () => {
  return (
    <div className="missh-scene3">
      <Notification />
      <FloatingNumbersBG />
      
      {/* Step 1 */}
      <div className="step-1">
        <Bookkeeping />
      </div>
      
      {/* Step 2 */}
      <div className="step-2">
        <PhoneIn>
          <Dialogs />
        </PhoneIn>
      </div>
      
      {/* Step 3 */}
      <div className="step-3">
        <Bookkeeping />
      </div>
      
      {/* Step 4 */}
      <div className="step-4">
        <PhoneIn>
          <Dialogs />
          <Audio />
        </PhoneIn>
      </div>
    </div>
  );
}; 