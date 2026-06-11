# Niveshya Advisory Website

Professional Accounting, Taxation & Compliance Services Website built using Next.js, Tailwind CSS and shadcn/ui.

---

## About Niveshya Advisory

Niveshya Advisory provides accounting, taxation, GST compliance, bookkeeping, payroll support and financial reporting services for businesses across India.

### Core Services

* Accounting & Bookkeeping
* GST Compliance & Return Filing
* TDS & Professional Tax Compliance
* Payroll Support & Salary Processing
* MIS & Financial Reporting
* Inventory & Stock Accounting
* Account Finalization Support
* Financial Documentation & Compliance

### Industries Served

* Trading & Distribution
* Travel & Hospitality
* Service Sector
* Small & Medium Enterprises (SMEs)
* Proprietorship Firms
* Partnership Firms

### Value Proposition

* Accurate Bookkeeping & Accounting
* Timely GST & Tax Compliance
* Strong Reconciliation & Financial Controls
* Reliable MIS Reporting
* Cost-Effective Outsourced Accounting Support
* Professional & Confidential Financial Handling

---

# Technology Stack

| Technology      | Purpose            |
| --------------- | ------------------ |
| Next.js 16      | Frontend Framework |
| React 19        | UI Rendering       |
| TypeScript      | Type Safety        |
| Tailwind CSS v4 | Styling            |
| shadcn/ui       | Component Library  |
| Lucide React    | Icons              |
| Docker          | Containerization   |
| GitHub Actions  | CI/CD              |
| Docker Hub      | Image Registry     |

---

# Local Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Application will run on:

```txt
http://localhost:3000
```

---

# Production Build

Build:

```bash
npm run build
```

Run:

```bash
npm start
```

---

# Docker

Build image:

```bash
docker build -t niveshya .
```

Run container:

```bash
docker run -p 3000:3000 niveshya
```

---

# Project Structure

```txt
app/
│
├── layout.tsx
├── page.tsx
├── globals.css
├── favicon.ico
│
components/
│
├── about/
│   └── About.tsx
│
├── contact/
│   └── Contact.tsx
│
├── cta/
│   └── Cta.tsx
│
├── features/
│   └── features.tsx
│
├── footer/
│   └── Footer.tsx
│
├── industries/
│   └── Industries.tsx
│
├── stats/
│   └── Stats.tsx
│
├── trust/
│   └── trust.tsx
│
└── ui/
    ├── hero.tsx
    ├── navbar.tsx
    ├── button.tsx
    ├── card.tsx
    ├── input.tsx
    ├── textarea.tsx
    └── other shadcn components

public/
│
├── logo.png
├── images/
└── static assets

.github/
└── workflows/
    └── docker-image.yml

Dockerfile
docker-compose.yml
README.md
```

---

# Website Sections

Current homepage layout:

```txt
Navbar
Hero
Stats
Services
Industries Served
About
Trust
Contact
Call To Action
Footer
```

Configured in:

```txt
app/page.tsx
```

---

# Adding New Sections

Create a component:

```txt
components/testimonials/Testimonials.tsx
```

Import into:

```txt
app/page.tsx
```

Example:

```tsx
import Testimonials from "@/components/testimonials/Testimonials";
```

Render:

```tsx
<Testimonials />
```

---

# Creating New Pages

Example:

```txt
app/gst-filing/page.tsx
```

URL becomes:

```txt
https://niveshya.co.in/gst-filing
```

Example pages planned:

```txt
/about
/contact
/bookkeeping
/gst-filing
/payroll
/taxation
```

---

# Deployment

Source Code:

GitHub Repository

Container Registry:

Docker Hub

Deployment Method:

```txt
GitHub Push
↓
GitHub Actions
↓
Docker Build
↓
Docker Hub Push
↓
Server Pull
↓
Docker Compose Restart
```

---

# Future Roadmap

## Phase 1

* Landing Page
* Contact Form
* Responsive Design
* Basic SEO

## Phase 2

* Lead Storage Database
* Server Actions
* Email Notifications
* Admin Dashboard

## Phase 3

* Blog
* GST Resources
* AI SEO Pages
* Lead Analytics

## Phase 4

* Client Portal
* Document Upload
* Accounting Workflow Tracking

---

# Maintainers

Niveshya Advisory

Guwahati, Assam, India

Phone:
+91 1234567890
+91 1234567890

Email:
[samplemail@gmail.com](mailto:zahr.abas166@gmail.com)

Website:
https://niveshya.co.in

```
```
