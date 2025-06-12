import React from 'react';
import { Advertisement } from './Advertisement';
import { Consultant } from './Consultant';

export const MickeyScene1: React.FC = () => {
  return (
    <div className="mickey-scene1">
      <Advertisement />
      <Consultant />
    </div>
  );
}; 