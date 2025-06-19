import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRive, useStateMachineInput } from '@rive-app/react-webgl2';

gsap.registerPlugin(ScrollTrigger);

export const MisshBackground = () => {
  const { rive, RiveComponent } = useRive({
    src: './assets/rive/scene-missh.riv',
    artboard: 'Main',
    stateMachines: 'State Machine 2',
    autoplay: true,
    useOffscreenRenderer: true,
  });

  const S1toS2 = useStateMachineInput(rive, 'State Machine 2', 'Progress_S1toS2');
  const S2toS3 = useStateMachineInput(rive, 'State Machine 2', 'Progress_S2toS3');
  const misshRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const stopWalkingTimeout = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    if (!rive || !S1toS2 || !S2toS3) return;

    gsap.set(S1toS2, { value: 0 });
    gsap.set(S2toS3, { value: 0 });
    
    rive.setNumberStateAtPath('WalkSpeed', 0, 'MissH');

    ScrollTrigger.create({
      trigger: '.section-story-missh',
      start: 'top top',
      end: 'bottom bottom',
      pin: misshRef.current,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        
        if (progress <= 0.5) {
          S1toS2.value = (progress / 0.5) * 100;
          S2toS3.value = 0;
        } else {
          S1toS2.value = 100;
          S2toS3.value = ((progress - 0.5) / 0.5) * 100;
        }

        if (!isScrolling.current) {
          isScrolling.current = true;
          
          if (stopWalkingTimeout.current) {
            stopWalkingTimeout.current.kill();
            stopWalkingTimeout.current = null;
          }
          
          gsap.to({ value: 0 }, { 
            value: 100, 
            duration: 1,
            onUpdate: function() {
              rive.setNumberStateAtPath('WalkSpeed', this.targets()[0].value, 'MissH');
            }
          });
        }
        
        if (stopWalkingTimeout.current) {
          stopWalkingTimeout.current.kill();
        }
        
        stopWalkingTimeout.current = gsap.delayedCall(0.1, () => {
          isScrolling.current = false;
          stopWalkingTimeout.current = gsap.to({ value: 100 }, { 
            value: 0, 
            duration: 5,
            onUpdate: function() {
              rive.setNumberStateAtPath('WalkSpeed', this.targets()[0].value, 'MissH');
            }
          });
        });
      },
      onToggle: (self) => {
        if (!self.isActive) {
          isScrolling.current = false;
          
          if (stopWalkingTimeout.current) {
            stopWalkingTimeout.current.kill();
            stopWalkingTimeout.current = null;
          }
          
          gsap.to({ value: 100 }, { 
            value: 0, 
            duration: 1,
            onUpdate: function() {
              rive.setNumberStateAtPath('WalkSpeed', this.targets()[0].value, 'MissH');
            }
          });
        }
      },
      markers: false,
      id: 'missh-background'
    });
  }, { dependencies: [rive, S1toS2, S2toS3] });
  
  return (
    <div className="missh-background" ref={misshRef}>
      <RiveComponent className="missh-background-rive"/>
    </div>
  );
}; 