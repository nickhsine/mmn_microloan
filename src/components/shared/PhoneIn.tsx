import React, { ReactNode } from 'react';

interface PhoneInProps {
  children?: ReactNode;
}

export const PhoneIn: React.FC<PhoneInProps> = ({ children }) => {
  return (
    <div className="phone-in">
      {/* 電話來電組件 */}
      {children}
    </div>
  );
}; 