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
    { value: "15+", label: "Open Source Projects" },
    { value: "12", label: "PR Contributions" },
    { value: "∞", label: "Problems Solved" },
  ],

  projects: [
    {
      name: "NSE Sentiment",
      tagline: "Live stock sentiment intelligence",
      description:
        "Multi-source sentiment + technical indicators for any NSE ticker. 504 smart aliases, RSS from 9+ sources, Bayesian sentiment blending, and FinBERT option. RSI, MACD, SMA crossover — one dashboard.",
      tags: ["Streamlit", "Python", "NLP", "VADER"],
      url: "https://github.com/AshayK003/nse-sentiment-analyzer",
      gradient: "from-cyan-900/20 to-sky-900/10",
      featured: false,
    },
    {
      name: "DataSmith",
      tagline: "Synthetic data with a real moat",
      description:
        "Describe any dataset in plain English — automatically discovers real-world schemas and generates realistic synthetic data with domain-specific imperfections. Schema Knowledge Graph, correlation engine, LLM schema verification.",
      tags: ["Python", "SDV", "NumPy", "Streamlit"],
      url: "https://github.com/AshayK003/DataSmith",
      gradient: "from-indigo-900/20 to-violet-900/10",
      featured: true,
    },
    {
      name: "KarmaMap",
      tagline: "NGO-volunteer matching platform",
      description:
        "Production-grade PWA with PostGIS geospatial matching, role-based dashboards, karma incentives, offline support, Photo verification, OSRM routing, Supabase RLS, and CSR analytics.",
      tags: ["React", "PostGIS", "Supabase", "PWA"],
      url: "https://github.com/AshayK003/KarmaMap",
      gradient: "from-violet-900/20 to-purple-900/10",
      featured: false,
    },
    {
      name: "BreachAlpha",
      tagline: "Data breach financial impact",
      description:
        "Event study methodology (MacKinlay 1997) + XGBoost risk scoring. Measures abnormal returns, CAR, volatility spikes, and recovery time. CLI, web dashboard, and FastAPI — built for CISO board reporting.",
      tags: ["FastAPI", "React", "Python", "XGBoost"],
      url: "https://github.com/AshayK003/BreachAlpha",
      gradient: "from-amber-900/20 to-orange-900/10",
      featured: true,
    },
    {
      name: "CausalLens",
      tagline: "Causal inference for time series",
      description:
        "ARIMA, Bayesian STS, difference-in-differences, and synthetic control wrapped into one interface. Counterfactual charts with p-values, 95% CIs, and downloadable PDF reports.",
      tags: ["Streamlit", "Python", "Statsmodels"],
      url: "https://github.com/AshayK003/CausalLens",
      gradient: "from-blue-900/20 to-indigo-900/10",
      featured: false,
    },
    {
      name: "DeltaGrid",
      tagline: "Paris Agreement gap analysis",
      description:
        "NDC gap analysis across 200+ countries. Real-time green scoring with adjustable energy sliders, Plotly choropleth maps, CSV upload, and country classification — for policymakers and researchers.",
      tags: ["Streamlit", "Python", "Plotly"],
      url: "https://github.com/AshayK003/DeltaGrid",
      gradient: "from-emerald-900/20 to-teal-900/10",
      featured: false,
    },
    {
      name: "NSE Risk Scanner",
      tagline: "Portfolio risk analytics for NSE investors",
      description:
        "VaR 95/99, Sharpe, Sortino, Monte Carlo simulation, HMM regime detection, and sector concentration analysis from a single CSV upload. 355 tests, 90% coverage, zero paid APIs.",
      tags: ["Streamlit", "Python", "NumPy", "SciPy"],
      url: "https://github.com/AshayK003/nse-portfolio-risk-scanner",
      gradient: "from-green-900/20 to-emerald-900/10",
      featured: false,
    },
    {
      name: "pdf-studio",
      tagline: "PDF generation, three lines at a time",
      description:
        "Importable zero-dependency PDF library with pluggable backends. One call for a table, one for a chart, one for a header. Bundled fonts, auto page-break tables, running headers. Like SQLAlchemy for PDFs.",
      tags: ["Python", "ReportLab", "PDF"],
      url: "https://github.com/AshayK003/pdf-studio",
      gradient: "from-rose-900/20 to-pink-900/10",
      featured: false,
    },
    {
      name: "DiffIQ",
      tagline: "BSE filing difference analysis",
      description:
        "Detect what changed between corporate filings. Downloads BSE board meeting outcomes and annual reports, extracts text via pypdf, and diffs them side by side. Streamlit dashboard with historical tracking.",
      tags: ["Streamlit", "Python", "NLP"],
      url: "https://github.com/AshayK003/DiffIQ",
      gradient: "from-yellow-900/20 to-amber-900/10",
      featured: false,
    },
    {
      name: "Hackathon Problems",
      tagline: "Real-world problem statements",
      description:
        "36 structured problem statements across Global South AI, US Civic Tech, and Rapid Prototypes. Each comes with datasets, related papers, and MVP timeline estimates. Built for hackathons and impact projects.",
      tags: ["Markdown", "Research", "Open Source"],
      url: "https://github.com/AshayK003/hackathon-problem-statements",
      gradient: "from-sky-900/20 to-blue-900/10",
      featured: false,
    },
    {
      name: "PriceSentinel",
      tagline: "Competitor price monitoring",
      description:
        "Chrome extension (WXT + Preact) with FastAPI backend that monitors competitor pricing pages. Local-first with chrome.storage, optional polling/notifications. Zero infrastructure — no Redis, Celery, or SendGrid.",
      tags: ["WXT", "Preact", "FastAPI", "Chrome"],
      url: "https://github.com/AshayK003/PriceSentinel",
      gradient: "from-red-900/20 to-orange-900/10",
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
