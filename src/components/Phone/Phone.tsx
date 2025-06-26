import { CSSProperties, ReactNode } from 'react';

interface PhoneProps {
  top?: string;
  markers?: boolean;
  children?: ReactNode;
}

export const Phone = ({ top, markers = false, children }: PhoneProps) => {
  const containerStyle: CSSProperties = top ? {
    position: 'absolute',
    top,
    left: '50%',
    transform: 'translate(-50%, 0%)'
  } : {};

  return (
    <div className="phone" style={containerStyle}>
      {children}
    </div>
  );
}; 