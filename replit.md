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
│   ├── page.tsx           # Home page (features Phosphite Blue)
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
│   ├── products.ts        # Products catalog (12 products)
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
- Responsive layout with category filtering
- Product catalog with 12 products from CTA catalog:
  - **Phosphite Blue** (Featured) - Foliar Treatment - Boost Stress Tolerance
  - **C-Color-N 20-2-5** - Color Enhancer - For Resilient & Vibrant Color
  - **C-Starter 3-18-18** - Growth & Rooting - Highly Soluble P&K
  - **C-Strength-Micros** - Micronutrients - Sugar Based Micros
  - **C-Roots-Aminos 6-2-3** - Root Development - Drive Roots
  - **C-Energy-Calcium** - Plant Health - Build Cell Walls and Lower Heat Stress
  - **Humic** - Soil Health - Highly Concentrated Carbon
  - **C-Soils 1-0-2** - Soil Conditioning - Total Soil Conditioner
  - **Push-Hold+** - Wetting Agent - Your Best Secret Agent
  - **Green Glo Max** - Color Enhancer - Elevate Your Turf to the Next Level
  - **EfficienSi** - Foliar Treatment - Maximize Nutrient Absorption
  - **Every Tank** - Tank Additive - Spray Tank Acidifier
- Programs and methodology information
- Science-based content sections
- Contact page with full contact information

## Contact Information
- Contact: Brent Smith
- Phone: 563-210-1616
- Email: ctagronomy@gmail.com
- Website: www.ctagronomy.com
- Address: 215 E 2nd. Street, Dewitt, IA 52742

## Configuration
- Server runs on 0.0.0.0:5000
- Cache headers configured for development

## Recent Changes
- Updated product catalog with 12 products from CTA catalog PDF
- Added Green Glo Max, EfficienSi, and Every Tank products
- Added detailed product information including key features, principle agents, and application rates
- Added category filtering on products page
- Phosphite Blue set as featured product on home page
