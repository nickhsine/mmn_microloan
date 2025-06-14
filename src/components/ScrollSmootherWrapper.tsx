import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 註冊 GSAP 插件
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

interface ScrollSmootherWrapperProps {
  children: React.ReactNode;
}

export const ScrollSmootherWrapper = ({ children }: ScrollSmootherWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      // 創建 ScrollSmoother 實例
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 2,
        effects: true,
      });
    }

    // 清理函數
    return () => {
      ScrollSmoother.get()?.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}; 