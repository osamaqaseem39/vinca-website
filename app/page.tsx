import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedProduct from '@/components/FeaturedProduct';
import ProductGrid from '@/components/ProductGrid';
import { fetchProducts, fetchFeaturedProducts } from '@/lib/api';
import { Product } from '@/types/product';

export default async function Home() {
  let products: Product[] = [];
  let featuredProduct: Product | undefined;

  try {
    // Fetch products for men's sunglasses
    const productsData = await fetchProducts({
      gender: 'men',
      lensType: 'sunglasses',
      limit: 100, // Get more products to match the grid
      sort: 'createdAt',
      order: 'desc',
    });
    products = productsData.products;

    // Fetch featured products and use the first one
    const featured = await fetchFeaturedProducts();
    if (featured.length > 0) {
      featuredProduct = featured[0];
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    // If API fails, products array will be empty
    // The UI will handle empty state gracefully
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {featuredProduct && <FeaturedProduct product={featuredProduct} />}
      <div className="border-b border-gray-200"></div>
      <ProductGrid products={products} />
      <Footer />
    </div>
  );
}
