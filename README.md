# BudgetFlow Landing Page

A modern, responsive landing page for BudgetFlow - a personal finance management platform built with React 19, Tailwind CSS 4, and Vite.

## Features

- **Responsive Design**: Mobile-first, fully responsive layout
- **Blue Gradient Theme**: Modern dark theme with blue/purple gradients
- **South African Rands (ZAR)**: All pricing and amounts in ZAR currency
- **Budget Template Tool**: Interactive budget planning tool with income/expense tracking
- **Multiple Pages**: Landing, Features, Pricing, Legal (Privacy/Terms/Cookie/Security), Info (About/Blog/Careers/Press/Changelog/Roadmap), and Budget Template
- **No Backend Dependencies**: Static frontend-only deployment
- **CSV Export**: Budget template supports CSV export functionality

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Wouter** - Lightweight client-side routing
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ (or use pnpm directly)
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The development server will start at `http://localhost:3000`

## Project Structure

```
budget-flow-landing/
├── client/
│   ├── public/              # Static assets (favicon, robots.txt)
│   ├── src/
│   │   ├── pages/           # Page components
│   │   │   ├── Landing.tsx  # Main landing page
│   │   │   ├── Features.tsx # Features page
│   │   │   ├── Pricing.tsx  # Pricing page
│   │   │   ├── Legal.tsx    # Legal pages (Privacy, Terms, etc)
│   │   │   ├── Info.tsx     # Info pages (About, Blog, etc)
│   │   │   └── BudgetTemplate.tsx # Interactive budget template
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/        # React contexts
│   │   ├── App.tsx          # Main app component with routing
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles and design tokens
│   └── index.html           # HTML template
├── server/                  # Placeholder for compatibility
├── shared/                  # Placeholder for compatibility
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── vercel.json              # Vercel deployment config
└── README.md
```

## Pages

### Landing Page (`/`)
Main marketing page with hero section, features grid, how-it-works section, FAQ, and CTA.

### Features (`/features`)
Detailed feature showcase with descriptions of all BudgetFlow capabilities.

### Pricing (`/pricing`)
Three-tier pricing model: Free, Pro (R99/month), Business (R299/month).

### Legal Pages (`/legal?page=privacy|terms|cookie|security`)
- Privacy Policy
- Terms of Service
- Cookie Policy
- Security Information

### Info Pages (`/info?page=about|blog|careers|press|changelog|roadmap`)
- About BudgetFlow
- Blog
- Careers
- Press Kit
- Changelog
- Product Roadmap

### Budget Template (`/budget-template`)
Interactive budget planning tool featuring:
- Monthly income tracking
- Expense categorization
- Weekly groceries budget
- Fuel cost calculator
- CSV export functionality

## Deployment

### Vercel (Recommended)

The project is fully configured for Vercel deployment:

1. Push to GitHub repository
2. Connect repository to Vercel
3. Vercel will automatically detect Vite configuration
4. Deploy with zero configuration

```bash
# Environment variables needed (optional):
VITE_ANALYTICS_ENDPOINT
VITE_ANALYTICS_WEBSITE_ID
VITE_APP_ID
VITE_APP_LOGO
VITE_APP_TITLE
```

### Manual Build

```bash
# Build production bundle
pnpm build

# Output is in ./dist directory
# Deploy dist folder to any static hosting
```

## Design System

### Colors (South African Theme)
- **Primary**: Blue (rgb(59, 130, 246))
- **Secondary**: Purple (rgb(147, 51, 234))
- **Background**: Slate-900 (rgb(15, 23, 42))
- **Text**: White/Slate-300

### Typography
- **Display**: Playfair Display (700, 800)
- **Body**: Plus Jakarta Sans (400, 500, 600, 700)

### Currency
All amounts displayed in South African Rands (ZAR) - R prefix

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images with WebP format
- Code splitting and lazy loading
- Minimal JavaScript bundle
- Fast page load times

## No Bank Integrations

This landing page does not include:
- Bank account linking
- Automatic transaction imports
- API integrations

Users can manually add transactions or import CSV files from their bank.

## Contributing

This is a static landing page. For feature requests or bug reports, please contact the development team.

## License

© 2026 Anjyl Productions. All rights reserved.

## Support

For support inquiries, visit the website or contact support@anjylproductions.com
