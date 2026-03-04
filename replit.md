# Central Turf Agronomy - CTA Apple-Style MVP Website

## Overview
A modern, Apple-style MVP website for Central Turf Agronomy built with Next.js 14, React 18, TypeScript, and Tailwind CSS. The site showcases turf care products, programs, and science-based methodology.

## Technology Stack
- **Framework**: Next.js 14.2.5 (App Router)
- **Language**: TypeScript 5.5
- **Styling**: Tailwind CSS 3.4
- **React**: 18.3.1
- **Database**: PostgreSQL (Replit built-in)
- **ORM**: pg (node-postgres)

## Project Structure
```
/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page with CHO hero section
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── globals.css        # Global styles
│   ├── admin/             # Admin page to view order submissions
│   ├── api/orders/        # API route for order form submissions
│   ├── contact/           # Contact page with contact info
│   ├── dealer/            # Dealer partnership page
│   ├── diy/               # DIY Lawn Care Program page
│   ├── order/             # Order request form (saves to DB)
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
│   ├── logo.png           # CTA Logo (green)
│   └── products/          # Product bottle images
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── postcss.config.js      # PostCSS configuration
```

## Running the Application
- **Development**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Production**: `npm start`

## Database
- PostgreSQL with `orders` table for form submissions
- Schema: id, name, address, email, phone, items (JSONB), delivery_notes, created_at
- Admin page at `/admin` requires ADMIN_KEY environment variable

## Key Features
- Apple-style clean, modern design
- Responsive layout with category filtering
- SEO metadata on every page with unique titles and descriptions
- Product catalog with 12 products from CTA catalog
- CHO hero section on home page with 6 CHO product images
- DIY Lawn Care Program page with seasonal steps and pricing
- Order Request Form that saves to PostgreSQL database
- Admin dashboard at /admin to view submitted orders
- Dealer partnership page
- Programs and methodology information
- Science-based content sections
- Contact page with full contact information

## Contact Information
- Contact: Brent Smith (563-210-1616), Isaac Smith (563-340-3205)
- Email: ctagronomy@gmail.com
- Website: www.ctagronomy.com
- Address: 215 E 2nd. Street, Dewitt, IA 52742

## Environment Variables
- `DATABASE_URL` - PostgreSQL connection string (auto-configured)
- `ADMIN_KEY` - Secret key for accessing /admin page

## Configuration
- Server runs on 0.0.0.0:5000
- Cache headers configured for development
