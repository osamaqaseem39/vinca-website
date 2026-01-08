export interface Product {
  _id: string;
  id?: string; // For backward compatibility
  name: string;
  description: string;
  longDescription?: string;
  brand: string;
  category: string | {
    _id: string;
    name: string;
    slug: string;
  };
  price: number;
  discountPrice?: number;
  images: string[];
  inStock: boolean;
  stockQuantity: number;
  sku: string;
  frameType: 'full-rim' | 'semi-rimless' | 'rimless' | 'browline' | 'cat-eye' | 'round' | 'square' | 'aviator';
  frameMaterial: 'acetate' | 'metal' | 'titanium' | 'plastic' | 'wood' | 'carbon-fiber';
  frameColor: string;
  lensType: 'single-vision' | 'bifocal' | 'progressive' | 'reading' | 'sunglasses';
  lensMaterial?: 'polycarbonate' | 'trivex' | 'high-index' | 'glass';
  gender: 'men' | 'women' | 'unisex' | 'kids';
  size: {
    eye: number;
    bridge: number;
    temple: number;
  };
  features: string[];
  specifications?: {
    weight?: string;
    lensWidth?: string;
    bridgeWidth?: string;
    templeLength?: string;
    frameWidth?: string;
    lensHeight?: string;
    warranty?: string;
  };
  careInstructions?: string;
  whatsIncluded?: string[];
  lensOptions?: {
    availableTypes?: string[];
    availableCoatings?: string[];
    availableTints?: string[];
    prescriptionRange?: {
      sphere?: { min: number; max: number };
      cylinder?: { min: number; max: number };
    };
  };
  ratings: {
    average: number;
    count: number;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductsResponse {
  products: Product[];
  page: number;
  pages: number;
  total: number;
}

