import { useRef, forwardRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { Caption } from '../text/Caption';

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
        pinSpacing: false,
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
      <Caption category="normal" startAt={2}>
        因為才剛受到資遣，還不確定接下來的收入來源，Ｈ小姐有意申請一筆貸款作為緊急預備金。
      </Caption>
      <Caption category="normal" startAt={3.5}>
        從未申請過銀行貸款的 Ｈ小姐，在訊息中再三與對方確認身份，卻沒有得到正面答覆。
      </Caption>
      <Caption category="normal" startAt={5.5}>
        直到資料全部繳交後，對方才回覆，自己是協助辦理裕富、中租、和潤等融資公司的代辦公司。
      </Caption>

      <Caption category="normal" startAt={7}>
        蕭小姐是和裕富融資公司申請貸款，並由尼亞斯公司代辦，必須額外收取一筆代辦費。(1)(2)
      </Caption>
      <Caption category="normal" startAt={7.2} style={{ top: '35vh' }}>
        而雖然貸款金額為25萬，實際撥款金額是以申辦單位（裕富融資）核貸為準。
      </Caption>
      <Caption category="normal" startAt={9} style={{ top: '50vh' }}>
        扣除手續費與代辦費用，蕭小姐最後實拿約202,985 元，每月需繳納7,075元還款，持續42期。實際負債金額為297,150元。
      </Caption>
      <Caption category="normal" startAt={10} style={{ top: '65vh' }}>
        經報導者試算還款利率，本筆借貸利率為23.8%，高於融資公司設定的16%。
      </Caption>

      <Caption category="normal" startAt={11.3}>
        遭裁員後的這段時間，Ｈ小姐因身體不好，時常需至醫院就診，因此選擇排班式的櫃檯兼職工作。
      </Caption>
      <Caption category="normal" startAt={11.5} style={{ top: '35vh' }}>
        每個月不穩定的薪水，必須負擔生活費、醫療費以及債務，Ｈ小姐十分積極每月穩定還款，但生活的壓力越來越大......
      </Caption>
      <Caption category="normal" startAt={13.5} style={{ top: '35vh' }}>
        2022年11月，裕富融資主動來電，邀請Ｈ小姐再申請第二筆15萬元的小額貸款。
      </Caption>

      <Caption category="normal" startAt={15}>
        然而，15萬小家電貸款，並沒有實際減輕第一筆債務的負擔。
      </Caption>
      <Caption category="normal" startAt={15.5} style={{ top: '35vh' }}>
        Ｈ小姐每月需還款4,680元，為期42個月，除了多累積196,560元的債務。<br />
        反而每月同時需支付7,075元與4,680元的兩筆還款款項。
      </Caption>
      <Caption category="normal" startAt={18}>
        蕭小姐決定申請第三筆35萬貸款，希望減輕前述債務壓力。
      </Caption>
      <Caption category="normal" startAt={19}>
        沒想到，以第三筆貸款還清第一筆債務，最後Ｈ小姐實拿 53075 元。第三筆負債金額來到 49 萬，加上第二筆貸款，總負債金額來到 67 萬......
      </Caption>
      <Caption category="normal" startAt={20.5}>
        而借大還小之後，Ｈ小姐第三筆實際的還款利率高達 36%，更是高於原本直接還第一筆的 23.8%。
      </Caption>

      {/* Mickey */}
      <Caption category="normal" startAt={25}>
      5/9米奇初次與王道代辦規劃顧問何小姐通話，諮詢「債務整合」與「現金週轉」兩項服務，何小姐表示可同時協助辦理，並傳簽約系統請米奇先簽署委託書合約。
      </Caption>
      <Caption category="normal" startAt={26.5}>
      米奇先透過王道代辦協助「現金週轉」，和「中租融資」申請10萬元汽機車貸款。
      </Caption>
      <Caption category="normal" startAt={27.5}>
      簽約完成後，轉介另一位理財專員鍾先生聯繫，協助米奇處理後續事宜。
      </Caption>
      <Caption category="normal" startAt={31.5}>
      由於第一筆現金週轉不如預期，也讓米奇開始擔心，債務整合的服務費金額。
      </Caption>
      <Caption category="normal" startAt={32.7}>
      5/20電話中，理財專員回覆，米奇申請整合73萬債務，需要收取15%，近11萬的服務費，並強迫米奇必須轉帳這筆服務費。
      </Caption>
      <Caption category="normal" startAt={34}>
      為了支付服務費，讓債務能順利協商，專員表示能再替米奇辦理一筆小額借款，5/20米奇透過王道代辦再向「第一國際」申請一筆10萬元的手機貸款。
      </Caption>
      <Caption category="normal" startAt={34.8}>
      5/22貸款金額匯出後，王道便要求米奇將所有貸款金額，匯出作為服務費。
      </Caption>
      <Caption category="normal" startAt={36}>
      2024/8/27米奇接到銀行打來的協商電話，原本76萬總債務，需每月繳納10,586元，為期12年，她的總債務金額將來到127萬320元。
      </Caption>
      <Caption category="normal" startAt={40}>
      </Caption>
    </div>
  );
});