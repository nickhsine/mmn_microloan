# 微貸故事專案架構

## 專案概覽
本專案是一個基於React + TypeScript + Vite的互動式故事敘述應用程式，使用GSAP、Rive動畫和Framer Motion，包含兩個主要故事線：Missh和Mickey的故事。專案特色是分段式滾動動畫控制，使用自定義的 ScrollPause 組件實現。

## 技術棧
- **前端框架**: React 18.2.0 + TypeScript 5.2.2
- **建置工具**: Vite 5.0.8
- **動畫庫**: GSAP 3.12.2、Rive (Canvas 2.17.2, React Canvas 4.21.3, React WebGL2 4.21.3)、Framer Motion 10.16.4
- **輔助庫**: React Intersection Observer 9.5.3
- **開發工具**: ESLint、TypeScript ESLint、gh-pages 6.3.0

## 完整專案結構

```
mmn_microloan/
├── .git/                                # Git版本控制目錄
├── .github/                             # GitHub配置目錄
├── node_modules/                        # Node.js依賴套件
├── dist/                                # 建置輸出目錄
├── public/                              # 靜態資源目錄
│   └── assets/                          # 媒體資源
│       ├── audio/                       # 音訊檔案
│       │   ├── SFX_PhoneVibrate_v1.aac  # 電話震動音效 v1
│       │   └── SFX_PhoneVibrate_v2.aac  # 電話震動音效 v2
│       ├── data/                        # 資料檔案
│       │   └── Captions.json            # 字幕資料檔案
│       └── rive/                        # Rive動畫檔案
│           ├── scene-missh.riv          # Missh場景動畫
│           └── shared-audiohandler.riv  # 共享音訊處理動畫
├── src/                                 # 原始碼目錄
│   ├── index.tsx                        # 應用程式入口點
│   ├── components/                      # React組件
│   │   ├── ScrollAnimationApp.tsx       # 主應用程式組件
│   │   ├── SectionLanding.tsx           # 登陸頁面區段
│   │   ├── SectionMissh.tsx             # Missh故事區段
│   │   ├── SectionMickey.tsx            # Mickey故事區段
│   │   │
│   │   ├── calculator/                  # 計算器相關組件
│   │   │   └── Calculator.tsx           # 計算器組件
│   │   │
│   │   ├── document/                    # 文件相關組件
│   │   │   ├── Contract.tsx             # 合約組件
│   │   │   └── Envelope.tsx             # 信封組件
│   │   │
│   │   ├── phone/                       # 手機相關組件
│   │   │   ├── Call.tsx                 # 電話來電組件
│   │   │   ├── Dialogs.tsx              # 對話框組件
│   │   │   ├── Messages.tsx             # 訊息組件
│   │   │   ├── MessagesApp.tsx          # 訊息應用組件
│   │   │   ├── Notification.tsx         # 通知組件
│   │   │   └── Phone.tsx                # 手機外殼組件
│   │   │
│   │   ├── text/                        # 文字相關組件
│   │   │   ├── Brief.tsx                # 簡介組件
│   │   │   ├── Caption.tsx              # 字幕組件
│   │   │   └── Title.tsx                # 標題組件
│   │   │
│   │   └── utility/                     # 工具組件
│   │       ├── AudioHandler.tsx         # 音訊處理組件
│   │       ├── AudioPlayer.tsx          # 音訊播放器組件
│   │       ├── noise.tsx                # 噪點效果組件
│   │       ├── ScrollCounter.tsx        # 滾動計數器組件
│   │       ├── ScrollPause.tsx          # 滾動暫停控制組件
│   │       └── ScrollSmootherWrapper.tsx # 滾動平滑包裝器
│   │
│   └── styles/                          # 樣式檔案
│       ├── calculator.css               # 計算器樣式
│       ├── document.css                 # 文件樣式
│       ├── main.css                     # 主要樣式
│       ├── noise.css                    # 噪點效果樣式
│       └── phone.css                    # 手機組件樣式
│
├── index.html                           # HTML模板
├── package.json                         # 專案依賴和腳本配置
├── package-lock.json                    # 鎖定依賴版本檔案
├── tsconfig.json                        # TypeScript配置檔案
├── tsconfig.node.json                   # Node.js TypeScript配置
├── vite.config.ts                       # Vite建置配置檔案
├── .gitignore                          # Git忽略檔案列表
├── .gitattributes                      # Git屬性設定
├── README.md                           # 專案說明文件
└── ProjectStructure.md                 # 專案結構文件（本檔案）
```

## 組件層級結構

### 主要層級
1. **ScrollAnimationApp** - 根組件，管理整體滾動動畫邏輯
   - **ScrollSmootherWrapper** - 滾動平滑處理包裝器
   - **SectionLanding** - 登陸區段，包含專案介紹
   - **SectionMissh** - Missh故事區段
   - **SectionMickey** - Mickey故事區段

### 手機組件系統
- **Phone** - 手機外殼組件，包含其他手機相關組件
- **Messages** - 訊息顯示組件，使用 ScrollPause 實現分段滾動動畫
- **MessagesApp** - 訊息應用界面組件
- **Call** - 電話來電組件
- **Dialogs** - 對話框組件
- **Notification** - 通知組件

