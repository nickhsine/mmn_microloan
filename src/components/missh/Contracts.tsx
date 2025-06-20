import React, { CSSProperties } from 'react';

interface ContractsProps {
  top?: string;
}

export const Contracts = ({ top }: ContractsProps) => {
  const containerStyle: CSSProperties = top ? {
    position: 'absolute',
    top,
    left: '50%',
    transform: 'translate(-50%, 0%)'
  } : {};

  return (
    <div className="contracts" style={containerStyle}>

    </div>
  );
}; 