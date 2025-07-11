import { useRef, forwardRef, useImperativeHandle, CSSProperties } from 'react';
import { gsap } from 'gsap';
import Flip from 'gsap/Flip';
import { TimelineHandle } from '../utility/TimelineHandle';

interface NotificationProps {
  app?: string;
  title?: string;
  time?: string;
  message?: string;
  logoSrc?: string;
  style?: CSSProperties;
}

gsap.registerPlugin(Flip);

export const Notification = forwardRef<TimelineHandle, NotificationProps>(
  (
    {
      app = 'Messages',
      title = '涂專員',
      time = '17:30',
      message = '您好，您申請裕富融資 25 萬汽機車貸款，貸款核定已通過。',
      logoSrc = '',
      style = {}
    },
    ref
  ) => {
    const notificationRef = useRef<HTMLDivElement>(null);
    const appImgRef = useRef<HTMLImageElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    if (app === 'Messages') {
      logoSrc = 'https://storytelling-storage.twreporter.org/files/logo-message-6SWcHK5x8THX.svg';
    }


    useImperativeHandle(ref, () => ({
      createStartTimeline: () => {
        const tl = gsap.timeline();

        tl.fromTo(
          notificationRef.current,
          { width: '115px', height: '30px',
            backgroundColor: 'hsla(0, 0%, 90%, 0.3)',
            boxShadow: 'inset 2px 2px 5px 0 hsla(0, 0%, 100%, 1)',
            zIndex: 5,
          },
          { width: '90%', height: 'auto',
            backgroundColor: 'hsla(0, 0%, 90%, 0.95)',
            boxShadow: 
            'inset -5px -5px 15px 0 hsla(0, 0%, 100%, 0.7), 3px 3px 10px 0 hsla(0, 0%, 0%, 0.05)',
            zIndex: 6,
          },
          '<'
        ).fromTo(
          [appImgRef.current, contentRef.current],
          { opacity: 0 },
          { opacity: 0.9, duration: 0.5, ease: 'power1.out' },
          '<0.5'
        ).fromTo(
          [appImgRef.current, contentRef.current],
          { overflow: 'hidden', whiteSpace: 'nowrap' },
          { overflow: 'visible', whiteSpace: 'normal' },
          '<'
        ).fromTo(
          notificationRef.current,
          { width: '90%', height: 'auto' },
          { width: '115px', height: '30px',
            backgroundColor: 'hsla(0, 0%, 90%, 0.3)',
            boxShadow: 'inset 2px 2px 5px 0 hsla(0, 0%, 100%, 1)',
            zIndex: 5 },
          '>2'
        ).fromTo(
          [appImgRef.current, contentRef.current],
          { opacity: 0.9 },
          { opacity: 0, duration: 0.5, ease: 'power1.out' },
          '<-0.5'
        );
        return tl;
      },

      createEndTimeline: () => {
        const tl = gsap.timeline();
        if (!notificationRef.current) return tl;
        return tl;
      },

      domElement: notificationRef.current,
    }));

    return (
      <div className="notification" ref={notificationRef} style={style}>
        <img className="app" src={logoSrc} ref={appImgRef} />
        <div className="content" ref={contentRef}>
          <div className="header">
            <div className="title">{title}</div>
            <div className="time">{time}</div>
          </div>
          <div className="message">{message}</div>
        </div>
      </div>
    );
  }
);
