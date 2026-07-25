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
      "I engineer open-source systems that turn raw data into decisions — breach impact models, climate policy dashboards, causal inference engines, real-time sentiment pipelines. Each project starts with a question and ends with a tool anyone can use.",
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
        name: "NSE Portfolio Risk Scanner",
        tagline: "Institutional-grade risk analytics for NSE",
        description:
          "VaR 95/99, Sharpe, Sortino, Monte Carlo (10K), HMM regime detection, HRP optimization, stress testing, sector concentration. 355 tests, 90% coverage, zero paid APIs. **Deployed on Streamlit Cloud.**",
        tags: ["Streamlit", "Python", "Risk Analytics"],
        url: "https://github.com/AshayK003/nse-portfolio-risk-scanner",
        gradient: "from-green-900/20 to-emerald-900/10",
        featured: true,
      },
      {
        name: "NSE Sentiment Analyzer",
        tagline: "Live NSE price + multi-source sentiment",
        description:
          "Live NSE price + multi-source news sentiment (9+ RSS, 500+ aliases). Bayesian blending, VADER, technical overlays. **10★, 109 tests, AGPL v3, fully free.**",
        tags: ["Streamlit", "Python", "NLP", "Finance"],
        url: "https://github.com/AshayK003/nse-sentiment-analyzer",
        gradient: "from-cyan-900/20 to-sky-900/10",
        featured: true,
      },
      {
        name: "FII/DII Dashboard",
        tagline: "Institutional flow tracking from NSE India",
        description:
          "Daily institutional flow tracking from NSE India. Trend charts, FII vs DII comparison, rolling averages, Nifty 50 overlay. **5 forks, daily Telegram cron.**",
        tags: ["Streamlit", "Python", "nsepython"],
        url: "https://github.com/AshayK003/fii-dii-dashboard",
        gradient: "from-blue-900/20 to-indigo-900/10",
        featured: false,
      },
      {
        name: "BreachAlpha",
        tagline: "Data breach financial impact quantification",
        description:
          "Event study methodology (MacKinlay 1997) + XGBoost risk scoring. Measures abnormal returns, CAR, volatility spikes, and recovery time. CLI, web dashboard, and FastAPI — built for CISO board reporting. **Deployed on Render (Docker), 144 tests.**",
        tags: ["FastAPI", "React", "Python", "Docker"],
        url: "https://github.com/AshayK003/BreachAlpha",
        gradient: "from-amber-900/20 to-orange-900/10",
        featured: true,
      },
      {
        name: "StackTrade",
        tagline: "Free intraday probability-stacking for NSE",
        description:
          "ORB + hourly MA20 trend filter + support/resistance. **94.5% WR backtest (849 trades, 25 stocks × 60 days), zero direct losses, 52% scratch rate.** Live-trading ready.",
        tags: ["Streamlit", "Python", "Trading"],
        url: "https://github.com/AshayK003/StackTrade",
        gradient: "from-rose-900/20 to-pink-900/10",
        featured: false,
      },
      {
        name: "DeltaGrid",
        tagline: "Paris Agreement NDC progress tracker",
        description:
          "NDC gap analysis across 200+ countries. Green scoring, gap analysis, interactive choropleth maps. **Deployed on Streamlit Cloud.**",
        tags: ["Streamlit", "Python", "Climate"],
        url: "https://github.com/AshayK003/DeltaGrid",
        gradient: "from-emerald-900/20 to-teal-900/10",
        featured: false,
      },
      {
        name: "DataSmith",
        tagline: "Synthetic data generator with a real moat",
        description:
          "Describe any dataset in plain English — Schema Knowledge Graph (crawls real schemas), Domain Imperfection Fingerprints (realistic noise), Community Schema Library (network effects). AGPL v3.",
        tags: ["Python", "Streamlit", "SDV", "NumPy"],
        url: "https://github.com/AshayK003/DataSmith",
        gradient: "from-sky-900/20 to-blue-900/10",
        featured: false,
      },
      {
        name: "pdf-studio",
        tagline: "PDF generation, three lines at a time",
        description:
          "ReportLab backend, 3 bundled fonts (Inter, Lora, JetBrains Mono), two-pass rendering for page numbers. Table + chart + header in 3 lines.",
        tags: ["Python", "ReportLab", "PDF"],
        url: "https://github.com/AshayK003/pdf-studio",
        gradient: "from-rose-900/20 to-pink-900/10",
        featured: false,
      },
      {
        name: "CausalLens",
        tagline: "Causal inference for time series",
        description:
          "Did that policy actually work? ARIMA, Bayesian STS, Diff-in-Diff, Synthetic Control. Counterfactual charts with p-values, 95% CIs, downloadable PDF reports.",
        tags: ["Streamlit", "Python", "Causal Inference"],
        url: "https://github.com/AshayK003/CausalLens",
        gradient: "from-blue-900/20 to-indigo-900/10",
        featured: false,
      },
      {
        name: "DiffIQ",
        tagline: "BSE filing difference analysis",
        description:
          "Downloads BSE board meeting outcomes/annual reports, extracts text via pypdf, diffs side-by-side. Streamlit dashboard with historical tracking. Pure Python + SQLite, zero external services.",
        tags: ["Streamlit", "Python", "NLP"],
        url: "https://github.com/AshayK003/DiffIQ",
        gradient: "from-yellow-900/20 to-amber-900/10",
        featured: false,
      },
      {
        name: "KarmaMap",
        tagline: "NGO-volunteer matching platform",
        description:
          "Production-grade PWA with PostGIS geospatial matching, role-based dashboards, karma incentives, offline support, Photo verification, OSRM routing, Supabase RLS, CSR analytics. Frontend → Vercel, Backend → Render (Docker), DB → Supabase.",
        tags: ["React", "PostGIS", "Supabase", "PWA", "TypeScript"],
        url: "https://github.com/AshayK003/KarmaMap",
        gradient: "from-cyan-900/20 to-sky-900/10",
        featured: false,
      },
      {
        name: "Hackathon Problems",
        tagline: "36 curated real-world problems",
        description:
          "Global South AI, US Civic Tech, Rapid Prototypes — each with datasets, papers, and MVP timelines. **7★, 1 fork.**",
        tags: ["Research", "Markdown", "Open Data"],
        url: "https://github.com/AshayK003/hackathon-problem-statements",
        gradient: "from-fuchsia-900/20 to-pink-900/10",
        featured: false,
      },
      {
        name: "PriceSentinel",
        tagline: "Competitor pricing monitor",
        description:
          "Chrome extension (WXT + Preact, 31KB) + FastAPI backend with APScheduler + SQLite. Local-first, optional cloud sync. Zero infra — no Redis, Celery, SendGrid, or Playwright SDK for MVP.",
        tags: ["WXT", "Preact", "FastAPI", "Chrome Extension"],
        url: "https://github.com/AshayK003/PriceSentinel",
        gradient: "from-blue-900/20 to-indigo-900/10",
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
    { label: "Medium", url: "https://medium.com/@darkcharon3301_96987", icon: "Medium" },
  ],
} as const
