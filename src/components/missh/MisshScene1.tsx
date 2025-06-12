import React from 'react';
import { PhoneIn } from '../shared/PhoneIn';
import { Message } from '../shared/Message';
import { Notification } from '../shared/Notification';

export const MisshScene1: React.FC = () => {
  return (
    <div className="missh-scene1">
      <PhoneIn />
      <Message />
      <Notification />
    </div>
  );
}; 