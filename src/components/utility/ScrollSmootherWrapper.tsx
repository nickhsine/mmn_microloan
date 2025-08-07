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

            const scrollBuffer = 100
            if (scrollY >= maxScroll - scrollBuffer) {
              //smoother.paused(true); // or smoother.kill();
              const wrapper = document.getElementById('smooth-wrapper');
              const content = document.getElementById('smooth-content');
              if (wrapper) wrapper.style.position = 'relative';
              if (content) content.style.transform = '';
              document.body.classList.remove('scroll-lock-multimedia-loadcrsis');
            } else {
              const wrapper = document.getElementById('smooth-wrapper');
              if (wrapper) wrapper.style.position = 'fixed';
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
