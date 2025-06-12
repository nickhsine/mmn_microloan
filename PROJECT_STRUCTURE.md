# 微貸故事專案架構

## 專案概覽
本專案是一個基於React和Rive動畫的互動式故事敘述應用程式，包含兩個主要故事線：Missh和Mickey的故事。

## 檔案架構

```
src/
├── components/
│   ├── ScrollAnimationApp.tsx           # 主應用程式組件
│   ├── SectionLanding.tsx               # 登陸頁面區段
│   ├── SectionStoryMissh.tsx            # Missh故事區段
│   ├── SectionStoryMickey.tsx           # Mickey故事區段
│   │
│   ├── landing/                         # 登陸頁面組件
│   │   ├── Title.tsx                    # 標題
│   │   ├── Brief.tsx                    # 簡介
│   │   └── AudioHint.tsx                # 音訊提示
│   │
│   ├── missh/                           # Missh故事組件
│   │   ├── Subtitle.tsx                 # 副標題
│   │   ├── MisshCharacter.tsx           # Missh角色動畫
│   │   ├── MisshBackground.tsx          # Missh背景動畫
│   │   ├── MisshScene1.tsx              # 場景1
│   │   ├── MisshScene2.tsx              # 場景2
│   │   ├── MisshScene3.tsx              # 場景3
│   │   ├── Contracts.tsx                # 合約組件（含高亮和簽名）
│   │   └── FloatingNumbersBG.tsx        # 浮動數字背景
│   │
│   ├── mickey/                          # Mickey故事組件
│   │   ├── Brief.tsx                    # 簡介
│   │   ├── Audio.tsx                    # 音訊
│   │   ├── Subtitle.tsx                 # 副標題
│   │   ├── MickeyCharacter.tsx          # Mickey角色動畫
│   │   ├── MickeyBackground.tsx         # Mickey背景動畫
│   │   ├── MickeyScene1.tsx             # 場景1
│   │   ├── MickeyScene2.tsx             # 場景2
│   │   ├── MickeyScene3.tsx             # 場景3
│   │   ├── Advertisement.tsx            # 廣告動畫
│   │   ├── Consultant.tsx               # 顧問動畫
│   │   └── PhoneInWithDialogs.tsx       # 帶對話框的電話組件
│   │
│   └── shared/                          # 共享組件
│       ├── RiveAnimation.tsx            # Rive動畫基礎組件
│       ├── PhoneIn.tsx                  # 電話來電組件
│       ├── Message.tsx                  # 訊息組件
│       ├── Notification.tsx             # 通知組件
│       ├── Dialogs.tsx                  # 對話框組件
│       ├── Audio.tsx                    # 音訊組件
│       └── Bookkeeping.tsx              # 記帳組件
│
├── assets/                              # 靜態資源
├── styles/                              # 樣式檔案
├── hooks/                               # 自定義Hooks
├── config/                              # 設定檔案
└── index.tsx                            # 應用程式入口點
```

## 組件層級結構

### 主要層級
1. **ScrollAnimationApp** - 根組件
   - **SectionLanding** - 登陸區段
   - **SectionStoryMissh** - Missh故事區段
   - **SectionStoryMickey** - Mickey故事區段

### Missh故事流程
1. **場景1**: 電話來電 → 訊息 → 通知
2. **場景2**: 合約（高亮 + 簽名）→ 音訊
3. **場景3**: 通知 → 浮動數字背景 → 記帳步驟 → 電話對話循環

### Mickey故事流程
1. **場景1**: 廣告 → 顧問
2. **場景2**: 電話對話 → 訊息
3. **場景3**: 記帳 → 通知 → 音訊

## 技術特點

- **Rive動畫**: 用於角色、背景和互動元素
- **狀態機**: 用於合約簽名和高亮效果
- **組件化**: 高度模組化的組件架構
- **共享組件**: 可重用的UI元素
- **TypeScript**: 型別安全的開發環境

## 使用說明

所有組件都已創建基本結構，您可以：
1. 在各個組件中添加具體的內容和邏輯
2. 配置Rive動畫檔案路徑
3. 實現狀態管理和互動邏輯
4. 添加樣式和動畫效果

## 注意事項

- Rive動畫組件需要提供正確的`.riv`檔案路徑
- 所有組件都支援客製化CSS類別
- 共享組件可以在多個故事中重複使用
- 組件結構支援嵌套和組合模式 