import { ReactNode, useRef, CSSProperties, forwardRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRive, useStateMachineInput } from '@rive-app/react-webgl2';
import { AudioPlayer } from '../utility/AudioPlayer';

interface CallProps {
  children?: ReactNode;
  top?: string;
  markers?: boolean;
}

export const Call = forwardRef<HTMLDivElement, CallProps>(({ children, top, markers = false }, ref) => {
  const { rive, RiveComponent } = useRive({
    src: './assets/rive/shared-calls.riv',
    artboard: 'Slide',
    stateMachines: 'State Machine 1',
    autoplay: true,
  });

  const progress = useStateMachineInput(rive, 'State Machine 1', 'Progress');
  const callRef = useRef<HTMLDivElement>(null);
  
  const combinedRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      (callRef as any).current = node;
    }
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      (ref as any).current = node;
    }
  }, [ref]);

  // 計算容器樣式
  const containerStyle: CSSProperties = top ? {
    top,
  } : {};

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!rive || !progress) return;

    gsap.set(progress, { value: 0 });

    ScrollTrigger.create({
      trigger: callRef.current,
      start: 'top 10%',
      end: '+=600 10%',
      scrub: 1,
      markers: markers,
      id: 'call-trigger',
      // onEnter: () => {gsap.fromTo(callsRef.current, { scale: 0.9 }, { scale: 1, duration: 0.5, });},
      // onLeave: () => {gsap.fromTo(callsRef.current, { scale: 1 }, { scale: 0.9, duration: 0.5, });},
      // onEnterBack: () => {gsap.fromTo(callsRef.current, { scale: 0.9 }, { scale: 1, duration: 0.5, });},
      // onLeaveBack: () => {gsap.fromTo(callsRef.current, { scale: 1 }, { scale: 0.9, duration: 0.5, });},
      onUpdate: (self) => {
        progress.value = self.progress * 100 * 3;
        if (progress.value >= 80) {
          gsap.to('.call-background', { opacity: 1, width: `80px` });
        } else {
          gsap.to('.call-background', { opacity: 1, width: `320px`, duration: 1, });
        }
      },
    });
  }, { scope: callRef, dependencies: [progress] });

  return (
    <div className="call" ref={combinedRef} style={containerStyle}>
      <AudioPlayer start="top 10%" end="+=200 10%" volume={0.2} audioSrc="./assets/audio/SFX_PhoneVibrate_v2.aac"/>
      {children}
      <div className="call-rive"><RiveComponent /></div>
      <div className="call-background" />
    </div>
  );
}); 