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

// 檢測瀏覽器是否允許修改 audio.volume（iOS Safari 幾乎完全禁用，部分 Android 也無效）
const SUPPORTS_VOLUME_CHANGE = (() => {
  const testAudio = document.createElement('audio');
  const original = testAudio.volume;
  try {
    testAudio.volume = 0.123;
    return testAudio.volume !== original;
  } catch {
    return false;
  }
})();

export const AudioPlayer = forwardRef<ExtendedTimelineHandle, AudioPlayerProps>(
  ({ audioSrc = 'https://storytelling-storage.twreporter.org/files/SFX-PhoneVibrate-hAOnEKQWnTwn.aac', volume = 0.5, loop = true }, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    // 行動裝置會忽略 volume 寫入，因此改用 muted 控制；
    // 若瀏覽器支援 volume 仍可以保留舊有淡入淡出效果。

    useEffect(() => {
      const handleAudioToggle = () => {
        if (!audioRef.current || !isPlaying) return;

        if (SUPPORTS_VOLUME_CHANGE) {
          const targetVolume = globalAudioEnabled ? volume : 0.05;
          gsap.to(audioRef.current, { volume: targetVolume, duration: 0.5 });
        } else {
          // 無法調整 volume 時，直接切換 muted
          audioRef.current.muted = !globalAudioEnabled;
        }
      };

      window.addEventListener('audioToggle', handleAudioToggle);
      return () => window.removeEventListener('audioToggle', handleAudioToggle);
    }, [isPlaying, volume]);

    const playAudio = () => {
      if (!audioRef.current) return;

      const audio = audioRef.current;
      audio.loop = loop;

      const startPlayback = async () => {
        try {
          // 先以 muted 播放，符合行動端自動播放條件
          audio.muted = true;
          await audio.play();

          // 播放成功後依瀏覽器能力決定解除靜音或調整音量
          if (SUPPORTS_VOLUME_CHANGE) {
            audio.muted = false;
            const targetVolume = globalAudioEnabled ? volume : 0;
            gsap.to(audio, { volume: targetVolume, duration: 0.5 });
          } else {
            audio.muted = !globalAudioEnabled;
          }
        } catch (error) {
          console.log('無法播放聲音', error);
        }
      };

      startPlayback();
      setIsPlaying(true);
    };

    const stopAudio = () => {
      if (!audioRef.current) return;

      if (SUPPORTS_VOLUME_CHANGE) {
        gsap.to(audioRef.current, {
          volume: 0.05,
          duration: 0.5,
          onComplete: () => {
            setIsPlaying(false);
            if (audioRef.current) {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
            }
          },
        });
      } else {
        if (audioRef.current) {
          audioRef.current.muted = true;
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
        setIsPlaying(false);
      }
    };

    const pauseAudio = () => {
      if (!audioRef.current || !isPlaying) return;

      if (SUPPORTS_VOLUME_CHANGE) {
        gsap.to(audioRef.current, {
          volume: 0.05,
          duration: 0.3,
          onComplete: () => {
            if (audioRef.current) {
              audioRef.current.pause();
            }
          },
        });
      } else {
        if (audioRef.current) {
          audioRef.current.muted = true;
          audioRef.current.pause();
        }
      }
    };

    const resumeAudio = () => {
      if (!audioRef.current || isPlaying) return;

      const audio = audioRef.current;
      audio.play().catch(error => console.log('無法恢復聲音', error));

      if (SUPPORTS_VOLUME_CHANGE) {
        const targetVolume = globalAudioEnabled ? volume : 0.05;
        gsap.to(audio, { volume: targetVolume, duration: 0.3 });
      } else {
        audio.muted = !globalAudioEnabled;
      }
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

    /*
     * 🔓 透過使用者點擊 AudioHandler 後發出的 custom event 先行「解鎖」音訊：
     *     1. 將 muted 設定為 true
     *     2. 播放一次並立即暫停（iOS/Safari 允許）
     * 之後即使程式碼再次呼叫 play() 也不會被視為自動播放而遭阻擋。
     */
    useEffect(() => {
      const unlockHandler = () => {
        if (!audioRef.current) return;

        const audio = audioRef.current;
        const unlock = async () => {
          try {
            audio.muted = true;
            await audio.play();
            audio.pause();
            audio.currentTime = 0;
            // 保持 muted 狀態，待真正播放時再決定是否取消靜音
          } catch {}
        };

        unlock();
      };

      window.addEventListener('audioUnlock', unlockHandler);
      return () => window.removeEventListener('audioUnlock', unlockHandler);
    }, []);

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
