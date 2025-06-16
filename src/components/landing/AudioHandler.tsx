import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRive, useStateMachineInput } from '@rive-app/react-webgl2';

gsap.registerPlugin(ScrollTrigger);

export let globalAudioEnabled = false;

const useAudioRive = (artboard: string) => {
  const { RiveComponent, rive } = useRive({
    src: '/assets/rive/shared-audiohandler.riv',
    stateMachines: 'State Machine 1',
    artboard,
    autoplay: true,
    autoBind: true,
  });

  const stateInput = useStateMachineInput(rive, 'State Machine 1', 'State');
  
  return { RiveComponent, stateInput };
};

export const AudioHandler = () => {
  const { RiveComponent: FullRiveComponent, stateInput: fullStateInput } = useAudioRive('Full');
  const { RiveComponent: SimpleRiveComponent, stateInput: simpleStateInput } = useAudioRive('Simple');

  const handleToggle = () => {
    globalAudioEnabled = !globalAudioEnabled;
    
    window.dispatchEvent(new CustomEvent('audioToggle'));
    
    [fullStateInput, simpleStateInput].forEach(input => {
      input && (input.value = globalAudioEnabled);
    });
  };

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.audio-handler-full',
      start: 'bottom top',
      onEnter: () => {
        gsap.to('.audio-handler-simple', { 
          opacity: 1, duration: 0.5, pointerEvents: 'auto' 
        });
      },
      onLeaveBack: () => {
        gsap.to('.audio-handler-simple', {
          opacity: 0, duration: 0.5, pointerEvents: 'none'
        });
      },
    });
  }, []);

  return (
    <>
      <div className='audio-handler-full'>
        <p>本文含聲音敘事，開啟聲音以獲得完整閱讀體驗</p>
        <div 
          onClick={handleToggle} 
          style={{ cursor: 'pointer', width: '104px', height: '36px' }}
        >
          <FullRiveComponent />
        </div>
      </div>
      
      {createPortal(
        <div className='audio-handler-simple'>
          <div 
            onClick={handleToggle} 
            style={{ cursor: 'pointer', width: '60px', height: '20px' }}
          >
            <SimpleRiveComponent />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}; 