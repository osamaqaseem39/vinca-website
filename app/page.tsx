import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import { fetchProducts, fetchFeaturedProducts } from '@/lib/api';
import { Product } from '@/types/product';

// Enable static generation with ISR
export const revalidate = 60; // Revalidate every 60 seconds

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

  const breadcrumbItems = [
    { label: 'HOME', href: '/' },
    { label: 'MEN', href: '/men' },
    { label: 'SUNGLASSES' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <Hero 
        featuredProduct={featuredProduct}
        title="SUNGLASSES FOR MEN"
        subtitle="Discover our premium collection of men's sunglasses"
        ctaText="Shop Collection"
        ctaLink="/men/sunglasses"
      />

      <Breadcrumb items={breadcrumbItems} />
      
      {/* Products Section */}
      <ProductGrid products={products} />
      
      <Footer />
    </div>
  );
}
