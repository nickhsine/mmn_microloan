import React from 'react';
import ReactDOM from 'react-dom/client';
import { ScrollAnimationApp } from './components/ScrollAnimationApp';
import { ScrollSmootherWrapper } from './components/utility/ScrollSmootherWrapper';
import './styles/main.css';

const host = document.location.hostname
if (
  host !== 'keystone-editor.twreporter.org' &&
  host !== 'staging-keystone-editor.twreporter.org'
) {
  setTimeout(() => {
    ReactDOM.createRoot(document.getElementById('multimedia_loancrisis')!).render(
      <React.StrictMode>
    
        <ScrollSmootherWrapper>
          <ScrollAnimationApp />
        </ScrollSmootherWrapper>
      </React.StrictMode>
    );
  }, 3000)

} else {
  ReactDOM.createRoot(document.getElementById('multimedia_loancrisis')!).render(
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

