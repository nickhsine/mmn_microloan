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
      const stayFor = caption.dataset.stay || '0.15';
      // const stayFor = caption.dataset.stay || '0.1';

      const randomRotate = Math.random() * 10 - 5;

      tl.fromTo(
        caption,
        { autoAlpha: 0, y: 10, rotate: 0 },
        { autoAlpha: 1, y: 0, rotate: randomRotate, duration: 0.25, ease: 'power2.out' },
        startAt
      )
        .fromTo(
        caption,
        { autoAlpha: 1, y: 0, rotate: randomRotate },
        { autoAlpha: 0, y: -10, rotate: 0 , duration: 0.25, ease: 'power2.in' },
        `>+${stayFor}`
      );
    });
  }, { scope: containerRef });

  return (
    <div className="caption-container" ref={containerRef}>
      <Caption category="normal" startAt={6.85} style={{ top: '70vh', left: '80vw' }}>
        從未申請過銀行貸款的Ｈ小姐，在訊息中再三與對方確認身份，卻沒有得到正面答覆。直到資料全部繳交後，對方才回覆，自己是協助辦理貸款的代辦公司。
      </Caption>
      <Caption category="normal" startAt={8.3}>
        蕭小姐是和裕富資融股份有限公司申請貸款，並由尼亞斯國際有限公司代辦，必須額外收取一筆代辦費。
      </Caption>
      <Caption category="normal" startAt={8.6} style={{ top: '35vh' }}>
        而雖然貸款金額為25萬，實際撥款金額是以申辦單位（裕富資融）核貸為準。
      </Caption>
      <Caption category="normal" startAt={12} style={{ top: '50vh' }}>
        扣除手續費與代辦費用，蕭小姐最後實拿約20萬3,985元。
      </Caption>
      <Caption category="normal" startAt={13.2} style={{ top: '65vh' }}>
        每期繳納7,075元還款（共48期），實際負債金額為33萬9,600元。經《報導者》試算還款利率，本筆借貸利率為31.4%，高於民法上限融資公司設定的16%。
      </Caption>

      <Caption category="normal" startAt={13.6}>
        Ｈ小姐因身體不好，選擇排班兼職工作。每月不穩定的薪水，必須負擔生活費、醫療費以及債務，即是十分積極每月穩定還款，但生活的壓力越來越大......
      </Caption>
      <Caption category="normal" startAt={17}>
        蕭小姐決定申請新一筆35萬貸款，希望減輕前述債務壓力。
      </Caption>
      <Caption category="normal" startAt={18.8}>
        然而，申請一筆新貸款，需重新承擔內扣與手續費用；提前清償債務，更有違約金的產生。35萬元的貸款，Ｈ小姐最後僅實拿53,075元，卻完全不知道衍生費用的確切金額。
      </Caption>
      <Caption category="normal" startAt={19.5}>
       每月還款金額提升至9,100元，長達54期，總債務來到49萬1,400元。
      </Caption>
      <Caption category="normal" startAt={20}>
        借大還小之後，經《報導者》還原試算此筆利率高達36.1%，更是高於原先31.4%利率。
      </Caption>

      {/* Mickey */}
      <Caption category="normal" startAt={25.5}>
      去年（2024）5月，是米奇第一次在上網搜尋「債務整合」尋求協助。
      </Caption>
      <Caption category="normal" startAt={25.8}>
      而「王道國際理財顧問」債務整合廣告，讓她誤以為與目前原債務銀行「王道銀行」同公司，便申請免費諮詢。
      </Caption>
      <Caption category="normal" startAt={27.2}>
      米奇同時諮詢「債務整合」與「現金周轉」兩項服務，規劃顧問表示可同時協助辦理，並傳簽約系統請米奇先簽署委託書合約。
      </Caption>
      <Caption category="normal" startAt={27.7}>
      簽約完成後，轉介另一位理財專員，協助處理後續事宜。
      </Caption>
      <Caption category="normal" startAt={29.2}>
      米奇先透過王道國際協助「現金周轉」，和中租旗下的「合迪股份有限公司」申請10萬元汽機車貸款。
      </Caption>
      <Caption category="normal" startAt={32}>
      由於10萬元現金周轉衍生高額的服務費用，也讓米奇開始擔心，債務整合的服務費金額。
      </Caption>
      <Caption category="normal" startAt={33.5}>
      米奇申請的債務整合服務，需要收取15%，近11萬元服務費......
      </Caption>
      <Caption category="normal" startAt={34}>
      為了讓債務能順利協商，專員表示能再替米奇辦理一筆貸款支付服務費。
      </Caption>
      <Caption category="normal" startAt={34.2} stayFor={1} style={{ left: '30vw', top: '20vh' }}>
      米奇向第一國際申請10萬元手機貸款
      </Caption>
      <Caption category="normal" startAt={34.3} stayFor={1} style={{ left: '30vw', top: '30vh' }}>
      內扣手續費15,350元後
      </Caption>
      <Caption category="normal" startAt={34.4} stayFor={1} style={{ left: '30vw', top: '40vh' }}>
      實際核發84,470元
      </Caption>
       <Caption category="normal" startAt={34.5} stayFor={1} style={{ left: '30vw', top: '50vh' }}>
      被王道國際要求全數匯出作為服務費
      </Caption>
      <Caption category="normal" startAt={34.6} stayFor={1} style={{ left: '30vw', top: '60vh' }}>
      債務整合尚未開始，又新增一筆13萬635元債務
      </Caption>
      <Caption category="normal" startAt={35.1} style={{ left: '70vw', top: '70vh' }}>
      三個月後......
      </Caption>
      <Caption category="normal" startAt={40}>
      </Caption>
    </div>
  );
});