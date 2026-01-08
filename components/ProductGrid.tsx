'use client';

import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <section className="w-full py-8 bg-white">
        <div className="max-w-full mx-auto px-6">
          <div className="text-center py-12">
            <p className="text-sm font-light text-gray-500">No products found</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-full mx-auto px-6">
        {/* Product Grid - 4 columns matching the image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div key={product._id || product.id} className="group relative bg-white">
              {/* Product Image */}
              <div className="aspect-square bg-white mb-3 flex items-center justify-center overflow-hidden relative">
                {product.images && product.images.length > 0 ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                    <span className="text-gray-400 text-xs">No Image</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="text-xs font-light">
                <h3 className="mb-1 tracking-wide">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12">
          <button className="bg-black text-white px-8 py-3 text-xs font-light uppercase tracking-wider hover:opacity-80 transition-opacity mb-4">
            SHOP SIMILAR
          </button>
          <p className="text-xs font-light text-gray-600">VIEW ALL PRODUCTS</p>
        </div>
      </div>
    </section>
  );
}

