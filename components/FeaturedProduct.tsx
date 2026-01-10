'use client';

import Image from 'next/image';
import { Product } from '@/types/product';

interface FeaturedProductProps {
  product?: Product;
}

export default function FeaturedProduct({ product }: FeaturedProductProps) {
  if (!product) {
    return null;
  }

  return (
    <section className="w-full border-b border-black bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-16">
          {/* Featured Product Image */}
          <div className="relative w-64 h-64 bg-white border border-black">
            {product.images && product.images.length > 0 ? (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain"
                sizes="256px"
              />
            ) : (
              <div className="w-full h-full bg-white flex items-center justify-center">
                <span className="text-xs tracking-widest uppercase text-black/40">No Image</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
