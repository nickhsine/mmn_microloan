import { CSSProperties, useRef, forwardRef } from 'react';

interface CalculatorProps {
  top?: string;
  markers?: boolean;
}

export const Calculator = forwardRef<HTMLDivElement, CalculatorProps>(({ top, markers = false }, ref) => {
  const calculatorRef = useRef(null);

  const containerStyle: CSSProperties = top ? {
    position: 'absolute',
    top,
    left: '50%',
    transform: 'translate(-50%, 0%)'
  } : {};

  return (
    <div ref={ref || calculatorRef} className="calculator" style={containerStyle}>
    </div>
  );
}); 