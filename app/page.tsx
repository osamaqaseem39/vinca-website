import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedProduct from '@/components/FeaturedProduct';
import ProductGrid from '@/components/ProductGrid';
import { Product } from '@/types/product';

// Sample product data matching the image description
const products: Product[] = [
  { id: '1', name: 'RODEO HANDBAG MEDIUM', colors: 6 },
  { id: '2', name: 'RODEO HANDBAG SMALL', colors: 4 },
  { id: '3', name: 'RODEO HANDBAG MEDIUM', colors: 7 },
  { id: '4', name: 'RODEO HANDBAG SMALL', colors: 2 },
  { id: '5', name: 'CURVED WAIST PANTS' },
  { id: '6', name: 'CURVED WAISTBAND JACKET' },
  { id: '7', name: 'RODEO HANDBAG MINI' },
  { id: '8', name: 'AVENUE PUMP' },
  { id: '9', name: 'TOP RAKING LONG SLEEVE FITTED TOP' },
  { id: '10', name: 'FUR TRIM FLARED CAPRI PANTS' },
  { id: '11', name: 'LE CITY BAG EAST-WEST' },
  { id: '12', name: 'CITY UPTOWN SANDAL' },
  { id: '13', name: 'GATHERED CROPPED TOP' },
  { id: '14', name: 'GOBET MAXI SKIRT' },
  { id: '15', name: 'PAMELA SHOULDER BAG SMALL' },
  { id: '16', name: 'CITY SNEAKER', colors: 2 },
  { id: '17', name: 'LION OUTERWEAR ZIP-UP HOODIE' },
  { id: '18', name: 'WORKWEAR PANTS' },
  { id: '19', name: 'SHOPPER DUST BAG POUCH' },
  { id: '20', name: 'ZIL SNEAKER' },
  { id: '21', name: 'STANDARD COAT' },
  { id: '22', name: 'SWEETHEART DRESS' },
  { id: '23', name: 'LE CITY BAG NANO', colors: 6 },
  { id: '24', name: 'AVORIE PALAZZO PUMP' },
  // Adding more products to reach 99
  ...Array.from({ length: 75 }, (_, i) => ({
    id: `product-${i + 25}`,
    name: `PRODUCT ${i + 25}`,
    colors: i % 3 === 0 ? Math.floor(Math.random() * 8) + 1 : undefined,
  })),
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FeaturedProduct />
      <div className="border-b border-gray-200"></div>
      <ProductGrid products={products} />
      <Footer />
    </div>
  );
}
