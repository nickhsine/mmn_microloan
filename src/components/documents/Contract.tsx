import { CSSProperties, useRef, forwardRef } from 'react';

interface ContractProps {
  top?: string;
  markers?: boolean;
}

export const Contract = forwardRef<HTMLDivElement, ContractProps>(({ top, markers = false }, ref) => {
  const contractRef = useRef(null);

  const containerStyle: CSSProperties = top ? {
    position: 'absolute',
    top,
    left: '50%',
    transform: 'translate(-50%, 0%)'
  } : {};

  return (
    <div ref={ref || contractRef} className="contract" style={containerStyle}>
    </div>
  );
}); 