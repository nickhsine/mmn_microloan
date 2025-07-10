import { ReactNode, CSSProperties } from 'react';

interface CaptionProps {
  children?: ReactNode;
  category?: string;
  startAt?: number | string;
  stayFor?: number | string;
  style?: CSSProperties;
} 

export const Caption = ({ 
  children,
  category = 'normal',
  startAt = 0,
  stayFor,
  style,
}: CaptionProps) => {
  return (
    <p 
      className={`caption ${category}`} 
      data-start={startAt} 
      data-stay={stayFor}
      style={style}
    >
      {children}
    </p>
  );
};