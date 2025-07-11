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
import useWindowDimensions from './utility/useWindowDimensions';

export const SectionMickey = forwardRef<gsap.core.Timeline>((_, ref) => {
  const { width } = useWindowDimensions();
  const globalmarks = false;
  const messageAvatarImg_1 = './assets/img/avatar_B.svg';
  const messageAvatarImg_2 = './assets/img/avatar_C.svg';

  const sectionRef = useRef<HTMLElement | null>(null);
  const briefRefD = useRef<TimelineHandle | null>(null);
  const briefRefL = useRef<TimelineHandle | null>(null);
  const briefRefD_2 = useRef<TimelineHandle | null>(null);
  const briefRefL_2 = useRef<TimelineHandle | null>(null);
  const contractARef = useRef<TimelineHandle | null>(null);

  const phoneRef = useRef<TimelineHandle | null>(null);
  const phoneStaticRef_1 = useRef<TimelineHandle | null>(null);
  const phoneStaticRef_2 = useRef<TimelineHandle | null>(null);
  // const phoneCallRef = useRef<TimelineHandle | null>(null);
  // const dialogsRef = useRef<TimelineHandle | null>(null);
  const notificationRef_1 = useRef<TimelineHandle | null>(null);
  const notificationRef_2 = useRef<TimelineHandle | null>(null);
  const messagesAppRef_1 = useRef<TimelineHandle | null>(null);
  const messagesRef_1 = useRef<TimelineHandle | null>(null);
  const messagesAppRef_2 = useRef<TimelineHandle | null>(null);
  const messagesRef_2 = useRef<TimelineHandle | null>(null);
  // const messagesRef_3 = useRef<TimelineHandle | null>(null);
  // const messagesRef_4 = useRef<TimelineHandle | null>(null);
  // const messagesRef_5 = useRef<TimelineHandle | null>(null);

  // const calculatorRef = useRef<TimelineHandle | null>(null);
  // // detailsRef
  // const detailsRef_1 = useRef<TimelineHandle | null>(null);
  // const detailsRef_2 = useRef<TimelineHandle | null>(null);
  // const detailsRef_3 = useRef<TimelineHandle | null>(null);
  // const detailsRef_4 = useRef<TimelineHandle | null>(null);
  // const detailsRef_5 = useRef<TimelineHandle | null>(null);
  // const detailsRef_6 = useRef<TimelineHandle | null>(null);
  // const detailsRef_7 = useRef<TimelineHandle | null>(null);
  // // highlightRef
  // const highlightUpdateRef_1 = useRef<TimelineHandle | null>(null);
  // const highlightUpdateRef_1T = useRef<TimelineHandle | null>(null);
  // const highlightUpdateRef_2 = useRef<TimelineHandle | null>(null);
  // const highlightUpdateRef_2T = useRef<TimelineHandle | null>(null);
  // const highlightUpdateRef_3 = useRef<TimelineHandle | null>(null);
  // const highlightUpdateRef_4 = useRef<TimelineHandle | null>(null);
  // const highlightUpdateRef_5 = useRef<TimelineHandle | null>(null);
  // const highlightUpdateRef_6 = useRef<TimelineHandle | null>(null);
  // const highlightUpdateRef_7 = useRef<TimelineHandle | null>(null);
  // const highlightUpdateRef_8 = useRef<TimelineHandle | null>(null);
  // const highlightUpdateRef_9T = useRef<TimelineHandle | null>(null);
  // const highlightUpdateRef_9 = useRef<TimelineHandle | null>(null);
  // const highlightUpdateRef_10 = useRef<TimelineHandle | null>(null);
  // const highlightUpdateRef_11 = useRef<TimelineHandle | null>(null);
  // const highlightUpdateRef_12 = useRef<TimelineHandle | null>(null);
  // // resultRef
  // const resultRef_1a = useRef<TimelineHandle | null>(null);
  // const resultRef_1b = useRef<TimelineHandle | null>(null);
  // const resultRef_2a = useRef<TimelineHandle | null>(null);
  // const resultRef_2b = useRef<TimelineHandle | null>(null);
  // const resultRef_3 = useRef<TimelineHandle | null>(null);
  // const resultRef_4 = useRef<TimelineHandle | null>(null);
  // const resultRef_5 = useRef<TimelineHandle | null>(null);
  // const resultRef_6 = useRef<TimelineHandle | null>(null);
  // const resultRef_7 = useRef<TimelineHandle | null>(null);

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

    let phone_Yoffset: number, 
        contract_Xoffset: number, 
        contract_Yoffset: number;

    if (width < 768) {
      phone_Yoffset = 0;
      contract_Xoffset = -25;
      contract_Yoffset = 5;
    } 
    else if (width < 1024) {
      phone_Yoffset = 5;
      contract_Xoffset = -25;
      contract_Yoffset = 5;
    } 
    else if (width < 2048) {
      phone_Yoffset = 5;
      contract_Xoffset = 0;
      contract_Yoffset = 5;
    } 
    else {
      phone_Yoffset = 0;
      contract_Xoffset = 0;
      contract_Yoffset = 5;
    }


    // INITIAL STATE 
    RefFromTo(mickeyTL, phoneRef.current, 
      { x: '50vw', y: '100vh', rotation: 0 }, 
      { x: '50vw', y: '100vh', rotation: 20, duration: 0.5 }, 0
    );
    RefFromTo(mickeyTL, contractARef.current, 
      { x: 0, y: '-100vh', rotation: 90 }, 
      { x: 0, y: '-100vh', rotation: 90, duration: 0.5 }, 0
    );
    RefFromTo(mickeyTL, messagesAppRef_1.current, 
      { opacity: 0 },  { opacity: 0 }, 0
    );

    // Animation Time Positioning
    AddStartTL(mickeyTL, briefRefD.current, '<-5');
    AddStartTL(mickeyTL, briefRefL.current, '>10');
    RefFromTo(mickeyTL, briefRefD.current, 
      { color: 'var(--color-gray-50)' }, 
      { color: 'var(--color-gray-800)', duration: 1 }, 
      '<2'
    );
    RefFromTo(mickeyTL, briefRefL.current, 
      { color: 'var(--color-gray-900)' }, 
      { color: 'var(--color-gray-300)', duration: 1 }, 
      '>5'
    );
    AddStartTL(mickeyTL, telepromterRef_1.current, '>');
    AddNoScrubTL(mickeyTL, telepromterRef_1.current, '>');
    AddEndTL(mickeyTL, telepromterRef_1.current, '>4');
    
    AddEndTL(mickeyTL, briefRefD.current, '<2');
    AddEndTL(mickeyTL, briefRefL.current, '>');

    RefFromTo(mickeyTL, phoneRef.current, 
      { x: '50vw', y: '100vh', rotation: 20 }, 
      { x: 0, y: `${phone_Yoffset}vh`, rotation: 0, duration: 1 }, 
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
      { x: 0, y: '-100vh', rotation: 90 }, 
      { x: `${contract_Xoffset}vw`, y: `${contract_Yoffset}vh`, rotation: 3, duration: 2 }, '>2'
    );

    AddEndTL(mickeyTL, messagesAppRef_1.current, '>1');
    AddEndTL(mickeyTL, messagesRef_1.current, '>1');
    AddStartTL(mickeyTL, notificationRef_2.current, '<');
    AddStartTL(mickeyTL, messagesAppRef_2.current, '>');
    AddStartTL(mickeyTL, messagesRef_2.current,  '<');

    AddStartTL(mickeyTL, telepromterRef_2.current, '<30');
    AddNoScrubTL(mickeyTL, telepromterRef_2.current, '>');
    AddEndTL(mickeyTL, telepromterRef_2.current, '>4');

    AddStartTL(mickeyTL, briefRefD_2.current, '>50');
    AddStartTL(mickeyTL, briefRefL_2.current, '>4');

    if (ref && typeof ref !== 'function') {
      ref.current = mickeyTL;
    }
  }, []);

  return (
    <section className="section-mickey" ref={sectionRef}>
      <Brief ref={briefRefD} type="dark">
        <p>不只Ｈ小姐一人，當面臨資金短缺或債務纏身，許多人都可能陷入「愈借愈多」的惡性循環。處於高度壓力下的債務人，往往失去冷靜判斷的能力，甚至未充分理解貸款條件與合約內容，就在緊迫的時間壓力中倉促簽約。</p>
        <p>融資業者與代辦公司則可能利用這樣的脆弱時刻，在借款人無法自正規管道取得資金時介入，提供表面誘人的方案，實際卻伴隨高額費用與不對等條件，使債務問題進一步惡化。</p>
      </Brief>
      <Brief ref={briefRefL} type="light">
        <p>米奇的故事，揭開另一種常見的債務陷阱。他身上累積多筆卡債與信貸，將近80萬元債務需要還清。因業績制工作月薪浮動，每月只能勉強以「最低繳款金額」償還，然而債務卻隨著循環利率愈滾愈大。</p>
        <p>在收入不穩、壓力不斷的情況下，他每天醒來的第一個念頭就是：「還有哪一筆要繳？」</p>
        <p>他也開始尋找所謂的「債務整合」，希望能盡早將債務還清、重啟生活。但不知道，等待他的不是出路，而是一道更深的債務陷阱……</p>
      </Brief>
      <Contract ref={contractARef} contract="2A" isHighlight={false} />

      <Phone ref={phoneRef}>
        <PhoneStatic ref={phoneStaticRef_1} src="./assets/img/facebook_layout_all.png" />
        <PhoneStatic ref={phoneStaticRef_2} src="./assets/img/web_consult.png" />
        <Notification
          ref={notificationRef_1}
          app="Messages"
          title="何小姐（規劃顧問）"
          time="16:30"
          message="您好，我是方才有向您聯繫的何小姐。再請您先將資料補上喔！這邊有為您卡件。"
        ></Notification>
        <MessagesApp ref={messagesAppRef_1} name="何小姐（規劃顧問）">
          <Messages ref={messagesRef_1} stagger={1.5}>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_1} />
              <p>您好，我是方才有向您聯繫的何小姐。再請您先將資料補上喔！這邊有為您卡件。</p>
              <span>16:30</span>
            </div>
            <div className="messageSent">
              <span>16:31</span>
              <img className="photo" src="./assets/img/messageImg_2A.png" />
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_1} />
              <p>https://crm.worldbank.com.tw/ admin……簽約系統</p>
              <span>16:32</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg_1} />
              <p>這邊是委託書合約，裡面有內容和費用請您確認完沒問題下方都有簽名處。有問題可以詢問我，謝謝您。</p>
              <span>16:35</span>
            </div>
          </Messages>
        </MessagesApp>
        <MessagesApp ref={messagesAppRef_2} name="鍾先生（理財專員）">
          <Messages ref={messagesRef_2} stagger={1.5}>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>您好，我是理財專員鍾先生，協助你處理後續事宜。</p>
              <span>17:10</span>
            </div>
            <div className="messageSent">
              <span>17:13</span>
              <p>想問「債務整合」有機會幫我與銀行協商在7年每月付5,000元嗎？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>我們會盡全力試試看。</p>
              <span>17:30</span>
            </div>
            <div className="messageSent">
              <span>17:32</span>
              <p>過件機率有多大？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>先等我消息喔</p>
              <span>17:55</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg_2} />
              <p>這邊先幫你申請中租機車專案，金額10萬分36期，照會詢問，就說透過簡訊自行申辦，不可以提到（代辦公司），千萬記得提到會直接退掉。名下信用卡，說只有一張，信貸不要提到。資金用途說購買家具。</p>
              <span>17:56</span>
            </div>
            <div className="messageBlank" />
            <div className="messageBlank" />
            <div className="messageBlank" />
            <div className="messageDate">7月11日 [ 四 ]</div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>今天會撥款喔，對保費5,500，公司先幫你代墊，等等連同服務費一起匯給我們就好。</p>
              <span>10:30</span>
            </div>
            <div className="messageSent">
              <span>10:31</span>
              <p>好的</p>
            </div>
            <div className="messageSent">
              <span>12:30</span>
              <p>（入帳截圖）</p>
            </div>
            <div className="messageSent">
              <span>12:31</span>
              <p>收到款項了</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg_2} />
              <p>好的，我們公司服務費＋對保費，麻煩等等幫我匯款一下喔。</p>
              <span>12:32</span>
            </div>
            <div className="messageSent">
              <span>12:40</span>
              <p>請問是匯5,500嗎？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>公司服務費15,000＋對保費5,500，總共是20,500元。</p>
              <span>12:45</span>
            </div>
            <div className="messageSent">
              <span>13:01</span>
              <p>你們沒有說服務費15,000元啊</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <img className="photo" src="./assets/img/messageImg_2C.svg" style={{ width: '100px', boxShadow: 'none' }} />
              <span>13:01</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg_2} />
              <p>當初您跟何小姐簽約時，不是有和您說過我們有服務費嗎？</p>
              <span>13:02</span>
            </div>
            <div className="messageBlank" />
            <div className="messageBlank" />
            <div className="messageBlank" />
            <div className="messageDate">7月12日 [ 五 ]</div>
            <div className="messageSent">
              <span>08:06</span>
              <p>後續服務費大約是多少，可以先讓我知道嗎？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>先麻煩你幫我確認，你目前所有的貸款數字，週一給你消息。</p>
              <span>11:13</span>
            </div>
            <div className="messageSent">
              <span>11:14</span>
              <p>如果不要辦是不是就不會收服務費？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <img className="photo" src="./assets/img/messageImg_2C.svg" style={{ width: '100px', boxShadow: 'none' }}/>
              <span>17:10</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg_2} />
              <p>您先等我週一和主管開會後再回覆您</p>
              <span>17:11</span>
            </div>
            <div className="messageBlank" />
            <div className="messageBlank" />
            <div className="messageBlank" />
            <div className="messageDate">7月15日 [ 一 ]</div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>當初何小姐就有和您說，會有服務費產生。您不處理的話，我們這邊必須聯繫法務。</p>
              <span>15:42</span>
            </div>
            <div className="messageSent">
              <span>15:42</span>
              <p>......</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>這筆服務費，比您名下目前信用卡債務還輕鬆。</p>
              <span>15:45</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg_2} />
              <p>你三張信用卡，一張年利率15%</p>
              <span>15:45</span>
            </div>
            <div className="messageRecieve">
              <img className="avatar blank" src={messageAvatarImg_2} />
              <p>三張年利率就45%了。</p>
              <span>15:45</span>
            </div>
            <div className="messageBlank" />
            <div className="messageBlank" />
            <div className="messageBlank" />
            <div className="messageBlank" />
            <div className="messageBlank" />
            <div className="messageBlank" />
            <div className="messageBlank" />
            <div className="messageDate">10月21日 [ 一 ]</div>
            <div className="messageSent">
              <span>10:30</span>
              <p>您好，我之前有跟你們申請協助財務協商，銀行剛剛打來照會，跟我說要120期月付金10,586，這樣子等同於我要多付40幾萬。</p>
            </div>
            <div className="messageSent">
              <span>10:31</span>
              <p>你不是跟我說只要7年月付金5,000多就好了嗎？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>壓不下來</p>
              <span>16:14</span>
            </div>
            <div className="messageSent">
              <span>16:15</span>
              <p>太扯了</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>我們也很盡力去爭取</p>
              <span>17:20</span>
            </div>
            <div className="messageSent">
              <span>17:20</span>
              <p>你們家服務費那麼高，結果還那麼貴</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>還是依銀行審核為主</p>
              <span>17:21</span>
            </div>
            <div className="messageSent">
              <span>17:22</span>
              <p>那我就不需要協商了</p>
            </div>
            <div className="messageSent">
              <span>17:23</span>
              <p>之前的費用可以申請退費嗎？</p>
            </div>
            <div className="messageRecieve">
              <img className="avatar" src={messageAvatarImg_2} />
              <p>我們的契約書裡面有載明費用沒辦法退喔。</p>
              <span>17:24</span>
            </div>
          </Messages>
        </MessagesApp>
        <Notification
          ref={notificationRef_2}
          app="Messages"
          title="鍾先生（理財專員）"
          time="17:10"
          message="您好，我是理財專員鍾先生，協助你處理後續事宜。"
        ></Notification>
      </Phone>
      <Telepromter ref={telepromterRef_1} 
        audioSrc="./assets/audio/米奇：掉入深淵.aac"
        stagger={0.2}>
        <p className="telepromter-speaker">米奇（聲音經過變聲處理）</p>
        <p className="telepromter-script">
          我當時只是，單純想要趕快把債務做一個總整理。殊不知...... 就是跳入到萬劫不復的深淵。
        </p>
      </Telepromter>
      <Telepromter ref={telepromterRef_2} 
        audioSrc="./assets/audio/米奇：一些些服務費原來這麼多.aac"
        stagger={0.2}>
        <p className="telepromter-speaker">米奇（聲音經過變聲處理）</p>
        <p className="telepromter-script">
          他們算是代辦公司說，他可以幫我去做債務的統籌整理，但他們可能會收取一些些服務費。他只有說一些些，我不知道原來服務費要到這麼多。
        </p>
      </Telepromter>
      <Brief ref={briefRefD_2} type="dark" style={{ width: '300px' }}>
        <p>鍾先生在電話說</p>
        <p>你總不可能請律師打官司，但最後官司敗訴，還要求律師費要退費吧？我們協商失敗還是要付服務費。</p>
      </Brief>
      <Brief ref={briefRefL_2} type="light">
        <p>協商不成，平白無故多出一筆 13 萬元負債。由於每天收到「第一國際」的催債電話，米奇生活費僅剩的餘額，全都拿來償還融資公司，沒有餘力償還本來就積欠的卡債與信貸，遲遲無法繳清原有債務，現在遭到銀行威脅抵押父親的靈骨塔。</p>
      </Brief>
    </section>
  );
});
