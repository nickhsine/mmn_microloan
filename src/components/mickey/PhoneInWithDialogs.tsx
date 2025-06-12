import React from 'react';
import { PhoneIn } from '../shared/PhoneIn';
import { Dialogs } from '../shared/Dialogs';

export const PhoneInWithDialogs: React.FC = () => {
  return (
    <div className="phone-in-with-dialogs">
      <PhoneIn />
      <Dialogs />
    </div>
  );
}; 