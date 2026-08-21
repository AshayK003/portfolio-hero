export const site = {
  name: "Ashay Kushwaha",
  handle: "@sentinelcipher",
  availability: "Open to collaborating — Q3 2026",
  headline: "I build systems that solve\nreal problems.",
  subheading:
    "Open-source tools at the intersection of data, security, and social impact. Everything I ship is MIT-licensed and built to be reused.",
  cta: { primary: "See My Work", secondary: "About Me" },
  nav: ["About", "Skills", "Projects", "Contact"],

  about: {
    summary:
      "I engineer open-source systems that turn raw data into decisions — NGO-volunteer matching platforms, climate policy dashboards, causal inference engines, real-time sentiment pipelines. Each project starts with a question and ends with a tool anyone can use.",
    strengths: [
      "Full-stack data engineering — Python to React",
      "ML & causal inference for real-world problems",
      "Open-source as an ethos, not an afterthought",
      "Clean architecture, reproducible results",
    ],
    interests: [
      "Cybersecurity Analytics",
      "Climate Tech",
      "Causal Inference",
      "Developer Tooling",
      "Open-Source Ecosystems",
      "Social Impact",
    ],
    philosophy: {
      title: "Why I Build",
      body: "I believe the best tools should belong to everyone. Not locked behind paywalls. Not hidden in proprietary systems. Open-source is how we democratize the best tools — and that's exactly what I build.",
      body2:
        "My work spans cybersecurity risk analysis, climate policy visualization, causal inference, and social impact platforms. The common thread: taking complex data and making it actionable for the people who need it most.",
    },
    funFact: "Every project here is open-source, MIT-licensed, and built to be reused.",
  },

  stats: [
      { value: "18", label: "Open Source Projects" },
      { value: "41", label: "PR Contributions" },
      { value: "20", label: "PRs Merged" },
    ],

  projects: [
      {
        name: "NSE Sentiment Analyzer",
        tagline: "Live NSE price + multi-source sentiment",
        description:
          "Enter any NSE ticker for a BULLISH / NEUTRAL / BEARISH signal: smart ticker search (504 aliases, handles rebrands and splits), 9-source news sentiment with event-aware scoring across 19 event types, a SmartScore 0-100 fusing recency-weighted EWMA, headline breadth and news volume, enhanced VADER plus a 123-term Indian financial lexicon, and RSI(14)/MACD technicals. 139 tests, AGPL v3.",
        tags: ["Streamlit", "Python", "NLP", "Finance"],
        url: "https://github.com/AshayK003/nse-sentiment-analyzer",
        gradient: "from-cyan-900/20 to-sky-900/10",
        featured: true,
      },
      {
        name: "KarmaMap",
        tagline: "Hyper-local NGO-volunteer matching platform",
        description:
          "Production-grade PWA connecting NGOs with nearby volunteers. PostGIS proximity matching scored by skill and road distance (OSRM), role-based dashboards for volunteers/NGOs/corporates, a karma points + streaks incentive system with leaderboard, offline-ready installable PWA, and Supabase Row-Level Security. React + Vite frontend on Vercel, Express backend on Render.",
        tags: ["React", "PostGIS", "Supabase", "PWA", "TypeScript"],
        url: "https://github.com/AshayK003/KarmaMap",
        gradient: "from-cyan-900/20 to-sky-900/10",
        featured: true,
      },
      {
        name: "NSE Portfolio Risk Scanner",
        tagline: "Institutional-grade risk analytics for NSE",
        description:
          "Upload a holdings CSV (or try the sample) for a full risk report: Historical, Parametric and Cornish-Fisher VaR at 95/99, CVaR, Sharpe and Sortino, beta vs Nifty, 10,000-path Monte Carlo, HMM regime detection, Hierarchical Risk Parity optimization and scenario stress tests. 355 tests, 90 percent coverage, zero API keys. Deployed on Streamlit Cloud.",
        tags: ["Streamlit", "Python", "Risk Analytics"],
        url: "https://github.com/AshayK003/nse-portfolio-risk-scanner",
        gradient: "from-green-900/20 to-emerald-900/10",
        featured: true,
      },
      {
              name: "FII/DII Dashboard",
              tagline: "Institutional flow tracking from NSE India",
              description:
                "Auto-fetches daily FII/DII flows from NSE India into SQLite; 4 interactive charts (net flow trend, FII vs DII, rolling averages, Nifty overlay), date-range filtering and CSV export. Premium UI with Lucide icons, zero cron, no API keys. 49 tests, AGPL v3.",
              tags: ["Streamlit", "Python", "nsepython"],
              url: "https://github.com/AshayK003/fii-dii-dashboard",
              gradient: "from-blue-900/20 to-indigo-900/10",
              featured: false,
            },
            {
              name: "DeltaGrid",
              tagline: "Paris Agreement NDC progress tracker",
              description:
                "Computes the gap between Paris Agreement NDC pledges and actual energy-transition trajectories for 200+ countries. A 0-100 Green Score from 6 energy shares, real-time slider re-ranking, Plotly choropleth maps, CSV/XLSX upload with auto-preprocessing, and country classification (hidden champions to laggards). 123 tests, MIT.",
              tags: ["Streamlit", "Python", "Climate"],
              url: "https://github.com/AshayK003/DeltaGrid",
              gradient: "from-emerald-900/20 to-teal-900/10",
              featured: false,
            },
      {
        name: "CausalLens",
        tagline: "Causal inference for time series",
        description:
        "Did that policy work? Five causal methods — ARIMA ITS, SARIMAX, Bayesian STS (Google CausalImpact), Difference-in-Differences, and Synthetic Control — with counterfactual charts, p-values, 95 percent CIs, placebo sensitivity checks, and PDF/HTML export. 207 tests, 11 pre-loaded datasets, MIT.",
        tags: ["Streamlit", "Python", "Causal Inference"],
        url: "https://github.com/AshayK003/CausalLens",
        gradient: "from-blue-900/20 to-indigo-900/10",
        featured: false,
      },
      {
        name: "DataSmith",
        tagline: "Synthetic data generator with a real moat",
        description:
        "Realistic synthetic data from statistical metadata alone — no training, no GPU, no cloud calls. A Schema Knowledge Graph of real schemas (Kaggle, UCI, URLs), an Imperfection Fingerprint engine for nulls/outliers/noise, and batched iterative generation with KS-stat quality tuning. Seed-deterministic, SDV optional. AGPL v3.",
        tags: ["Python", "Streamlit", "SDV", "NumPy"],
        url: "https://github.com/AshayK003/DataSmith",
        gradient: "from-sky-900/20 to-blue-900/10",
        featured: false,
      },
      {
        name: "DiffIQ",
        tagline: "BSE filing difference analysis",
        description:
        "Corporate filing monitor for BSE-listed stocks: polls the BSE Announcements API daily, downloads attached PDFs, extracts text with pypdf, classifies by type and sections them, then diffs each section against the prior filing so you spot what changed. Pure Python plus SQLite, zero external services.",
        tags: ["Streamlit", "Python", "NLP"],
        url: "https://github.com/AshayK003/DiffIQ",
        gradient: "from-yellow-900/20 to-amber-900/10",
        featured: false,
      },
      {
        name: "pdf-studio",
        tagline: "PDF generation, three lines at a time",
        description:
        "Three lines of code for a PDF with a table, chart, and header. A thin wrapper over ReportLab with a clean Document model and two-pass rendering for page numbers — headings, paragraphs, tables, charts, and a running header without the boilerplate. Published on PyPI (pdf-studio-py), AGPL v3.",
        tags: ["Python", "ReportLab", "PDF"],
        url: "https://github.com/AshayK003/pdf-studio",
        gradient: "from-rose-900/20 to-pink-900/10",
        featured: false,
      },
      {
        name: "PriceSentinel",
        tagline: "Competitor pricing monitor",
        description:
        "Chrome extension plus a lightweight Python backend that pins competitor pricing pages and alerts you on change. CSS-selector targeting ignores nav/footer noise, a visual diff overlay highlights changes inline, and the backend polls on a schedule with email, Slack, and Telegram alerts. 10-second install, zero infra cost. MIT.",
        tags: ["WXT", "Preact", "FastAPI", "Chrome Extension"],
        url: "https://github.com/AshayK003/PriceSentinel",
        gradient: "from-blue-900/20 to-indigo-900/10",
        featured: false,
      },
      {
        name: "Hackathon Problems",
        tagline: "56 curated real-world problems",
        description:
        "The largest curated collection of real-world problem statements — 56 problems across 5 tracks (Global South Impact, US Civic Tech, India Impact, Frontier AI, Rapid Prototypes). Every problem is grounded in 200+ cited papers and 100+ linked datasets, ready to build for hackathons, capstones, and portfolios. MIT.",
        tags: ["Research", "Markdown", "Open Data"],
        url: "https://github.com/AshayK003/hackathon-problem-statements",
        gradient: "from-fuchsia-900/20 to-pink-900/10",
        featured: false,
      },
    ],

  stack: [
    {
      category: "Languages",
      items: [
        { name: "Python", level: 90, description: "Data, ML, automation" },
        { name: "TypeScript", level: 75, description: "Frontend & tooling" },
        { name: "SQL", level: 85, description: "Analytics & PostGIS" },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "React", level: 80, description: "Interactive dashboards & PWAs" },
        { name: "FastAPI", level: 85, description: "High-performance APIs" },
        { name: "Streamlit", level: 90, description: "Rapid data apps" },
        { name: "Node.js", level: 70, description: "Backend services" },
      ],
    },
    {
      category: "Data & AI",
      items: [
        { name: "XGBoost", level: 80, description: "Risk scoring & prediction" },
        { name: "Gemini", level: 75, description: "Content analysis & generation" },
        { name: "VADER", level: 85, description: "Sentiment analysis" },
        { name: "Causal Inference", level: 80, description: "Time series & treatment effects" },
      ],
    },
    {
      category: "Infrastructure",
      items: [
        { name: "PostGIS", level: 75, description: "Spatial queries & mapping" },
        { name: "PWA", level: 80, description: "Offline-first web apps" },
        { name: "REST APIs", level: 90, description: "API design & integration" },
        { name: "Docker", level: 70, description: "Containerized deployments" },
      ],
    },
  ],

  socials: [
      { label: "GitHub", url: "https://github.com/AshayK003", icon: "Github" },
      { label: "X", url: "https://x.com/sentinelcipher", icon: "Twitter" },
      { label: "LinkedIn", url: "https://linkedin.com/in/ashay-kushwaha-7a3101266", icon: "Linkedin" },
      { label: "Medium", url: "https://medium.com/@sentinelcipher3301", icon: "Medium" },
    ],
} as const