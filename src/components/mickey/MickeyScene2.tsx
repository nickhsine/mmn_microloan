import React from 'react';
import { PhoneInWithDialogs } from './PhoneInWithDialogs';
import { Message } from '../shared/Message';

export const MickeyScene2: React.FC = () => {
  return (
    <div className="mickey-scene2">
      <PhoneInWithDialogs />
      <Message />
    </div>
  );
}; 