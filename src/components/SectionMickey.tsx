import { Phone } from './phones/Phone';
import { Calculator } from './calculators/Calculator';
import { Contract } from './documents/Contract';
import { Envelope } from './documents/Envelope';

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