# Niveshya Advisory Platform

Professional Accounting, Taxation, Compliance & Wealth Advisory Platform built using Next.js 16, React 19, Tailwind CSS v4, shadcn/ui and Neon PostgreSQL.

---

# Project Overview

Niveshya Advisory operates as a dual-service platform:

## Business Services

Target Audience:

* SMEs
* Proprietorship Firms
* Partnership Firms
* Trading & Distribution Businesses
* Service-Based Companies

Services:

* Accounting & Bookkeeping
* GST Compliance
* Payroll Processing
* TDS Compliance
* Financial Reporting
* MIS Reporting
* Inventory Accounting

Route:

```txt
/business
```

---

## Wealth Advisory

Target Audience:

* Salaried Professionals
* Business Owners
* Families
* NRIs

Services:

* Mutual Funds
* SIP Planning
* Insurance Advisory
* Retirement Planning
* Goal-Based Financial Planning

Route:

```txt
/wealth
```

---

# Application Architecture

```txt
Visitor
   │
   ▼
Gateway Page (/)
   │
   ├── /business
   │
   └── /wealth

Business / Wealth Pages
   │
   ▼
Contact Forms
   │
   ▼
Next.js Server Actions
   │
   ▼
Neon PostgreSQL
   │
   ▼
Admin CRM Dashboard
```

---

# Current Features

## Public Website

### Gateway Page

Route:

```txt
/
```

Purpose:

Allows visitors to choose between:

* Business Services
* Wealth Advisory

Component:

```txt
components/shared/GatewayHero.tsx
```

---

### Business Website

Route:

```txt
/business
```

Contains:

* Hero
* Statistics
* Services
* Industries
* About
* Trust
* Contact Form
* CTA
* Footer

---

### Wealth Website

Route:

```txt
/wealth
```

Contains:

* Wealth Hero
* Investment Planning
* Insurance Services
* Goal Planning
* Advisory Trust
* Wealth CTA

---

# CRM System

## Lead Capture

When a visitor submits a contact form:

```txt
Form
  ↓
Server Action
  ↓
Neon Database
  ↓
Lead Created
```

Action:

```txt
actions/create-lead.ts
```

Database Table:

```txt
niveshya.leads
```

---

## Admin Dashboard

Route:

```txt
/admin
```

Purpose:

View all leads.

Features:

* Total Leads
* New Leads
* Contacted Leads
* Converted Leads
* Recent Lead List

File:

```txt
app/admin/page.tsx
```

---

## Lead Detail Page

Route:

```txt
/admin/leads/[id]
```

Purpose:

View a specific lead.

Features:

* Contact Details
* Service Requested
* Message
* Status Tracking
* Notes System

File:

```txt
app/admin/leads/[id]/page.tsx
```

---

## Lead Status Management

Available Statuses:

```txt
new
contacted
qualified
converted
closed
```

Action:

```txt
actions/update-lead-status.ts
```

Database Column:

```txt
niveshya.leads.status
```

---

## Lead Notes

Purpose:

Store internal follow-up information.

Examples:

```txt
Called client.

Interested in GST package.

Requested proposal.

Follow-up Friday.
```

Action:

```txt
actions/create-note.ts
```

Database Table:

```txt
niveshya.lead_notes
```

---

# Database Architecture

Schema:

```txt
niveshya
```

---

## users

Purpose:

Administrative users.

Columns:

```txt
id
name
email
password_hash
role
created_at
```

---

## leads

Purpose:

Store all incoming leads.

Columns:

```txt
id
business_name
contact_person
phone
email
service
message
source
status
created_at
updated_at
```

---

## lead_notes

Purpose:

Store internal notes linked to leads.

Columns:

```txt
id
lead_id
note
created_at
```

---

# Server Actions

```txt
actions/
│
├── create-lead.ts
├── update-lead-status.ts
└── create-note.ts
```

Responsibilities:

* Create Leads
* Update Lead Status
* Create Notes

---

# Database Connection

```txt
lib/
│
└── neon.ts
```

Purpose:

Provides Neon PostgreSQL connection.

Technology:

```txt
@neondatabase/serverless
```

---

# Current Project Structure

```txt
app/
│
├── page.tsx
├── layout.tsx
├── globals.css
│
├── business/
│   └── page.tsx
│
├── wealth/
│   └── page.tsx
│
└── admin/
    ├── page.tsx
    │
    └── leads/
        └── [id]/
            └── page.tsx

actions/
│
├── create-lead.ts
├── update-lead-status.ts
└── create-note.ts

lib/
│
└── neon.ts

components/
│
├── shared/
│   └── GatewayHero.tsx
│
├── contact/
│   └── Contact.tsx
│
├── about/
├── stats/
├── industries/
├── trust/
├── footer/
├── features/
├── cta/
│
├── business/
│
└── wealth/

public/
│
└── assets

.github/
│
└── workflows/
    └── docker-image.yml
```

---

# Roadmap

## Completed

* Gateway Architecture
* Business Landing Page
* Wealth Landing Page
* Lead Capture
* Neon Integration
* Admin Dashboard
* Lead Details
* Status Tracking
* Lead Notes
* CRM Metrics

---

## In Progress

* Authentication
* Admin Route Protection

---

## Planned

* Search & Filtering
* Email Notifications
* WhatsApp Notifications
* WhatsApp Bot
* Blog System
* Client Portal
* Flutter CRM App
* Analytics Dashboard

```
```
