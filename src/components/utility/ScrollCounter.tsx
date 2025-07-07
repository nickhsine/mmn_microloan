import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollCounter = () => {
  const [scrollData, setScrollData] = useState({
    vhPosition: 0,
    percentage: 0,
    pixelPosition: 0,
    viewportHeight: 0,
  });
  const [isCollapsed, setIsCollapsed] = useState(true);

  const counterRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const updateScrollData = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      const totalHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      const maxScroll = totalHeight - viewportHeight;
      const vhPosition = (scrollTop / viewportHeight) * 100;
      const percentage = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

      setScrollData({
        vhPosition,
        percentage,
        pixelPosition: scrollTop,
        viewportHeight,
      });

      // 更新進度條
      if (progressBarRef.current) {
        gsap.set(progressBarRef.current, {
          scaleX: percentage / 100,
          transformOrigin: 'left center',
        });
      }
    };

    // 創建 ScrollTrigger
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: updateScrollData,
      onRefresh: updateScrollData,
    });

    // 初始化
    updateScrollData();

    // 監聽視窗大小變化
    const handleResize = () => updateScrollData();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={counterRef}
      onClick={() => setIsCollapsed(!isCollapsed)}
      style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 9999,

        background: 'hsla(0, 0%, 100%, 0.5)',
        backdropFilter: 'blur(10px)',
        border: '1px solid hsla(0, 0%, 0%, 0.1)',
        borderRadius: isCollapsed ? '12px' : '8px',

        padding: isCollapsed ? '7px 9px' : '12px 16px',
        minWidth: isCollapsed ? 'auto' : '160px',
        width: isCollapsed ? 'auto' : 'auto',
        height: isCollapsed ? 'auto' : 'auto',

        color: 'hsla(0, 0%, 0%, 0.5)',
        fontSize: '12px',
        userSelect: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
      }}
    >
      {isCollapsed ? (
        /* 小方塊狀態 - 只顯示 VH 數字 */
        <div
          style={{
            fontSize: '8px',
            fontWeight: 'bold',
            color: '#ffa500',
            textAlign: 'center',
            lineHeight: '1',
          }}
        >
          {Math.round(scrollData.vhPosition)}
        </div>
      ) : (
        <>
          {/* 主要顯示 - VH 位置 */}
          <div
            style={{
              marginBottom: '8px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#ffa500' }}>
              {scrollData.vhPosition.toFixed(1)} VH
            </div>
          </div>

          {/* 詳細資訊 */}
          <div style={{ fontSize: '11px', lineHeight: '1.4' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
              <span style={{ opacity: 0.7 }}>百分比:</span>
              <span style={{ color: '#ff2020' }}>{scrollData.percentage.toFixed(1)}%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
              <span style={{ opacity: 0.7 }}>像素:</span>
              <span style={{ color: '#87ceeb' }}>{Math.round(scrollData.pixelPosition)}px</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
              <span style={{ opacity: 0.7 }}>視窗:</span>
              <span style={{ color: '#dda0dd' }}>{scrollData.viewportHeight}px</span>
            </div>
          </div>

          {/* 進度條 */}
          <div
            style={{
              marginTop: '8px',
              height: '4px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <div
              ref={progressBarRef}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #ffa500, #ff2020)',
                borderRadius: '2px',
                transformOrigin: 'left center',
                transform: 'scaleX(0)',
                opacity: 0.5,
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};
