# Whyte Café

A modern, responsive website built for Whyte Café — a local café brand — featuring a dynamic menu, real-time store hours, and a multi-step catering inquiry system with automated email delivery.


## 🔗 Live Demo

https://whyte-cafe.vercel.app/

## ✨ Features

- **Dynamic Menu** — Real-time text search and tag-based filtering so visitors can quickly find menu items by name or category
- **Live Store Hours** — Automatically displays current open/closed status based on real-world time
- **Multi-Step Catering Form** — A guided, 4-step inquiry flow with:
  - Per-step field validation before allowing progression
  - Date and time picker logic for event scheduling
  - Automated email delivery of submissions via EmailJS
  - Confirmation modal on successful submission
- **Bot Protection** — Honeypot field and submission-timing checks to filter out automated spam without adding friction for real users
- **Fully Responsive** — Designed mobile-first from Figma specs

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | [React](https://react.dev/) + [Vite](https://vitejs.dev/) |
| Routing | React Router DOM |
| Styling | CSS Modules |
| Forms & Email | EmailJS |
| Date Handling | react-datepicker |
| Assets | vite-plugin-svgr (inline SVG components) |

This is a fully client-side application — no backend server is required. Form submissions are handled directly through EmailJS.

## 📁 Project Structure

```
whyte-cafe/
├── src/
│   ├── assets/            # Global shared assets
│   ├── components/        # Reusable components (Navbar, Footer, Modals, etc.)
│   ├── pages/              # Page-level components with their own assets
│   │   └── catering/
│   │       ├── forms/      # Step1–Step4 form components
│   │       └── catering.module.css
│   ├── utils/              # Validation helpers, etc.
│   └── main.jsx
├── .env                    # Environment variables (not committed)
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/whyte-cafe.git
cd whyte-cafe

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root with your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> You'll need an [EmailJS](https://www.emailjs.com/) account with a connected email service and a configured template to enable catering form submissions.

### Run Locally

```bash
npm run dev
```

The site will be available at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

## 📌 Notes

- This project intentionally avoids a backend to keep deployment lightweight for a small business client. Form handling and email delivery run entirely through EmailJS.
- Bot protection is client-side (honeypot + timing check), which is proportional to the scale of the site. It is not intended to defend against targeted or sophisticated abuse.

## 🙋 About

Built by [Paul Nicolas & Jenica Herrera](https://github.com/your-username) as a client project for [Kaidevs](https://kaidevs.example), a web development agency.
