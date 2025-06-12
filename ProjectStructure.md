# 微貸故事專案架構

## 專案概覽
本專案是一個基於React + TypeScript + Vite的互動式故事敘述應用程式，使用GSAP、Rive動畫和Framer Motion，包含兩個主要故事線：Missh和Mickey的故事。

## 技術棧
- **前端框架**: React 18.2.0 + TypeScript 5.2.2
- **建置工具**: Vite 5.0.8
- **動畫庫**: GSAP 3.12.2、Rive、Framer Motion 10.16.4
- **開發工具**: ESLint、TypeScript ESLint

## 專案結構

```
mmn_microloan/
├── public/                              # 靜態資源目錄
├── src/                                 # 原始碼目錄
│   ├── index.tsx                        # 應用程式入口點
│   ├── components/                      # React組件
│   │   ├── ScrollAnimationApp.tsx       # 主應用程式組件
│   │   ├── SectionLanding.tsx           # 登陸頁面區段
│   │   ├── SectionStoryMissh.tsx        # Missh故事區段
│   │   ├── SectionStoryMickey.tsx       # Mickey故事區段
│   │   │
│   │   ├── landing/                     # 登陸頁面組件
│   │   │   ├── Title.tsx                # 標題組件
│   │   │   ├── Brief.tsx                # 簡介組件
│   │   │   └── AudioHint.tsx            # 音訊提示組件
│   │   │
│   │   ├── missh/                       # Missh故事組件
│   │   │   ├── Subtitle.tsx             # 副標題
│   │   │   ├── MisshCharacter.tsx       # Missh角色動畫
│   │   │   ├── MisshBackground.tsx      # Missh背景動畫
│   │   │   ├── MisshScene1.tsx          # 場景1
│   │   │   ├── MisshScene2.tsx          # 場景2
│   │   │   ├── MisshScene3.tsx          # 場景3
│   │   │   ├── Contracts.tsx            # 合約組件
│   │   │   └── FloatingNumbersBG.tsx    # 浮動數字背景
│   │   │
│   │   ├── mickey/                      # Mickey故事組件
│   │   │   ├── Brief.tsx                # 簡介
│   │   │   ├── Audio.tsx                # 音訊
│   │   │   ├── Subtitle.tsx             # 副標題
│   │   │   ├── MickeyCharacter.tsx      # Mickey角色動畫
│   │   │   ├── MickeyBackground.tsx     # Mickey背景動畫
│   │   │   ├── MickeyScene1.tsx         # 場景1
│   │   │   ├── MickeyScene2.tsx         # 場景2
│   │   │   ├── MickeyScene3.tsx         # 場景3
│   │   │   ├── Advertisement.tsx        # 廣告動畫
│   │   │   ├── Consultant.tsx           # 顧問動畫
│   │   │   └── PhoneInWithDialogs.tsx   # 帶對話框的電話組件
│   │   │
│   │   └── shared/                      # 共享組件
│   │       ├── RiveAnimation.tsx        # Rive動畫基礎組件
│   │       ├── PhoneIn.tsx              # 電話來電組件
│   │       ├── Message.tsx              # 訊息組件
│   │       ├── Notification.tsx         # 通知組件
│   │       ├── Dialogs.tsx              # 對話框組件
│   │       ├── Audio.tsx                # 音訊組件
│   │       └── Bookkeeping.tsx          # 記帳組件
│   │
│   ├── assets/                          # 專案資源
│   │   ├── scenemissh.riv              # Missh場景Rive動畫檔案
│   │   └── SectionBlock.json           # 區段配置檔案
│   │
│   └── styles/                          # 樣式檔案
│       └── main.css                     # 主要樣式檔案
│
├── index.html                           # HTML模板
├── package.json                         # 專案依賴和腳本
├── package-lock.json                    # 鎖定依賴版本
├── tsconfig.json                        # TypeScript配置
├── tsconfig.node.json                   # Node.js TypeScript配置
├── vite.config.ts                       # Vite建置配置
├── .gitignore                          # Git忽略檔案
├── .gitattributes                      # Git屬性設定
├── README.md                           # 專案說明文件
└── PROJECT_STRUCTURE.md               # 專案結構文件（本檔案）
```

## 組件層級結構

### 主要層級
1. **ScrollAnimationApp** - 根組件，管理整體滾動動畫邏輯
   - **SectionLanding** - 登陸區段，包含專案介紹
   - **SectionStoryMissh** - Missh故事區段
   - **SectionStoryMickey** - Mickey故事區段

### Missh故事流程
1. **場景1 (MisshScene1)**: 電話來電 → 訊息 → 通知
2. **場景2 (MisshScene2)**: 合約（高亮 + 簽名）→ 音訊
3. **場景3 (MisshScene3)**: 通知 → 浮動數字背景 → 記帳步驟 → 電話對話循環

### Mickey故事流程
1. **場景1 (MickeyScene1)**: 廣告 → 顧問
2. **場景2 (MickeyScene2)**: 電話對話 → 訊息
3. **場景3 (MickeyScene3)**: 記帳 → 通知 → 音訊

## 核心功能特點

- **Rive動畫整合**: 透過 `@rive-app/react-canvas` 實現高品質角色和場景動畫
- **GSAP滾動動畫**: 使用 `@gsap/react` 實現流暢的滾動觸發動畫
- **Framer Motion**: 提供額外的UI動畫效果
- **TypeScript**: 全面的型別安全開發
- **組件化架構**: 高度模組化的React組件設計
- **共享組件系統**: 可重用的UI元素庫
- **響應式設計**: 適配多種螢幕尺寸


## 使用說明

1. **組件開發**: 所有組件都已建立基本結構，可在各個檔案中添加具體內容和邏輯
2. **Rive動畫**: 配置正確的 `.riv` 檔案路徑到 `src/assets/` 目錄
3. **狀態管理**: 實現組件間的狀態同步和互動邏輯
4. **樣式設計**: 在 `src/styles/main.css` 中添加全域樣式
5. **資源管理**: 將動畫檔案、圖片等靜態資源放置在 `src/assets/` 目錄

## 注意事項

- Rive動畫組件需要提供正確的 `.riv` 檔案路徑
- 所有組件都支援客製化CSS類別和屬性
- 共享組件設計可在多個故事線中重複使用
- 組件結構支援嵌套和組合模式
- TypeScript型別定義確保開發時的型別安全
- Vite提供快速的熱重載開發體驗 