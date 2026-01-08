'use client';

import { useState } from 'react';
import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? products : products.slice(0, 12);

  return (
    <section className="w-full py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Products Count and Filters */}
        <div className="flex items-center justify-between mb-10 border-b border-gray-200 pb-4">
          <div className="text-xs font-light">{products.length} Products</div>
          <div className="flex items-center space-x-8">
            <button className="flex items-center space-x-2 text-xs font-light uppercase tracking-wide hover:opacity-70 transition-opacity">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>FILTER</span>
            </button>
            <button className="flex items-center space-x-2 text-xs font-light uppercase tracking-wide hover:opacity-70 transition-opacity">
              <span>SORT BY</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedProducts.map((product) => (
            <div key={product.id} className="group relative bg-white">
              {/* Bookmark Icon */}
              <button className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>

              {/* Product Image Placeholder */}
              <div className="aspect-square bg-gray-50 mb-3 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-gray-400 text-xs">Product Image</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-xs">
                <h3 className="font-light mb-1 tracking-wide">{product.name}</h3>
                {product.colors && (
                  <p className="text-gray-500 font-light">{product.colors} colors</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && products.length > 12 && (
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-12 py-3 border border-black text-xs font-light uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              LOAD MORE
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

