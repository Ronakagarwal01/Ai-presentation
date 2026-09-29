# 🚀 Cloudflare Pages Deployment Guide

Aapka project Cloudflare Pages ke liye fully optimized aur configure kar diya gaya hai.

---

## ⚙️ Cloudflare Optimizations Done

1. **1 GB Upload Limit**:
   - Presentation slide dropzone aur Universal Document Extractor dono me upload limit badha kar **1 GB** kar di gayi hai.
   - Pure client-side parsing (PDF.js + Web Workers) use ho raha hai, isliye Cloudflare ke server request body limits trigger nahi hote.

2. **`_redirects` File**:
   - `/presentation` ➔ `presentation.html`
   - `/lab` ➔ `presentation.html`
   - `/simulator` ➔ `presentation.html`
   - `/` ➔ `index.html`

3. **`_headers` File**:
   - `Permissions-Policy: camera=(self), microphone=(self), display-capture=(self), fullscreen=(self)` enable kiya gaya hai taaki live camera aur speech recognition Cloudflare HTTPS par smoothly kaam kare.
   - Static asset caching (`.js`, `.css`) configured hai for ultra-fast CDN delivery.

---

## 🛠️ Option 1: Deploy via Wrangler CLI (Fastest — 1 Minute)

Terminal me project folder ke andar ye command chalayein:

```bash
npx wrangler pages deploy . --project-name=winners-creek-lab
```

Pehli baar login prompt aayega, allow karein, aur aapka project **live Cloudflare URL** (`https://winners-creek-lab.pages.dev`) par live ho jayega!

---

## 🌐 Option 2: Deploy via Cloudflare Dashboard (GitHub)

1. Apne code ko GitHub repository me push karein:
   ```bash
   git add .
   git commit -m "Configure Cloudflare Pages with 1GB upload and Presentation Room"
   git push origin main
   ```
2. [Cloudflare Dashboard](https://dash.cloudflare.com/) me jayein ➔ **Workers & Pages** ➔ **Create application** ➔ **Pages** ➔ **Connect to Git**.
3. Apni repo select karein aur build settings me ye enter karein:
   - **Framework preset**: `None`
   - **Build command**: *(Khali chhod dein)*
   - **Build output directory**: `/` (ya `./`)
4. **Save and Deploy** par click karein.
