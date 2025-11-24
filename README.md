# Telecommunications & Sales CRM – UI/UX Prompt

Use the following production-ready prompt in ChatGPT, Claude, Midjourney, or any AI design/code generator to build a complete website and mobile (iOS + Android) experience. Screenshots inside `snaps/` illustrate the desired information architecture—replicate their structure with tighter, mobile-friendly buttons and consistent visual logic across web and mobile.

---

## Prompt

```
Create a complete UI/UX design for a modern Telecommunications & Sales CRM platform available as both a website and mobile application.

Reference the attached CRM screenshots for layout inspiration, but modernize them with Tailwind CSS utility-first styling, clean neon accents (orange/cyan), and cohesive dark/light themes. Keep button sizes compact, mirroring mobile UI density, and ensure both the responsive web app and the iOS/Android apps share common logic and component patterns.

The system must expose the following menu structure:

Main Menu
- Dashboard
- Search
- Leads
  - Add Single Lead
  - Add From Excel
  - Add From Integration
- Activities
  - My Leads
  - My Calls
- Campaigns
- Filters
  - Filters based on leads
  - Customizable filters
- My List
  - Ability for the user to add items to custom lists
- WhatsApp Business Integration
- Reports
  - Leaderboard
  - Call Report
  - Report Download
  - Duplicate Leads
- Automation
  - Workflows
  - Schedules
  - Sales Automation
  - API Templates
- Integrations
  - Cover Facebook, Google Sheets, WhatsApp, WhatsApp Cloud API, plus other social platforms

Design Requirements
- Tailwind CSS-style utility-first layout and React-ready components
- Components: sidebar, top navigation, summary cards, tables, filter drawers, charts, forms, workflow canvas, communication pane
- Neon buttons (orange/cyan glow), smooth micro-interactions, glassmorphism hints
- Fully responsive: Desktop, tablet, and mobile breakpoints
- Mobile app screens follow React Native JSX conventions; reuse logic and component hierarchy between web and mobile
- Provide icons, navigation cues, grid layouts, modular typography and spacing scales
- Dashboard shows KPIs (calls, duration, sales), funnel, leaderboards, conversion insights
- Show sample screens for Dashboard, Leads list + Add Lead form, Excel Import, Campaign boards, Filters, Automation Workflow Builder, WhatsApp chat view, Reports hub, Integrations marketplace, User management
- Include layout guidelines, color palette, typography pairings, spacing scale, and component hierarchy/sitemap

Output
- High-fidelity UI mockups for both web and mobile
- Tailwind CSS-ready HTML/JSX snippets
- React Native JSX snippets for key mobile screens
- Color palette (hex), typography scale, spacing tokens
- Sitemap and component tree showing shared logic between platforms
- Any supporting JSON sample data for leads, automations, reports

Make everything futuristic, enterprise-grade, and optimized for telecom sales teams, with delightful yet professional neon styling.
```

---

## Optional Follow-ups

- Say “Generate full code” to receive a React + Tailwind project scaffold with routing, shared components, and Neon theme tokens.
- Say “Generate UI screens” to focus on high-fidelity mockups and component specs.

Leverage this prompt to ensure both the responsive web dashboard and the native mobile apps stay visually consistent while using shared data structures and interaction logic.

