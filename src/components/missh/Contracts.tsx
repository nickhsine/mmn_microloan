import React, { CSSProperties } from 'react';
import { useRive } from '@rive-app/react-webgl2';

interface ContractsProps {
  top?: string;
}

export const Contracts = ({ top }: ContractsProps) => {
  const { rive, RiveComponent } = useRive({
    src: './assets/rive/missh-contracts.riv',
    artboard: 'Artboard',
    stateMachines: 'State Machine 1',
    autoplay: true,
    useOffscreenRenderer: true,
    assetLoader: (asset, bytes) => {
      console.log('Loading asset:', {
        name: asset.name,
        fileExtension: asset.fileExtension,
        isFont: asset.isFont,
      });

      // 如果已經有嵌入的字體或 CDN UUID，讓運行時處理
      if (asset.cdnUuid.length > 0 || bytes.length > 0) {
        return false;
      }

      // 處理字體資產
      if (asset.isFont) {
        try {
          let fontUrl = '';
          
          // 根據字體名稱選擇對應的字體檔案
          if (asset.name.toLowerCase().includes('noto sans') || 
              asset.name.toLowerCase().includes('notosans')) {
            fontUrl = './assets/rive/Noto Sans TC-595258.ttf';
          } else if (asset.name.toLowerCase().includes('noto serif') || 
                     asset.name.toLowerCase().includes('notoserif')) {
            fontUrl = './assets/rive/Noto Serif TC-595332.ttf';
          } else {
            // 預設使用 Noto Sans TC
            fontUrl = './assets/rive/Noto Sans TC-595258.ttf';
          }

          console.log(`Loading font: ${asset.name} from ${fontUrl}`);
          
          // 使用同步方式載入字體
          fetch(fontUrl)
            .then(response => {
              if (!response.ok) {
                console.warn(`Failed to load font from ${fontUrl}`);
                return;
              }
              return response.arrayBuffer();
            })
            .then(async (fontData) => {
              if (!fontData) return;
              
              // 使用底層 API 來載入字體
              const { decodeFont } = await import('@rive-app/webgl2');
              const font = await decodeFont(new Uint8Array(fontData));
              
              // 檢查 asset 是否有 setFont 方法，如果沒有則使用 decode
              if (typeof (asset as any).setFont === 'function') {
                (asset as any).setFont(font);
              } else if (typeof asset.decode === 'function') {
                asset.decode(new Uint8Array(fontData));
              }
              
              console.log(`Successfully loaded font: ${asset.name}`);
            })
            .catch(error => {
              console.error('Error loading font:', error);
            });
          
          return true;
        } catch (error) {
          console.error('Error setting up font loading:', error);
          return false;
        }
      }

      return false;
    },
  });

  const containerStyle: CSSProperties = top ? {
    position: 'absolute',
    top,
    left: '50%',
    transform: 'translate(-50%, 0%)'
  } : {};

  return (
    <div className="contracts" style={containerStyle}>
      <div className="contracts-rive">
        <RiveComponent />
      </div>
    </div>
  );
}; 