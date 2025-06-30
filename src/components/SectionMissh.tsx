import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Phone } from './phone/Phone';
import { Call } from './phone/Call';
import { Dialogs } from './phone/Dialogs';
import { MessagesApp } from './phone/MessagesApp';
import { Messages } from './phone/Messages';
import { Notification } from './phone/Notification';
import { Contract } from './document/Contract';
import { Calculator } from './calculator/Calculator';

export const SectionMissh = () => {
  const phoneRef = useRef(null);
  const contractRef = useRef(null);
  const calculatorRef = useRef(null);
  const callRef = useRef(null);
  const messagesAppRef = useRef(null);
  const notificationRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set([callRef.current, messagesAppRef.current, notificationRef.current], { opacity: 0 });

    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-missh",
        start: "top top",
        end: "bottom center",
        scrub: 1,
        pin: phoneRef.current,
        markers: true,
      }
    });
    mainTl
      .to(phoneRef.current, { x: 500, duration: 1 })
      .to(contractRef.current, { x: 100, duration: 0 }, "-=0.5")
      .to(calculatorRef.current, { x: 100, duration: 0 }, "-=0.5");

    const phoneComponentsTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-missh",
        start: "top top",
        end: "bottom center",
        scrub: 1,
        markers: true,
      }
    });
    phoneComponentsTl
      .to(callRef.current, { opacity: 1, duration: 0.5 }, 0)
      .to(callRef.current, { opacity: 0 }, 1)
      .fromTo(messagesAppRef.current, { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 0.5 }, 1)
      .fromTo(notificationRef.current, { opacity: 0, y: 20 }, { opacity: 0, y: 0, duration: 1 }, 5);

  }, []);

  return (
    <section className="section-missh">
      <Phone ref={phoneRef}>
        <Call ref={callRef} markers={true} top="0vh">
            <div className="call-contact">
            <h3>台新銀行</h3>
            <p>Whoscall</p>
            </div>
            <Dialogs markers={true}>
                <div className="dialog Recieve">
                    <span>台新銀行</span> 
                    <p>妳符合貸款資格，想問有沒有興趣了解一下？</p>
                </div>
                <div className="dialog Sent">
                    <p>可以先聽聽看</p>
                </div>
                <div className="dialog Recieve">
                    <span>台新銀行</span> 
                    <p>我們有提供最高100萬的貸款，利率最低1.88%，還款期限最長5年，10天內快速過件，有興趣可以加入Line聯繫</p>
                </div>
                <div className="dialog Sent">
                    <p>好的，謝謝</p>
                </div>
                <div className="dialog Recieve">
                    <span>台新銀行</span> 
                    <p>不客氣，有任何問題都可以再聯繫我</p>
                </div>
            </Dialogs>
        </Call>
        <Notification ref={notificationRef} markers={true} />
        <MessagesApp ref={messagesAppRef} name="涂專員">
          <Messages markers={true} top="100vh">
            <div className="messageRecieve">
              <img className="avatar" src="./assets/img/avatar_A.svg" />
              <p>小姐你好</p>
              <span>17:30</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src="./assets/img/avatar_A.svg" />
              <p>我是剛剛跟你聯絡的徐專員</p>
              <span>17:31</span>
            </div>
            <div className="messageSent">
              <span>17:31</span>
              <p>你好</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src="./assets/img/avatar_A.svg" />
              <p>
                商品貸款🪄👀<br/>
                最新優惠專案🪄<br/>
                免拉聯徵不看負債比<br/>
                審件撥款快速<br/>
                申辦門低 過件率高<br/><br/>
                ✍️準備資料如下：<br/>
                1.雙證件正反面<br/>
                2.近期信用卡帳單明<br/>
                3.撥款給您的存摺封面<br/>
                4.信用卡卡面（安全碼碼請遮蔽）<br/>
                5.健保明細
              </p>
              <span>17:32</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src="./assets/img/avatar_A.svg" />
              <p>這是我們的方案，給你參考一下</p>
              <span>17:32</span>
            </div>
            <div className="messageSent">
              <span>17:35</span>
              <p>不好意思<br/>所以你們是台新銀行辦理的嗎？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src="./assets/img/avatar_A.svg" />
              <p>
                商品貸款🪄👀<br/>
                最新優惠專案🪄<br/>
                免拉聯徵不看負債比<br/>
                審件撥款快速<br/>
                申辦門低 過件率高<br/><br/>
                ✍️準備資料如下：<br/>
                1.雙證件正反面<br/>
                2.近期信用卡帳單明<br/>
                3.撥款給您的存摺封面<br/>
                4.信用卡卡面（安全碼碼請遮蔽）<br/>
                5.健保明細
              </p>
              <span>17:32</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src="./assets/img/avatar_A.svg" />
              <p>這是我們的方案，給你參考一下</p>
              <span>17:32</span>
            </div>
          </Messages>
        </MessagesApp>
      </Phone>
      <div ref={contractRef}>
        <Contract markers={true} />
      </div>
      <div ref={calculatorRef}>
        <Calculator markers={true} />
      </div>
    </section>
  );
};