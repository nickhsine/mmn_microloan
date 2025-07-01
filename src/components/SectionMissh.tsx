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

  const messageAvatarImg = "./assets/img/avatar_A.svg";

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-missh",
        start: "top top",
        end: "bottom center",
        scrub: 1,
        pin: phoneRef.current,
        markers: true,
      }
    });
    tl.to(phoneRef.current, { x: 50, duration: 1 })
      .to(contractRef.current, { x: 100, duration: 0 }, "-=0.5")
      .to(calculatorRef.current, { x: 100, duration: 0 }, "-=0.5");
  }, []);

  return (
    <section className="section-missh">
      <Phone ref={phoneRef}>
        <Call markers={true} start="0vh" end="600vh">
            <div className="call-contact">
            <h3>台新銀行</h3>
            <p>Whoscall</p>
            </div>
            <Dialogs markers={true} start="0vh" end="300vh">
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
        <MessagesApp markers={true} name="涂專員" start="620vh" end="3000vh" >
            <Messages 
              markers={true} 
              start="580vh" 
              end="2700vh" 
              scrollDistance={300}
              pausePoints={[
                { index: 4, resumeAt: "1500vh" },
                { index: 7, resumeAt: "2000vh" },
                { index: 12, resumeAt: "2500vh" }
              ]}>
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
                    <img className="avatar blank" src={messageAvatarImg} />
                    <p>這是我們的方案，給你參考一下</p>
                    <span>17:32</span>
                </div>
                <div className="messageSent">
                    <span>17:40</span>
                    <p>不好意思<br/>所以你們是台新銀行辦理的嗎？</p>
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
        <Notification markers={true} start="2700vh" end="3000vh"
            app="Messages" 
            title="涂專員" 
            time="17:30" 
            message="您好，您申請裕富融資 25 萬汽機車貸款，貸款核定已通過。" 
        />
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