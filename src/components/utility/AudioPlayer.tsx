import { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { globalAudioEnabled, audioContextUnlocked } from './AudioHandler';
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

// 檢測是否為行動裝置
const isMobile = () => {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.innerWidth <= 768 ||
    'ontouchstart' in window
  );
};

export const AudioPlayer = forwardRef<ExtendedTimelineHandle, AudioPlayerProps>(
  ({ audioSrc = './assets/audio/SFX_PhoneVibrate_v1.aac', volume = 0.5, loop = true }, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);
    const pendingPlay = useRef(false);

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0;
        
        // 監聽音訊載入完成
        const handleCanPlayThrough = () => {
          setIsReady(true);
          // 如果有待播放的請求，現在執行
          if (pendingPlay.current && globalAudioEnabled) {
            pendingPlay.current = false;
            playAudio();
          }
        };

        audioRef.current.addEventListener('canplaythrough', handleCanPlayThrough);
        
        return () => {
          if (audioRef.current) {
            audioRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
          }
        };
      }
    }, []);

    useEffect(() => {
      const handleAudioToggle = (event: CustomEvent) => {
        if (audioRef.current && isPlaying) {
          const targetVolume = globalAudioEnabled ? volume : 0;
          gsap.to(audioRef.current, { volume: targetVolume, duration: 0.5 });
        }
      };

      const handleAudioContextUnlocked = () => {
        console.log('AudioPlayer: 收到音訊 context 解鎖事件');
        // 如果有待播放的請求，現在可以執行
        if (pendingPlay.current && isReady && globalAudioEnabled) {
          pendingPlay.current = false;
          playAudio();
        }
      };

      window.addEventListener('audioToggle', handleAudioToggle as EventListener);
      window.addEventListener('audioContextUnlocked', handleAudioContextUnlocked);
      
      return () => {
        window.removeEventListener('audioToggle', handleAudioToggle as EventListener);
        window.removeEventListener('audioContextUnlocked', handleAudioContextUnlocked);
      };
    }, [isPlaying, volume, isReady]);

    const playAudio = async () => {
      if (!audioRef.current) return;

      // 在行動裝置上，如果音訊 context 尚未解鎖，標記為待播放
      if (isMobile() && !audioContextUnlocked) {
        console.log('AudioPlayer: 音訊 context 尚未解鎖，標記為待播放');
        pendingPlay.current = true;
        return;
      }

      // 如果音訊尚未準備好，標記為待播放
      if (!isReady) {
        console.log('AudioPlayer: 音訊尚未準備好，標記為待播放');
        pendingPlay.current = true;
        return;
      }

      const audio = audioRef.current;
      audio.loop = loop;
      
      try {
        // 重置播放位置
        audio.currentTime = 0;
        await audio.play();
        
        const targetVolume = globalAudioEnabled ? volume : 0;
        gsap.to(audio, { volume: targetVolume, duration: 0.5 });
        setIsPlaying(true);
        
        console.log('AudioPlayer: 音訊播放成功');
      } catch (error) {
        console.log('AudioPlayer: 無法播放聲音', error);
        
        // 在行動裝置上，如果播放失敗，可能是因為需要用戶互動
        if (isMobile()) {
          pendingPlay.current = true;
        }
      }
    };

    const stopAudio = () => {
      if (!audioRef.current) return;

      pendingPlay.current = false; // 清除待播放標記

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

        tl.call(() => {
          playAudio(); // 不需要等待 async 結果
        });
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
