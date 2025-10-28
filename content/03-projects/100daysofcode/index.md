# 🧠 100 Days of Creative Systems Tracker

**Mission:**
> Build systems that feel alive — merging Rust, Python, AI, and creative web design.
> Code for curiosity, not perfection. Build things that move, learn, and react.

---

## ⚙️ Overview

| Phase | Days | Theme | Core Focus |
|-------|------|--------|-------------|
| 1 | 1–20 | Flow Reset | Rust + Polars + Play |
| 2 | 21–50 | Systems in Motion | AI + Data + Reactive Systems |
| 3 | 51–80 | Interactive Worlds | Frontend + Real-Time + Visualization |
| 4 | 81–100 | Integration & Reflection | Deploy, Document, Refine |

---

## 📅 Daily Log Template

### **Day X — [Date]**

**Duration:** ⏱ `Xh Xm`
**Focus:**
_(Short description: what are you exploring today?)_

**What I built / learned:**
-

**What felt alive:**
_(Describe one moment where you felt flow, curiosity, or joy.)_

**Next step / curiosity for tomorrow:**
-

**Reflection word (1–2):** `Flow` / `Momentum` / `Discovery` / `Play`

---

## 🧭 Weekly Tracker Template

### **Week [#] — [Theme]**

**Core Goal:**
_(Briefly describe the week’s theme or system you’re building.)_

**Project Idea:**
>

**Technical Stack:**
🦀 Rust | 🐍 Python | ⚙️ Polars | 🔥 PyTorch | 🧠 AI | 🕸 SvelteKit | 🔗 GraphQL/RabbitMQ

**Planned Outcomes:**

- [ ]
- [ ]
- [ ]

**End of Week Reflection:**

1. What did I build or complete?
2. What new idea or tool excited me most?
3. What’s one thing I’ll refine next week?

---

# 🗓️ 10-Week Detailed Roadmap

---

## **Week 1 — Flow Reset: Data Alchemist**

**Purpose:** Reconnect with coding flow through simple, satisfying data transformations.
**Focus:** Rust + Polars + CLI design

**Project:**
Build a **Rust-based CLI tool** that transforms CSV/JSON into Parquet and computes fast statistics using Polars.

**Core Steps:**

1. Set up Rust project structure + dependencies (Polars, Clap, Serde).
2. Implement file parsing, schema inference, and transformations.
3. Compute summaries (row counts, mean, median, group-by).
4. Add colorized CLI output (use `colored` crate).
5. Optional: export summaries as Markdown or JSON reports.

**Stretch Goals:**

- Interactive terminal UI with `tui-rs`.
- Add Polars lazy API for performance comparison.

---

## **Week 2 — Reactive Systems: Live Data Stream**

**Purpose:** Make data _move_ — build your first dynamic, real-time system.
**Focus:** Rust + WebSockets + SvelteKit

**Project:**
Create a **real-time dashboard** visualizing live data from a Rust backend.

**Core Steps:**

1. Build a Rust WebSocket server (Axum or Warp).
2. Simulate or stream real data (e.g., random metrics, sensor data).
3. Build a SvelteKit frontend to connect and visualize updates.
4. Add smooth animations with D3 or Svelte transitions.

**Stretch Goals:**

- Add authentication or simple persistence.
- Deploy to Fly.io or Vercel for demo access.

---

## **Week 3 — Neural Audio Playground**

**Purpose:** Combine AI with creativity.
**Focus:** PyTorch + Audio Processing + Visualization

**Project:**
Build an **AI sound explorer** that classifies, clusters, or visualizes music/audio samples.

**Core Steps:**

1. Collect small audio datasets (your own music or open datasets).
2. Train or use pretrained CNNs to extract embeddings (Mel spectrograms).
3. Visualize embeddings in 2D with t-SNE or UMAP.
4. Display interactively in SvelteKit (hover over points → play audio).

**Stretch Goals:**

- Add “mood” classification (happy/sad/ambient).
- Build a small sampler interface to explore sounds.

---

## **Week 4 — Tiny Data Lake**

**Purpose:** Build your first _end-to-end_ platform.
**Focus:** Rust + Python + Polars + FastAPI

**Project:**
A **mini data platform**: ingest → transform → query → visualize.

**Core Steps:**

1. Ingest CSVs or API data using a Rust microservice.
2. Store data as Parquet (local “buckets”).
3. Expose a FastAPI service that queries data using Polars.
4. Build a SvelteKit dashboard for visual queries.

