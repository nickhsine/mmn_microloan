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
        // end: () => `+=${captions.length * 400}`, // 每句 400px 捲動距離，可視情況調整
        scrub: true,
        pin: true,
        markers: true, // 若需除錯可打開
        id: 'caption-container',
      },
    });

    // 將 timeline 暴露給父層 (可選)
    if (ref && typeof ref !== 'function') {
      ref.current = tl;
    }

    captions.forEach((caption) => {
      const startAt = caption.dataset.start || '0';
      const stayFor = caption.dataset.stay || '0.5';

      tl.fromTo(
        caption,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        startAt
      )
        .fromTo(
        caption,
        { autoAlpha: 1, y: 0, },
        { autoAlpha: 0, y: -10, duration: 0.5, ease: 'power2.in' },
        `>+${stayFor}`
      );
    });
  }, { scope: containerRef });

  return (
    <div className="caption-container" ref={containerRef}>
      <Caption category="normal" startAt={0} stayFor={2}>
        2022年，疫情時遭裁員的Ｈ小姐，因身體不佳，需定期支付龐大的醫藥費。眼看生活費即將見底，原本以為是和銀行貸款，沒想到卻捲入無盡的債務漩渦......
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        2022年4月，一通自稱「台新銀行」的電話打進來，對方說她符合貸款資格，只需準備雙證件與基本資料，就能申請貸款。
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        急需用錢的Ｈ小姐，隨即答應接受核定。
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        但因從未向銀行借款，Ｈ小姐也在訊息中再三與對方確認身份，卻沒有得到正面答覆。
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        貸款核定通過後，對保員與Ｈ小姐約在便利商店簽約，卻發現捎來眼前的合約不是台新銀行，而是「裕富融資」。
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        而合約文件中，寫著委託人以購買汽機車名義申請貸款，實際上Ｈ小姐並沒有任何汽機車，甚至連駕照都沒有。
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        蕭小姐是和裕富融資公司申請貸款，並由尼亞斯公司代辦，必須額外收取一筆代辦費。
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        扣除手續費與代辦費用，蕭小姐最後實拿約 202985 元，每月需繳納 7075 元還款，持續42期。實際負債金額為 297150 元。
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        遭裁員後的這段時間，Ｈ小姐因身體不好，時常需至醫院就診，因此選擇排班式的櫃檯兼職工作。
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        每個月不穩定（15k-22k）的薪水，必須負擔生活費、醫療費以及債務。即使勉強都能支付，但生活的壓力越來越大......
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        2023年2月，裕富融資來電，說明因蕭小姐「還款狀況正常」，邀請她進行「增貸」。
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        增貸不僅能用 35 萬元貸款償還提前還清 25 萬元債務，進行「借新還舊」，以新一筆貸款，提前償還過去債務。不僅可以讓壓力變小，還可以提升自己的信用。
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        蕭小姐決定申請第三筆 35 萬貸款，希望減輕前述債務壓力。
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        沒想到，總負債金額來到 49 萬，每個月需償還金額，從 7051元增加到 9100元。債務就這樣越陷越深......
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        「一開始不會去算利息多高，只知道一期要還多少錢，當下不會認真去算，越到後來繳不完時才會去想，自己到底付了多少錢？」
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        2024/5/8，是米奇第一次在上網搜尋「債務整合」尋求協助。當時在 Facebook 滑到「王道投顧」代辦公司的債務整合廣告，誤以為與她原債務銀行「王道銀行」同公司，便選擇此債務整合服務。
      </Caption>
      <Caption category="normal" startAt={'>1'}>
        她立刻點進網站，輸入自己的個人資料，申請「免費諮詢」。
      </Caption>
    </div>
  );
});