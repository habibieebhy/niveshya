# Current Features

## Public Website

### Gateway Landing Page

Route:

```txt
/
```

Purpose:

Allows visitors to self-identify and navigate to the correct service vertical.

Options:

* Business Services
* Wealth Advisory

Component:

```txt
components/shared/GatewayHero.tsx
```

---

### Business Services Website

Route:

```txt
/business
```

Purpose:

Primary website for accounting, taxation and compliance services.

Sections:

* Hero
* Statistics
* Services
* Industries Served
* About
* Trust
* Contact Form
* Call To Action
* Footer

Lead Form:

```txt
components/contact/Contact.tsx
```

---

### Wealth Advisory Website

Route:

```txt
/wealth
```

Purpose:

Primary website for financial planning and wealth advisory services.

Sections:

* Wealth Hero
* Investment Planning
* Insurance Solutions
* Goal-Based Planning
* Advisory Trust
* Wealth CTA

---

# CRM System

## Lead Capture

Workflow:

```txt
Visitor
   ↓
Contact Form
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

## Admin Authentication

Purpose:

Secure access to CRM resources.

Features:

* Email Login
* Password Verification
* Bcrypt Password Hashing
* JWT Session Creation
* Cookie-Based Authentication
* Logout Functionality

Files:

```txt
actions/auth/login.ts
actions/auth/logout.ts
lib/auth/session.ts
```

---

## Route Protection

Purpose:

Prevent unauthenticated users from accessing CRM resources.

Protected Routes:

```txt
/admin
/admin/leads/[id]
```

Implementation:

```txt
proxy.ts
```

Workflow:

```txt
Request
   ↓
Session Cookie Check
   ↓
Authenticated?
   │
   ├── YES → Continue
   │
   └── NO → Redirect Login
```

---

## CRM Dashboard

Route:

```txt
/admin
```

Purpose:

Central lead management dashboard.

Features:

* Dashboard Metrics
* Total Leads Counter
* New Leads Counter
* Contacted Leads Counter
* Converted Leads Counter
* Lead Listing
* Lead Status Overview
* Logout Access

File:

```txt
app/admin/page.tsx
```

---

## Lead Detail Management

Route:

```txt
/admin/leads/[id]
```

Purpose:

View and manage individual leads.

Features:

* Business Information
* Contact Information
* Service Information
* Lead Message
* Status Updates
* Internal Notes
* Lead Timeline

File:

```txt
app/admin/leads/[id]/page.tsx
```

---

## Lead Status Tracking

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

## Lead Notes System

Purpose:

Store internal follow-up notes and conversation history.

Examples:

```txt
Called client.

Interested in GST compliance package.

Requested pricing proposal.

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

CRM users and authentication.

Columns:

```txt
id
name
email
password_hash
role
created_at
```

Current Roles Planned:

```txt
super_admin
admin
employee
viewer
```

---

## leads

Purpose:

Store all incoming website leads.

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

Store internal CRM notes linked to leads.

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
├── create-note.ts
├── update-lead-status.ts
│
└── auth/
    ├── login.ts
    └── logout.ts
```

Responsibilities:

* Create Leads
* Create Notes
* Update Lead Status
* Authenticate Users
* Create Sessions
* Logout Users

---

# Authentication Architecture

```txt
User Login
    ↓
Neon Users Table
    ↓
Bcrypt Verification
    ↓
JWT Session Creation
    ↓
Cookie Storage
    ↓
CRM Access
```

---

# Project Structure

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
    │
    ├── page.tsx
    │
    ├── login/
    │   └── page.tsx
    │
    └── leads/
        └── [id]/
            └── page.tsx

actions/
│
├── create-lead.ts
├── create-note.ts
├── update-lead-status.ts
│
└── auth/
    ├── login.ts
    └── logout.ts

lib/
│
├── neon.ts
│
└── auth/
    └── session.ts

proxy.ts
```

---

# Completed Milestones

* Gateway Landing Architecture
* Business Services Website
* Wealth Advisory Website
* Contact Form Integration
* Neon Database Integration
* Lead Capture System
* CRM Dashboard
* Lead Details View
* Lead Status Management
* Internal Notes System
* Dashboard Metrics
* Authentication System
* JWT Sessions
* Logout Functionality
* Route Protection

---

# Current Development Phase

## Phase 3 - CRM Expansion

Currently Building:

* User Management
* Role Based Access Control (RBAC)
* User Creation Interface
* User Editing Interface
* User Deletion Interface

---

# Planned Features

## CRM Enhancements

* User Management Dashboard
* Search & Filtering
* Lead Assignment
* Activity Timeline
* Audit Logs

## Notifications

* Email Notifications
* WhatsApp Notifications
* WhatsApp Bot Integration

## Marketing

* Blog System
* GST Resource Center
* SEO Content Engine

## Client Portal

* Client Login
* Document Upload
* Compliance Tracking
* Service Requests

## Mobile

* Flutter CRM Application
* Lead Management
* WhatsApp Inbox
* Team Dashboard

## Analytics

* Lead Analytics
* Conversion Tracking
* Revenue Tracking
* Team Performance Dashboard

```
```
