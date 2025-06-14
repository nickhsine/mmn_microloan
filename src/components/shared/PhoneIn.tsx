import React, { ReactNode } from 'react';


interface PhoneInProps {
  children?: ReactNode;
}

export const PhoneIn = ({ children }: PhoneInProps) => {
  return (
    <div className="phone-in">
      {/* 電話來電組件 */}
      {children}
    </div>
  );
}; 