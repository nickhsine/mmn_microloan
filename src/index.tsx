import React from 'react';
import ReactDOM from 'react-dom/client';
import { ScrollAnimationApp } from './components/ScrollAnimationApp';
import { ScrollSmootherWrapper } from './components/utility/ScrollSmootherWrapper';
import { LoadingScreen } from './components/utility/LoadingScreen';
import './styles/main.css';

const host = document.location.hostname;
const rootElement = document.getElementById('multimedia_loancrisis')!;
const root = ReactDOM.createRoot(rootElement);

if (
  host !== 'keystone-editor.twreporter.org' &&
  host !== 'staging-keystone-editor.twreporter.org'
) {
  root.render(
    <React.StrictMode>
      <LoadingScreen />
    </React.StrictMode>
  );

  setTimeout(() => {
    root.render(
      <React.StrictMode>
        <ScrollSmootherWrapper>
          <ScrollAnimationApp />
        </ScrollSmootherWrapper>
      </React.StrictMode>
    );
  }, 3000);

} else {
  root.render(
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

