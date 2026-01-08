'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

  // Use images array for color/variant options
  const variantImages = product.images && product.images.length > 0 
    ? product.images 
    : [];

  const mainImage = variantImages[selectedImageIndex] || (variantImages[0] || '');

  // Format price
  const displayPrice = product.discountPrice || product.price;
  const originalPrice = product.discountPrice ? product.price : null;

  return (
    <div className="flex-grow bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Section - Product Image (2/3 width) */}
          <div className="lg:col-span-2 relative">
            {/* Bookmark Icon */}
            <button
              className="absolute top-4 right-4 z-10 p-2 hover:opacity-70 transition-opacity"
              aria-label="Add to wishlist"
              title="Add to wishlist"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" 
                />
              </svg>
            </button>

            {/* Main Product Image */}
            <div className="relative w-full aspect-square bg-white mb-4">
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
                <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">No Image</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Product Details (1/3 width) */}
          <div className="lg:col-span-1">
            {/* Product Title */}
            <h1 className="text-2xl md:text-3xl font-light tracking-wide uppercase mb-4">
              {product.name}
            </h1>

            {/* Product Description */}
            {product.description && (
              <p className="text-sm font-light text-gray-700 mb-6 leading-relaxed">
                {product.longDescription || product.description}
              </p>
            )}

            {/* Price */}
            <div className="mb-6">
              {originalPrice ? (
                <div className="flex items-center gap-3">
                  <span className="text-lg font-light line-through text-gray-400">
                    ${originalPrice.toFixed(2)}
                  </span>
                  <span className="text-lg font-light">
                    ${displayPrice.toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-lg font-light">
                  ${displayPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Color/Variant Options */}
            {variantImages.length > 1 && (
              <div className="mb-8">
                <p className="text-xs font-light uppercase tracking-wide mb-3">
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
                          : 'border-gray-300 hover:border-gray-500'
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
              className="w-full border border-black text-black px-8 py-3 text-xs font-light uppercase tracking-wider hover:bg-black hover:text-white transition-all mb-6"
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>

            {/* Accordion Sections */}
            <div className="space-y-0 border-t border-gray-200">
              {/* PRODUCT DETAILS */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection('details')}
                  className="w-full flex items-center justify-between py-4 text-left text-xs font-light uppercase tracking-wide hover:opacity-70 transition-opacity"
                >
                  <span>PRODUCT DETAILS</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.details ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedSections.details && (
                  <div className="pb-4 text-sm font-light text-gray-700 space-y-2">
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
                        <p className="font-medium mb-1">Features:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {product.whatsIncluded && product.whatsIncluded.length > 0 && (
                      <div>
                        <p className="font-medium mb-1">What's Included:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {product.whatsIncluded.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {!product.specifications && !product.features && !product.whatsIncluded && (
                      <p className="text-gray-500">No additional details available.</p>
                    )}
                  </div>
                )}
              </div>

              {/* PRODUCT CARE */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection('care')}
                  className="w-full flex items-center justify-between py-4 text-left text-xs font-light uppercase tracking-wide hover:opacity-70 transition-opacity"
                >
                  <span>PRODUCT CARE</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.care ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedSections.care && (
                  <div className="pb-4 text-sm font-light text-gray-700">
                    {product.careInstructions ? (
                      <p className="whitespace-pre-line">{product.careInstructions}</p>
                    ) : (
                      <p className="text-gray-500">Care instructions not available.</p>
                    )}
                  </div>
                )}
              </div>

              {/* SUSTAINABILITY */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection('sustainability')}
                  className="w-full flex items-center justify-between py-4 text-left text-xs font-light uppercase tracking-wide hover:opacity-70 transition-opacity"
                >
                  <span>SUSTAINABILITY</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.sustainability ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedSections.sustainability && (
                  <div className="pb-4 text-sm font-light text-gray-700">
                    <p className="text-gray-500">
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

