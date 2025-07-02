import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { globalAudioEnabled } from './AudioHandler';

interface AudioPlayerProps {
  audioSrc?: string;
  volume?: number;
  loop?: boolean;
  start?: string;
  end?: string;
  markers?: boolean;
}

export const AudioPlayer = ({
  audioSrc = './assets/audio/SFX_PhoneVibrate_v1.aac',
  volume = 0.5,
  loop = true,
  start = 'top 50%',
  end = '+=300 50%',
  markers = false,
}: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (!audioRef.current || !containerRef.current) return;

      const audio = audioRef.current;
      audio.loop = loop;

      const audioIn = () => {
        audio.play().catch(error => console.log('無法播放聲音', error));
        const targetVolume = globalAudioEnabled ? volume : 0;
        gsap.to(audio, { volume: targetVolume, duration: 0.5 });
        setIsPlaying(true);
      };

      const audioOut = () => {
        gsap.to(audio, {
          volume: 0,
          duration: 0.5,
          onComplete: () => setIsPlaying(false),
        });
      };

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: start,
        end: end,
        onEnter: audioIn,
        onLeave: audioOut,
        onEnterBack: audioIn,
        onLeaveBack: audioOut,
        markers: markers,
        id: 'audio-scroll-trigger',
      });
    },
    { scope: containerRef, dependencies: [volume, loop] }
  );

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
};
