import { forwardRef, useImperativeHandle } from 'react';
import { useRive } from '@rive-app/react-canvas';

interface RiveAnimationProps {
  id: string;
  src: string;
  className?: string;
  autoplay?: boolean;
  artboard?: string;
  stateMachine?: string;
  inputs?: {
    [key: string]: any;
  };
}

export interface RiveAnimationRef {
  rive: any;
  play: () => void;
  pause: () => void;
  getStateMachineInput: (name: string) => any;
}

export const RiveAnimation = forwardRef<RiveAnimationRef, RiveAnimationProps>(({
  id,
  src,
  className = '',
  autoplay = true,
  artboard,
  stateMachine = 'State Machine 1'
}, ref) => {

  const { rive, RiveComponent } = useRive({
    src,
    autoplay,
    artboard,
    stateMachines: stateMachine,
  });

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    rive,
    play: () => {
      if (rive) {
        rive.play();
      }
    },
    pause: () => {
      if (rive) {
        rive.pause();
      }
    },
    getStateMachineInput: (name: string) => {
      if (rive && rive.stateMachineInputs) {
        const inputs = rive.stateMachineInputs(stateMachine);
        return inputs ? inputs.find((input: any) => input.name === name) : null;
      }
      return null;
    }
  }));

  return (
    <div
      className={className}
      id={id}
      style={{ width: '100%', height: '100%' }}
    >
      <RiveComponent
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}); 