import React from 'react';
import { Bookkeeping } from '../shared/Bookkeeping';
import { Notification } from '../shared/Notification';
import { Audio } from '../shared/Audio';

export const MickeyScene3: React.FC = () => {
  return (
    <div className="mickey-scene3">
      <Bookkeeping />
      <Notification />
      <Audio />
    </div>
  );
}; 