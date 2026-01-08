import Image from 'next/image';

export default function FeaturedProduct() {
  return (
    <section className="w-full border-b border-gray-200">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square bg-gray-50">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50">
              {/* Placeholder for product image - you can replace with actual image */}
              <div className="text-center">
                <div className="w-72 h-96 mx-auto bg-gradient-to-br from-amber-200 via-amber-300 to-amber-200 rounded-sm shadow-xl flex items-center justify-center">
                  <span className="text-gray-700 text-xs font-light">Featured Handbag</span>
                </div>
              </div>
            </div>
          </div>

          {/* Empty Space */}
          <div className="bg-white hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}

