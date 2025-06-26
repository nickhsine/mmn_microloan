import { Caption } from './text/Caption';
import { SectionLanding } from './SectionLanding';
import { SectionMissh } from './SectionMissh';
import { SectionMickey } from './SectionMickey';
import '../styles/calculator.css';
import '../styles/contract.css';
import '../styles/phone.css';

export const ScrollAnimationApp = () => {
  return (
    <div className="scroll-animation-app">
      <Caption markers={false} />
      <SectionLanding />
      <SectionMissh />
      <p className="brief">
      不只Ｈ小姐一人，許多急需用錢和負債累累的人，很常遇到債務越滾越大的處境。<br/>
      許多深陷債務的人，時常因龐大的壓力狀態，失去自己的判斷力。也可能原本金融素養較不足，不明白合約中的專有名詞，也在緊迫的時間壓力下，簽下對自己並平等的合約。而融資公司，也會利用這種急需用錢的心力壓力，在求助銀行等正規管道無門下，就此趁虛而入。
      </p>
      <SectionMickey />
    </div>
  );
}; 