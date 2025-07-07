import { useRef, forwardRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TimelineHandle, RefFromTo,  AddStartTL, AddEndTL, AddNoScrubTL } from './utility/TimelineHandle';

import { Phone } from './phone/Phone';
import { PhoneCall } from './phone/PhoneCall';
import { Dialogs } from './phone/Dialogs';
import { MessagesApp } from './phone/MessagesApp';
import { Messages } from './phone/Messages';
import { Notification } from './phone/Notification';
import { Contract } from './document/Contract';
import { Calculator } from './calculator/Calculator';
// import { Highlight } from './calculator/Highlight';
import { Details } from './calculator/Details';
import { Update } from './calculator/Update';
import { Telepromter } from './utility/Telepromter';

export const SectionMissh = forwardRef<gsap.core.Timeline>((_, ref) => {
  const globalmarks = false;
  const messageAvatarImg = './assets/img/avatar_A.svg';
  
  const sectionRef = useRef(null);
  // phoneRef
  const phoneRef = useRef<TimelineHandle | null>(null);
  const messagesAppRef = useRef<TimelineHandle | null>(null);
  const messagesRef = useRef<TimelineHandle | null>(null);
  const notificationRef_1 = useRef<TimelineHandle | null>(null);
  const notificationRef_2 = useRef<TimelineHandle | null>(null);
  const phoneCallRef_1 = useRef<TimelineHandle | null>(null);
  const phoneCallRef_2 = useRef<TimelineHandle | null>(null);
  const phoneCallRef_3 = useRef<TimelineHandle | null>(null);
  const phoneCallRef_4 = useRef<TimelineHandle | null>(null);
  const dialogsRef_1 = useRef<TimelineHandle | null>(null);
  const dialogsRef_2 = useRef<TimelineHandle | null>(null);
  const dialogsRef_3 = useRef<TimelineHandle | null>(null);
  const dialogsRef_4 = useRef<TimelineHandle | null>(null);

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
  const resultRef_0 = useRef<TimelineHandle | null>(null);
  const resultRef_1 = useRef<TimelineHandle | null>(null);
  const resultRef_2 = useRef<TimelineHandle | null>(null);
  const resultRef_3 = useRef<TimelineHandle | null>(null);
  const resultRef_4 = useRef<TimelineHandle | null>(null);
  const resultRef_5 = useRef<TimelineHandle | null>(null);
  const resultRef_6 = useRef<TimelineHandle | null>(null);
  const resultRef_7 = useRef<TimelineHandle | null>(null);
  const resultRef_8 = useRef<TimelineHandle | null>(null);
  const resultRef_9 = useRef<TimelineHandle | null>(null);
  const resultRef_10 = useRef<TimelineHandle | null>(null);
  const resultRef_11 = useRef<TimelineHandle | null>(null);
  const resultRef_12 = useRef<TimelineHandle | null>(null);
  const resultRef_13 = useRef<TimelineHandle | null>(null);
  const resultRef_14 = useRef<TimelineHandle | null>(null);
  // contractRef
  const contractARef = useRef<TimelineHandle | null>(null);
  const contractBRef = useRef<TimelineHandle | null>(null);
  // telepromterRef
  const telepromterRef_1 = useRef<TimelineHandle | null>(null);
  const telepromterRef_2 = useRef<TimelineHandle | null>(null);
  const telepromterRef_3 = useRef<TimelineHandle | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const misshTL = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-missh',
        start: 'top top',
        end: 'bottom center',
        scrub: 1,
        pin: sectionRef.current,
        markers: globalmarks,
      },
      // smoothChildTiming: true,
    });


    // INITIAL STATE
    RefFromTo(misshTL, phoneRef.current, 
      { x: '50vw', y: '100vh', rotation: 0 }, 
      { x: '50vw', y: '100vh', rotation: 20, duration: 0.5 }, 0
    );
    RefFromTo(misshTL, contractARef.current, 
      { x: '-100vw', y: '-100vh', rotation: 10 }, 
      { x: '-100vw', y: '-100vh', rotation: 10, duration: 0.5 }, 0
    );
    RefFromTo(misshTL, contractBRef.current, 
      { x: '-100vw', y: '-100vh', rotation: 10 }, 
      { x: '-100vw', y: '-100vh', rotation: 10, duration: 0.5 }, 0
    );
    RefFromTo(misshTL, calculatorRef.current, 
      { x: '100vw', y: '100vh', rotation: -10 }, 
      { x: '100vw', y: '100vh', rotation: -10, duration: 0.5 }, 0
    );
    RefFromTo(misshTL, messagesAppRef.current, 
      { opacity: 0 },  { opacity: 0 }, 0
    );


    // Animation Time Positioning
    RefFromTo(misshTL, phoneRef.current, 
      { x: '50vw', y: '100vh', rotation: 20 }, 
      { x: 0, y: 0, rotation: 0, duration: 1 }, 
      6
    );
    AddStartTL(misshTL, phoneCallRef_1.current, '>-1');
    AddStartTL(misshTL, dialogsRef_1.current, '<5');
    AddStartTL(misshTL, notificationRef_1.current, '>1');
    AddEndTL(misshTL, phoneCallRef_1.current, '<1');
    AddEndTL(misshTL, dialogsRef_1.current, '<');

    AddStartTL(misshTL, messagesAppRef.current, '<2');
    AddStartTL(misshTL, messagesRef.current,  '<1');
    
    AddStartTL(misshTL, telepromterRef_1.current, '>1');
    AddNoScrubTL(misshTL, telepromterRef_1.current, '>');
    AddEndTL(misshTL, telepromterRef_1.current, '>4');
    AddStartTL(misshTL, notificationRef_2.current, '>');

    RefFromTo(misshTL, phoneRef.current, 
      { x: 0, y: 0, rotation: 0 }, 
      { x: '50vw', y: 0, rotation: 10, duration: 1 }, '>'
    );
    RefFromTo(misshTL, contractARef.current, 
      { x: '-100vw', y: '-100vh', rotation: -5 }, 
      { x: 0, y: '5vh', rotation: 5, duration: 2 }, '<-0.25'
    );
    RefFromTo(misshTL, contractBRef.current, 
      { x: '-100vw', y: '100vh', rotation: 5 }, 
      { x: 50, y: '15vh', rotation: -5, duration: 2 }, '<-0.25'
    );
    AddStartTL(misshTL, contractARef.current, '>1');
    AddStartTL(misshTL, contractBRef.current, '>0.5');   
    RefFromTo(misshTL, contractARef.current, 
      { x: 0, y: '5vh', rotation: 5, }, 
      { x: '-10vw', y: '10vh', rotation: -40, duration: 3 }, '<3'
    );
    RefFromTo(misshTL, contractBRef.current, 
      { x: 50, y: '15vh', rotation: -5 }, 
      { x: '10vw', y: '-10vh', rotation: 30, duration: 3 }, '<'
    ); 
    RefFromTo(misshTL, calculatorRef.current, 
      { x: '100vw', y: '100vh', rotation: -10 }, 
      { x: 0, y: 0, rotation: 2, duration: 2 }, '<'
    );

    // 1st loan calculation
    AddStartTL(misshTL, highlightUpdateRef_1.current, '<4');
    AddStartTL(misshTL, highlightUpdateRef_1T.current, '<');
    AddStartTL(misshTL, resultRef_0.current, '<');
    AddStartTL(misshTL, detailsRef_1.current, '>1');;
    AddEndTL(misshTL, highlightUpdateRef_1T.current, '<');
    AddStartTL(misshTL, highlightUpdateRef_2T.current, '>-1');

    AddEndTL(misshTL, highlightUpdateRef_1.current, '>3');
    AddStartTL(misshTL, highlightUpdateRef_2.current, '>-1');
    AddEndTL(misshTL, highlightUpdateRef_2.current, '>1.5');
    AddStartTL(misshTL, highlightUpdateRef_3.current, '>-1');
    AddEndTL(misshTL, highlightUpdateRef_3.current, '>1.5');
    AddStartTL(misshTL, highlightUpdateRef_4.current, '>-1');
    AddEndTL(misshTL, highlightUpdateRef_4.current, '>1.5');
    AddStartTL(misshTL, highlightUpdateRef_5.current, '>-1');
    AddEndTL(misshTL, highlightUpdateRef_5.current, '>1.5');
    AddStartTL(misshTL, highlightUpdateRef_6.current, '>-1');
    
    AddEndTL(misshTL, resultRef_0.current, '>');
    AddStartTL(misshTL, resultRef_1.current, '>');

    AddEndTL(misshTL, detailsRef_1.current, '>');
    AddStartTL(misshTL, detailsRef_2.current, '>');
    // months count
    AddEndTL(misshTL, resultRef_1.current, '<');
    AddStartTL(misshTL, resultRef_2.current, '>-0.5');
    AddEndTL(misshTL, resultRef_2.current, '>-0.5');
    AddStartTL(misshTL, resultRef_3.current, '>-0.5');
    AddEndTL(misshTL, resultRef_3.current, '>-0.5');
    AddStartTL(misshTL, resultRef_4.current, '>-0.5');
    AddEndTL(misshTL, resultRef_4.current, '>-0.5');
    AddStartTL(misshTL, resultRef_5.current, '>-0.5');
    AddEndTL(misshTL, resultRef_5.current, '>-0.5');
    AddStartTL(misshTL, resultRef_6.current, '>-0.5');
    AddEndTL(misshTL, resultRef_6.current, '>-0.5');
    AddStartTL(misshTL, resultRef_7.current, '>-0.5');
    AddEndTL(misshTL, resultRef_7.current, '>-0.5');
    AddStartTL(misshTL, resultRef_8.current, '>-0.5');

    RefFromTo(misshTL, calculatorRef.current, 
      { x: 0, y: 0, rotation: -10 }, 
      { x: '-10vw', y: '30vh', rotation: 10, duration: 1 }, '>'
    );
    RefFromTo(misshTL, phoneRef.current, 
      { x: '50vw', y: 0, rotation: 10 }, 
      { x: 0, y: '-5vh', rotation: -5, duration: 1 }, '<'
    );
    RefFromTo(misshTL, messagesAppRef.current, 
      { opacity: 1, scale: 1 }, 
      { opacity: 0, scale: 0.9, duration: 1 }, '<'
    );
    AddStartTL(misshTL, phoneCallRef_2.current, '<');
    AddStartTL(misshTL, dialogsRef_2.current, '>1'); 
    
    AddEndTL(misshTL, highlightUpdateRef_2T.current, '<');
    AddEndTL(misshTL, highlightUpdateRef_6.current, '<');

    AddStartTL(misshTL, telepromterRef_2.current, '>');
    AddNoScrubTL(misshTL, telepromterRef_2.current, '>');
    AddEndTL(misshTL, telepromterRef_2.current, '>4');
    
    AddEndTL(misshTL, detailsRef_2.current, '<');
    AddEndTL(misshTL, phoneCallRef_2.current, '<');
    AddEndTL(misshTL, dialogsRef_2.current, '<');

    // 2nd loan calculation
    RefFromTo(misshTL, calculatorRef.current, 
      { x: '-10vw', y: '30vh', rotation: 10 }, 
      { x: '-5vw', y: '10vh', rotation: 5, duration: 1 }, '>'
    );
    AddStartTL(misshTL, highlightUpdateRef_7.current, '<');
    AddStartTL(misshTL, highlightUpdateRef_1T.current, '<');
    AddEndTL(misshTL, highlightUpdateRef_1T.current, '>1');
    AddStartTL(misshTL, highlightUpdateRef_2T.current, '>-1');
    AddStartTL(misshTL, detailsRef_3.current, '<');
    AddEndTL(misshTL, highlightUpdateRef_7.current, '<3');
    AddStartTL(misshTL, highlightUpdateRef_8.current, '>-1');
    AddEndTL(misshTL, resultRef_8.current, '<');
    AddStartTL(misshTL, resultRef_9.current, '>');
    AddEndTL(misshTL, resultRef_9.current, '>2');
    AddStartTL(misshTL, resultRef_10.current, '>');
    AddEndTL(misshTL, resultRef_10.current, '>');
    AddStartTL(misshTL, resultRef_11.current, '>');

    AddEndTL(misshTL, highlightUpdateRef_2T.current, '>');
    AddEndTL(misshTL, highlightUpdateRef_8.current, '<');
    AddStartTL(misshTL, highlightUpdateRef_9T.current, '>');
    AddStartTL(misshTL, highlightUpdateRef_9.current, '<');

    // 3rd loan calculation
    AddStartTL(misshTL, phoneCallRef_3.current, '<');
    RefFromTo(misshTL, phoneRef.current, 
      { x: 0, y: '-5vh', rotation: -5 }, 
      { x: '-5vw', y: '-3vh', rotation: 5, duration: 1 }, '<'
    );
    RefFromTo(misshTL, calculatorRef.current, 
      { x: '-5vw', y: '10vh', rotation: 10 }, 
      { x: '10vw', y: '33vh', rotation: -5, duration: 2 }, '<'
    ); 
    AddStartTL(misshTL, dialogsRef_3.current, '>1');
    AddStartTL(misshTL, telepromterRef_3.current, '<');
    AddNoScrubTL(misshTL, telepromterRef_3.current, '>');
    AddEndTL(misshTL, telepromterRef_3.current, '>4');
    

    AddEndTL(misshTL, highlightUpdateRef_9T.current, '>');
    AddEndTL(misshTL, highlightUpdateRef_9.current, '<');
    AddEndTL(misshTL, detailsRef_3.current, '<');
    AddStartTL(misshTL, highlightUpdateRef_10.current, '<');
    AddStartTL(misshTL, highlightUpdateRef_1T.current, '<');
    AddEndTL(misshTL, resultRef_11.current, '<');
    AddStartTL(misshTL, resultRef_12.current, '<');

    AddStartTL(misshTL, detailsRef_4.current, '>');

    AddEndTL(misshTL, highlightUpdateRef_1T.current, '<7');
    AddEndTL(misshTL, highlightUpdateRef_10.current, '<');
    AddStartTL(misshTL, highlightUpdateRef_2T.current, '>-1');
    AddStartTL(misshTL, highlightUpdateRef_11.current, '<');

    AddEndTL(misshTL, resultRef_12.current, '>');
    AddStartTL(misshTL, resultRef_13.current, '>');
    AddEndTL(misshTL, resultRef_13.current, '>2');
    AddStartTL(misshTL, resultRef_14.current, '>');

    AddEndTL(misshTL, highlightUpdateRef_2T.current, '>');
    AddEndTL(misshTL, highlightUpdateRef_11.current, '<');
    AddStartTL(misshTL, highlightUpdateRef_9T.current, '>');
    AddStartTL(misshTL, highlightUpdateRef_12.current, '<');

    // Final Call
    AddStartTL(misshTL, phoneCallRef_4.current, '>');

    if (ref && typeof ref !== 'function') {
      ref.current = misshTL;
    }
  }, []);

  return (
    <section className="section-missh" ref={sectionRef}>
      <Contract ref={contractARef} contract="1A" highlightIds={[1]} isHighlight={true} />
      <Contract ref={contractBRef} contract="1B" highlightIds={[2, 3]} isHighlight={true} />
      <Phone ref={phoneRef}>
        <PhoneCall ref={phoneCallRef_1}>
          <div className="call-contact">
            <h3>台新銀行</h3>
            <p>Whoscall</p>
          </div>
          <Dialogs ref={dialogsRef_1}>
            <div className="dialog Recieve">
              <span>銀行</span>
              <p>您好，我們是台新銀行，最近我們有貸款優惠活動，請問您有資金上的需求嗎？</p>
            </div>
            <div className="dialog Sent">
              <p>我想了解看看</p>
            </div>
            <div className="dialog Recieve">
              <span>台新銀行</span>
              <p>好的，那我稍後簡訊給您，我們等加 Line 聯繫喔！</p>
            </div>
          </Dialogs>
        </PhoneCall>
        <PhoneCall ref={phoneCallRef_2}>
          <div className="call-contact">
            <h3>裕富</h3>
            <p>融資公司</p>
          </div>
          <Dialogs ref={dialogsRef_2}>
            <div className="dialog Recieve" style={{ alignSelf: 'center' }}>
              <p>2022年11月</p>
            </div>
            <div className="dialog Recieve" style={{ alignSelf: 'center' }}>
              <p>裕富融資主動來電</p>
            </div>
            <div className="dialog Recieve" style={{ alignSelf: 'center', textAlign: 'center' }}>
              <p>邀請Ｈ小姐申請一筆<br />15 萬元的小額貸款</p>
            </div>
          </Dialogs>
        </PhoneCall>
        <PhoneCall ref={phoneCallRef_3}>
          <div className="call-contact">
            <h3>裕富</h3>
            <p>融資公司</p>
          </div>
          <Dialogs ref={dialogsRef_3}>
            <div className="dialog Recieve" style={{ alignSelf: 'center' }}>
              <p>2023年2月裕富融資主動來電</p>
            </div>
            <div className="dialog Recieve" style={{ alignSelf: 'center' }}>
              <p>說明因蕭小姐「還款狀況正常」</p>
            </div>
            <div className="dialog Recieve" style={{ alignSelf: 'center', textAlign: 'center' }}>
              <p>邀請她進行「增貸」35 萬元</p>
            </div>
            <div className="dialog Recieve" style={{ alignSelf: 'center', textAlign: 'center' }}>
              <p>「借新還舊」不僅能以 35 萬元貸款，償還提前還清 25 萬元債務。</p>
            </div>
            <div className="dialog Recieve" style={{ alignSelf: 'center', textAlign: 'center' }}>
              <p>償還債務後，多餘的錢還可以拿來做使用。</p>
            </div>
          </Dialogs>
        </PhoneCall>
        {/* <PhoneCall ref={phoneCallRef_4}>
          <div className="call-contact">
            <h3>裕富</h3>
            <p>融資公司</p>
          </div>
          <Dialogs ref={dialogsRef_4}>
            <div className="dialog Recieve" style={{ alignSelf: 'center' }}>
              <p>2023年2月裕富融資主動來電</p>
            </div>
            <div className="dialog Recieve" style={{ alignSelf: 'center' }}>
              <p>說明因蕭小姐「還款狀況正常」</p>
            </div>
            <div className="dialog Recieve" style={{ alignSelf: 'center', textAlign: 'center' }}>
              <p>邀請她進行「增貸」35 萬元</p>
            </div>
            <div className="dialog Recieve" style={{ alignSelf: 'center', textAlign: 'center' }}>
              <p>「借新還舊」不僅能以 35 萬元貸款，償還提前還清 25 萬元債務。</p>
            </div>
            <div className="dialog Recieve" style={{ alignSelf: 'center', textAlign: 'center' }}>
              <p>償還債務後，多餘的錢還可以拿來做使用。</p>
            </div>
          </Dialogs>
        </PhoneCall> */}
        <Notification
          ref={notificationRef_1}
          app="Messages"
          title="涂專員"
          time="17:30"
          message="Ｈ小姐您好，我是剛剛跟您聯繫的涂專員"
        ></Notification>
        <MessagesApp ref={messagesAppRef} name="涂專員">
          <Messages ref={messagesRef} stagger={1.5}>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg} />
              <p>Ｈ小姐您好，我是剛剛跟您聯繫的涂專員</p>
              <span>17:30</span>
            </div>
            <div className="messageSent">
              <span>17:31</span>
              <p>你好</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg} />
              <p>
                商品貸款🪄👀 <br />
                最新優惠專案🪄 <br />
                免拉聯徵不看負債比 <br />
                審件撥款快速 <br />
                申辦門低 過件率高 <br /> <br />
                ✍️準備資料如下： <br />
                1.雙證件正反面 <br />
                2.近期信用卡帳單明 <br />
                3.撥款給您的存摺封面 <br />
                4.信用卡卡面（安全碼碼請遮蔽 <br />
                5.健保明細
              </p>
              <span>17:32</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg} />
              <p>這是我們的方案，給你參考一下</p>
              <span>17:32</span>
            </div>
            <div className="messageSent">
              <span>17:40</span>
              <p>
                不好意思
                <br />
                所以你們是台新銀行辦理的嗎？
              </p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg} />
              <p>（傳大量圖片）</p>
              <span>17:42</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg} />
              <p>這樣做使用</p>
              <span>17:42</span>
            </div>
            <div className="messageSent">
              <span>17:45</span>
              <p>不好意思，可以再說一次你們是和哪幾家合作嗎？抱歉因為剛剛有一點聽不清楚全部？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg} />
              <p>
                　　　　　　　　　　<br />　　　　　　　　　　<br />
                　　　　　　　　　　<br />　　　　　　　　　　<br />
              </p>
              <span>17:46</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg} />
              <p>在空白處簽名回傳給我，就可以幫您跑貸款流程了。</p>
              <span>17:47</span>
            </div>
            <div className="messageSent">
              <span>17:48</span>
              <p>請問這是汽機車貸款的意思嗎？但是我沒有要買汽機車</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg} />
              <p>這就是商品貸的意思</p>
              <span>17:50</span>
            </div>
            <div className="messageSent">
              <span>17:48</span>
              <p>（回傳簽名圖片）</p>
            </div>
          </Messages>
        </MessagesApp>
        <Notification
          ref={notificationRef_2}
          app="Messages"
          title="涂專員"
          time="17:30"
          message="您好，您申請裕富融資 25 萬汽機車貸款，貸款核定已通過。"
        ></Notification>
      </Phone>
      <Calculator ref={calculatorRef}>
        <div className="highlight">
          <Update ref={highlightUpdateRef_1T} type="title">
            <span>貸款金額</span>
          </Update>
          <Update ref={highlightUpdateRef_1} type="number">
            <span>$250,000</span>
          </Update>
          <Update ref={highlightUpdateRef_2T} type="title">
            <span>實拿金額</span>
          </Update>
          <Update ref={highlightUpdateRef_2} type="number">
            <span>$227,500</span>
          </Update>
          <Update ref={highlightUpdateRef_3} type="number">
            <span>$221,500</span>
          </Update>
          <Update ref={highlightUpdateRef_4} type="number">
            <span>$213,000</span>
          </Update>
          <Update ref={highlightUpdateRef_5} type="number">
            <span>$203,000</span>
          </Update>
          <Update ref={highlightUpdateRef_6} type="number">
            <span>$202,985</span>
          </Update>
          {/* 2nd loan calculation */}
          <Update ref={highlightUpdateRef_7} type="number">
            <span>$150,000</span>
          </Update>
          <Update ref={highlightUpdateRef_8} type="number">
            <span>$141,750</span>
          </Update>
          <Update ref={highlightUpdateRef_9T} type="title">
            <span>每月應繳</span>
          </Update>
          <Update ref={highlightUpdateRef_9} type="number">
            <span>$11,755</span>
          </Update>
          {/* 3rd loan calculation */}
          <Update ref={highlightUpdateRef_10} type="number">
            <span>$350,000</span>
          </Update>
          <Update ref={highlightUpdateRef_11} type="number">
            <span>$53,075</span>
          </Update>
          <Update ref={highlightUpdateRef_12} type="number">
            <span>$13,780</span>
          </Update>
        </div>
        <Details ref={detailsRef_1} stagger={3}>
          <div className="content">
            <span className="title">貸款</span>
            <span className="number">$250,000</span>
          </div>
          <div className="content">
            <span className="title">內扣</span>
            <span className="number">-$22,500</span>
          </div>
          <div className="content">
            <span className="title">動保設定費</span>
            <span className="number">-$6,000</span>
          </div>
          <div className="content">
            <span className="title">開辦費 ( 3% )</span>
            <span className="number">-$7,500</span>
          </div>
          <div className="content">
            <span className="title">手續費 ( 4% )</span>
            <span className="number">-$10,000</span>
          </div>
          <div className="content">
            <span className="title">轉帳手續費</span>
            <span className="number">-$15</span>
          </div>
        </Details>
        <Details ref={detailsRef_2} stagger={2} style={{ gap: '10px' }}>
          <div className="content">
            <span className="title">2022年5月</span>
            <span className="number">-$7,075</span>
          </div>
          <div className="content">
            <span className="title">2022年6月</span>
            <span className="number">-$7,075</span>
          </div>
          <div className="content">
            <span className="title">2022年7月</span>
            <span className="number">-$7,075</span>
          </div>
          <div className="content">
            <span className="title">2022年8月</span>
            <span className="number">-$7,075</span>
          </div>
          <div className="content">
            <span className="title">2022年9月</span>
            <span className="number">-$7,075</span>
          </div>
          <div className="content">
            <span className="title">2022年10月</span>
            <span className="number">-$7,075</span>
          </div>
          <div className="content">
            <span className="title">2022年11月</span>
            <span className="number">-$7,075</span>
          </div>
        </Details>
        {/* 2nd loan calculation */}
        <Details ref={detailsRef_3} stagger={3}>
          <div className="content">
            <span className="title">貸款</span>
            <span className="number">$150,000</span>
          </div>
          <div className="content">
            <span className="title">內扣</span>
            <span className="number">-$8,250</span>
          </div>
          <div className="content">
            <hr />
          </div>
          <div className="content">
            <span className="title">第二筆待還（ 42期 ）</span>
            <span className="number">$196,560</span>
          </div>
          <div className="content">
            <span className="title">第一筆待還（ 35期 ）</span>
            <span className="number">$247,625</span>
          </div>
        </Details>
        {/* 3rd loan calculation */}
        <Details ref={detailsRef_4} stagger={3}>
          <div className="content">
            <span className="title">貸款</span>
            <span className="number">$350,000</span>
          </div>
          <div className="content">
            <span className="title">內扣</span>
            <span className="number">-$70,525</span>
          </div>
          <div className="content">
            <span className="title">第一筆債務</span>
            <span className="number">-$226,400</span>
          </div>
          <div className="content">
            <hr />
          </div>
          <div className="content">
            <span className="title">第三筆待還（ 54期 ）</span>
            <span className="number">$491,400</span>
          </div>
          <div className="content">
            <span className="title">第二筆待還（ 39期 ）</span>
            <span className="number">$181,980</span>
          </div>
        </Details>
        <div className="result">
          <span className="title">負債金額</span>
          <Update ref={resultRef_0} type="number">
            <span>$7,075</span>
            <p>（共42期）</p>
          </Update>
          <Update ref={resultRef_1} type="number">
            <span>$297,150</span>
          </Update>
          <Update ref={resultRef_2} type="number">
            <span>$290,075</span>
          </Update>
          <Update ref={resultRef_3} type="number">
            <span>$283,000</span>
          </Update>
          <Update ref={resultRef_4} type="number">
            <span>$275,925</span>
          </Update>
          <Update ref={resultRef_5} type="number">
            <span>$268,850</span>
            </Update>
            <Update ref={resultRef_6} type="number">
            <span>$261,775</span>
          </Update>
          <Update ref={resultRef_7} type="number">
            <span>$254,700</span>
          </Update>
          <Update ref={resultRef_8} type="number">
            <span>$247,625</span>
          </Update>
          {/* 2nd loan calculation */}
          <Update ref={resultRef_9} type="number">
            <span>$4,680</span>
            <p>（共42期）</p>
          </Update>
          <Update ref={resultRef_10} type="number">
            <span>$196,560</span>
          </Update>
          <Update ref={resultRef_11} type="number">
            <span>$444,185</span>
          </Update>
          {/* 3rd loan calculation */}
          <Update ref={resultRef_12} type="number">
            <span>$9,100</span>
            <p>（共54期）</p>
          </Update>
          <Update ref={resultRef_13} type="number">
            <span>$491,400</span>
          </Update>
          <Update ref={resultRef_14} type="number">
            <span>$673,380</span>
          </Update>
        </div>
      </Calculator>
      <Telepromter ref={telepromterRef_1} 
        audioSrc="./assets/audio/蕭小姐：為什麼知道是代辦還是有繼續辦？.aac"
        stagger={0.2}
      >
        <p className="telepromter-speaker">Ｈ小姐（聲音經過變聲處理）</p>
        <p className="telepromter-script">
          其實，那時候我對融資公司沒有說很熟，所以我不太清楚那是什麼。資料繳出去後，他有提到，如果妳中途不辦了，可能會有毀約金的部分。
        </p>
      </Telepromter>
      <Telepromter ref={telepromterRef_2} 
        audioSrc="./assets/audio/蕭小姐：第二筆的原因.aac"
        stagger={0.2}
      >
        <p className="telepromter-speaker">Ｈ小姐（聲音經過變聲處理）</p>
        <p className="telepromter-script">
          他是說可以，再申請一筆（第二筆），它的金額比較少。他就是可以幫我調降（貸款）金額。我想說那我可以拿來先還第一筆，因為第一筆的金額比較高，我就還第一筆可能還到一半以上，至少我不會說繳的那麼辛苦。
        </p>
      </Telepromter>
      <Telepromter ref={telepromterRef_3} 
        audioSrc="./assets/audio/蕭小姐：第三筆的原因.aac"
        stagger={0.2}
      >
        <p className="telepromter-speaker">Ｈ小姐（聲音經過變聲處理）</p>
        <p className="telepromter-script">
          他說償還第一筆（債務）後，還會有多餘的錢可以拿來做使用。
        </p>
      </Telepromter>
    </section>
  );
});
