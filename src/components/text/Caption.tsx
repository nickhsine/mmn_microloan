import { ReactNode } from 'react';

interface CaptionProps {
  children?: ReactNode;
  category?: string;
  startAt?: number | string;
  stayFor?: number | string;
} 

export const Caption = ({ 
  children,
  category = 'normal',
  startAt = 0,
  stayFor = 1,
}: CaptionProps) => {
  return (
    <p 
      className={`caption ${category}`} 
      data-start={startAt} 
      data-stay={stayFor}
    >
      {children}
    </p>
  );
};