import { ReactNode, useRef, CSSProperties } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRive, useStateMachineInput } from '@rive-app/react-webgl2';
import { AudioPlayer } from '../utility/AudioPlayer';

interface CallsProps {
  children?: ReactNode;
  top?: string;
  markers?: boolean;
}

export const Calls = ({ children, top, markers = false }: CallsProps) => {
  const { rive, RiveComponent } = useRive({
    src: './assets/rive/shared-calls.riv',
    artboard: 'Slide',
    stateMachines: 'State Machine 1',
    autoplay: true,
  });

  const progress = useStateMachineInput(rive, 'State Machine 1', 'Progress');
  const callsRef = useRef<HTMLDivElement>(null);

  // 計算容器樣式
  const containerStyle: CSSProperties = top ? {
    position: 'absolute',
    top,
    left: '50%',
    transform: 'translate(-50%, 0%)'
  } : {};

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!rive || !progress) return;

    gsap.set(progress, { value: 0 });

    ScrollTrigger.create({
      trigger: callsRef.current,
      start: 'top 10%',
      end: '+=600 10%',
      pin: true,
      scrub: 1,
      markers: markers,
      id: 'calls-trigger',
      onEnter: () => {gsap.fromTo(callsRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, });},
      onLeave: () => {gsap.fromTo(callsRef.current, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.9, duration: 0.5, });},
      onEnterBack: () => {gsap.fromTo(callsRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, });},
      onLeaveBack: () => {gsap.fromTo(callsRef.current, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.9, duration: 0.5, });},
      onUpdate: (self) => {
        progress.value = self.progress * 100 * 3;
        if (progress.value >= 80) {
          gsap.to('.calls-background', { opacity: 1, width: `80px` });
        } else {
          gsap.to('.calls-background', { opacity: 1, width: `320px`, duration: 1, });
        }
      },
    });
  }, { scope: callsRef, dependencies: [progress] });

  return (
    <div className="calls" ref={callsRef} style={containerStyle}>
      <AudioPlayer start="top 10%" end="+=200 10%" volume={0.2} audioSrc="./assets/audio/SFX_PhoneVibrate_v2.aac"/>
      {children}
      <div className="calls-rive"><RiveComponent /></div>
      <div className="calls-background" />
    </div>
  );
}; 