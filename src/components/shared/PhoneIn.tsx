import { ReactNode, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRive, useStateMachineInput } from '@rive-app/react-webgl2';

gsap.registerPlugin(useGSAP);

interface PhoneInProps {
  children?: ReactNode;
}

export const PhoneIn = ({ children }: PhoneInProps) => {
  const { rive, RiveComponent } = useRive({
    src: './assets/rive/shared-phonein.riv',
    artboard: 'PhoneInMain',
    stateMachines: 'State Machine 1',
    autoplay: true,
  });

  const clickedInput = useStateMachineInput(rive, 'State Machine 1', 'Clicked');
  const phoneInRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!rive || !clickedInput) return;

    ScrollTrigger.create({
      trigger: phoneInRef.current,
      start: 'top 50%',
      end: 'bottom 50%',
      onEnter: () => { if (clickedInput) { clickedInput.value = true; } },
      onLeave: () => { if (clickedInput) { clickedInput.value = true; } },
      onEnterBack: () => { if (clickedInput) { clickedInput.value = false; } },
      onLeaveBack: () => { if (clickedInput) { clickedInput.value = false; } },
      id: 'phone-in-trigger'
    });
  }, { scope: phoneInRef, dependencies: [clickedInput] });

  return (
    <div className="phone-in" ref={phoneInRef}>
      <div className="phone-in-rive" style={{ height: '100px' }}>
        <RiveComponent />
      </div>
      {children}
    </div>
  );
}; 