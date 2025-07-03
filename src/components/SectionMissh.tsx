import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TimelineHandle,
  safeGsapSet,
  safeGsapTo,
  AddStartTL,
  AddEndTL,
  PauseTL,
  ResumeTL,
  StopTL,
} from './utility/TimelineHandle';

import { Phone } from './phone/Phone';
import { PhoneCall } from './phone/PhoneCall';
import { Dialogs } from './phone/Dialogs';
import { MessagesApp } from './phone/MessagesApp';
import { Messages } from './phone/Messages';
import { Notification } from './phone/Notification';
import { Contract } from './document/Contract';
import { Calculator } from './calculator/Calculator';

interface MessagesTimelineHandle extends TimelineHandle {
  pause: () => void;
  resume: () => void;
}

export const SectionMissh = () => {
  const sectionRef = useRef(null);
  const phoneRef = useRef<TimelineHandle | null>(null);
  const contractARef = useRef<TimelineHandle | null>(null);
  const contractBRef = useRef<TimelineHandle | null>(null);
  const calculatorRef = useRef<TimelineHandle | null>(null);
  const notificationRef = useRef<TimelineHandle | null>(null);
  const dialogsRef = useRef<TimelineHandle | null>(null);
  const phoneCallRef = useRef<TimelineHandle | null>(null);
  const messagesAppRef = useRef<TimelineHandle | null>(null);
  const messagesRef = useRef<TimelineHandle | null>(null);

  const globalmarks = true;
  const messageAvatarImg = './assets/img/avatar_A.svg';

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
    });

    safeGsapSet(phoneRef.current, { x: 0, rotation: 0 });
    safeGsapSet(calculatorRef.current, { x: 100 });
    safeGsapSet(contractARef.current, { x: -1000, y: 1000, rotation: 10 });
    safeGsapSet(contractBRef.current, { x: -1000, y: 1000, rotation: 10 });

    // Time Positioning
    AddStartTL(misshTL, phoneCallRef.current, 0);
    AddStartTL(misshTL, dialogsRef.current, '<0.8');
    AddEndTL(misshTL, phoneCallRef.current, '>0.5');

    AddStartTL(misshTL, messagesAppRef.current, '>0');
    AddStartTL(misshTL, messagesRef.current,  '>0.1');
    PauseTL(misshTL, messagesRef.current,     '>0.5');
    ResumeTL(misshTL, messagesRef.current,    '>0.5');
    PauseTL(misshTL, messagesRef.current,     '>0.5');
    ResumeTL(misshTL, messagesRef.current,    '>0.5');

    AddStartTL(misshTL, notificationRef.current, '>1');
    AddEndTL(misshTL, notificationRef.current, '>0.5');

    safeGsapTo(misshTL, phoneRef.current, { x: 700, rotation: 10, duration: 1 }, '>');
    safeGsapTo(misshTL, contractARef.current, { x: 20, y: 50, rotation: -5, duration: 1 }, '<-0.25');
    safeGsapTo(misshTL, contractBRef.current, { x: 20, y: 150, rotation: 5, duration: 1 }, '<-0.25');
    AddStartTL(misshTL, contractARef.current, '>1');
    AddStartTL(misshTL, contractBRef.current, '>0.5');

    safeGsapTo(misshTL, calculatorRef.current, { x: 0, duration: 0.5 }, '>2');
  }, []);

  return (
    <section className="section-missh" ref={sectionRef}>
      <Contract ref={contractARef} contract="1A" highlightIds={[1]} isHighlight={true} />
      <Contract ref={contractBRef} contract="1B" highlightIds={[2, 3]} isHighlight={true} />
      <Calculator ref={calculatorRef} markers={globalmarks} />
      <Phone ref={phoneRef}>
        <PhoneCall ref={phoneCallRef}>
          <div className="call-contact">
            <h3>台新銀行</h3>
            <p>Whoscall</p>
          </div>
          <Dialogs ref={dialogsRef}>
            <div className="dialog Recieve">
              <span>台新銀行</span>
              <p>妳符合貸款資格，想問有沒有興趣了解一下？</p>
            </div>
            <div className="dialog Sent">
              <p>可以先聽聽看</p>
            </div>
            <div className="dialog Recieve">
              <span>台新銀行</span>
              <p>
                我們有提供最高100萬的貸款，利率最低1.88%，還款期限最長5年，10天內快速過件，有興趣可以加入Line聯繫
              </p>
            </div>
            <div className="dialog Sent">
              <p>好的，謝謝</p>
            </div>
            <div className="dialog Recieve">
              <span>台新銀行</span>
              <p>不客氣，有任何問題都可以再聯繫我</p>
            </div>
          </Dialogs>
        </PhoneCall>
        <MessagesApp ref={messagesAppRef} name="涂專員">
          <Messages ref={messagesRef} stagger={0.25}>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg} />
              <p>小姐你好</p>
              <span>17:30</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg} />
              <p>我是剛剛跟你聯絡的徐專員</p>
              <span>17:31</span>
            </div>
            <div className="messageSent">
              <span>17:31</span>
              <p>你好</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg} />
              <p>
                商品貸款🪄👀
                <br />
                最新優惠專案🪄
                <br />
                免拉聯徵不看負債比
                <br />
                審件撥款快速
                <br />
                申辦門低 過件率高
                <br />
                <br />
                ✍️準備資料如下：
                <br />
                1.雙證件正反面
                <br />
                2.近期信用卡帳單明
                <br />
                3.撥款給您的存摺封面
                <br />
                4.信用卡卡面（安全碼碼請遮蔽）
                <br />
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
              <p>（傳空白簽名欄如左側）</p>
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
          ref={notificationRef}
          app="Messages"
          title="涂專員"
          time="17:30"
          message="您好，您申請裕富融資 25 萬汽機車貸款，貸款核定已通過。"
        />
      </Phone>
    </section>
  );
};
