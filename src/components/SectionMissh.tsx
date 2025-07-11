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
import useWindowDimensions from './utility/useWindowDimensions';

export const SectionMissh = forwardRef<gsap.core.Timeline>((_, ref) => {
  const globalmarks = false;
  const messageAvatarImg = 'https://storytelling-storage.twreporter.org/files/avatar-A-T8XooKMfr3pO.svg';
  const { width } = useWindowDimensions();

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
  const dialogsRef_1 = useRef<TimelineHandle | null>(null);
  const dialogsRef_2 = useRef<TimelineHandle | null>(null);
  const dialogsRef_3 = useRef<TimelineHandle | null>(null);

  const calculatorRef = useRef<TimelineHandle | null>(null);
  // detailsRef
  const detailsRef_1 = useRef<TimelineHandle | null>(null);
  const detailsRef_2 = useRef<TimelineHandle | null>(null);
  const detailsRef_3 = useRef<TimelineHandle | null>(null);
  const detailsRef_4 = useRef<TimelineHandle | null>(null);
  // highlightRef
  const highlightUpdateRef_1T = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_1 = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_2T = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_2 = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_3T = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_3 = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_4T = useRef<TimelineHandle | null>(null);
  const highlightUpdateRef_4 = useRef<TimelineHandle | null>(null);
  // resultRef
  const resultRef_1T = useRef<TimelineHandle | null>(null);
  const resultRef_1a = useRef<TimelineHandle | null>(null);
  const resultRef_1b = useRef<TimelineHandle | null>(null);
  const resultRef_1c = useRef<TimelineHandle | null>(null);
  const resultRef_1d = useRef<TimelineHandle | null>(null);
  const resultRef_1e = useRef<TimelineHandle | null>(null);
  const resultRef_1f = useRef<TimelineHandle | null>(null);
  const resultRef_2T = useRef<TimelineHandle | null>(null);
  const resultRef_2a = useRef<TimelineHandle | null>(null);
  const resultRef_3T = useRef<TimelineHandle | null>(null);
  const resultRef_3a = useRef<TimelineHandle | null>(null);
  const resultRef_3b = useRef<TimelineHandle | null>(null);
  const resultRef_3c = useRef<TimelineHandle | null>(null);
  const resultRef_4T = useRef<TimelineHandle | null>(null);
  const resultRef_4a = useRef<TimelineHandle | null>(null);
  // contractRef
  const contractRef_A = useRef<TimelineHandle | null>(null);
  const contractRef_B = useRef<TimelineHandle | null>(null);
  const contractRef_C1 = useRef<TimelineHandle | null>(null);
  const contractRef_C2 = useRef<TimelineHandle | null>(null);
  // telepromterRef
  const telepromterRef_1 = useRef<TimelineHandle | null>(null);
  const telepromterRef_2 = useRef<TimelineHandle | null>(null);

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

    let phone_Yoffset: number, 
        calculator_Yoffset: number,
        contract_Xoffset: number, 
        contract_Yoffset: number,
        phone_offscreen_1: number,
        phone_offscreen_2: number,
        calculator_Xoffset: number,
        calculator_offscreen_1: number;

    if (width < 768) {
      phone_Yoffset = 0;
      phone_offscreen_1 = 90;
      phone_offscreen_2 = 10;
      calculator_Yoffset = 0;
      calculator_offscreen_1 = -80;
      contract_Xoffset = -25;
      contract_Yoffset = 5;
      calculator_Xoffset = -12;
    } 
    else if (width < 1024) {
      phone_Yoffset = 5;
      phone_offscreen_1 = 0;
      phone_offscreen_2 = 0;
      calculator_Yoffset = 5;
      calculator_offscreen_1 = 0;
      contract_Xoffset = -25;
      contract_Yoffset = 5;
      calculator_Xoffset = 0;
    } 
    else if (width < 1440) {
      phone_Yoffset = 5;
      phone_offscreen_1 = 0;
      phone_offscreen_2 = 0;
      calculator_Yoffset = 10;
      calculator_offscreen_1 = 0;
      contract_Xoffset = 0;
      contract_Yoffset = 5;
      calculator_Xoffset = 0;
    } 
    else if (width < 2048) {
      phone_Yoffset = 5;
      phone_offscreen_1 = 0;
      phone_offscreen_2 = 0;
      calculator_Yoffset = 5;
      calculator_offscreen_1 = 0;
      contract_Xoffset = 0;
      contract_Yoffset = 5;
      calculator_Xoffset = 0;
    } 
    else {
      phone_Yoffset = 0;
      phone_offscreen_1 = 0;
      phone_offscreen_2 = 0;
      calculator_Yoffset = 0;
      calculator_offscreen_1 = 0;
      contract_Xoffset = 0;
      contract_Yoffset = 5;
      calculator_Xoffset = 0;
    }

    // INITIAL STATE
    RefFromTo(misshTL, phoneRef.current, 
      { x: '25vw', y: '100vh', rotation: -20, zIndex: 1 }, 
      { x: '25vw', y: '100vh', rotation: -20, zIndex: 1, duration: 0.5 }, 0
    );
    RefFromTo(misshTL, messagesAppRef.current, 
      { opacity: 0 },  { opacity: 0 }, 0
    );
    RefFromTo(misshTL, calculatorRef.current, 
      { x: '-50vw', y: '100vh', rotation: -10, zIndex: 1 }, 
      { x: '-50vw', y: '100vh', rotation: -10, zIndex: 1, duration: 0.5 }, 0
    );
    RefFromTo(misshTL, contractRef_A.current, 
      { x: '-100vw', y: '-100vh', rotation: -90 }, 
      { x: '-100vw', y: '-100vh', rotation: -90, duration: 0.5 }, 0
    );
    RefFromTo(misshTL, contractRef_B.current, 
      { x: '-100vw', y: '-100vh', rotation: 90 }, 
      { x: '-100vw', y: '-100vh', rotation: 90, duration: 0.5 }, 0
    );
    RefFromTo(misshTL, contractRef_C1.current, 
      { x: 0, y: '150vh', rotation: 10 }, 
      { x: 0, y: '150vh', rotation: 10, duration: 0.5 }, 0
    ); 
    RefFromTo(misshTL, contractRef_C2.current, 
      { x: 0, y: '150vh', rotation: -10 }, 
      { x: 0, y: '150vh', rotation: -10, duration: 0.5 }, 0
    ); 


    // Animation Time Positioning
    RefFromTo(misshTL, phoneRef.current, 
      { x: '25vw', y: '100vh', rotation: -20 }, 
      { x: 0, y: `${phone_Yoffset}vh`, rotation: 0, duration: 1 }, 
      6
    );
    AddStartTL(misshTL, phoneCallRef_1.current, '>-1');
    AddStartTL(misshTL, dialogsRef_1.current, '<5');
    AddEndTL(misshTL, phoneCallRef_1.current, '>2');
    AddStartTL(misshTL, notificationRef_1.current, '>');

    AddStartTL(misshTL, messagesAppRef.current, '<');
    AddStartTL(misshTL, messagesRef.current,  '<1');
    
    AddStartTL(misshTL, telepromterRef_1.current, '>4');
    AddNoScrubTL(misshTL, telepromterRef_1.current, '>');
    RefFromTo(misshTL, messagesRef.current, 
      { opacity: 1 },  { opacity: 0.25, duration: 0.5 }, '<'
    );
    AddEndTL(misshTL, telepromterRef_1.current, '>4');
    AddStartTL(misshTL, notificationRef_2.current, '<');
    AddEndTL(misshTL, notificationRef_2.current, '>2');

    RefFromTo(misshTL, contractRef_A.current, 
      { x: '-100vw', y: '-100vh', rotation: -90 }, 
      { x: `${contract_Xoffset}vw`, y: `${contract_Yoffset+10}vh`, rotation: 5, duration: 2 }, '>-1'
    );
    RefFromTo(misshTL, contractRef_B.current, 
      { x: '-100vw', y: '100vh', rotation: 90 }, 
      { x: `${contract_Xoffset}vw`, y: `${contract_Yoffset+22}vh`, rotation: -5, duration: 2 }, '<-0.5'
    );
    RefFromTo(misshTL, phoneRef.current, 
      { x: 0, y: `${phone_Yoffset}vh`, rotation: 0 }, 
      { x: `${phone_offscreen_1-25}vw`, y: `${phone_Yoffset}vh`, rotation: -5, duration: 1 }, '<'
    );
    AddStartTL(misshTL, contractRef_A.current, '>1');
    AddStartTL(misshTL, contractRef_B.current, '<');   
    RefFromTo(misshTL, contractRef_A.current, 
      { x: `${contract_Xoffset}vw`, y: `${contract_Yoffset+5}vh`, rotation: 5 }, 
      { x: `${contract_Xoffset-15}vw`, y: `${contract_Yoffset+10}vh`, rotation: -20, duration: 3 }, '>2'
    );
    RefFromTo(misshTL, contractRef_B.current, 
      { x: `${contract_Xoffset}vw`, y: `${contract_Yoffset+15}vh`, rotation: -5 }, 
      { x: `${contract_Xoffset+15}vw`, y: `${contract_Yoffset+5}vh`, rotation: 10, duration: 3 }, '<'
    ); 
    RefFromTo(misshTL, calculatorRef.current, 
      { x: '-50vw', y: '100vh', rotation: -10 }, 
      { x: '5vw', y: `${calculator_Yoffset}vh`, rotation: 2, duration: 2 }, '<'
    );

    // 1st loan calculation
    AddStartTL(misshTL, highlightUpdateRef_1.current, '<2');
    AddStartTL(misshTL, highlightUpdateRef_1T.current, '<');
    AddStartTL(misshTL, resultRef_1T.current, '<');
    AddStartTL(misshTL, resultRef_1a.current, '<');
    AddStartTL(misshTL, detailsRef_1.current, '>1');
    AddEndTL(misshTL, resultRef_1a.current, '<1');
    AddStartTL(misshTL, resultRef_1b.current, '>-0.5');
    AddEndTL(misshTL, resultRef_1b.current, '>0.5');
    AddStartTL(misshTL, resultRef_1c.current, '>-0.5');
    AddEndTL(misshTL, resultRef_1c.current, '>0.5');
    AddStartTL(misshTL, resultRef_1d.current, '>0.5');
    AddEndTL(misshTL, resultRef_1d.current, '>0.5');
    AddStartTL(misshTL, resultRef_1e.current, '>-0.5');
    AddEndTL(misshTL, resultRef_1e.current, '>0.5');
    AddStartTL(misshTL, resultRef_1f.current, '>0.5');

    AddEndTL(misshTL, detailsRef_1.current, '>1');
    AddStartTL(misshTL, detailsRef_2.current, '>');
    AddEndTL(misshTL, highlightUpdateRef_1T.current, '<1');
    AddEndTL(misshTL, highlightUpdateRef_1.current, '<');
    AddStartTL(misshTL, highlightUpdateRef_2T.current, '>-1');
    AddStartTL(misshTL, highlightUpdateRef_2.current, '<');
    AddEndTL(misshTL, resultRef_1T.current, '>');
    AddEndTL(misshTL, resultRef_1f.current, '<');
    AddStartTL(misshTL, resultRef_2T.current, '>');
    AddStartTL(misshTL, resultRef_2a.current, '<');

    RefFromTo(misshTL, calculatorRef.current, 
      { x: '5vw', y: `${calculator_Yoffset}vh`, rotation: 2, zIndex: 1 }, 
      { x: `${calculator_offscreen_1+15}vw`, y: `${calculator_Yoffset}vh`, rotation: 5, zIndex: 1, duration: 1 }, '>1'
    );
    RefFromTo(misshTL, phoneRef.current, 
      { x: `${phone_offscreen_1-25}vw`, y: `${phone_Yoffset}vh`, rotation: -5, zIndex: 1 }, 
      { x: `${phone_offscreen_2-15}vw`, y: `${phone_Yoffset}vh`, rotation: -5, zIndex: 2, duration: 1 }, '<0.25'
    );
    RefFromTo(misshTL, messagesAppRef.current, 
      { opacity: 1, scale: 1 }, 
      { opacity: 0, scale: 0.9, duration: 1 }, '<'
    );
    AddStartTL(misshTL, phoneCallRef_2.current, '<');
    AddStartTL(misshTL, dialogsRef_2.current, '>1'); 

    // 3rd loan calculation
    AddStartTL(misshTL, phoneCallRef_3.current, '<');
    AddStartTL(misshTL, dialogsRef_3.current, '>1');

    AddStartTL(misshTL, telepromterRef_2.current, '>');
    AddNoScrubTL(misshTL, telepromterRef_2.current, '>');
    AddEndTL(misshTL, telepromterRef_2.current, '>4');
    
    RefFromTo(misshTL, contractRef_A.current, 
      { x: `${contract_Xoffset-15}vw`, y: `${contract_Yoffset+10}vh`, rotation: -20 }, 
      { x: `${contract_Xoffset-30}vw`, y: `${contract_Yoffset+10}vh`, rotation: -10, duration: 3 }, '>2'
    );
    RefFromTo(misshTL, contractRef_B.current, 
      { x: `${contract_Xoffset+15}vw`, y: `${contract_Yoffset+5}vh`, rotation: 10 }, 
      { x: `${contract_Xoffset+30}vw`, y: `${contract_Yoffset+5}vh`, rotation: 10, duration: 3 }, '<'
    ); 
    RefFromTo(misshTL, calculatorRef.current, 
      { x: `${calculator_offscreen_1+15}vw`, y: `${calculator_Yoffset}vh`, rotation: 2, zIndex: 1 }, 
      { x: `${calculator_Xoffset+15}vw`, y: `${calculator_Yoffset}vh`, rotation: 2, zIndex: 1, duration: 1 }, '<'
    );
    RefFromTo(misshTL, contractRef_C1.current, 
      { x: `${contract_Xoffset}vw`, y: '150vh', rotation: 10 }, 
      { x: `${contract_Xoffset-10}vw`, y: `${contract_Yoffset+0}vh`, rotation: -3, duration: 3 }, '<'
    ); 
    RefFromTo(misshTL, contractRef_C2.current, 
      { x: `${contract_Xoffset}vw`, y: '150vh', rotation: -10 }, 
      { x: `${contract_Xoffset+15}vw`, y: `${contract_Yoffset+5}vh`, rotation: 3, duration: 3 }, '<'
    ); 

    AddEndTL(misshTL, highlightUpdateRef_2T.current, '>');
    AddEndTL(misshTL, highlightUpdateRef_2.current, '<');
    AddEndTL(misshTL, resultRef_2T.current, '<');
    AddEndTL(misshTL, resultRef_2a.current, '<');
    AddEndTL(misshTL, detailsRef_2.current, '<');
    AddStartTL(misshTL, resultRef_3T.current, '>');
    AddStartTL(misshTL, resultRef_3a.current, '<');
    AddStartTL(misshTL, highlightUpdateRef_3T.current, '<');
    AddStartTL(misshTL, highlightUpdateRef_3.current, '<');
    AddStartTL(misshTL, detailsRef_3.current, '<1');
    AddEndTL(misshTL, resultRef_3a.current, '<2');
    AddStartTL(misshTL, resultRef_3b.current, '>');
    AddEndTL(misshTL, resultRef_3b.current, '>6');
    AddStartTL(misshTL, resultRef_3c.current, '>');

    AddEndTL(misshTL, detailsRef_3.current, '>2');
    AddStartTL(misshTL, detailsRef_4.current, '>');
    AddEndTL(misshTL, highlightUpdateRef_3T.current, '<1');
    AddEndTL(misshTL, highlightUpdateRef_3.current, '<');
    AddStartTL(misshTL, highlightUpdateRef_4T.current, '>-1');
    AddStartTL(misshTL, highlightUpdateRef_4.current, '<');
    AddEndTL(misshTL, resultRef_3T.current, '>');
    AddEndTL(misshTL, resultRef_3c.current, '<');
    AddStartTL(misshTL, resultRef_4T.current, '>');
    AddStartTL(misshTL, resultRef_4a.current, '<');

    RefFromTo(misshTL, phoneRef.current, 
      { x: `${phone_offscreen_2-15}vw`, y: `${phone_Yoffset}vh`, rotation: -5, zIndex: 2 }, 
      { x: `${phone_offscreen_2-15}vw`, y: `${phone_Yoffset}vh`, rotation: -5, zIndex: 2, duration: 1 }, '>3'
    );

    if (ref && typeof ref !== 'function') {
      ref.current = misshTL;
    }
  }, []);

  return (
    <section className="section-missh" ref={sectionRef}>
      <Contract ref={contractRef_A} contract="1A" highlightIds={[1]} isHighlight={true} />
      <Contract ref={contractRef_B} contract="1B" highlightIds={[2, 3]} isHighlight={true} />
      <Contract ref={contractRef_C2} contract="1C2" isHighlight={false} />
      <Contract ref={contractRef_C1} contract="1C1" isHighlight={false} />
      <Phone ref={phoneRef}>
        <PhoneCall ref={phoneCallRef_1}>
          <div className="call-contact">
            <h3>未顯示號碼</h3>
            <p>行動電話</p>
          </div>
          <Dialogs ref={dialogsRef_1}>
            <div className="dialog Recieve">
              <span>台新銀行</span>
              <p>您好，我們是台新銀行，最近我們有貸款優惠活動，請問您有資金上的需求嗎？</p>
            </div>
            <div className="dialog Sent">
              <p>我想了解看看</p>
            </div>
            <div className="dialog Recieve">
              <span>台新銀行</span>
              <p>好的，那我稍後簡訊給您，我們等等加LINE聯繫喔！</p>
            </div>
          </Dialogs>
        </PhoneCall>
        <PhoneCall ref={phoneCallRef_3}>
          <div className="call-contact">
            <h3>裕富</h3>
            <p>公司</p>
          </div>
          <Dialogs ref={dialogsRef_3}>
            <div className="dialog Single">
              <p>2023年2月裕富資融主動來電</p>
            </div>
            <div className="dialog Single">
              <p>說明因Ｈ小姐「還款狀況正常」</p>
            </div>
            <div className="dialog Single">
              <p>邀請她進行「增貸」35萬元</p>
            </div>
            <div className="dialog Single">
              <p>「借新還舊」不僅能以35萬元貸款，提前還清上一筆債務。</p>
            </div>
            <div className="dialog Single">
              <p>多餘的錢還可以另作他用。</p>
            </div>
          </Dialogs>
        </PhoneCall>
        <Notification
          ref={notificationRef_1}
          app="Messages"
          title="涂專員"
          time="09:50"
          message="Ｈ小姐您好，我是剛剛跟您聯繫的涂專員"
        ></Notification>
        <MessagesApp ref={messagesAppRef} name="涂專員">
          <Messages ref={messagesRef} stagger={1.5}>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg} />
              <p>Ｈ小姐您好，我是剛剛跟您聯繫的涂專員</p>
              <span>09:50</span>
            </div>
            <div className="messageSent">
              <span>09:51</span>
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
                2.近期信用卡帳單明細 <br />
                3.撥款給您的存摺封面 <br />
                4.信用卡卡號面（安全碼請遮蔽 <br />
                5.健保明細
              </p>
              <span>10:00</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg} />
              <p>這是我們的方案，給您參考一下</p>
              <span>10:00</span>
            </div>
            <div className="messageSent">
              <span>10:06</span>
              <p>
                不好意思
                <br />
                所以你們是台新銀行辦理的嗎？
              </p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg} />
              <img className="photo" src="https://storytelling-storage.twreporter.org/files/messageImg-1A-NQFOCcISn1d1.jpg" />
              <span>10:08</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg} />
              <p>這樣做使用</p>
              <span>10:08</span>
            </div>
            <div className="messageSent">
              <span>10:10</span>
              <p>不好意思，可以再說一次你們是和哪幾家合作嗎？抱歉因為剛剛有一點聽不清楚全部？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg} />
              <p>
                　　　　　　　　　　<br />　　　　　　　　　　<br />
                　　　　　　　　　　<br />　　　　　　　　　　<br />
              </p>
              <span>10:33</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg} />
              <p>在空白處簽名回傳給我，就可以幫您跑貸款流程了。</p>
              <span>10:33</span>
            </div>
            <div className="messageSent">
              <span>10:48</span>
              <p>請問這是汽機車貸款的意思嗎？但是我沒有要買汽機車</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg} />
              <p>這就是商品貸的意思</p>
              <span>10:50</span>
            </div>
            <div className="messageSent">
              <span>11:03</span>
              <img className="photo" src="https://storytelling-storage.twreporter.org/files/messageImg-1B-Zpimvt1jnIzH.png" />
            </div>
          </Messages>
        </MessagesApp>
        <Notification
          ref={notificationRef_2}
          app="Messages"
          title="涂專員"
          time="09:30"
          message="您好，您申請裕富資融25萬汽機車貸款，貸款核定已通過。" 
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
            <span>每期應付（ 共48期 ）</span>
          </Update>
          <Update ref={highlightUpdateRef_2} type="number">
            <span>$7,075</span>
          </Update>
          {/* 3rd loan calculation */}
          <Update ref={highlightUpdateRef_3T} type="title">
            <span>貸款金額</span>
          </Update>
          <Update ref={highlightUpdateRef_3} type="number">
            <span>$350,000</span>
          </Update>
          <Update ref={highlightUpdateRef_4T} type="title">
            <span>每期應付（ 共54期 ）</span>
          </Update>
          <Update ref={highlightUpdateRef_4} type="number">
            <span>$9,100</span>
          </Update>
        </div>
        <Details ref={detailsRef_1} stagger={3}>
          <div className="content">
            <span className="title">內扣 9%（裕富資融）</span>
            <span className="number">-$22,500</span>
          </div>
          <div className="content">
            <span className="title">開辦費 3%（尼亞斯國際）</span>
            <span className="number">-$7,500</span>
          </div>
          <div className="content">
            <span className="title">手續費 4%（尼亞斯國際）</span>
            <span className="number">-$10,000</span>
          </div>
          <div className="content">
            <span className="title">動保設定費</span>
            <span className="number">-$6,000</span>
          </div>
          <div className="content">
            <span className="title">轉帳手續費</span>
            <span className="number">-$15</span>
          </div>
        </Details>
        <Details ref={detailsRef_2} stagger={3} style={{ gap: '10px' }}>
          <div className="content">
            <span className="title">債務金額</span>
            <span className="number">$339,600</span>
          </div>
          <div className="content">
            <span className="title">實拿金額</span>
            <span className="number">$203,985</span>
          </div>
        </Details>
        {/* 3rd loan calculation */}
        <Details ref={detailsRef_3} stagger={3}>
          <div className="content">
            <span className="title">內扣</span>
            <span className="number">-$?????</span>
          </div>
          <div className="content">
            <span className="title">動保設定費</span>
            <span className="number">-$?????</span>
          </div>
          <div className="content">
            <span className="title">提前清償違約金</span>
            <span className="number">-$?????</span>
          </div>
           <div className="content">
            <span className="title">第一筆貸款剩餘債務</span>
            <span className="number">-$??????</span>
          </div>
        </Details>
        <Details ref={detailsRef_4} stagger={2} style={{ gap: '10px' }}>
          <div className="content">
            <span className="title">債務金額</span>
            <span className="number">$491,400</span>
          </div>
          <div className="content">
            <span className="title">實拿金額</span>
            <span className="number">$53,075</span>
          </div>
        </Details>
        <div className="result">
          <Update ref={resultRef_1T} type="title">
            <span>實拿金額</span>
          </Update>
          <Update ref={resultRef_1a} type="number">
            <span>$250,000</span>
          </Update>
          <Update ref={resultRef_1b} type="number">
            <span>$227,500</span>
          </Update>
          <Update ref={resultRef_1c} type="number">
            <span>$220,000</span>
          </Update>
          <Update ref={resultRef_1d} type="number">
            <span>$210,000</span>
          </Update>
          <Update ref={resultRef_1e} type="number">
            <span>$204,000</span>
          </Update>
          <Update ref={resultRef_1f} type="number">
            <span>$203,985</span>
          </Update>
          <Update ref={resultRef_2T} type="title">
            <span>年利率</span>
          </Update>
          <Update ref={resultRef_2a} type="number">
            <span>31.4%</span>
          </Update>
          {/* 3rd loan calculation */}
        <Update ref={resultRef_3T} type="title">
            <span>實拿金額</span>
          </Update>
          <Update ref={resultRef_3a} type="number">
            <span>$350,000</span>
          </Update>
          <Update ref={resultRef_3b} type="number">
            <span>$??????</span>
          </Update>
          <Update ref={resultRef_3c} type="number">
            <span>$53,075</span>
          </Update>
          <Update ref={resultRef_4T} type="title">
            <span>年利率</span>
          </Update>
          <Update ref={resultRef_4a} type="number">
            <span>36.1%</span>
          </Update>
        </div>
      </Calculator>
      <Telepromter ref={telepromterRef_1} 
        audioSrc="https://storytelling-storage.twreporter.org/files/Recording-MissH-1-2MiS0fI0kBfF.aac"
        stagger={0.2}
      >
        <p className="telepromter-speaker">Ｈ小姐（聲音經過變聲處理）</p>
        <p className="telepromter-script">
          其實，那時候我對融資公司沒有說很熟，所以我不太清楚那是什麼。資料繳出去後，他有提到，如果妳中途不辦了，可能會有毀約金的部分，所以就是一定得辦。
        </p>
      </Telepromter>
      <Telepromter ref={telepromterRef_2} 
        audioSrc="https://storytelling-storage.twreporter.org/files/Recording-MissH-2-Ci68jPqpfj5Q.m4a"
        stagger={0.2}
      >
        <p className="telepromter-speaker">Ｈ小姐（聲音經過變聲處理）</p>
        <p className="telepromter-script">
          他（裕富）說可以清償第一筆（債務），把第一筆繳掉。然後還會有多餘的錢可以使用，所以才去申請。
        </p>
      </Telepromter>
    </section>
  );
});
