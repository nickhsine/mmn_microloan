import { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { globalAudioEnabled } from './AudioHandler';
import { TimelineHandle } from './TimelineHandle';

interface AudioPlayerProps {
  audioSrc?: string;
  volume?: number;
  loop?: boolean;
}

interface ExtendedTimelineHandle extends TimelineHandle {
  playAudio: () => void;
  stopAudio: () => void;
}

export const AudioPlayer = forwardRef<ExtendedTimelineHandle, AudioPlayerProps>(
  ({ audioSrc = './assets/audio/SFX_PhoneVibrate_v1.aac', volume = 0.5, loop = true }, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0;
      }
    }, []);

    useEffect(() => {
      const handleAudioToggle = () => {
        if (audioRef.current && isPlaying) {
          const targetVolume = globalAudioEnabled ? volume : 0;
          gsap.to(audioRef.current, { volume: targetVolume, duration: 0.5 });
        }
      };

      window.addEventListener('audioToggle', handleAudioToggle);
      return () => window.removeEventListener('audioToggle', handleAudioToggle);
    }, [isPlaying, volume]);

    const playAudio = () => {
      if (!audioRef.current) return;

      const audio = audioRef.current;
      audio.loop = loop;
      audio.play().catch(error => console.log('無法播放聲音', error));

      const targetVolume = globalAudioEnabled ? volume : 0;
      gsap.to(audio, { volume: targetVolume, duration: 0.5 });
      setIsPlaying(true);
    };

    const stopAudio = () => {
      if (!audioRef.current) return;

      gsap.to(audioRef.current, {
        volume: 0,
        duration: 0.5,
        onComplete: () => {
          setIsPlaying(false);
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
        },
      });
    };

    const pauseAudio = () => {
      if (!audioRef.current || !isPlaying) return;

      gsap.to(audioRef.current, {
        volume: 0,
        duration: 0.3,
        onComplete: () => {
          if (audioRef.current) {
            audioRef.current.pause();
          }
        },
      });
    };

    const resumeAudio = () => {
      if (!audioRef.current || isPlaying) return;

      const audio = audioRef.current;
      audio.play().catch(error => console.log('無法恢復聲音', error));

      const targetVolume = globalAudioEnabled ? volume : 0;
      gsap.to(audio, { volume: targetVolume, duration: 0.3 });
      setIsPlaying(true);
    };

    useImperativeHandle(ref, () => ({
      createStartTimeline: () => {
        const tl = gsap.timeline();

        tl.call(playAudio);
        timelineRef.current = tl;

        return tl;
      },

      createEndTimeline: () => {
        const tl = gsap.timeline();

        tl.call(stopAudio);

        return tl;
      },

      playAudio,
      stopAudio,
      pause: pauseAudio,
      resume: resumeAudio,
      stop: stopAudio,

      domElement: containerRef.current,
    }));

    return (
      <div className="audio-player" ref={containerRef} style={{ height: '0px', width: '0px' }}>
        <audio
          ref={audioRef}
          src={audioSrc}
          preload="auto"
          onError={() => console.error('聲音載入錯誤')}
        />
      </div>
    );
  }
);
