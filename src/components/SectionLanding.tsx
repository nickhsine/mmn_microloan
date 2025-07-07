import { forwardRef, useRef } from 'react';
import { Title } from './text/Title';
import { Brief } from './text/Brief';
import { AudioHandler } from './utility/AudioHandler';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AddEndTL, AddStartTL, safeGsapSet, safeGsapTo, RefFromTo, TimelineHandle } from './utility/TimelineHandle';

export const SectionLanding = forwardRef<gsap.core.Timeline>((_, ref) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<TimelineHandle | null>(null);
  const briefRefD = useRef<TimelineHandle | null>(null);
  const briefRefL = useRef<TimelineHandle | null>(null);

  const globalmarks = false;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const landingTL = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom center',
        scrub: 1,
        pin: sectionRef.current,
        markers: globalmarks,
      },
    });

    safeGsapSet(briefRefL.current, { y: '-90vh', rotate: -15 });

    AddStartTL(landingTL, briefRefD.current, 0.5);
    AddEndTL(landingTL, titleRef.current, '>');

    safeGsapTo(landingTL, briefRefL.current, { 
      y: '0vh', rotate: 1.5, duration: 2, ease: 'power1.out' 
    }, '>3');
    safeGsapTo(landingTL, briefRefD.current, { 
      color: 'var(--color-gray-800)', duration: 1, ease: 'power1.out' 
    }, '<');

    safeGsapTo(landingTL, briefRefD.current,{ 
      filter: 'blur(20px)', opacity: 0, duration: 2, ease: 'power1.out' 
    }, '>3');
    safeGsapTo(landingTL, briefRefL.current, { 
      filter: 'blur(20px)', opacity: 0, duration: 2, ease: 'power1.out' 
    }, '<');
    

    if (ref && typeof ref !== 'function') {
      ref.current = landingTL;
    }
  }, []);

  return (
    <section className="section-landing" ref={sectionRef}>
      <Title ref={titleRef} />
      <AudioHandler markers={globalmarks} />
      <Brief ref={briefRefD} type="dark">
        <p>一通電話，如何開啟無止盡的債務旅程？</p>
        <p>以下兩位債務人——Ｈ小姐與米奇的真實故事。她們原初以為自己是向銀行借款，簽的是正規合約，沒想到從這一刻起，自己便被捲入一場場層層堆疊與分包的融資產業鍊。</p>
        <p>根據金管會規定，小額貸款利率不得超過年利率 16%；然而在實際操作中，多重經銷衍伸而成的代辦費、手續費、對保費等，讓最終的還款總額遠超借款本金，換算下來，實際負擔的利率往往落在 30% 至 40%。</p>
        <p>即使留有通話紀錄、LINE 訊息與紙本合約，債務人仍可能在高度分工、資訊破碎的借貸系統中迷失方向，難以看清整個借貸流程的全貌。</p>
      </Brief>
      <Brief ref={briefRefL} type="light">
        <p>2022年，疫情時遭裁員的Ｈ小姐，因身體不佳，需定期支付龐大的醫藥費。眼看生活費即將見底，原本以為是和銀行貸款，沒想到卻捲入無盡的債務漩渦......</p>
      </Brief>
    </section>
  );
});
