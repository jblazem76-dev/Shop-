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
│   ├── page.tsx           # Home page (features Phosphate Blue)
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── contact/           # Contact page with contact info
│   ├── products/          # Products listing & detail pages
│   ├── programs/          # Programs page
│   ├── resources/         # Resources page
│   └── science/           # Science page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header with CTA logo
│   ├── Footer.tsx         # Page footer with CTA logo and contact
│   ├── CTAButton.tsx      # Call-to-action button
│   ├── ProductCard.tsx    # Product display card
│   ├── ProductGrid.tsx    # Products grid layout
│   └── ProgramCard.tsx    # Program display card
├── data/                  # Static data
│   ├── products.ts        # Products catalog (6 products)
│   └── programs.ts        # Programs data
├── public/                # Static assets
│   └── logo.png           # CTA Logo (green)
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
- Product catalog with 6 products:
  - **Phosphate Blue** (Featured) - Foliar Nutrition
  - Carbon Boost - Soil Conditioning
  - Foliar Iron Plus - Foliar Nutrition
  - Moisture Manager - Soil Moisture
  - Root Zone Enhancer - Soil Conditioning
  - Stress Guard - Plant Health
- Programs and methodology information
- Science-based content sections
- Contact page with full contact information

## Contact Information
- Phone: (555) 123-4567
- Email: info@centralturf.com
- Address: 123 Turf Science Drive, Greenville, TX 75401
- Hours: Monday - Friday: 8:00 AM - 5:00 PM CST

## Configuration
- Server runs on 0.0.0.0:5000
- Cache headers configured for development

## Recent Changes
- Added CTA green logo site-wide (Header, Footer, Contact page)
- Created full product catalog with Phosphate Blue as featured product
- Updated contact page with full contact information
- Fixed grammatical issues and improved content consistency
