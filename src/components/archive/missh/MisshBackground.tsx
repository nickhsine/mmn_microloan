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

  useGSAP(() => {
    if (!rive || !S1toS2 || !S2toS3) return;

    gsap.set(S1toS2, { value: 0 });
    gsap.set(S2toS3, { value: 0 });
    rive.setNumberStateAtPath('WalkSpeed', 0, 'MissH');

    let isScrolling = false;
    let walkSpeedTween: gsap.core.Tween | null = null;
    let stopTimeout: gsap.core.Tween | null = null;
    let currentWalkSpeed = 0;

    const setWalkSpeed = (targetValue: number, duration: number = 1) => {
      if (walkSpeedTween) {
        walkSpeedTween.kill();
        walkSpeedTween = null;
      }
      
      walkSpeedTween = gsap.to({ value: currentWalkSpeed }, {
        value: targetValue,
        duration: duration,
        ease: "power2.out",
        onUpdate: function() {
          currentWalkSpeed = this.targets()[0].value;
          rive.setNumberStateAtPath('WalkSpeed', currentWalkSpeed, 'MissH');
        },
        onComplete: () => {
          walkSpeedTween = null;
          currentWalkSpeed = targetValue;
        }
      });
    };

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

        if (!isScrolling) {isScrolling = true;
          if (stopTimeout) { stopTimeout.kill(); stopTimeout = null; }
          setWalkSpeed(100, 3);
        }
        

        if (stopTimeout) stopTimeout.kill();
        stopTimeout = gsap.delayedCall(0.1, () => {
          isScrolling = false;
          setWalkSpeed(0, 4);
        });
      },
      onToggle: (self) => {
        if (!self.isActive) {
          isScrolling = false;
          if (stopTimeout) {
            stopTimeout.kill();
            stopTimeout = null;
          }
          setWalkSpeed(0, 1);
        }
      },
      invalidateOnRefresh: true,
      markers: false,
      id: 'missh-background'
    });


    return () => {
      if (walkSpeedTween) walkSpeedTween.kill();
      if (stopTimeout) stopTimeout.kill();
    };
  }, { dependencies: [rive, S1toS2, S2toS3] });
  
  return (
    <div className="missh-background" ref={misshRef}>
      <RiveComponent className="missh-background-rive"/>
    </div>
  );
}; 