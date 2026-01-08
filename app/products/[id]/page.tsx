import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ProductDetail from '@/components/ProductDetail';
import { fetchProductById, fetchCategories } from '@/lib/api';
import { notFound } from 'next/navigation';

// Enable static generation with ISR
export const revalidate = 60; // Revalidate every 60 seconds

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: PageProps) {
  let product;
  let categories = [];

  try {
    product = await fetchProductById(params.id);
    
    // Fetch all categories to build breadcrumb
    categories = await fetchCategories(false);
  } catch (error) {
    console.error('Error fetching product:', error);
    notFound();
  }

  if (!product) {
    notFound();
  }

  // Build breadcrumb from category hierarchy
  type BreadcrumbItem = { label: string; href?: string };
  const breadcrumbItems: BreadcrumbItem[] = [{ label: 'HOME', href: '/' }];
  
  // Find the category for this product
  const categoryId = typeof product.category === 'string' 
    ? product.category 
    : product.category?._id;
  
  if (categoryId && categories.length > 0) {
    const findCategoryPath = (catId: string, path: BreadcrumbItem[] = []): BreadcrumbItem[] => {
      const category = categories.find((c: any) => c._id === catId);
      if (category) {
        const newPath: BreadcrumbItem[] = [{ label: category.name.toUpperCase(), href: `/categories/${category.slug}` }, ...path];
        if (category.parent) {
          const parentId = typeof category.parent === 'string' ? category.parent : category.parent._id;
          return findCategoryPath(parentId, newPath);
        }
        return newPath;
      }
      return path;
    };
    
    const categoryPath = findCategoryPath(categoryId);
    breadcrumbItems.push(...categoryPath);
  }

  // Add product name as final breadcrumb item (no link)
  breadcrumbItems.push({ label: product.name.toUpperCase() });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <ProductDetail product={product} />
      <Footer />
    </div>
  );
}

