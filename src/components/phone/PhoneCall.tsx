import { ReactNode, useRef, forwardRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AudioPlayer } from '../utility/AudioPlayer';
import { TimelineHandle } from '../utility/TimelineHandle';

interface PhoneCallProps {
  children?: ReactNode;
}

interface ExtendedTimelineHandle extends TimelineHandle {
  playAudio: () => void;
  stopAudio: () => void;
}

export const PhoneCall = forwardRef<TimelineHandle, PhoneCallProps>(({ children }, ref) => {
  const callRef = useRef<HTMLDivElement>(null);
  const audioPlayerRef = useRef<ExtendedTimelineHandle>(null);

  useImperativeHandle(ref, () => ({
    createStartTimeline: () => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline();

      gsap.set(callRef.current, { opacity: 0, scale: 0.9 });
      gsap.set('.call-button', {
        left: '25%',
        background: 'linear-gradient(135deg, #8AFE71 0%, #0DD41A 100%)',
      });
      gsap.set('.icon-call', {
        x: 0,
        y: 0,
        width: '55%',
        height: '55%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        rotation: 0,
      });

      tl.to(callRef.current, { opacity: 1, scale: 1, duration: 0.5 }, 0);
      tl.fromTo(
        '.call-button',
        { left: '25%' },
        { left: '75%', duration: 0.5, ease: 'power2.inOut' },
        0.25
      );
      tl.fromTo(
        '.call-button',
        { left: '75%', background: 'linear-gradient(135deg, #8AFE71 0%, #0DD41A 100%)' },
        {
          left: '50%',
          background: 'linear-gradient(135deg, #fe7171 0%, #d40d0d 100%)',
          duration: 0.25,
          ease: 'power2.inOut',
        },
        0.75
      );
      tl.fromTo(
        '.icon-call',
        { rotation: 0, y: 0 },
        { rotation: 135, y: 3, duration: 0.25, ease: 'power2.inOut' },
        0.75
      );

      if (audioPlayerRef.current) {
        tl.call(() => audioPlayerRef.current?.playAudio(), [], 0);
        tl.call(() => audioPlayerRef.current?.stopAudio(), [], 0.75);
      }

      return tl;
    },

    createEndTimeline: () => {
      const endTL = gsap.timeline();
      if (!callRef.current) return endTL;

      endTL.fromTo(
        callRef.current,
        {
          opacity: 1,
          scale: 1,
        },
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          ease: 'power2.inOut',
        }
      );

      return endTL;
    },

    domElement: callRef.current,
  }));

  return (
    <div className="call" ref={callRef}>
      <AudioPlayer
        ref={audioPlayerRef}
        volume={0.2}
        audioSrc="./assets/audio/SFX_PhoneVibrate_v2.aac"
      />
      {children}
      <div className="call-button">
        <img src="./assets/img/icon_call.svg" alt="call-icon" className="icon-call" />
      </div>
      <div className="call-background" />
    </div>
  );
});
