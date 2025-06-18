import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRive, useStateMachineInput } from '@rive-app/react-webgl2';

gsap.registerPlugin(ScrollTrigger);

export const MisshCharacter = () => {
  const { rive, RiveComponent } = useRive({
    src: './assets/rive/scene-missh.riv',
    artboard: 'MissH',
    stateMachines: 'State Machine 1',
    autoplay: true,
    useOffscreenRenderer: true,
  });

  const walkSpeedSelf = useStateMachineInput(rive, 'State Machine 1', 'WalkSpeed');
  const misshRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const vw = (coef: number) => window.innerWidth * (coef/100);

  useGSAP(() => {
    if (!rive || !walkSpeedSelf) return;

    // 設定初始狀態
    gsap.set(misshRef.current, { x: vw(-40) });
    gsap.set(walkSpeedSelf, { value: 0 });

    ScrollTrigger.create({
      trigger: misshRef.current,
      start: 'top 100%',
      end: 'bottom 0%',
      pin: true,
      scrub: 1,
      animation: gsap.to(misshRef.current, { x: vw(50) }),
      markers: false,
      id: 'missh-character',
      onUpdate: () => {
        // 滾動時設置行走狀態
        if (!isScrolling.current) {
          isScrolling.current = true;
          gsap.to(walkSpeedSelf, { value: 100, duration: 1});
        }
        
        // 使用 debounce 檢測滾動停止
        gsap.delayedCall(0.1, () => {
          isScrolling.current = false;
          gsap.to(walkSpeedSelf, { value: 0, duration: 5});
        });
      },
      onToggle: (self) => {
        if (!self.isActive) {
          // 離開觸發區域時停止行走
          isScrolling.current = false;
          gsap.to(walkSpeedSelf, { value: 0, duration: 1});
        }
      },
    });
  }, { dependencies: [rive, walkSpeedSelf] });

  return (
    <div className="missh-character" ref={misshRef}>
      <RiveComponent className="missh-character-rive"/>
    </div>
  );
}; 