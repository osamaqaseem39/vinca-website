# Balenciaga Store - Next.js E-commerce Website

A minimalist e-commerce store built with Next.js, TypeScript, and Tailwind CSS, inspired by the Balenciaga website design.

## Features

- Clean, minimalist design matching the Balenciaga aesthetic
- Responsive product grid layout
- Featured product section
- Product filtering and sorting (UI ready)
- Load more functionality
- Full navigation header
- Comprehensive footer with all sections

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
store/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx          # Main product listing page
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   ├── FeaturedProduct.tsx # Featured product section
│   └── ProductGrid.tsx   # Product grid with filters
└── types/
    └── product.ts        # Product type definitions
```

## Customization

- Replace placeholder product images with actual product images
- Connect to your backend API to fetch real product data
- Implement filter and sort functionality
- Add product detail pages
- Integrate shopping cart functionality
