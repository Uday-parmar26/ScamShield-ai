# SCAMSHIELD

> **Tagline**: *"Don't just detect the scam. Understand the attack."*
> **Event Submission**: HACKDEVENGERS 1.0 Hackathon

ScamShield is an explainable, India-aware AI scam-triage and response assistant. It analyzes suspicious text messages, screenshots (OCR), and web URLs; identifies hidden scam patterns and psychological manipulation tactics; produces an explainable risk assessment; and provides immediate, actionable safety guidance.

---

## 🌟 Core Product Philosophy

```
DETECT ──► EXPLAIN ──► PROTECT ──► RESPOND
```

ScamShield answers 8 vital user questions:
1. **Is this suspicious?** (0–100 Explainable Risk Score & Severity Badge)
2. **Why is it suspicious?** (Grounded red flag evidence cards)
3. **What psychological manipulation is being used?** (Fear, Urgency, Authority, Greed, Isolation, etc.)
4. **What type of scam is this?** (Extensible Indian Scam Taxonomy)
5. **What evidence caused the assessment?** (Observed text/URL indicators)
6. **What should I do right now?** (Prioritized preventative checklist)
7. **What if I already clicked, paid, or shared OTP?** (Incident recovery pathways)
8. **Where can I report it in India?** (1930 Helpline & cybercrime.gov.in integration)

---

## 🚀 Key Features & Differentiators

- **Hybrid Triage Architecture**: Blends deterministic regex/heuristics, URL safety rules, and AI semantic reasoning.
- **Human Psychology Layer**: Explores 12 emotional manipulation vectors (Fear, Urgency, Authority, Greed, Trust, Scarcity, Coercion, Isolation, Financial Pressure).
- **Multi-Input Support**:
  - **Message/Text**: SMS, WhatsApp, Email, Job offers.
  - **Screenshot OCR**: Image upload with automated text & entity extraction.
  - **URL Intelligence**: Punycode lookalikes, IP hosts, excessive subdomains, suspicious TLDs.
- **Action Center**: Dual pathways for preventative safety vs post-incident recovery.
- **India Safety Layer**: Direct hotline 1930, National Cyber Crime Portal, Sanchar Saathi (Chakshu), RBI Sachet, SEBI SCORES.
- **Multilingual Support**: Toggle between English, Hindi (हिंदी), and Hinglish UI translations.
- **Judge Presentation Mode**: 1-Click execution for 8 real-world judge demo scenarios.
- **Privacy First**: Zero persistence of user data; prompt injection defense; sensitive values redacted.

---

## 📁 Repository Structure

```
/src
  /app
    /api/analyze/route.ts       # Scam triage API endpoint
    layout.tsx                   # Root layout & SEO metadata
    page.tsx                     # Main application view & result dashboard
    globals.css                  # Custom styling & dark cyber theme
  /components
    Navbar.tsx                   # Top header with Judge Mode & language toggle
    HeroSection.tsx              # Hero headline & philosophy cards
    AnalyzerTabs.tsx             # Input workstation (Text, Screenshot OCR, URL)
    RiskGauge.tsx                # Circular risk score meter & sub-score bars
    PsychologicalAnalysisGrid.tsx# Human manipulation analysis grid
    EvidenceCardList.tsx         # Grounded red flag cards
    ActionCenter.tsx             # Pre/Post incident safety checklists
    IndiaSafetyWidget.tsx        # Official 1930 & cybercrime directory
    ScamKnowledgeBase.tsx        # Interactive educational cards
    JudgeModeModal.tsx           # 1-Click Presentation drawer
  /config
    demo-scenarios.ts            # 8 pre-loaded judge demo scenarios
  /lib
    scam-taxonomy.ts             # Extensible Indian scam taxonomy
    psych-taxonomy.ts            # Psychological manipulation taxonomy
    risk-engine.ts               # Deterministic rule engine & false positive filter
    url-intelligence.ts          # URL parser, punycode, & threat intel adapter
    ocr-service.ts               # Tesseract OCR & entity extraction
    ai-provider.ts               # OpenAI/Gemini provider abstraction + hybrid fallback
    india-safety.ts              # Official government guidelines & 1930 hotline
  /types
    index.ts                     # TypeScript data interfaces
  /tests
    suite.test.ts                # Vitest automated unit test suite
/docs
  architecture.md                # System architecture documentation
  ai-pipeline.md                 # AI triage & hybrid model pipeline
  security.md                    # Privacy, security, & prompt injection defense
  demo-script.md                 # 2-minute Hackathon pitch & judge script
HACKATHON_SUBMISSION.md           # HACKDEVENGERS 1.0 submission details
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Lucide Icons, Framer Motion
- **OCR Engine**: Tesseract.js (Client/Server extraction)
- **AI & Validation**: Zod schema validation, Provider Abstraction (OpenAI / Gemini / Local Fallback)
- **Testing**: Vitest

---

## ⚡ Quick Start & Running Locally

### 1. Installation
```bash
npm install
```

### 2. Environment Setup (Optional for OpenAI/Gemini)
Create `.env.local`:
```env
OPENAI_API_KEY=your_openai_api_key_here
```
*(If no API key is supplied, ScamShield automatically operates using its high-fidelity deterministic engine + hybrid semantic model with zero downtime).*

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 4. Run Automated Test Suite
```bash
npm test
```

### 5. Build for Production
```bash
npm run build
```

---

## ⚖️ Hackathon Judging Dimensions Alignment

1. **Innovation & Creativity**: First product to focus on the human psychological manipulation layer rather than technical malware alone.
2. **Technical Implementation**: Clean modular architecture with hybrid rule engine, URL heuristics, OCR pipeline, and provider abstractions.
3. **Code Quality**: 100% TypeScript type safety, Vitest unit tests, clean separation of concerns.
4. **Problem Solving**: Directly addresses the multi-billion dollar cyber fraud epidemic in India.
5. **Functionality**: Complete DETECT → EXPLAIN → PROTECT → RESPOND workflow across text, screenshots, and URLs.
6. **Scalability**: Config-driven taxonomies, threat intel adapter pattern, zero-database MVP footprint.
7. **UI/UX**: Unstop-inspired modern cyber dark design, animated circular risk gauges, 10-second result clarity.
