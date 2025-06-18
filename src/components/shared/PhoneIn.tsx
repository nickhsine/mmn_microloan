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
    artboard: 'Slide',
    stateMachines: 'State Machine 1',
    autoplay: true,
  });

  const progress = useStateMachineInput(rive, 'State Machine 1', 'Progress');
  const phoneInRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!rive || !progress) return;

    gsap.set(progress, { value: 0 });

    ScrollTrigger.create({
      trigger: phoneInRef.current,
      start: 'top 50%',
      end: '+=500 50%',
      pin: true,
      scrub: 1,
      markers: true,
      onUpdate: (self) => {
        progress.value = self.progress * 100 * 3;
        if (progress.value >= 65) {
          gsap.to('.phone-in-background', { opacity: 0, duration: 0.5, });
        } else {
          gsap.to('.phone-in-background', { opacity: 1, duration: 0.5, });
        }
      },
      id: 'phone-in-trigger'
    });
  }, { scope: phoneInRef, dependencies: [progress] });

  return (
    <div className="phone-in" ref={phoneInRef}>
      <div className="phone-in-rive"><RiveComponent /></div>
      <div className="phone-in-background" />
      {children}
    </div>
  );
}; 