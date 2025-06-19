import { PhoneIn } from '../shared/PhoneIn';
import { Dialogs } from '../shared/Dialogs';
import { Messages } from '../shared/Messages';
import { Notification } from '../shared/Notification';

export const MisshScene1 = () => {
  return (
    <div className="missh-scene1" style={{ position: 'relative' }}>
      <PhoneIn top="0vh">
        <div className="phone-in-contact">
          <h3>台新銀行</h3>
          <p>Whoscall</p>
        </div>
        <Dialogs>
          <div className="dialogIn">
            <span>台新銀行</span> 
            <p>妳符合貸款資格，想問有沒有興趣了解一下？</p>
          </div>
          <div className="dialogOut">
            <p>可以先聽聽看</p>
          </div>
          <div className="dialogIn">
            <span>台新銀行</span> 
            <p>我們有提供最高100萬的貸款，利率最低1.88%，還款期限最長5年，10天內快速過件，有興趣可以加入Line聯繫</p>
          </div>
          <div className="dialogOut">
            <p>好的，謝謝</p>
          </div>
          <div className="dialogIn">
            <span>台新銀行</span> 
            <p>不客氣，有任何問題都可以再聯繫我</p>
          </div>
        </Dialogs>
      </PhoneIn>
      <Messages top="300vh">
        <div className="messageIn">
          <img className="avatar" src={('./assets/img/avatar_A.svg')} />
          <p>小姐你好</p>
          <span>17:30</span>
        </div>
        <div className="messageIn">
          <img className="avatar blank" src={('./assets/img/avatar_A.svg')} />
          <p>我是剛剛跟你聯絡的徐專員</p>
          <span>17:31</span>
        </div>
        <div className="messageOut">
          <span>17:31</span>
          <p>你好</p>
        </div>
        <div className="messageIn">
          <img className="avatar" src={('./assets/img/avatar_A.svg')} />
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
        <div className="messageIn">
          <img className="avatar blank" src={('./assets/img/avatar_A.svg')} />
          <p>這是我們的方案，給你參考一下</p>
          <span>17:32</span>
        </div>
        <div className="messageOut">
          <span>17:35</span>
          <p>不好意思<br/>所以你們是台新銀行辦理的嗎？</p>
        </div>
      </Messages>
      <Notification top="500vh" />
    </div>
  );
}; 