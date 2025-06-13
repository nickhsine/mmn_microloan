import React from 'react';
import ReactDOM from 'react-dom/client';
import { ScrollAnimationApp } from './components/ScrollAnimationApp';
import { ScrollSmootherWrapper } from './components/ScrollSmootherWrapper';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScrollSmootherWrapper>
      <ScrollAnimationApp />
    </ScrollSmootherWrapper>
  </React.StrictMode>,
); 