import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRive, useStateMachineInput } from '@rive-app/react-webgl2';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface AudioHandlerProps {
  markers?: boolean;
}

export let globalAudioEnabled = false;
export let audioContextUnlocked = false;

// 檢測是否為行動裝置
const isMobile = () => {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.innerWidth <= 768 ||
    'ontouchstart' in window
  );
};

const useAudioRive = (artboard: string) => {
  const { RiveComponent, rive } = useRive({
    src: './assets/rive/shared-audiohandler.riv',
    stateMachines: 'State Machine 1',
    artboard,
    autoplay: true,
    autoBind: true,
  });

  const stateInput = useStateMachineInput(rive, 'State Machine 1', 'State');

  return { RiveComponent, stateInput };
};

export const AudioHandler = ({ markers }: AudioHandlerProps) => {
  const { RiveComponent: FullRiveComponent, stateInput: fullStateInput } = useAudioRive('Full');
  const { RiveComponent: SimpleRiveComponent, stateInput: simpleStateInput } = useAudioRive('Simple');
  
  // 用於解鎖音訊 context 的靜音音訊元素
  const silentAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // 創建一個很短的靜音音訊檔案 (data URL)
    const silentAudioDataUrl = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTqv6fCVRwv6LMHs3peEQAcHjE6I7tCNODh0zNztJm1CUObjvJmg4jlSJRuq+lxqNxTj5L6Wl4dxcR3kGIz0gV4TZJ29rKacrM6FzxFn6UJJMHXM1+uBbEBU4t6mjKdVw2Uqz9SzYsUlJj9v1tqTYkcObJ3dBLRGMLqBpN7LoOvMYkIjAcL2OoKFv1DiwNKi54RfDCZgIGGPSVYpFl7Tpae9q1tCNDc4vb7L5CXS2tppRSTDq9Rb';
    
    if (silentAudioRef.current) {
      silentAudioRef.current.src = silentAudioDataUrl;
      silentAudioRef.current.volume = 0;
      silentAudioRef.current.preload = 'auto';
    }
  }, []);

  // 解鎖音訊 context 的函數
  const unlockAudioContext = async () => {
    if (audioContextUnlocked || !isMobile()) return;
    
    try {
      if (silentAudioRef.current) {
        await silentAudioRef.current.play();
        silentAudioRef.current.pause();
        silentAudioRef.current.currentTime = 0;
        audioContextUnlocked = true;
        console.log('音訊 context 已解鎖');
        
        // 發送音訊解鎖事件
        window.dispatchEvent(new CustomEvent('audioContextUnlocked'));
      }
    } catch (error) {
      console.log('音訊 context 解鎖失敗:', error);
    }
  };

  const handleToggle = async () => {
    // 在行動裝置上，先嘗試解鎖音訊 context
    if (isMobile() && !audioContextUnlocked) {
      await unlockAudioContext();
    }
    
    globalAudioEnabled = !globalAudioEnabled;

    window.dispatchEvent(new CustomEvent('audioToggle', {
      detail: { enabled: globalAudioEnabled, isMobile: isMobile() }
    }));

    [fullStateInput, simpleStateInput].forEach(input => {
      input && (input.value = globalAudioEnabled);
    });
  };

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.audio-handler-full',
      start: '+=550 bottom',
      end: '+=550 bottom',
      markers: markers,
      id: 'audio-handler-full',
      onEnter: () => {
        gsap.to('.audio-handler-simple', {
          opacity: 1,
          duration: 0.5,
          pointerEvents: 'auto',
        });
        gsap.to('.audio-handler-full', {
          opacity: 0,
          duration: 0.5,
          pointerEvents: 'none',
        });
      },
      
      onLeaveBack: () => {
        gsap.to('.audio-handler-simple', {
          opacity: 0,
          duration: 0.5,
          pointerEvents: 'none',
        });
        gsap.to('.audio-handler-full', {
          opacity: 1,
          duration: 0.5,
          pointerEvents: 'auto',
        });
      },
    });
  }, []);

  return (
    <>
      {/* 靜音音訊元素用於解鎖 context */}
      <audio ref={silentAudioRef} style={{ display: 'none' }} />
      
      <div className="audio-handler-full">
        <p className="draggable-instruction">以下多媒體物件可自由拖曳，輔助閱讀</p>
        <p className="audio-instruction">本文含聲音敘事，開啟聲音以獲得完整閱讀體驗</p>
        <div onClick={handleToggle} style={{ cursor: 'pointer', width: '104px', height: '36px' }}>
          <FullRiveComponent />
        </div>
      </div>

      {createPortal(
        <div className="audio-handler-simple">
          <div onClick={handleToggle} style={{ cursor: 'pointer', width: '60px', height: '20px' }}>
            <SimpleRiveComponent />
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
