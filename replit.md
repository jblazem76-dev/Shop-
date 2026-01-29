# Shop

## Overview
A simple e-commerce shop application built with Node.js and Express. Users can browse products, add items to cart, and checkout.

## Project Structure
```
/
├── index.js          # Express server (main entry point)
├── package.json      # Node.js dependencies and scripts
├── public/           # Static frontend files
│   ├── index.html    # Main HTML page
│   ├── styles.css    # CSS styling
│   └── app.js        # Frontend JavaScript
```

## Running the Application
- Development: `npm run dev` (runs on port 5000)
- Production: `npm start`

## Features
- Product listing with prices and descriptions
- Shopping cart functionality
- Responsive design

## API Endpoints
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product

## Technology Stack
- Backend: Node.js, Express.js
- Frontend: HTML, CSS, JavaScript (vanilla)
- Server: Runs on port 5000, bound to 0.0.0.0
