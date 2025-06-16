# MMN Microloan - 滾動式動畫

## 技術堆疊

- **前端框架**: React 18.2.0 + TypeScript 5.2.2
- **建置工具**: Vite 5.0.8
- **動畫庫**: GSAP 3.12.2、Rive WebGL2、Framer Motion 10.16.4
- **開發工具**: ESLint、TypeScript ESLint

## 專案結構

```
mmn_microloan/
├── public/                              # 靜態資源目錄
├── src/
│   ├── index.tsx                        # 應用程式入口點
│   ├── components/                      # React組件
│   │   ├── ScrollAnimationApp.tsx       # 主應用程式組件
│   │   ├── SectionLanding.tsx           # 登陸頁面區段
│   │   ├── SectionStoryMissh.tsx        # Missh故事區段
│   │   ├── SectionStoryMickey.tsx       # Mickey故事區段
│   │   │
│   │   ├── landing/                     # 登陸頁面組件
│   │   │   ├── Title.tsx                # 標題
│   │   │   ├── Brief.tsx                # 簡介
│   │   │   └── AudioHint.tsx            # 音訊提示組件
│   │   ├── missh/                       # Missh故事組件
│   │   │   ├── Subtitle.tsx
│   │   │   ├── MisshCharacter.tsx
│   │   │   ├── MisshScene1.tsx          # 場景1
│   │   │   ├── MisshScene2.tsx          # 場景2
│   │   │   ├── MisshScene3.tsx          # 場景3
│   │   │   ├── Contracts.tsx
│   │   │   └── ...
│   │   ├── mickey/                      # Mickey故事組件
│   │   │   ├── Subtitle.tsx             
│   │   │   ├── MickeyCharacter.tsx      
│   │   │   ├── MickeyScene1.tsx         # 場景1
│   │   │   ├── MickeyScene2.tsx         # 場景2
│   │   │   ├── MickeyScene3.tsx         # 場景3
│   │   │   └── ...
│   │   └── shared/                      # 重覆使用組件
│   │       ├── RiveAnimation.tsx        # Rive動畫基礎組件
│   │       ├── Message.tsx              
│   │       └── ...      
│   ├── assets/                          # 專案資源(.riv, .mp3, .png)
│       └── scenemissh.riv
│   └── styles/                          # 樣式檔案
│       └── main.css
├── index.html                           # HTML模板
├── ProjectStructure.md                 # 詳細專案結構文件
└── ...
```

## 安裝與設定

1. **安裝依賴套件**:
   ```bash
   npm install
   ```

2. **啟動開發伺服器**:
   ```bash
   npm run dev

