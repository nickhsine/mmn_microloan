# MMN Microloan - iframe 嵌入使用指南

## GitHub Pages 部署

此專案已設置為自動部署到 GitHub Pages。每當您推送到 `main` 分支時，GitHub Actions 會自動建構並部署您的專案。

### 部署後的 URL
```
https://E3KONG.github.io/mmn_microloan/
```

## iframe 嵌入使用

### 基本嵌入代碼
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

### 響應式嵌入
```html
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe 
        src="https://E3KONG.github.io/mmn_microloan/" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
        allowfullscreen>
    </iframe>
</div>
```

### 帶參數的嵌入（如果需要）
```html
<iframe 
    src="https://E3KONG.github.io/mmn_microloan/?embed=true&autoplay=false" 
    width="100%" 
    height="600px" 
    frameborder="0">
</iframe>
```

## 部署步驟

1. 確保您的 GitHub 儲存庫設定中啟用了 GitHub Pages
2. 在儲存庫設定中，將 Pages 來源設定為 "GitHub Actions"
3. 推送您的變更到 `main` 分支
4. GitHub Actions 會自動建構並部署

## 本地開發

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

## 注意事項

- 此專案已設置為允許在任何網站的 iframe 中嵌入
- 專案包含 GSAP 和 Rive 動畫，確保您的嵌入環境支援這些功能
- 建議的最小 iframe 尺寸：寬度 320px，高度 480px 