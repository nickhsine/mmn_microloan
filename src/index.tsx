import React from 'react';
import ReactDOM from 'react-dom/client';
import { ScrollAnimationApp } from './components/ScrollAnimationApp';
import { ScrollSmootherWrapper } from './components/utility/ScrollSmootherWrapper';
import './styles/main.css';
import { Noise } from './components/utility/noise';
import { ScrollCounter } from './components/utility/ScrollCounter';

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
