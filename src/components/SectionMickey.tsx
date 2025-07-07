import { forwardRef, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TimelineHandle, RefFromTo, AddStartTL, AddEndTL, AddNoScrubTL } from './utility/TimelineHandle';

import { Phone } from './phone/Phone';
import { PhoneCall } from './phone/PhoneCall';
import { Dialogs } from './phone/Dialogs';
import { Notification } from './phone/Notification';
import { MessagesApp } from './phone/MessagesApp';
import { Messages } from './phone/Messages';
import { PhoneStatic } from './phone/PhoneStatic';
import { Brief } from './text/Brief';
import { Telepromter } from './utility/Telepromter';
import { Calculator } from './calculator/Calculator';
import { Update } from './calculator/Update';
import { Details } from './calculator/Details';
import { Contract } from './document/Contract';

export const SectionMickey = forwardRef<gsap.core.Timeline>((_, ref) => {
  const globalmarks = false;
  const messageAvatarImg_1 = './assets/img/avatar_A.svg';
  const messageAvatarImg_2 = './assets/img/avatar_A.svg';

  const sectionRef = useRef<HTMLElement | null>(null);
  const briefRefD = useRef<TimelineHandle | null>(null);
  const briefRefL = useRef<TimelineHandle | null>(null);
  const briefRefD_2 = useRef<TimelineHandle | null>(null);
  const briefRefL_2 = useRef<TimelineHandle | null>(null);
  const contractARef = useRef<TimelineHandle | null>(null);

  const phoneRef = useRef<TimelineHandle | null>(null);
  const phoneStaticRef_1 = useRef<TimelineHandle | null>(null);
  const phoneStaticRef_2 = useRef<TimelineHandle | null>(null);
  const phoneCallRef = useRef<TimelineHandle | null>(null);
  const dialogsRef = useRef<TimelineHandle | null>(null);
  const notificationRef_1 = useRef<TimelineHandle | null>(null);
  const notificationRef_2 = useRef<TimelineHandle | null>(null);
  const messagesAppRef_1 = useRef<TimelineHandle | null>(null);
  const messagesRef_1 = useRef<TimelineHandle | null>(null);
  const messagesAppRef_2 = useRef<TimelineHandle | null>(null);
  const messagesRef_2 = useRef<TimelineHandle | null>(null);
  const messagesRef_3 = useRef<TimelineHandle | null>(null);
  const messagesRef_4 = useRef<TimelineHandle | null>(null);
  const messagesRef_5 = useRef<TimelineHandle | null>(null);

  const calculatorRef = useRef<TimelineHandle | null>(null);
  // detailsRef
  const detailsRef_1 = useRef<TimelineHandle | null>(null);
  const detailsRef_2 = useRef<TimelineHandle | null>(null);
  const detailsRef_3 = useRef<TimelineHandle | null>(null);
  const detailsRef_4 = useRef<TimelineHandle | null>(null);
  const detailsRef_5 = useRef<TimelineHandle | null>(null);
  const detailsRef_6 = useRef<TimelineHandle | null>(null);
  const detailsRef_7 = useRef<TimelineHandle | null>(null);
  // highlightRef
  const highlightUpdateRef_1 = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_1T = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_2 = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_2T = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_3 = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_4 = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_5 = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_6 = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_7 = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_8 = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_9T = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_9 = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_10 = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_11 = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_12 = useRef<TimelineHandle | null>(null);
  // resultRef
  const resultRef_1a = useRef<TimelineHandle | null>(null);
  const resultRef_1b = useRef<TimelineHandle | null>(null);
  const resultRef_2a = useRef<TimelineHandle | null>(null);
  const resultRef_2b = useRef<TimelineHandle | null>(null);
  const resultRef_3 = useRef<TimelineHandle | null>(null);
  const resultRef_4 = useRef<TimelineHandle | null>(null);
  const resultRef_5 = useRef<TimelineHandle | null>(null);
  const resultRef_6 = useRef<TimelineHandle | null>(null);
  const resultRef_7 = useRef<TimelineHandle | null>(null);

  const telepromterRef_1 = useRef<TimelineHandle | null>(null);
  const telepromterRef_2 = useRef<TimelineHandle | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mickeyTL = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom center',
        scrub: 1,
        pin: sectionRef.current,
        markers: globalmarks,
      },
    });

    // INITIAL STATE 
    RefFromTo(mickeyTL, phoneRef.current, 
      { x: '50vw', y: '100vh', rotation: 0 }, 
      { x: '50vw', y: '100vh', rotation: 20, duration: 0.5 }, 0
    );
    RefFromTo(mickeyTL, calculatorRef.current, 
      { x: '100vw', y: '100vh', rotation: -10 }, 
      { x: '100vw', y: '100vh', rotation: -10, duration: 0.5 }, 0
    );
    // RefFromTo(mickeyTL, contractARef.current, 
    //   { x: 0, y: '-100vh', rotation: 10 }, 
    //   { x: 0, y: '-100vh', rotation: 10, duration: 0.5 }, 0
    // );
    RefFromTo(mickeyTL, messagesRef_3.current, 
      { display: 'none' }, { display: 'none', duration: 0 }, 0
    );


    // Animation Time Positioning
    AddStartTL(mickeyTL, briefRefD.current, '<');
    AddStartTL(mickeyTL, briefRefL.current, '>2');

    AddStartTL(mickeyTL, telepromterRef_1.current, '>2');
    AddNoScrubTL(mickeyTL, telepromterRef_1.current, '>');
    AddEndTL(mickeyTL, telepromterRef_1.current, '>4');
    
    AddEndTL(mickeyTL, briefRefD.current, '<2');
    AddEndTL(mickeyTL, briefRefL.current, '<');

    RefFromTo(mickeyTL, phoneRef.current, 
      { x: '50vw', y: '100vh', rotation: 20 }, 
      { x: 0, y: 0, rotation: 0, duration: 1 }, 
      '<'
    );
    AddStartTL(mickeyTL, phoneStaticRef_1.current, '>1');
    AddEndTL(mickeyTL, phoneStaticRef_1.current, '>2');
    AddStartTL(mickeyTL, phoneStaticRef_2.current, '>1');
    AddEndTL(mickeyTL, phoneStaticRef_2.current, '>2');

    AddStartTL(mickeyTL, notificationRef_1.current, '<-1');
    AddStartTL(mickeyTL, messagesAppRef_1.current, '>-1');
    AddStartTL(mickeyTL, messagesRef_1.current,  '<1');

    RefFromTo(mickeyTL, contractARef.current, 
      { x: 0, y: '-100vh', rotation: 10 }, 
      { x: 0, y: '5vh', rotation: 3, duration: 2 }, '<'
    );
    // AddStartTL(mickeyTL, contractARef.current, '>');

    AddStartTL(mickeyTL, notificationRef_1.current, '>');
    AddEndTL(mickeyTL, messagesAppRef_1.current, '<1');
    AddEndTL(mickeyTL, messagesRef_1.current, '>1');
    AddStartTL(mickeyTL, messagesAppRef_2.current, '<-1');
    AddStartTL(mickeyTL, messagesRef_2.current,  '<');


    RefFromTo(mickeyTL, calculatorRef.current, 
      { x: '100vw', y: '100vh', rotation: -10 }, 
      { x: 0, y: 0, rotation: 2, duration: 2 }, '>'
    );
    RefFromTo(mickeyTL, phoneRef.current, 
      { x: 0, y: 0, rotation: 0 }, 
      { x: '-30vw', y: '20vh', rotation: 10, duration: 1 }, '<'
    );

    // 1st Calculation
    AddStartTL(mickeyTL, highlightUpdateRef_1.current, '<4');
    AddStartTL(mickeyTL, highlightUpdateRef_1T.current, '<');
    AddStartTL(mickeyTL, resultRef_1a.current, '<');
    AddStartTL(mickeyTL, detailsRef_1.current, '>1');;
    AddEndTL(mickeyTL, highlightUpdateRef_1T.current, '<');
    AddStartTL(mickeyTL, highlightUpdateRef_2T.current, '>-1');

    AddEndTL(mickeyTL, highlightUpdateRef_1.current, '>3');
    AddStartTL(mickeyTL, highlightUpdateRef_2.current, '>-1');
    AddEndTL(mickeyTL, highlightUpdateRef_2.current, '>1.5');
    AddStartTL(mickeyTL, highlightUpdateRef_3.current, '>-1');
    AddEndTL(mickeyTL, highlightUpdateRef_3.current, '>1.5');
    AddStartTL(mickeyTL, highlightUpdateRef_4.current, '>-1');
    
    AddEndTL(mickeyTL, resultRef_1a.current, '>');
    AddStartTL(mickeyTL, resultRef_1b.current, '>');

    RefFromTo(mickeyTL, calculatorRef.current, 
      { x: 0, y: 0, rotation: 2 }, 
      { x: '30vw', y: '10vh', rotation: 5, duration: 2 }, '>2'
    );
    RefFromTo(mickeyTL, phoneRef.current, 
      { x: '-30vw', y: '20vh', rotation: 10 }, 
      { x: 0, y: 0, rotation: 3, duration: 1 }, '<'
    );

    AddEndTL(mickeyTL, messagesRef_2.current, '<-2');
    RefFromTo(mickeyTL, messagesRef_2.current, { display: 'flex' }, { display: 'none', duration: 0 }, '>');
    RefFromTo(mickeyTL, messagesRef_3.current, { display: 'none' }, { display: 'flex', duration: 0 }, '>');
    AddStartTL(mickeyTL, messagesRef_3.current, '<1');

    AddStartTL(mickeyTL, telepromterRef_2.current, '>2');
    AddNoScrubTL(mickeyTL, telepromterRef_2.current, '>');
    AddEndTL(mickeyTL, telepromterRef_2.current, '>4');

    AddEndTL(mickeyTL, messagesRef_3.current, '<-2');
    RefFromTo(mickeyTL, messagesRef_3.current, { display: 'flex' }, { display: 'none', duration: 0 }, '>');
    RefFromTo(mickeyTL, messagesRef_4.current, { display: 'none' }, { display: 'flex', duration: 0 }, '>');
    AddStartTL(mickeyTL, messagesRef_4.current, '<1');

    // 2nd Calculation

    RefFromTo(mickeyTL, calculatorRef.current, 
      { x: '30vw', y: '10vh', rotation: 5 }, 
      { x: 0, y: 0, rotation: 2, duration: 2 }, '>2'
    );
    RefFromTo(mickeyTL, phoneRef.current, 
      { x: 0, y: 0, rotation: 3 }, 
      { x: '-30vw', y: '20vh', rotation: 10, duration: 1 }, '<'
    );
    AddEndTL(mickeyTL, highlightUpdateRef_2T.current, '>');
    AddEndTL(mickeyTL, highlightUpdateRef_4.current, '<');
    AddEndTL(mickeyTL, detailsRef_1.current, '<');
    AddEndTL(mickeyTL, resultRef_1b.current, '<');

    AddStartTL(mickeyTL, highlightUpdateRef_5.current, '<1');
    AddStartTL(mickeyTL, highlightUpdateRef_1T.current, '<');
    AddStartTL(mickeyTL, resultRef_2a.current, '<');
    AddStartTL(mickeyTL, detailsRef_2.current, '>1');;
    AddEndTL(mickeyTL, highlightUpdateRef_1T.current, '<');
    AddStartTL(mickeyTL, highlightUpdateRef_2T.current, '>-1');

    AddEndTL(mickeyTL, highlightUpdateRef_5.current, '>3');
    AddStartTL(mickeyTL, highlightUpdateRef_6.current, '>-1');
    AddEndTL(mickeyTL, highlightUpdateRef_6.current, '>6');
    AddStartTL(mickeyTL, highlightUpdateRef_7.current, '>-1');
    
    AddEndTL(mickeyTL, resultRef_2a.current, '>');
    AddStartTL(mickeyTL, resultRef_2b.current, '>');

    RefFromTo(mickeyTL, calculatorRef.current, 
      { x: 0, y: 0, rotation: 2 }, 
      { x: '30vw', y: '10vh', rotation: 5, duration: 2 }, '>2'
    );
    RefFromTo(mickeyTL, phoneRef.current, 
      { x: '-30vw', y: '20vh', rotation: 10 }, 
      { x: 0, y: 0, rotation: 3, duration: 1 }, '<'
    );

    AddEndTL(mickeyTL, messagesRef_4.current, '<');
    RefFromTo(mickeyTL, messagesRef_4.current, { display: 'flex' }, { display: 'none', duration: 0 }, '>');
    RefFromTo(mickeyTL, messagesRef_5.current, { display: 'none' }, { display: 'flex', duration: 0 }, '>');
    AddStartTL(mickeyTL, messagesRef_5.current, '<1');

    AddStartTL(mickeyTL, briefRefD_2.current, '>');
    AddStartTL(mickeyTL, briefRefL_2.current, '>2');

    if (ref && typeof ref !== 'function') {
      ref.current = mickeyTL;
    }
  }, []);

  return (
    <section className="section-mickey" ref={sectionRef}>
      <Brief ref={briefRefD} type="dark">
        <p>不只Ｈ小姐一人，當面臨資金短缺或債務纏身，許多人都可能陷入「越借越多」的惡性循環。處於高度壓力下的債務人，往往失去冷靜判斷的能力，甚至未充分理解貸款條件與合約內容，就在緊迫的時間壓力中倉促簽約。</p>
        <p>對金融制度與契約知識相對陌生的債務人，亦容易誤解合約中的專有名詞與借貸結構。融資業者與代辦公司則可能利用這樣的脆弱時刻，在正規借款管道無法取得資金時介入，提供表面誘人的方案，實際卻伴隨高額費用與不對等條件，使債務問題進一步惡化。</p>
      </Brief>
      <Brief ref={briefRefL} type="light">
        <p>米奇的故事，揭開另一種常見的債務陷阱。她身上累積了多筆卡債與信貸，將近 80 萬的債務需要還清。身爲業績制工作的美容師，米奇月薪浮動，只能以「最低繳款金額」償還積欠已久信貸與卡債，然而債務卻隨著循環利率越滾越大。</p>
        <p>在收入不穩、壓力不斷的情況下，她每天醒來的第一個念頭就是：「還有哪一筆要繳？」</p>
        <p>債務越滾越大，她開始尋找所謂的「債務整合」，希望能儘早將債務還清、重啟生活。但不知道，等待她的不是出路，而是一道更深的債務陷阱……</p>
      </Brief>
      {/* <Contract ref={contractARef} contract="1B" isHighlight={false} /> */}
      <Calculator ref={calculatorRef}>
        <div className="highlight">
          <Update ref={highlightUpdateRef_1T} type="title">
            <span>貸款金額</span>
          </Update>
          <Update ref={highlightUpdateRef_1} type="number">
            <span>$100,000</span>
          </Update>
          <Update ref={highlightUpdateRef_2T} type="title">
            <span>實拿金額</span>
          </Update>
          <Update ref={highlightUpdateRef_2} type="number">
            <span>$99,970</span>
          </Update>
          <Update ref={highlightUpdateRef_3} type="number">
            <span>$84,970</span>
          </Update>
          <Update ref={highlightUpdateRef_4} type="number">
            <span>$79,470</span>
          </Update>
          <Update ref={highlightUpdateRef_5} type="number">
            <span>$100,000</span>
          </Update>
          <Update ref={highlightUpdateRef_6} type="number">
            <span>$84,400</span>
          </Update>
          <Update ref={highlightUpdateRef_7} type="number">
            <span>$0</span>
          </Update>
        </div>
        <Details ref={detailsRef_1} stagger={3}>
          <div className="content">
            <span className="title">貸款</span>
            <span className="number">$100,000</span>
          </div>
          <div className="content">
            <span className="title">手續費</span>
            <span className="number">-$30</span>
          </div>
          <div className="content">
            <span className="title">代辦費</span>
            <span className="number">-$15,000</span>
          </div>
          <div className="content">
            <span className="title">對保費 ( 3% )</span>
            <span className="number">-$5,500</span>
          </div>
          <div className="content">
            <hr />
          </div>
          <div className="content">
            <span className="title">年利率</span>
            <span className="number">15.8571%</span>
          </div>
        </Details>
        <Details ref={detailsRef_2} stagger={3}>
          <div className="content">
            <span className="title">貸款</span>
            <span className="number">$100,000</span>
          </div>
          <div className="content">
            <span className="title">內扣</span>
            <span className="number">-$15,600</span>
          </div>
          <div className="content">
            <hr />
          </div>
          <div className="content">
            <span className="title">服務費</span>
            <span className="number">-$84,400</span>
          </div>
        </Details>
        <div className="result">
          <span className="title">負債金額</span>
          <Update ref={resultRef_1a} type="number">
            <span>$3,570</span>
            <p>（共36期）</p>
          </Update>
          <Update ref={resultRef_1b} type="number">
            <span>$126,360</span>
          </Update>
          <Update ref={resultRef_2a} type="number">
            <span>$5,439</span>
            <p>（共24期）</p>
          </Update>
          <Update ref={resultRef_2b} type="number">
            <span>$130,536</span>
          </Update>
        </div>
      </Calculator>
      <Phone ref={phoneRef}>
        <PhoneStatic ref={phoneStaticRef_1} src="./assets/img/web_ad_1.avif" />
        <PhoneStatic ref={phoneStaticRef_2} src="./assets/img/web_ad_2.png" />
        <Notification
          ref={notificationRef_1}
          app="Messages"
          title="何小姐（規劃顧問）"
          time="17:30"
          message="您好，我是方才有向您聯繫的何小姐。再請您先將資料補上喔！這邊有為您卡件。"
        ></Notification>
        <MessagesApp ref={messagesAppRef_1} name="何小姐（規劃顧問）">
          <Messages ref={messagesRef_1} stagger={1.5}>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_1} />
              <p>您好，我是方才有向您聯繫的何小姐。再請您先將資料補上喔！這邊有為您卡件。</p>
              <span>17:30</span>
            </div>
            <div className="messageSent">
              <span>17:31</span>
              <p>（傳證件截圖）</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_1} />
              <p>https://crm.worldbank.com.tw/ admin……簽約系統</p>
              <span>17:32</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg_1} />
              <p>這邊是委託書合約，裡面有內容和費用請您確認完沒問題下方都有簽名處。有問題可以詢問我，謝謝您。</p>
              <span>17:32</span>
            </div>
          </Messages>
        </MessagesApp>
        <Notification
          ref={notificationRef_2}
          app="Messages"
          title="鍾先生（理財專員）"
          time="17:30"
          message="您好，我是理財專員鍾先生，協助你處理後續事宜。"
        ></Notification>
        <MessagesApp ref={messagesAppRef_2} name="鍾先生（理財專員）">
          <Messages ref={messagesRef_2} stagger={1.5}>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>您好，我是理財專員鍾先生，協助你處理後續事宜。</p>
              <span>17:42</span>
            </div>
            <div className="messageSent">
              <span>17:40</span>
              <p>想問「債務整合」有機會幫我與銀行協商在 7 年每月付 5000 元嗎？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>我們會盡全力試試看。</p>
              <span>17:42</span>
            </div>
            <div className="messageSent">
              <span>17:40</span>
              <p>過件機率有多大？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>先等我消息喔</p>
              <span>17:42</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg_2} />
              <p>這邊先幫你申請中租機車專案，金額 10 萬分 36 期，照會詢問，就說透過簡訊自行申辦，不可以提到（代辦公司），千萬記得提到會直接退掉。名下信用卡，說只有一張，信貸不要提到。資金用途說購買家具。</p>
              <span>17:42</span>
            </div>

            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg_2} />
              <p>今天會撥款喔，對保費 5500，公司先幫你代墊，等等連同服務費一起匯給我們就好。</p>
              <span>17:42</span>
            </div>
            <div className="messageSent">
              <span>17:40</span>
              <p>好的</p>
            </div>
            <div className="messageSent">
              <span>17:40</span>
              <p>（入帳截圖）</p>
            </div>
            <div className="messageSent">
              <span>17:40</span>
              <p>收到款項了</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg_2} />
              <p>好的，我們公司服務費＋對保費，麻煩等等幫我匯款一下喔。</p>
              <span>17:42</span>
            </div>

            <div className="messageSent">
              <span>17:40</span>
              <p>請問是匯 5500 嗎？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>好的，我們公司服務費＋對保費，麻煩等等幫我匯款一下喔。</p>
              <span>17:42</span>
            </div>
            <div className="messageSent">
              <span>17:40</span>
              <p>你們沒有說服務費是 15000 元啊</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>（小熊問號貼圖）</p>
              <span>17:42</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg_2} />
              <p>當初您跟何小姐簽約時，不是有和您說過我們有服務費嗎？</p>
              <span>17:42</span>
            </div>
          </Messages>
          <Messages ref={messagesRef_3} stagger={1.5}>
            <div className="messageSent">
              <span>17:40</span>
              <p>後續有服務後續有服務費大約是多少，可以先讓我知道嗎？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>先麻煩妳幫我確認，妳目前所有的貸款數字，週一給妳消息。</p>
              <span>17:42</span>
            </div>
            <div className="messageSent">
              <span>17:40</span>
              <p>如果不要辦是不是就不會收服務費？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>（小熊問號）</p>
              <span>17:42</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg_2} />
              <p>您先等我週一和主管開會後再回覆您</p>
              <span>17:42</span>
            </div>
          </Messages>
          <Messages ref={messagesRef_4} stagger={1.5}>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>當初何小姐就有和您說，會有服務費產生。您不處理的話，我們這邊必須聯繫法務。</p>
              <span>17:42</span>
            </div>
            <div className="messageSent">
              <span>17:40</span>
              <p>......</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>這筆服務費，比您名下目前信用卡債務還輕鬆。</p>
              <span>17:42</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg_2} />
              <p>妳三張信用卡，一張年利率 15%</p>
              <span>17:42</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg_2} />
              <p>三張年利率就 45% 了。</p>
              <span>17:42</span>
            </div>
          </Messages>
          <Messages ref={messagesRef_5} stagger={1.5}>
            <div className="messageSent">
              <span>17:40</span>
              <p>您好，我之前有跟你們申請協助財務協商，銀行剛剛打來照會，跟我說要 120 期月付金 10586，這樣子等同於我要多付 40 幾萬。</p>
            </div>
            <div className="messageSent">
              <span>17:40</span>
              <p>你不是跟我說只要七年月付金 5000 多就好了嗎？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>壓不下來</p>
              <span>17:42</span>
            </div>
            <div className="messageSent">
              <span>17:40</span>
              <p>太扯了</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>我們也很盡力去爭取</p>
              <span>17:42</span>
            </div>
            <div className="messageSent">
              <span>17:40</span>
              <p>你們家服務費那麼高，結果還那麼貴</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>還是依銀行審核為主</p>
              <span>17:42</span>
            </div>
            <div className="messageSent">
              <span>17:40</span>
              <p>那我就不需要協商了</p>
            </div>
            <div className="messageSent">
              <span>17:40</span>
              <p>我之前的費用可以申請退費嗎？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>我們的契約書裡面有載明費用沒辦法退喔。</p>
              <span>17:42</span>
            </div>
          </Messages>
        </MessagesApp>
      </Phone>
      <Telepromter ref={telepromterRef_1} 
        audioSrc="./assets/audio/米奇：掉入深淵.aac"
        stagger={0.2}
      >
        <p className="telepromter-speaker">米奇（聲音經過變聲處理）</p>
        <p className="telepromter-script">
          我當時只是，單純想要趕快把債務做一個總整理。殊不知...... 就是跳入到萬劫不復的深淵。
        </p>
      </Telepromter>
      <Telepromter ref={telepromterRef_2} 
        audioSrc="./assets/audio/米奇：一些些服務費原來這麼多.aac"
        stagger={0.2}
      >
        <p className="telepromter-speaker">米奇（聲音經過變聲處理）</p>
        <p className="telepromter-script">
          他們算是代辦公司說，他可以幫我去做債務的統籌整理，但他們可能會收取一些些服務費。他只有說一些些，我不知道原來服務費要到這麼多。
        </p>
      </Telepromter>
      <Brief ref={briefRefD_2} type="dark" style={{ width: '300px' }}>
        <p>王道銀行</p>
        <p>你總不可能請律師打官司，但最後官司敗訴，還要求律師費要退費吧？我們協商失敗還是要付服務費。</p>
      </Brief>
      <Brief ref={briefRefL_2} type="light">
        <p>協商不成，平白無故多出一筆 13 萬元負債。由於每天收到「第一國際」的催債電話，米奇生活費僅剩的餘額，全都拿來償還融資公司，沒有餘力償還本來就積欠的卡債與信貸，遲遲無法繳清原有債務，現在遭到銀行威脅抵押靈骨塔</p>
      </Brief>
    </section>
  );
});
