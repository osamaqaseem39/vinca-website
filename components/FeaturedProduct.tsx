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
    <section className="w-full border-b border-gray-200">
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-center py-12">
          {/* Featured Product Image */}
          <div className="relative w-64 h-64 bg-white">
            {product.images && product.images.length > 0 ? (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain"
                sizes="256px"
              />
            ) : (
              <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                <span className="text-gray-400 text-xs">No Image</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

