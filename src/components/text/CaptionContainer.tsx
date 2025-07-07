import { useRef, forwardRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { Caption } from './Caption';

export const CaptionContainer = forwardRef<gsap.core.Timeline>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const captions = gsap.utils.toArray<HTMLParagraphElement>('.caption', containerRef.current);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom center',
        scrub: true,
        pin: true,
      },
    });

    if (ref && typeof ref !== 'function') {
      ref.current = tl;
    }

    captions.forEach((caption) => {
      const startAt = caption.dataset.start || '0';
      const stayFor = '0.15';
      // const stayFor = caption.dataset.stay || '0.1';

      const randomRotate = Math.random() * 10 - 5;

      tl.fromTo(
        caption,
        { autoAlpha: 0, y: 10, rotate: 0 },
        { autoAlpha: 1, y: 0, rotate: randomRotate, duration: 0.2, ease: 'power2.out' },
        startAt
      )
        .fromTo(
        caption,
        { autoAlpha: 1, y: 0, rotate: randomRotate },
        { autoAlpha: 0, y: -10, rotate: 0 , duration: 0.1, ease: 'power2.in' },
        `>+${stayFor}`
      );
    });
  }, { scope: containerRef });

  return (
    <div className="caption-container" ref={containerRef}>
      <Caption category="normal" startAt={2}>
        因為才剛受到資遣，還不確定接下來的收入來源，Ｈ小姐有意申請一筆貸款作為緊急預備金。
      </Caption>
      <Caption category="normal" startAt={3.1}>
        從未申請過銀行貸款的 Ｈ小姐，在訊息中再三與對方確認身份，卻沒有得到正面答覆。
      </Caption>
      <Caption category="normal" startAt={4}>
        直到資料全部繳交後，對方才回覆，自己是協助辦理裕富、中租、和潤等融資公司的代辦公司。
      </Caption>

      <Caption category="normal" startAt={8}>
        蕭小姐是和裕富融資公司申請貸款，並由尼亞斯公司代辦，必須額外收取一筆代辦費。(1)(2)
      </Caption>
      <Caption category="normal" startAt={7} style={{ top: '35vh' }}>
        而雖然貸款金額為25萬，實際撥款金額是以申辦單位（裕富融資）核貸為準。
      </Caption>
      <Caption category="normal" startAt={8} style={{ top: '50vh' }}>
        扣除手續費與代辦費用，蕭小姐最後實拿約202,985 元，每月需繳納7,075元還款，持續42期。實際負債金額為297,150元。
      </Caption>
      <Caption category="normal" startAt={10} style={{ top: '65vh' }}>
        經報導者試算還款利率，本筆借貸利率為23.8%，高於融資公司設定的16%。
      </Caption>

      <Caption category="normal" startAt={15}>
        遭裁員後的這段時間，Ｈ小姐因身體不好，時常需至醫院就診，因此選擇排班式的櫃檯兼職工作。
      </Caption>
      <Caption category="normal" startAt={17} style={{ top: '35vh' }}>
        每個月不穩定的薪水，必須負擔生活費、醫療費以及債務，Ｈ小姐十分積極每月穩定還款，但生活的壓力越來越大......
      </Caption>

      <Caption category="normal" startAt={20}>
        然而，15萬小家電貸款，並沒有實際減輕第一筆債務的負擔。
      </Caption>
      <Caption category="normal" startAt={25}>
        Ｈ小姐每月需還款 4680 元，為期 42 個月，除了多累積 196,560 元的債務。<br />
        反而每月同時需支付 7075 元與 4680 元的兩筆還款款項。
      </Caption>
      
      <Caption category="normal" startAt={28}>
        蕭小姐決定申請第三筆 35 萬貸款，希望減輕前述債務壓力。
      </Caption>
      <Caption category="normal" startAt={30}>
        沒想到，以第三筆貸款還清第一筆債務，最後Ｈ小姐實拿 53075 元。第三筆負債金額來到 49 萬，加上第二筆貸款，總負債金額來到 67 萬......
      </Caption>
      <Caption category="normal" startAt={34}>
        而借大還小之後，Ｈ小姐第三筆實際的還款利率高達 36%，更是高於原本直接還第一筆的 23.8%。
      </Caption>
      <Caption category="normal" startAt={35}>
        她立刻點進網站，輸入自己的個人資料，申請「免費諮詢」。
      </Caption>

      <Caption category="normal" startAt={38}>
        米奇因不滿意王道代辦的協商結果，希望要回8萬元代辦費，但被專員拒絕。
      </Caption>
      <Caption category="normal" startAt={40}>
      </Caption>
    </div>
  );
});