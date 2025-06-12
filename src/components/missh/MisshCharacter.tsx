import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRive, useStateMachineInput } from '@rive-app/react-webgl2';
import scenemisshRiv from '../../assets/scenemissh.riv?url';

gsap.registerPlugin(ScrollTrigger);

export const MisshCharacter: React.FC = () => {
  const { rive, RiveComponent } = useRive({
    src: scenemisshRiv,
    artboard: 'MissH',
    stateMachines: 'State Machine 1',
    autoplay: true,
    useOffscreenRenderer: true,
  });

  const triggerWalk = useStateMachineInput(rive, 'State Machine 1', 'Walk');

  useGSAP(() => {
    if (!rive) return;

    ScrollTrigger.create({
      trigger: '.missh-character',
      markers: true,
      start: '10% 50%',
      end: 'bottom 50%',
      onEnter: () => {
        if (triggerWalk) { triggerWalk.fire(); }
      }
    });
  }, { dependencies: [triggerWalk] });

  useEffect(() => {
    // 檢查是否支援 WebGL2
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    if (!gl) {
      console.error('WebGL2 not supported');
    }
  });
  
  return (
    <div className="missh-character">
        <RiveComponent style={{ width: '100%', height: '100vh', marginTop: '100vh' }}/>
    </div>
  );
}; 