# HACKDEVENGERS 1.0 — Official Hackathon Submission

## 📌 Project Overview

- **Project Name**: SCAMSHIELD
- **Tagline**: *"Don't just detect the scam. Understand the attack."*
- **Target Audience**: Digitally active Indian consumers, parents, students, freelancers, and small businesses.

---

## 🎯 Problem Statement

Digital scams increasingly exploit **HUMAN PSYCHOLOGY** (fear of arrest, artificial urgency, fake authority, greed bait) rather than software bugs. Existing antivirus tools or URL scanners tell users if a domain is blacklisted, but leave users stranded when an impersonator calls claiming to be from the CBI or Bank support. Users don't know:
1. Why something is a scam
2. Which specific phrase is deceptive
3. What psychological trick is being played on them
4. What exact actions to take immediately
5. Where to report it in India

---

## 💡 The ScamShield Solution

ScamShield converts suspicious SMS, WhatsApp messages, screenshots, and links into an explainable risk assessment and actionable safety response plan.

### Core Philosophy:
`DETECT → EXPLAIN → PROTECT → RESPOND`

---

## 🚀 Key Innovations & USP

1. **Psychological Manipulation Vector Analysis**: Decodes 12 emotional tactics (Fear, Urgency, Authority, Greed, Isolation, Coercion, Scarcity, Financial Pressure).
2. **Explainable Risk Gauge (0-100)**: Transparent risk score breakdown (Social Engineering, Financial Risk, Credential Theft, Urgency, Impersonation, Link Risk).
3. **Multi-Input Triage**: Native support for Text, Screenshot OCR, and Suspicious Web URLs.
4. **India Safety Layer Integration**: Direct 1930 Cyber Fraud Helpline hotline & official cybercrime.gov.in guidance.
5. **Dual Pre/Post Incident Workflows**: Tailored checklists for both preventative protection and emergency post-payment recovery.

---

## 🏗️ Technical Architecture

- **Frontend & API**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Hybrid Risk Engine**: Deterministic Regex Rules + URL Heuristics + AI Semantic Provider
- **OCR Engine**: Tesseract.js client/edge text & entity extraction
- **AI Abstraction**: Zod schema validation supporting OpenAI, Gemini, and Local Fallback Engine
- **Test Suite**: Vitest automated tests covering risk rules, URL heuristics, false positive protection, and prompt injection defense.

---

## 📈 Scalability & Future Roadmap

- **Phase 1 (Current)**: Text + Screenshot OCR + URL Triage + India Action Center + Judge Mode.
- **Phase 2**: Browser Extension for real-time WhatsApp Web & email phishing alerts.
- **Phase 3**: Mobile App with SMS call filter integration.
- **Phase 4**: Threat Intelligence Community Network & Bank API integrations.
