import { CSSProperties } from 'react';

interface CalculatorProps {
  top?: string;
  markers?: boolean;
}

export const Calculator = ({ top, markers = false }: CalculatorProps) => {
  const containerStyle: CSSProperties = top ? {
    position: 'absolute',
    top,
    left: '50%',
    transform: 'translate(-50%, 0%)'
  } : {};

  return (
    <div className="calculator" style={containerStyle}>
    </div>
  );
}; 