import { Phone } from './phone/Phone';
import { Calculator } from './calculator/Calculator';
import { Contract } from './document/Contract';
import { ContractDOM } from './document/ContractDOM';
import { Envelope } from './document/Envelope';

export const SectionMickey = () => {
  const globalmarks = false;
  return (
    <section className="section-mickey">
      <Phone />
      <Calculator markers={globalmarks} />
      <ContractDOM markers={globalmarks} contractSrc="./assets/img/contract_1B.svg" highlightId="Highlight3"/>
      <Envelope markers={globalmarks} />
    </section>
  );
};
