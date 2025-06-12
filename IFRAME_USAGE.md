# MMN Microloan - iframe 嵌入使用指南

## 🎯 GitHub Pages 部署

此專案已設置為自動部署到 GitHub Pages。每當您推送到 `main` 分支時，GitHub Actions 會自動建構並部署您的專案。

### 📍 部署後的 URL
```
https://E3KONG.github.io/mmn_microloan/
```

## 🖼️ iframe 嵌入使用

### ✅ 基本嵌入代碼
```html
<iframe 
    src="https://E3KONG.github.io/mmn_microloan/" 
    width="100%" 
    height="600px" 
    frameborder="0" 
    allowfullscreen
    style="border: none;">
</iframe>
```

### 📱 響應式嵌入
```html
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe 
        src="https://E3KONG.github.io/mmn_microloan/" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
        allowfullscreen>
    </iframe>
</div>
```

### 🔧 帶參數的嵌入（如果需要）
```html
<iframe 
    src="https://E3KONG.github.io/mmn_microloan/?embed=true&autoplay=false" 
    width="100%" 
    height="600px" 
    frameborder="0">
</iframe>
```

## 🚀 部署步驟

1. **啟用 GitHub Pages**：
   - 進入您的 GitHub 儲存庫設定
   - 找到 "Pages" 設定項目
   - 將來源設定為 "GitHub Actions"

2. **推送變更**：
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment for iframe embedding"
   git push origin main
   ```

3. **等待部署完成**：
   - GitHub Actions 會自動運行並部署您的專案
   - 查看 Actions 頁面確認部署狀態

## 💻 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建構用於生產環境
npm run build

# 預覽建構結果
npm run preview
```

## 🔧 技術修復

### ✅ 已解決的問題：

1. **HTTP 標頭設定**：
   - 移除了無效的 meta 標籤 X-Frame-Options 和 CSP
   - 新增 `public/_headers` 檔案用於 GitHub Pages

2. **Rive 檔案路徑修復**：
   - 修復 `scenemissh.riv` 檔案的導入路徑
   - 新增 TypeScript 宣告支援 `.riv` 檔案
   - 在 Vite 配置中加入 `.riv` 檔案支援

3. **iframe 友善設定**：
   - 新增適合 iframe 嵌入的 CSS 樣式
   - 自動檢測 iframe 環境

## ⚠️ 注意事項

- ✅ 此專案已正確設置為允許在任何網站的 iframe 中嵌入
- ✅ 專案包含 GSAP 和 Rive 動畫，已優化相容性
- ✅ 建議的最小 iframe 尺寸：寬度 320px，高度 480px
- ✅ 支援響應式設計，適應不同螢幕尺寸
- ✅ 所有資源路徑已正確設置用於生產環境

## 🐛 故障排除

如果遇到問題：

1. **檢查網路連線**：確保可以訪問 GitHub Pages
2. **檢查控制台錯誤**：開啟瀏覽器開發者工具查看錯誤
3. **檢查 iframe 安全政策**：確保父頁面允許載入外部 iframe
4. **清除快取**：重新整理頁面或清除瀏覽器快取 