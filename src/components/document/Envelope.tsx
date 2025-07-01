import { CSSProperties } from 'react';

interface EnvelopeProps {
  top?: string;
  markers?: boolean;
}

export const Envelope = ({ top, markers = false }: EnvelopeProps) => {
  const containerStyle: CSSProperties = top ? {
    position: 'absolute',
    top,
    left: '50%',
    transform: 'translate(-50%, 0%)'
  } : {};

  return (
    <div className="envelope" style={containerStyle}>
    </div>
  );
}; 