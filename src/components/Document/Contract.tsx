import { CSSProperties } from 'react';

interface ContractProps {
  top?: string;
  markers?: boolean;
}

export const Contract = ({ top, markers = false }: ContractProps) => {
  const containerStyle: CSSProperties = top ? {
    position: 'absolute',
    top,
    left: '50%',
    transform: 'translate(-50%, 0%)'
  } : {};

  return (
    <div className="contract" style={containerStyle}>
    </div>
  );
}; 