import { ReactNode, useRef, forwardRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRive, useStateMachineInput } from '@rive-app/react-webgl2';
import { AudioPlayer } from '../utility/AudioPlayer';

interface CallProps {
  children?: ReactNode;
  start?: string;
  end?: string;
  markers?: boolean;
}

export const Call = forwardRef<HTMLDivElement, CallProps>(
  ({ children, markers = false, start = '0', end = '600vh' }, ref) => {
    const { rive, RiveComponent } = useRive({
      src: './assets/rive/shared-calls.riv',
      artboard: 'Slide',
      stateMachines: 'State Machine 1',
      autoplay: true,
    });

    const progress = useStateMachineInput(rive, 'State Machine 1', 'Progress');
    const callRef = useRef<HTMLDivElement>(null);

    const combinedRef = useCallback(
      (node: HTMLDivElement | null) => {
        if (node) {
          (callRef as any).current = node;
        }
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          (ref as any).current = node;
        }
      },
      [ref]
    );

    useGSAP(
      () => {
        gsap.registerPlugin(ScrollTrigger);
        if (!rive || !progress) return;

        gsap.set(progress, { value: 0 });
        gsap.set(callRef.current, { opacity: 0, scale: 0.9 });

        ScrollTrigger.create({
          trigger: callRef.current,
          start: `${start} 10%`,
          end: `${end} 10%`,
          scrub: 1,
          markers: markers,
          id: 'call-trigger',
          onEnter: () => {
            gsap.fromTo(
              callRef.current,
              { opacity: 0, scale: 0.9 },
              { opacity: 1, scale: 1, duration: 0.5 }
            );
          },
          onLeave: () => {
            gsap.fromTo(
              callRef.current,
              { opacity: 1, scale: 1 },
              { opacity: 0, scale: 0.9, duration: 0.5 }
            );
          },
          onEnterBack: () => {
            gsap.fromTo(
              callRef.current,
              { opacity: 0, scale: 0.9 },
              { opacity: 1, scale: 1, duration: 0.25 }
            );
          },
          onLeaveBack: () => {
            gsap.fromTo(
              callRef.current,
              { opacity: 1, scale: 1 },
              { opacity: 0, scale: 0.9, duration: 0.25 }
            );
          },
          onUpdate: self => {
            progress.value = self.progress * 100 * 3;
            if (progress.value >= 80) {
              gsap.to('.call-background', { opacity: 1, width: `80px` });
            } else {
              gsap.to('.call-background', { opacity: 1, width: `320px`, duration: 1 });
            }
          },
        });
      },
      { scope: callRef, dependencies: [progress] }
    );

    return (
      <div className="call" ref={combinedRef}>
        <AudioPlayer
          start="top 10%"
          end="+=200 10%"
          volume={0.2}
          audioSrc="./assets/audio/SFX_PhoneVibrate_v2.aac"
        />
        {children}
        <div className="call-rive">
          <RiveComponent />
        </div>
        <div className="call-background" />
      </div>
    );
  }
);
