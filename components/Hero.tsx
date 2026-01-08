'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface HeroProps {
  featuredProduct?: Product;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({ 
  featuredProduct, 
  title = "Premium Eyewear Collection",
  subtitle = "Discover our curated selection of frames",
  ctaText = "Shop Now",
  ctaLink = "/products"
}: HeroProps) {
  return (
    <section className="relative w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-widest uppercase">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm md:text-base font-light text-gray-600 tracking-wide max-w-md mx-auto lg:mx-0">
                {subtitle}
              </p>
            )}
            <div className="pt-4">
              <Link
                href={ctaLink}
                className="inline-block bg-black text-white px-8 py-3 text-xs font-light uppercase tracking-wider hover:opacity-80 transition-opacity"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Right Column - Featured Product Image */}
          {featuredProduct && (
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square bg-white">
                {featuredProduct.images && featuredProduct.images.length > 0 ? (
                  <Image
                    src={featuredProduct.images[0]}
                    alt={featuredProduct.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                    <span className="text-gray-400 text-xs">No Image</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Fallback if no featured product */}
          {!featuredProduct && (
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square bg-gray-50 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Featured Product</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

