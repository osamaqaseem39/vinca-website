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
      <section className="w-full py-16 bg-white flex-grow border-b border-black">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <p className="text-xs tracking-widest uppercase text-black/40">No products found</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 bg-white flex-grow border-b border-black">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {products.map((product) => (
            <Link
              key={product._id || product.id}
              href={`/products/${product._id || product.id}`}
              className="group relative bg-white block"
            >
              {/* Product Image */}
              <div className="aspect-square bg-white mb-4 flex items-center justify-center overflow-hidden relative border border-black">
                {product.images && product.images.length > 0 ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:opacity-60 transition-opacity duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full bg-white flex items-center justify-center">
                    <span className="text-xs tracking-widest uppercase text-black/40">No Image</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="text-xs font-light tracking-widest uppercase space-y-1">
                <h3 className="group-hover:opacity-60 transition-opacity">
                  {product.name}
                </h3>
                {product.price && (
                  <p className="text-xs font-light tracking-widest uppercase">
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
            <Link
              href="/products"
              className="inline-block border border-black text-black px-8 py-3 text-xs font-light tracking-widest uppercase hover:bg-black hover:text-white transition-all mb-4"
            >
              VIEW ALL PRODUCTS
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
