export type Product = {
  sku: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
  reviews: number;
  inStock: boolean;
};

// Sample of structured data as produced by the catalog-scraper
// (Puppeteer → cleaned JSON). Representative, not from a real site.
export const products: Product[] = [
  { sku: 'CF-1001', name: 'Single-Origin Ethiopia Yirgacheffe 250g', category: 'Coffee', brand: 'Drift', price: 14.5, rating: 4.8, reviews: 312, inStock: true },
  { sku: 'CF-1002', name: 'Colombia Supremo Whole Bean 500g', category: 'Coffee', brand: 'Drift', price: 22.0, rating: 4.6, reviews: 188, inStock: true },
  { sku: 'CF-1003', name: 'Decaf Swiss Water 250g', category: 'Coffee', brand: 'Drift', price: 15.0, rating: 4.4, reviews: 74, inStock: false },
  { sku: 'CF-1004', name: 'Espresso Blend No. 4 1kg', category: 'Coffee', brand: 'Riverside', price: 38.0, rating: 4.7, reviews: 421, inStock: true },
  { sku: 'CF-1005', name: 'Sumatra Mandheling 250g', category: 'Coffee', brand: 'Riverside', price: 16.5, rating: 4.5, reviews: 96, inStock: true },
  { sku: 'CF-1006', name: 'Cold Brew Coarse Grind 340g', category: 'Coffee', brand: 'Drift', price: 13.0, rating: 4.3, reviews: 53, inStock: true },
  { sku: 'BR-2001', name: 'Pour-Over Glass Dripper V60', category: 'Brewing', brand: 'Hario', price: 24.0, rating: 4.9, reviews: 540, inStock: true },
  { sku: 'BR-2002', name: 'Gooseneck Kettle 1.0L', category: 'Brewing', brand: 'Fellow', price: 95.0, rating: 4.8, reviews: 612, inStock: true },
  { sku: 'BR-2003', name: 'French Press 8-Cup', category: 'Brewing', brand: 'Bodum', price: 34.0, rating: 4.5, reviews: 287, inStock: true },
  { sku: 'BR-2004', name: 'AeroPress Go Travel', category: 'Brewing', brand: 'AeroPress', price: 39.0, rating: 4.9, reviews: 1024, inStock: false },
  { sku: 'BR-2005', name: 'Burr Grinder Electric', category: 'Brewing', brand: 'Baratza', price: 149.0, rating: 4.7, reviews: 333, inStock: true },
  { sku: 'BR-2006', name: 'Hand Grinder Stainless', category: 'Brewing', brand: 'Timemore', price: 68.0, rating: 4.6, reviews: 201, inStock: true },
  { sku: 'BR-2007', name: 'Paper Filters 02 (100ct)', category: 'Brewing', brand: 'Hario', price: 7.5, rating: 4.4, reviews: 158, inStock: true },
  { sku: 'BR-2008', name: 'Digital Brew Scale 2kg', category: 'Brewing', brand: 'Fellow', price: 59.0, rating: 4.5, reviews: 142, inStock: true },
  { sku: 'AC-3001', name: 'Ceramic Mug 350ml', category: 'Accessories', brand: 'Drift', price: 12.0, rating: 4.6, reviews: 220, inStock: true },
  { sku: 'AC-3002', name: 'Insulated Travel Tumbler 470ml', category: 'Accessories', brand: 'Miir', price: 29.0, rating: 4.7, reviews: 311, inStock: true },
  { sku: 'AC-3003', name: 'Knock Box Anodized', category: 'Accessories', brand: 'Riverside', price: 21.0, rating: 4.2, reviews: 48, inStock: false },
  { sku: 'AC-3004', name: 'Milk Frothing Pitcher 600ml', category: 'Accessories', brand: 'Rhino', price: 18.0, rating: 4.5, reviews: 132, inStock: true },
  { sku: 'AC-3005', name: 'Tamper 58mm', category: 'Accessories', brand: 'Rhino', price: 26.0, rating: 4.6, reviews: 99, inStock: true },
  { sku: 'AC-3006', name: 'Storage Canister 1L Vacuum', category: 'Accessories', brand: 'Fellow', price: 33.0, rating: 4.4, reviews: 87, inStock: true },
  { sku: 'AC-3007', name: 'Cleaning Tablets (12ct)', category: 'Accessories', brand: 'Urnex', price: 9.0, rating: 4.3, reviews: 64, inStock: true },
  { sku: 'AP-4001', name: 'Barista Apron Canvas', category: 'Apparel', brand: 'Drift', price: 42.0, rating: 4.7, reviews: 76, inStock: true },
  { sku: 'AP-4002', name: 'Logo Tee Organic Cotton', category: 'Apparel', brand: 'Drift', price: 25.0, rating: 4.5, reviews: 51, inStock: true },
  { sku: 'AP-4003', name: 'Beanie Knit', category: 'Apparel', brand: 'Riverside', price: 19.0, rating: 4.4, reviews: 38, inStock: false },
  { sku: 'AP-4004', name: 'Enamel Pin Set (3)', category: 'Apparel', brand: 'Drift', price: 11.0, rating: 4.6, reviews: 29, inStock: true },
  { sku: 'BK-5001', name: 'The World Atlas of Coffee', category: 'Books', brand: 'Mitchell Beazley', price: 28.0, rating: 4.9, reviews: 904, inStock: true },
  { sku: 'BK-5002', name: 'How to Make the Best Coffee at Home', category: 'Books', brand: 'Hardie Grant', price: 22.0, rating: 4.7, reviews: 256, inStock: true },
  { sku: 'BK-5003', name: 'Craft Coffee: A Manual', category: 'Books', brand: 'Andrews McMeel', price: 18.0, rating: 4.6, reviews: 173, inStock: true },
  { sku: 'GF-6001', name: 'Gift Card $25', category: 'Gift', brand: 'Drift', price: 25.0, rating: 5.0, reviews: 12, inStock: true },
  { sku: 'GF-6002', name: 'Gift Card $50', category: 'Gift', brand: 'Drift', price: 50.0, rating: 5.0, reviews: 19, inStock: true },
  { sku: 'GF-6003', name: 'Starter Brew Bundle', category: 'Gift', brand: 'Drift', price: 79.0, rating: 4.8, reviews: 44, inStock: true },
  { sku: 'CF-1007', name: 'Kenya AA 250g', category: 'Coffee', brand: 'Riverside', price: 17.5, rating: 4.7, reviews: 121, inStock: true },
  { sku: 'CF-1008', name: 'Guatemala Antigua 250g', category: 'Coffee', brand: 'Drift', price: 15.5, rating: 4.5, reviews: 88, inStock: true },
  { sku: 'CF-1009', name: 'House Blend Whole Bean 1kg', category: 'Coffee', brand: 'Drift', price: 30.0, rating: 4.4, reviews: 210, inStock: true },
  { sku: 'BR-2009', name: 'Moka Pot 6-Cup Aluminium', category: 'Brewing', brand: 'Bialetti', price: 36.0, rating: 4.6, reviews: 398, inStock: true },
  { sku: 'BR-2010', name: 'Siphon Brewer 3-Cup', category: 'Brewing', brand: 'Hario', price: 79.0, rating: 4.3, reviews: 57, inStock: false },
  { sku: 'AC-3008', name: 'Coffee Scoop Copper', category: 'Accessories', brand: 'Rhino', price: 14.0, rating: 4.5, reviews: 41, inStock: true },
  { sku: 'AC-3009', name: 'Reusable Cup Sleeve', category: 'Accessories', brand: 'Drift', price: 8.0, rating: 4.2, reviews: 33, inStock: true },
  { sku: 'AP-4005', name: 'Hoodie Heavyweight', category: 'Apparel', brand: 'Riverside', price: 55.0, rating: 4.6, reviews: 62, inStock: true },
  { sku: 'BK-5004', name: 'Latte Art for Beginners', category: 'Books', brand: 'Quarto', price: 16.0, rating: 4.4, reviews: 95, inStock: true },
  { sku: 'GF-6004', name: 'Subscription 3-Month Prepaid', category: 'Gift', brand: 'Drift', price: 120.0, rating: 4.9, reviews: 27, inStock: true }
];
