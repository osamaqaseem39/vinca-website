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
  title = "Premium Collection",
  subtitle = "Discover our curated selection",
  ctaText = "Shop Collection",
  ctaLink = "/products"
}: HeroProps) {
  return (
    <section className="w-full bg-white border-b border-black">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] uppercase">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs md:text-sm font-light tracking-widest uppercase max-w-md mx-auto lg:mx-0 text-black/60">
                {subtitle}
              </p>
            )}
            <div className="pt-4">
              <Link
                href={ctaLink}
                className="inline-block border border-black text-black px-8 py-3 text-xs font-light tracking-widest uppercase hover:bg-black hover:text-white transition-all"
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
                  <div className="w-full h-full bg-white border border-black flex items-center justify-center">
                    <span className="text-xs tracking-widest uppercase text-black/40">No Image</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Fallback if no featured product */}
          {!featuredProduct && (
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square bg-white border border-black flex items-center justify-center">
                <span className="text-xs tracking-widest uppercase text-black/40">Featured Product</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
