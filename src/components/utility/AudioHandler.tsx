import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface AudioHandlerProps {
  markers?: boolean;
}

export let globalAudioEnabled = false;

export const AudioHandler = ({ markers }: AudioHandlerProps) => {
  const [audioEnabled, setAudioEnabled] = useState(globalAudioEnabled);

  const handleToggle = () => {
    const newValue = !globalAudioEnabled;
    globalAudioEnabled = newValue;
    setAudioEnabled(newValue);

    window.dispatchEvent(new CustomEvent('audioToggle'));
    if (globalAudioEnabled) {
      window.dispatchEvent(new Event('audioUnlock'));
    }
  };

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.audio-handler-full',
      start: '+=550 center',
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
        <button
          className={`audio-handler-button audio-handler-full-button ${audioEnabled ? 'on' : 'off'}`}
          onClick={handleToggle}
          aria-label={audioEnabled ? '關閉聲音 audioToggleOff' : '開啟聲音 audioToggleOn'}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 42 43"
            xmlns="http://www.w3.org/2000/svg"
            className={`audio-logo ${audioEnabled ? 'on' : ''}`}
            aria-hidden="true"
          >
            <g clipPath="url(#clip0)">
              <path
                id="LogoRight"
                className="logo-right"
                d="M26.252 10.9328L42.0005 6.84521V36.2L26.252 32.0677V10.9328Z"
              />
              <path
                id="LogoLeft"
                className="logo-left"
                d="M0 0L26.2514 10.9326V32.0674L0 43V0Z"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="42" height="43" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {audioEnabled ? ' 已開啟聲音' : ' 點擊開聲音'}
        </button>
      </div>

      {createPortal(
        <div className="audio-handler-simple" style={{ zIndex: 600 }}>
          <button
            className={`audio-handler-button audio-handler-simple-button ${audioEnabled ? 'on' : 'off'}`}
            onClick={handleToggle}
            aria-label={audioEnabled ? '關閉聲音 audioToggleOff' : '開啟聲音 audioToggleOn'}
          >
            <svg
               width="16"
               height="16"
               viewBox="0 0 42 43"
               xmlns="http://www.w3.org/2000/svg"
               className={`audio-logo ${audioEnabled ? 'on' : ''}`}
               aria-hidden="true"
             >
               <g clipPath="url(#clip0simple)">
                 <path id="LogoRight" className="logo-right" d="M26.252 10.9328L42.0005 6.84521V36.2L26.252 32.0677V10.9328Z" />
                 <path id="LogoLeft" className="logo-left" d="M0 0L26.2514 10.9326V32.0674L0 43V0Z" />
               </g>
               <defs>
                 <clipPath id="clip0simple">
                   <rect width="42" height="43" fill="white" />
                 </clipPath>
               </defs>
             </svg>
          </button>
        </div>,
        document.body
      )}
    </>
  );
};
