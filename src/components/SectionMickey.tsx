import { Phone } from './phone/Phone';
import { Calculator } from './calculator/Calculator';
import { Contract } from './document/Contract';
import { Envelope } from './document/Envelope';

export const SectionMickey = () => {
  return (
    <section className="section-mickey">
      <Phone />
      <Calculator markers={true} />
      <Contract markers={true} />
      <Envelope markers={true} />
    </section>
  );
};