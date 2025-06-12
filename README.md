# MMN Microloan - 互動式滾動動畫

使用 GSAP 和 Rive 建立的現代化微型貸款網站，具備豐富的滾動動畫效果。

## 功能特色

- 🎨 現代化的響應式設計
- 📱 完整的行動裝置支援
- 🎭 使用 Rive 的互動式動畫
- 🚀 GSAP 驅動的流暢滾動效果
- 📊 動態數據計數器
- 🎯 智能的 ScrollTrigger 動畫
- 🔄 平滑的導航和轉場效果

## 技術堆疊

- **前端框架**: React 18 + TypeScript
- **動畫庫**: GSAP + Framer Motion
- **互動動畫**: Rive (@rive-app/canvas)
- **建置工具**: Vite
- **樣式**: CSS3 + CSS Modules (響應式設計)
- **狀態管理**: React Hooks (可擴展 Redux)

## 專案結構

```
mmn_microloan/
├── index.html                           # 入口 HTML 檔案
├── package.json                         # 專案依賴配置
├── tsconfig.json                        # TypeScript 配置
├── vite.config.ts                       # Vite 配置
├── INTEGRATION_GUIDE.md                 # twreporter.org 整合指南
├── src/
│   ├── index.tsx                        # React 應用入口
│   ├── components/
│   │   ├── ScrollAnimationApp.tsx       # 主應用組件
│   │   ├── sections/                    # 區段組件
│   │   └── shared/                      # 共享組件
│   ├── styles/
│   │   └── main.css                     # 主要樣式檔案
│   └── assets/
│       ├── README.md                    # 資源說明
│       └── *.riv                        # Rive 動畫檔案
└── README.md                            # 專案說明
```

## 安裝與設定

1. **安裝依賴套件**:
   ```bash
   npm install
   ```

2. **啟動開發伺服器**:
   ```bash
   npm run dev
   ```

3. **建置生產版本**:
   ```bash
   npm run build
   ```

4. **預覽生產版本**:
   ```bash
   npm run preview
   ```

## Rive 動畫設定

將您的 Rive 動畫檔案放置於 `src/assets/` 目錄中：

- `hero-animation.riv` - 主頁面背景動畫
- `process-animation.riv` - 申請流程動畫
- `security-animation.riv` - 安全保障動畫
- `cta-animation.riv` - 行動呼籲動畫

詳細的動畫要求請參考 `src/assets/README.md`。

## 動畫效果

### GSAP 動畫
- 頁面載入動畫
- 滾動觸發的元素動畫
- 平滑的頁面切換
- 動態數據計數器
- 視差滾動效果

### Rive 動畫
- 互動式向量動畫
- 基於滾動位置的動畫控制
- 狀態機驅動的動畫邏輯
- 高效能的向量渲染

## 自訂化

### 修改動畫設定
編輯 `src/components/SimpleRiveSection.tsx` 中的滾動觸發參數來調整動畫設定。

### 修改樣式
編輯 `src/styles/main.css` 來自訂化視覺效果和佈局。

### 新增內容
修改 `index.html` 來新增更多頁面區段。

## 嵌入到現有網站

此專案設計為可嵌入到現有網站中：

1. 建置專案：`npm run build`
2. 將 `dist/` 目錄中的檔案複製到您的伺服器
3. 在您的網站中引用建置後的 CSS 和 JS 檔案

## 瀏覽器支援

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 貢獻

歡迎提交 Issues 和 Pull Requests 來改善此專案。

## 授權

MIT License