### 工具組件系統
- **ScrollPause** - 滾動暫停控制組件，核心功能組件
- **ScrollSmootherWrapper** - 滾動平滑處理包裝器
- **AudioHandler** - 音訊控制和處理
- **AudioPlayer** - 音訊播放控制組件
- **ScrollCounter** - 滾動計數器組件
- **noise** - 噪點效果組件

## ScrollPause 組件說明

### 功能概述
ScrollPause 是一個可重用的 React 組件，用於控制基於滾動的動畫序列。它允許在特定元素後暫停動畫，然後在用戶繼續滾動到指定位置後恢復動畫。

### 核心特性
- **分組動畫**: 將元素分成多個組，每組有獨立的 ScrollTrigger 動畫
- **多個暫停點**: 支持在多個位置暫停和恢復動畫
- **自定義動畫**: 支持自定義動畫函數
- **靈活配置**: 提供豐富的配置選項，如滾動距離、標記顯示等

### 使用示例
```tsx
<ScrollPause
  pausePoints={[
    { index: 2, resumeAt: "1000vh" },  // 前3條消息後暫停，在1000vh恢復
    { index: 4, resumeAt: "1300vh" }   // 前5條消息後再次暫停，在1300vh恢復
  ]}
  elementSelector=".messageRecieve, .messageSent"
  scrollDistance={300}
  start="500vh"
  end="1500vh"
  markers={true}
  animation={(tl, elements) => {
    // 自定義動畫
    tl.fromTo(elements, 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, stagger: 0.25 }
    );
  }}
>
  {/* 子元素內容 */}
</ScrollPause>
```

### 技術實現
- 使用 GSAP 的 ScrollTrigger 插件實現滾動觸發動畫
- 利用 React 的 useGSAP 鉤子管理動畫生命週期
- 通過計算斷點將元素分組
- 為每個組創建獨立的時間軸和觸發器

## 資源檔案說明

### Rive動畫檔案
- **scene-missh.riv**: Missh故事的主要場景動畫檔案
- **shared-audiohandler.riv**: 共享的音訊處理動畫檔案

### 音訊檔案
- **SFX_PhoneVibrate_v1.aac**: 電話震動音效第一版
- **SFX_PhoneVibrate_v2.aac**: 電話震動音效第二版

### 資料檔案
- **Captions.json**: 包含所有字幕和文字內容的配置檔案

## 核心功能特點

- **ScrollPause 分段動畫**: 實現高度可控的分段式滾動動畫
- **Rive動畫整合**: 透過 `@rive-app/react-canvas` 和 `@rive-app/react-webgl2` 實現高品質角色和場景動畫
- **GSAP滾動動畫**: 使用 `@gsap/react` 實現流暢的滾動觸發動畫
- **ScrollSmoother**: GSAP的滾動平滑功能提升用戶體驗
- **Framer Motion**: 提供額外的UI動畫效果
- **Intersection Observer**: 精確控制元素可見性觸發
- **TypeScript**: 全面的型別安全開發
- **組件化架構**: 高度模組化的React組件設計
- **共享組件系統**: 可重用的UI元素庫
- **響應式設計**: 適配多種螢幕尺寸
- **GitHub Pages部署**: 自動化部署流程

## 開發指南

### ScrollPause 組件開發
- 在 `src/components/utility/ScrollPause.tsx` 中定義
- 支持多種配置選項和自定義動畫
- 可與任何需要分段滾動動畫的組件結合使用

### 組件開發
- 所有組件都已建立基本結構，可在各個檔案中添加具體內容和邏輯
- 使用TypeScript進行開發，確保型別安全
- 遵循React函數組件和Hook的最佳實踐

### Rive動畫整合
- 將 `.riv` 檔案放置在 `public/assets/rive/` 目錄
- 使用 `RiveAnimation` 基礎組件進行動畫整合
- 支援 Canvas 和 WebGL2 兩種渲染方式

### 音訊處理
- 音訊檔案放置在 `public/assets/audio/` 目錄
- 使用 `AudioPlayer` 組件進行音訊控制
- 支援多種音訊格式

### 狀態管理
- 實現組件間的狀態同步和互動邏輯
- 使用React Context或狀態提升進行狀態管理

### 樣式設計
- 主要樣式在 `src/styles/main.css` 中定義
- 支援CSS模組和styled-components

### 資源管理
- 靜態資源統一放置在 `public/assets/` 目錄
- 按類型分類：audio、data、rive

## 部署說明

專案配置了GitHub Pages自動部署：
- 使用 `npm run deploy` 進行部署
- 部署後可在 `https://E3KONG.github.io/mmn_microloan/` 存取
- 支援iFrame嵌入使用

## 注意事項

- ScrollPause 組件需要正確配置暫停點和元素選擇器
- Rive動畫組件需要提供正確的 `.riv` 檔案路徑
- 所有組件都支援客製化CSS類別和屬性
- 共享組件設計可在多個故事線中重複使用
- 組件結構支援嵌套和組合模式
- TypeScript型別定義確保開發時的型別安全
- Vite提供快速的熱重載開發體驗
- 使用ESLint確保程式碼品質和一致性 