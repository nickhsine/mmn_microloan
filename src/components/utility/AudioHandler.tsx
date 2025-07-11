import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRive, useStateMachineInput } from '@rive-app/react-webgl2';

gsap.registerPlugin(ScrollTrigger);

interface AudioHandlerProps {
  markers?: boolean;
}

export let globalAudioEnabled = false;

// 簡易行動裝置偵測，用來決定是否啟用 Rive 的 autoBind（桌機保留 Hover 效果，手機避免卡在 Hover 狀態）
const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth <= 768 || 'ontouchstart' in window;

const useAudioRive = (artboard: string) => {
  const { RiveComponent, rive } = useRive({
    src: './assets/rive/shared-audiohandler.riv',
    stateMachines: 'State Machine 1',
    artboard,
    autoplay: true,
    autoBind: true,
    // 行動裝置停用 Rive Listeners（hover / pointer）以避免 hover 卡住
    shouldDisableRiveListeners: isMobile(),
  });

  const stateInput = useStateMachineInput(rive, 'State Machine 1', 'State');

  return { RiveComponent, stateInput, rive };
};

export const AudioHandler = ({ markers }: AudioHandlerProps) => {
  const { RiveComponent: FullRiveComponent, stateInput: fullStateInput, rive: fullRive } = useAudioRive('Full');
  const { RiveComponent: SimpleRiveComponent, stateInput: simpleStateInput, rive: simpleRive } = useAudioRive('Simple');

  const handleToggle = () => {
    globalAudioEnabled = !globalAudioEnabled;

    window.dispatchEvent(new CustomEvent('audioToggle'));

    const setInputValue = (input: typeof fullStateInput | typeof simpleStateInput | null) => {
      if (input) {
        input.value = globalAudioEnabled;
      }
    };

    setInputValue(fullStateInput);

    // Simple Rive 可能尚未載入完畢，延遲嘗試一次確保狀態同步
    setTimeout(() => setInputValue(simpleStateInput), 50);

    // 行動裝置已停用 Rive Listeners，上述 hover 卡住問題已排除
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
