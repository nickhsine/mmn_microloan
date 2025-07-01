import React from 'react';
import ReactDOM from 'react-dom/client';
import { ScrollAnimationApp } from './components/ScrollAnimationApp';
import { ScrollSmootherWrapper } from './components/utilities/ScrollSmootherWrapper';
import './styles/main.css';
import { Noise } from './components/utilities/noise';
import { ScrollCounter } from './components/utilities/ScrollCounter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Noise />
    <ScrollCounter />
    <ScrollSmootherWrapper>
      <ScrollAnimationApp />
    </ScrollSmootherWrapper>
  </React.StrictMode>,
); 