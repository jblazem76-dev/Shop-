# Central Turf Agronomy - CTA Apple-Style MVP Website

## Overview
A modern, Apple-style MVP website for Central Turf Agronomy built with Next.js 14, React 18, TypeScript, and Tailwind CSS. The site showcases turf care products, programs, and science-based methodology.

## Technology Stack
- **Framework**: Next.js 14.2.5 (App Router)
- **Language**: TypeScript 5.5
- **Styling**: Tailwind CSS 3.4
- **React**: 18.3.1

## Project Structure
```
/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── contact/           # Contact page
│   ├── products/          # Products listing & detail pages
│   ├── programs/          # Programs page
│   ├── resources/         # Resources page
│   └── science/           # Science page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Page footer
│   ├── CTAButton.tsx      # Call-to-action button
│   ├── ProductCard.tsx    # Product display card
│   ├── ProductGrid.tsx    # Products grid layout
│   └── ProgramCard.tsx    # Program display card
├── data/                  # Static data
│   ├── products.ts        # Products data
│   └── programs.ts        # Programs data
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── postcss.config.js      # PostCSS configuration
```

## Running the Application
- **Development**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Production**: `npm start`

## Key Features
- Apple-style clean, modern design
- Responsive layout
- Product catalog with detail pages
- Programs and methodology information
- Science-based content sections
- Contact page

## Configuration
- Server runs on 0.0.0.0:5000
- Cache headers configured for development
