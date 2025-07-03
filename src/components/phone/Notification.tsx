import { useRef, forwardRef, useImperativeHandle, CSSProperties } from 'react';
import { gsap } from 'gsap';
import { TimelineHandle } from '../utility/TimelineHandle';

interface NotificationProps {
  app?: string;
  title?: string;
  time?: string;
  message?: string;
  logoSrc?: string;
  height?: string;
}

export const Notification = forwardRef<
  TimelineHandle,
  NotificationProps
>(({
  app = 'Messages',
  title = '涂專員',
  time = '17:30',
  message = '您好，您申請裕富融資 25 萬汽機車貸款，貸款核定已通過。',
  logoSrc = '',
  height = '100px',
}, ref) => {
  const notificationRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const containerStyle: CSSProperties = {
    width: '115px',
    height: '30px',
    boxShadow: 'inset 2px 2px 5px 0 hsla(0, 0%, 100%, 1)',
  };

  const contentStyle: CSSProperties = {
    display: 'none',
    opacity: 0,
  };

  if (app === 'Messages') {
    logoSrc = './assets/img/logo_message.svg';
  }

  useImperativeHandle(ref, () => ({
    createTimeline: () => {
      const tl = gsap.timeline();
      
      return tl
        .to(notificationRef.current, {
          width: '90%',
          height: height,
          boxShadow: 'inset -3px -3px 10px 0 hsla(0, 0%, 100%, 0.9)',
          duration: 0.5,
          ease: 'power1.out',
        }, 0)
        .to([imgRef.current, contentRef.current], {
          display: 'flex',
          opacity: 1,
          duration: 0.5,
          ease: 'power1.out',
        }, 0.4);
    },
    domElement: notificationRef.current,
  }));

  return (
    <div className="notification" ref={notificationRef} style={containerStyle}>
      <img className="app" src={logoSrc} ref={imgRef} style={contentStyle} />
      <div className="content" ref={contentRef} style={contentStyle}>
        <div className="header">
          <div className="title">{title}</div>
          <div className="time">{time}</div>
        </div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
});
