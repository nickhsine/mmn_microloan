import React, { CSSProperties } from 'react';

interface NotificationProps {
  top?: string;
}

export const Notification = ({ top }: NotificationProps) => {
  const containerStyle: CSSProperties = top ? {
    position: 'absolute',
    top,
    left: '50%',
    transform: 'translate(-50%, 0%)'
  } : {};

  return (
    <div className="notification" style={containerStyle}>
      {/* 通知組件 */}
    </div>
  );
}; 