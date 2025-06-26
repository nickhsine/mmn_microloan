import { Phone } from './phone/Phone';
import { Calls } from './phone/Calls';
import { Dialogs } from './phone/Dialogs';
import { Messages } from './phone/Messages';
import { Notification } from './phone/Notification';
import { Contract } from './document/Contract';
import { Calculator } from './calculator/Calculator';

export const SectionMissh = () => {
  return (
    <section className="section-missh">
        {/* Set All content and time/top Here */}
        <Phone markers={true}>
            <Calls markers={true}>
                <Dialogs markers={true} />
            </Calls>
            <Notification markers={true} />
            <Messages markers={true} />
        </Phone>
        <Contract markers={true} />
        <Calculator markers={true} />
    </section>
  );
};