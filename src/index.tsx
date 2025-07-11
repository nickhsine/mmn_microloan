import React from 'react';
import ReactDOM from 'react-dom/client';
import { ScrollAnimationApp } from './components/ScrollAnimationApp';
import { ScrollSmootherWrapper } from './components/utility/ScrollSmootherWrapper';
import './styles/main.css';
import { Noise } from './components/utility/noise';
import { ScrollCounter } from './components/utility/ScrollCounter';

const host = document.location.hostname
if (
  host !== 'keystone-editor.twreporter.org' &&
  host !== 'staging-keystone-editor.twreporter.org'
) {
  ReactDOM.createRoot(document.getElementById('multimedia_microloan')!).render(
    <React.StrictMode>
      {/* <Noise /> */}
      {/* <ScrollCounter /> */}
      {/* <div style={{ height: '122px', width: '100vw', backgroundColor: '#00000033', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}></div> */}
      <ScrollSmootherWrapper>
        <ScrollAnimationApp />
      </ScrollSmootherWrapper>
    </React.StrictMode>
  );
} else {
  ReactDOM.createRoot(document.getElementById('multimedia_microloan')!).render(
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        padding: '30px',
      }}
    >
      多媒體 embed code（編輯模式，不載入影片）
    </div>
  );
}

