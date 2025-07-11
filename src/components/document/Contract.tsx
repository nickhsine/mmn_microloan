import { useRef, forwardRef, useImperativeHandle, useId } from 'react';
import { gsap } from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';
import { useGSAP } from '@gsap/react';
import Draggable from 'gsap/Draggable';

interface ContractProps {
  contract?: string;
  stagger?: number;
  contractSrc?: string;
  contractSrc_HL?: string[];
}

export const Contract = forwardRef<TimelineHandle, ContractProps>(
  ({ contract = '1B', stagger = 2, contractSrc, contractSrc_HL }, ref) => {
    const contractRef = useRef<HTMLDivElement>(null);
    const uniqueId = useId();

    if (contract === '1A') {
      contractSrc = `https://storytelling-storage.twreporter.org/files/contract1A-dgBiLWKE-yjr.svg`;
      contractSrc_HL = [`https://storytelling-storage.twreporter.org/files/contract1A-HL1-ICg32cPmcvsl.svg`];
    } else if (contract === '1B') {
      contractSrc = `https://storytelling-storage.twreporter.org/files/contract1B-qh-koTyAB8IR.svg`;
      contractSrc_HL = [
        `https://storytelling-storage.twreporter.org/files/contract1B-HL1-uDegw-pqOjxG.svg`, 
        `https://storytelling-storage.twreporter.org/files/contract1B-HL2-CjUccYyDzbgM.svg`
      ];
    } else if ( contract === '1C1') {
      contractSrc = `https://storytelling-storage.twreporter.org/files/contract1C1-NeQsHBYAwsS6.svg`;
    } else if ( contract === '1C2') {
      contractSrc = `https://storytelling-storage.twreporter.org/files/contract1C2-XzqKI7dzl_tZ.svg`;
    } else if (contract === '2A') {
      contractSrc = `https://storytelling-storage.twreporter.org/files/contract2A-NxE7UARit7LK.svg`;
    } else {
      console.log('contract not found');
    }

    useGSAP(
      () => {
        gsap.registerPlugin(Draggable);
  
        if (!contractRef.current) return;

        Draggable.create(contractRef.current, {
          type: 'x,y',
          inertia: true,
          zIndexBoost: false,
        });
      },
      { scope: contractRef }
    );

    useImperativeHandle(ref, () => ({
      createStartTimeline: () => {
        const tl = gsap.timeline();
        if (contractRef.current) {
          tl.to(contractRef.current.querySelectorAll('.contract-highlight'), {
            opacity: 1,
            duration: 0.5,
            stagger: stagger,
          });
        }
        return tl;
      },
      domElement: contractRef.current,
    }));
    if (contractSrc_HL && contractSrc_HL.length > 0) {
      return (
        <div className="contract-container" ref={contractRef} data-contract-id={uniqueId}>
          {contractSrc_HL?.map((src, index) => (
            <img
              key={`${contract}-hl-${index}`}
              src={src}
              className="contract-highlight"
              alt={`contract highlight ${index}`}
              style={{ zIndex: index + 1 }}
            />
          ))}
          <img src={contractSrc} className="contract" alt="contract" />
        </div>
      );
    } else {
      return (
        <div className="contract-container" ref={contractRef} data-contract-id={uniqueId}>
          <img src={contractSrc} className="contract" alt="contract" />
        </div>
      );
    }
  }
);
