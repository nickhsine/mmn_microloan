import React from 'react';
import { Calls } from '../Phone/Calls';
import { Dialogs } from '../Phone/Dialogs';

export const CallsWithDialogs = () => {
  return (
    <div className="calls-with-dialogs">
      <Calls />
      <Dialogs />
    </div>
  );
}; 