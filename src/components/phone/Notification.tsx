import { CSSProperties, useRef, forwardRef } from 'react';

interface NotificationProps {
  top?: string;
  markers?: boolean;
}

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(({ top, markers = false }, ref) => {
  const notificationRef = useRef<HTMLDivElement>(null);
  const containerStyle: CSSProperties = top ? {
    position: 'absolute',
    top,
    left: '50%',
    transform: 'translate(-50%, 0%)'
  } : {};

  return (
    <div className="notification" ref={ ref || notificationRef } style={containerStyle}>
      {/* 通知組件 */}
    </div>
  );
}); 