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

const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth <= 768 || 'ontouchstart' in window;

const useAudioRive = (artboard: string) => {
  const { RiveComponent, rive } = useRive({
    src: 'https://storytelling-storage.twreporter.org/files/audiohandler-u5x111bYDH2P.riv',
    stateMachines: 'State Machine 1',
    artboard,
    autoplay: true,
    autoBind: true,
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
    if (globalAudioEnabled) {
      window.dispatchEvent(new Event('audioUnlock'));
    }

    const setInputValue = (input: typeof fullStateInput | typeof simpleStateInput | null) => {
      if (input) {
        input.value = globalAudioEnabled;
      }
    };

    setInputValue(fullStateInput);

    setTimeout(() => setInputValue(simpleStateInput), 50);

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
