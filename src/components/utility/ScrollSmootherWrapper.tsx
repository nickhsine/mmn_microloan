import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 註冊 GSAP 插件
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

interface ScrollSmootherWrapperProps {
  children: React.ReactNode;
}

// 檢測是否為行動裝置的函數
const isMobile = () => {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.innerWidth <= 768 ||
    'ontouchstart' in window
  );
};

export const ScrollSmootherWrapper = ({ children }: ScrollSmootherWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let smoother : ScrollSmoother
    if (wrapperRef.current && !isMobile()) {
     smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 2,
        effects: true,
        normalizeScroll: false,
        onUpdate: () => {
          if (smoother) {
            const scrollY = smoother.scrollTop();
            const maxScroll = smoother.content().offsetHeight - window.innerHeight;

            console.log({
              scrollY,
              maxScroll,
            })
            if (scrollY >= maxScroll) {
              //smoother.paused(true); // or smoother.kill();
              document.getElementById('smooth-wrapper').style.position = 'relative';
              document.getElementById('smooth-content').style.transform = '';
              document.body.classList.remove('scroll-lock-multimedia-loadcrsis');
            } else {
              document.getElementById('smooth-wrapper').style.position = 'fixed';
              document.body.classList.add('scroll-lock-multimedia-loadcrsis');
            }
          }
        }
      });
    }

    return () => {
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef} style={{backgroundColor: '#f1f1f1'}}>
      <div id="smooth-content">{children}</div>
    </div>
  );
};
