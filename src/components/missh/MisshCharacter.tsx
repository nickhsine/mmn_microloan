import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRive, useStateMachineInput } from '@rive-app/react-webgl2';

gsap.registerPlugin(useGSAP);

export const MisshCharacter = () => {
  const { rive, RiveComponent } = useRive({
    src: '/assets/rive/scene-missh.riv',
    artboard: 'MissH',
    stateMachines: 'State Machine 1',
    autoplay: true,
    useOffscreenRenderer: true,
  });

  const triggerWalk = useStateMachineInput(rive, 'State Machine 1', 'Walk');

  const misshRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!rive) return;

    ScrollTrigger.create({
      trigger: misshRef.current,
      start: 'top 50%',
      end: 'bottom 50%',
      pin: true,
      onEnter: () => {
        if (triggerWalk) { triggerWalk.fire(); }
      },
      markers: true,
      id: 'missh-character'
    });
  }, { scope: misshRef, dependencies: [triggerWalk] });

  useEffect(() => {
    // 檢查是否支援 WebGL2
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    if (!gl) {
      console.error('WebGL2 not supported');
    }
  });
  
  return (
    <div className="missh-character" ref={misshRef} style={{ height: '100%' }}>
        <RiveComponent className="missh-character-rive"/>
    </div>
  );
}; 