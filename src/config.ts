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
                "Daily institutional flows with trends, FII vs DII, rolling averages and Nifty 50 overlay. Five forks, daily Telegram cron.",
              tags: ["Streamlit", "Python", "nsepython"],
              url: "https://github.com/AshayK003/fii-dii-dashboard",
              gradient: "from-blue-900/20 to-indigo-900/10",
              featured: false,
            },
            {
              name: "DeltaGrid",
              tagline: "Paris Agreement NDC progress tracker",
              description:
                "NDC gap analysis across 200 plus countries with green scoring and interactive choropleth maps. Deployed on Streamlit Cloud.",
              tags: ["Streamlit", "Python", "Climate"],
              url: "https://github.com/AshayK003/DeltaGrid",
              gradient: "from-emerald-900/20 to-teal-900/10",
              featured: false,
            },
      {
        name: "CausalLens",
        tagline: "Causal inference for time series",
        description:
          "Did that policy work? ARIMA, Bayesian STS, Diff-in-Diff and Synthetic Control with counterfactual charts, p-values and 95 percent CIs.",
        tags: ["Streamlit", "Python", "Causal Inference"],
        url: "https://github.com/AshayK003/CausalLens",
        gradient: "from-blue-900/20 to-indigo-900/10",
        featured: false,
      },
      {
        name: "DataSmith",
        tagline: "Synthetic data generator with a real moat",
        description:
          "Describe any dataset in plain English. Schema Knowledge Graph, Domain Imperfection Fingerprints and Community Schema Library. AGPL v3.",
        tags: ["Python", "Streamlit", "SDV", "NumPy"],
        url: "https://github.com/AshayK003/DataSmith",
        gradient: "from-sky-900/20 to-blue-900/10",
        featured: false,
      },
      {
        name: "DiffIQ",
        tagline: "BSE filing difference analysis",
        description:
          "Downloads BSE announcements, extracts text with pypdf and diffs side-by-side. Pure Python plus SQLite, zero external services.",
        tags: ["Streamlit", "Python", "NLP"],
        url: "https://github.com/AshayK003/DiffIQ",
        gradient: "from-yellow-900/20 to-amber-900/10",
        featured: false,
      },
      {
        name: "pdf-studio",
        tagline: "PDF generation, three lines at a time",
        description:
          "ReportLab wrapper with three bundled fonts and two-pass rendering for page numbers. Table plus chart plus header in three lines.",
        tags: ["Python", "ReportLab", "PDF"],
        url: "https://github.com/AshayK003/pdf-studio",
        gradient: "from-rose-900/20 to-pink-900/10",
        featured: false,
      },
      {
        name: "PriceSentinel",
        tagline: "Competitor pricing monitor",
        description:
          "Chrome extension (WXT plus Preact, 31KB) plus FastAPI backend with APScheduler and SQLite. Local-first, optional cloud sync.",
        tags: ["WXT", "Preact", "FastAPI", "Chrome Extension"],
        url: "https://github.com/AshayK003/PriceSentinel",
        gradient: "from-blue-900/20 to-indigo-900/10",
        featured: false,
      },
      {
        name: "Hackathon Problems",
        tagline: "36 curated real-world problems",
        description:
          "Global South AI, US Civic Tech and Rapid Prototypes — each with datasets, papers and MVP timelines. 10 stars, 2 forks.",
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