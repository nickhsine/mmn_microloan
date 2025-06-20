import React from 'react';
import ReactDOM from 'react-dom/client';
import { ScrollAnimationApp } from './components/ScrollAnimationApp';
import { ScrollSmootherWrapper } from './components/ScrollSmootherWrapper';
import './styles/main.css';
// import { Noise } from './components/shared/noise';
import { ScrollCounter } from './components/shared/ScrollCounter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Noise /> */}
    <ScrollCounter />
    <ScrollSmootherWrapper>
      <ScrollAnimationApp />
    </ScrollSmootherWrapper>
  </React.StrictMode>,
); 