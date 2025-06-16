# 微貸故事專案架構

## 專案概覽
本專案是一個基於React + TypeScript + Vite的互動式故事敘述應用程式，使用GSAP、Rive動畫和Framer Motion，包含兩個主要故事線：Missh和Mickey的故事。

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
│   │   ├── ScrollSmootherWrapper.tsx    # 滾動平滑包裝器
│   │   ├── SectionLanding.tsx           # 登陸頁面區段
│   │   ├── SectionStoryMissh.tsx        # Missh故事區段
│   │   ├── SectionStoryMickey.tsx       # Mickey故事區段
│   │   │
│   │   ├── landing/                     # 登陸頁面組件
│   │   │   ├── Title.tsx                # 標題組件
│   │   │   ├── Brief.tsx                # 簡介組件
│   │   │   └── AudioHandler.tsx         # 音訊處理組件
│   │   │
│   │   ├── missh/                       # Missh故事組件
│   │   │   ├── MisshCharacter.tsx       # Missh角色動畫組件
│   │   │   ├── MisshBackground.tsx      # Missh背景動畫組件
│   │   │   ├── MisshScene1.tsx          # Missh場景1組件
│   │   │   ├── MisshScene2.tsx          # Missh場景2組件
│   │   │   ├── MisshScene3.tsx          # Missh場景3組件
│   │   │   ├── Contracts.tsx            # 合約組件
│   │   │   └── FloatingNumbersBG.tsx    # 浮動數字背景組件
│   │   │
│   │   ├── mickey/                      # Mickey故事組件
│   │   │   ├── Brief.tsx                # Mickey簡介組件
│   │   │   ├── MickeyCharacter.tsx      # Mickey角色動畫組件
│   │   │   ├── MickeyBackground.tsx     # Mickey背景動畫組件
│   │   │   ├── MickeyScene1.tsx         # Mickey場景1組件
│   │   │   ├── MickeyScene2.tsx         # Mickey場景2組件
│   │   │   ├── MickeyScene3.tsx         # Mickey場景3組件
│   │   │   ├── Advertisement.tsx        # 廣告動畫組件
│   │   │   ├── Consultant.tsx           # 顧問動畫組件
│   │   │   └── PhoneInWithDialogs.tsx   # 帶對話框的電話組件
│   │   │
│   │   └── shared/                      # 共享組件
│   │       ├── RiveAnimation.tsx        # Rive動畫基礎組件
│   │       ├── AudioPlayer.tsx          # 音訊播放器組件
│   │       ├── Caption.tsx              # 字幕組件
│   │       ├── PhoneIn.tsx              # 電話來電組件
│   │       ├── Message.tsx              # 訊息組件
│   │       ├── Notification.tsx         # 通知組件
│   │       ├── Dialogs.tsx              # 對話框組件
│   │       └── Bookkeeping.tsx          # 記帳組件
│   │
│   ├── utils/                           # 工具函數目錄 (待開發)
│   │
│   └── styles/                          # 樣式檔案
│       └── main.css                     # 主要樣式檔案
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
   - **SectionStoryMissh** - Missh故事區段
   - **SectionStoryMickey** - Mickey故事區段

### Landing 登陸頁面
- **Title** - 主標題展示
- **Brief** - 專案簡介說明
- **AudioHandler** - 音訊控制和處理

### Missh故事流程
1. **場景1 (MisshScene1)**: 電話來電 → 訊息 → 通知
2. **場景2 (MisshScene2)**: 合約（高亮 + 簽名）→ 音訊
3. **場景3 (MisshScene3)**: 通知 → 浮動數字背景 → 記帳步驟 → 電話對話循環

### Mickey故事流程
1. **場景1 (MickeyScene1)**: 廣告 → 顧問
2. **場景2 (MickeyScene2)**: 電話對話 → 訊息  
3. **場景3 (MickeyScene3)**: 記帳 → 通知 → 音訊

### 共享組件系統
- **RiveAnimation** - Rive動畫的基礎包裝組件
- **AudioPlayer** - 音訊播放控制組件
- **Caption** - 字幕顯示組件
- **PhoneIn** - 電話來電UI組件
- **Message** - 訊息顯示組件
- **Notification** - 通知彈出組件
- **Dialogs** - 對話框顯示組件
- **Bookkeeping** - 記帳介面組件

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

- Rive動畫組件需要提供正確的 `.riv` 檔案路徑
- 所有組件都支援客製化CSS類別和屬性
- 共享組件設計可在多個故事線中重複使用
- 組件結構支援嵌套和組合模式
- TypeScript型別定義確保開發時的型別安全
- Vite提供快速的熱重載開發體驗
- 使用ESLint確保程式碼品質和一致性 