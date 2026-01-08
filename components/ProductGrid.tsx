'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <section className="w-full py-12 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center py-12">
            <p className="text-sm font-light text-gray-500">No products found</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 bg-white flex-grow">
      <div className="max-w-7xl mx-auto px-6">
        {/* Product Grid - 4 columns matching the image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {products.map((product) => (
            <Link
              key={product._id || product.id}
              href={`/products/${product._id || product.id}`}
              className="group relative bg-white block"
            >
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
                <h3 className="mb-1 tracking-wide group-hover:opacity-70 transition-opacity">
                  {product.name}
                </h3>
                {product.price && (
                  <p className="text-xs font-light text-gray-600">
                    ${product.price.toFixed(2)}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        {products.length > 0 && (
          <div className="text-center mb-12">
            <button className="bg-black text-white px-8 py-3 text-xs font-light uppercase tracking-wider hover:opacity-80 transition-opacity mb-4">
              SHOP SIMILAR
            </button>
            <p className="text-xs font-light text-gray-600">VIEW ALL PRODUCTS</p>
          </div>
        )}
      </div>
    </section>
  );
}

