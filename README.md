# ⚡ Agentic AI Suite — Cloudflare Edition

A modern, glassmorphic Agentic AI web suite powered by **LangGraph** and **Llama 3.3 (HuggingFace)**.

---

## 🌟 Modules Included

1. **📊 Assessment Evaluator & 6-D Feedback**: Multi-dimensional scoring (Accuracy, Completeness, Reasoning, Communication, Evidence, Professionalism) and evidence-based next actions.
2. **🎯 7-Day Study Recommender**: Converts diagnostic test gaps into a structured day-by-day mastery roadmap.
3. **📄 ATS Resume Scorer**: Calculates resume compatibility (0-100), scans for recognized technical keywords, and provides actionable critique.
4. **🧠 RAG Knowledge Assistant**: Vector-grounded question answering with source citations.

---

## 🚀 How to Deploy on Cloudflare Pages (Free & Instant)

### Option 1: Direct Upload (No Git Required)
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** $\rightarrow$ **Create Application** $\rightarrow$ **Pages** $\rightarrow$ **Upload Assets**.
3. Set your project name (e.g. `agentic-ai-suite`).
4. Drag and drop this folder (`chatbot/`) containing `index.html`, `style.css`, and `app.js`.
5. Click **Deploy Site** — your app is live worldwide on a `.pages.dev` URL in under 10 seconds!

---

### Option 2: Connect via GitHub
1. Push this repository to GitHub.
2. In Cloudflare Dashboard, select **Pages** $\rightarrow$ **Connect to Git**.
3. Select your repository.
4. Build settings:
   - **Framework preset**: `None`
   - **Build command**: *(leave blank)*
   - **Build output directory**: `/` (or root)
5. Click **Save and Deploy**.

---

## 💻 Local Preview
To test locally, run:
```bash
python -m http.server 3000
```
Then open `http://localhost:3000` in your browser.
