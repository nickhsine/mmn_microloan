import React, { CSSProperties } from 'react';

interface NotificationProps {
  top?: string;
  markers?: boolean;
}

export const Notification = ({ top, markers = false }: NotificationProps) => {
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