**Stretch Goals:**

- Add caching or versioning.
- Include a metadata schema or catalog (like a minimal Hive Metastore).

---

## **Week 5 — Data Whisperer**

**Purpose:** Make your data talk.
**Focus:** LLMs + Polars + Natural Language Querying

**Project:**
Create an **AI query interface** that translates natural language into Polars expressions.

**Core Steps:**

1. Use OpenAI API or local LLM for query translation.
2. Parse dataset schema → feed context to model.
3. Execute generated Polars code safely.
4. Return results and visual summaries.

**Stretch Goals:**

- Add conversational memory.
- Let user “chat with a dataset” about insights.

---

## **Week 6 — Intelligent Event System**

**Purpose:** Build a distributed system where AI and Rust communicate.
**Focus:** Rust + Python + RabbitMQ + GraphQL + AI

**Project:**
Create a **multi-service system** where Rust publishes events, Python consumes them, and GraphQL exposes intelligence.

**Core Steps:**

1. Rust producer → sends data/messages to RabbitMQ.
2. Python consumer → processes data (e.g., summarize text, predict class).
3. GraphQL API (FastAPI + Strawberry) → serve processed results.
4. Add logging and observability (tracing or Prometheus).

**Stretch Goals:**

- Add retry logic and dead-letter queue.
- Deploy the system with Docker Compose.

---

## **Week 7 — Neural Explorer**

**Purpose:** Bring intelligence to life visually.
**Focus:** SvelteKit + D3.js / Three.js + Realtime Backend

**Project:**
Visualize embeddings, AI results, or streaming data interactively.

**Core Steps:**

1. Collect model outputs (e.g., from Week 3 or 5).
2. Render as interactive 2D/3D scatterplots.
3. Allow hovering, filtering, or grouping.
4. Animate updates or transitions.

**Stretch Goals:**

- Connect live to a backend that updates data in real time.
- Add WebGL effects for artistic expression.

---

## **Week 8 — My Research Brain**

**Purpose:** Build your own AI-driven personal lab.
**Focus:** FastAPI + Polars + LLM + File Parsing

**Project:**
Create a **personal research dashboard** that summarizes and analyzes your datasets or notes.

**Core Steps:**

1. Upload files (CSV, Markdown, text).
2. Extract structure → run Polars analysis or summarization.
3. Use an LLM to generate natural summaries or trends.
4. Visualize metrics or insights in SvelteKit.

**Stretch Goals:**

- Add embeddings to cluster related documents.
- Create natural-language “data exploration” conversations.

---

## **Week 9 — Unified Creative Stack**

**Purpose:** Integrate your favorite systems and deploy.
**Focus:** Terraform / Docker / Cloud deployment

**Project:**
Combine your top 2–3 systems into a single stack and deploy them online.

**Core Steps:**

1. Choose your favorite backend + AI + frontend combination.
2. Containerize with Docker.
3. Deploy to AWS / Fly.io / Render.
4. Add CI/CD pipeline and minimal documentation.

**Stretch Goals:**

- Implement monitoring dashboards.
- Add a “creative mode” switch (switch between different demos).

---

## **Week 10 — Systems Journal**

**Purpose:** Reflect, document, and showcase.
**Focus:** Writing + Design + Retrospective

**Project:**
Document your 100-day journey and showcase your projects beautifully.

**Core Steps:**

1. Create a static site or SvelteKit dashboard listing each project.
2. Add screenshots, architecture diagrams, and code snippets.
3. Write a short reflection on what you learned about curiosity, flow, and creation.
4. Optional: use AI to generate summaries of each project.

**Stretch Goals:**

- Publish on your personal site or GitHub Pages.
- Record a short video demo of your favorite build.

---

## 🧠 Phase Reflection Templates

### **Phase [#] — [Theme]**

**Duration:** `[Days X–Y]`
**How I changed:**
_(Describe how your curiosity evolved or what you learned about your coding identity.)_

**What surprised me most:**
**Technical highlight:**
**Creative highlight:**
**System I’ll expand next:**

---

## 📈 Metrics

- [ ] Code ≥ 1 hour daily
- [ ] Write reflection every 10 days
- [ ] Share progress (tweet, screenshot, or post) biweekly
- [ ] Finish 10 unique systems
- [ ] Document everything by Day 100

---

## 🏁 Final Reflection (Day 100)

**What I built overall:**
**Favorite creation:**
**Biggest shift in mindset:**
**What’s next after this:**
