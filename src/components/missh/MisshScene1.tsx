import { AudioPlayer } from '../shared/AudioPlayer';
import { PhoneIn } from '../shared/PhoneIn';
import { Message } from '../shared/Message';
import { Notification } from '../shared/Notification';

export const MisshScene1 = () => {
  return (
    <div className="missh-scene1">
      <PhoneIn>
        <div className="phone-in-contact">
          <h3>台新銀行</h3>
          <p>Whoscall</p>
        </div>
        <div className="phone-in-conversation">
          <p>台新銀行 : 妳符合貸款資格，想問有沒有興趣了解一下？</p>
          <p>H小姐 : 先聽聽看</p>
          <p>台新銀行 : 我們有提供最高100萬的貸款，利率最低1.88%，還款期限最長5年，10天內快速過件，有興趣可以加入Line聯繫</p>
          <p>H小姐 : 好的，謝謝</p>
          <p>台新銀行 : 不客氣，有任何問題都可以再聯繫我</p>
        </div>
      </PhoneIn>
      <Message />
      <Notification />
    </div>
  );
}; 