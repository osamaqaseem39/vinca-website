'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const variantImages = product.images && product.images.length > 0 
    ? product.images 
    : [];

  const mainImage = variantImages[selectedImageIndex] || (variantImages[0] || '');

  const displayPrice = product.discountPrice || product.price;
  const originalPrice = product.discountPrice ? product.price : null;

  return (
    <div className="flex-grow bg-white border-b border-black">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Section - Product Image (2/3 width) */}
          <div className="lg:col-span-2 relative">
            {/* Bookmark Icon */}
            <button
              className="absolute top-4 right-4 z-10 p-2 hover:opacity-60 transition-opacity border border-black bg-white"
              aria-label="Add to wishlist"
              title="Add to wishlist"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={1}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" 
                />
              </svg>
            </button>

            {/* Main Product Image */}
            <div className="relative w-full aspect-square bg-white mb-6 border border-black">
              {mainImage ? (
                <Image
                  src={mainImage}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-white flex items-center justify-center">
                  <span className="text-xs tracking-widest uppercase text-black/40">No Image</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Product Details (1/3 width) */}
          <div className="lg:col-span-1">
            {/* Product Title */}
            <h1 className="text-2xl md:text-3xl font-light tracking-[0.1em] uppercase mb-6">
              {product.name}
            </h1>

            {/* Product Description */}
            {product.description && (
              <p className="text-xs font-light tracking-widest uppercase text-black/60 mb-8 leading-relaxed">
                {product.longDescription || product.description}
              </p>
            )}

            {/* Price */}
            <div className="mb-8">
              {originalPrice ? (
                <div className="flex items-center gap-4">
                  <span className="text-lg font-light tracking-widest uppercase line-through text-black/40">
                    ${originalPrice.toFixed(2)}
                  </span>
                  <span className="text-lg font-light tracking-widest uppercase">
                    ${displayPrice.toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-lg font-light tracking-widest uppercase">
                  ${displayPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Color/Variant Options */}
            {variantImages.length > 1 && (
              <div className="mb-8">
                <p className="text-xs font-light tracking-widest uppercase mb-4">
                  Color / Lens Options
                </p>
                <div className="flex gap-3">
                  {variantImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative w-20 h-20 border-2 transition-all ${
                        selectedImageIndex === index
                          ? 'border-black'
                          : 'border-black/30 hover:border-black/60'
                      }`}
                      aria-label={`Select variant ${index + 1}`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} variant ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <button
              className="w-full border border-black text-black px-8 py-3 text-xs font-light tracking-widest uppercase hover:bg-black hover:text-white transition-all mb-8 disabled:opacity-40 disabled:cursor-not-allowed"
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>

            {/* Accordion Sections */}
            <div className="space-y-0 border-t border-black">
              {/* PRODUCT DETAILS */}
              <div className="border-b border-black">
                <button
                  onClick={() => toggleSection('details')}
                  className="w-full flex items-center justify-between py-4 text-left text-xs font-light tracking-widest uppercase hover:opacity-60 transition-opacity"
                >
                  <span>PRODUCT DETAILS</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.details ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedSections.details && (
                  <div className="pb-4 text-xs font-light tracking-widest uppercase space-y-2 text-black/60">
                    {product.specifications && (
                      <div className="space-y-1">
                        {product.specifications.weight && (
                          <p>Weight: {product.specifications.weight}</p>
                        )}
                        {product.specifications.lensWidth && (
                          <p>Lens Width: {product.specifications.lensWidth}</p>
                        )}
                        {product.specifications.bridgeWidth && (
                          <p>Bridge Width: {product.specifications.bridgeWidth}</p>
                        )}
                        {product.specifications.templeLength && (
                          <p>Temple Length: {product.specifications.templeLength}</p>
                        )}
                        {product.specifications.frameWidth && (
                          <p>Frame Width: {product.specifications.frameWidth}</p>
                        )}
                        {product.specifications.lensHeight && (
                          <p>Lens Height: {product.specifications.lensHeight}</p>
                        )}
                        {product.specifications.warranty && (
                          <p>Warranty: {product.specifications.warranty}</p>
                        )}
                      </div>
                    )}
                    {product.features && product.features.length > 0 && (
                      <div>
                        <p className="text-black mb-2">Features:</p>
                        <ul className="list-none space-y-1">
                          {product.features.map((feature, index) => (
                            <li key={index}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {product.whatsIncluded && product.whatsIncluded.length > 0 && (
                      <div>
                        <p className="text-black mb-2">What's Included:</p>
                        <ul className="list-none space-y-1">
                          {product.whatsIncluded.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {!product.specifications && !product.features && !product.whatsIncluded && (
                      <p className="text-black/40">No additional details available.</p>
                    )}
                  </div>
                )}
              </div>

              {/* PRODUCT CARE */}
              <div className="border-b border-black">
                <button
                  onClick={() => toggleSection('care')}
                  className="w-full flex items-center justify-between py-4 text-left text-xs font-light tracking-widest uppercase hover:opacity-60 transition-opacity"
                >
                  <span>PRODUCT CARE</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.care ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedSections.care && (
                  <div className="pb-4 text-xs font-light tracking-widest uppercase text-black/60">
                    {product.careInstructions ? (
                      <p className="whitespace-pre-line">{product.careInstructions}</p>
                    ) : (
                      <p className="text-black/40">Care instructions not available.</p>
                    )}
                  </div>
                )}
              </div>

              {/* SUSTAINABILITY */}
              <div className="border-b border-black">
                <button
                  onClick={() => toggleSection('sustainability')}
                  className="w-full flex items-center justify-between py-4 text-left text-xs font-light tracking-widest uppercase hover:opacity-60 transition-opacity"
                >
                  <span>SUSTAINABILITY</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.sustainability ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedSections.sustainability && (
                  <div className="pb-4 text-xs font-light tracking-widest uppercase text-black/60">
                    <p className="text-black/40">
                      Sustainability information not available.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
