import ProductCard from './ProductCard';
import { AllProductsData } from '../home.interface';

interface FeaturedProductsProps {
  title?: string;
  coloredTitle?: string;
  products: AllProductsData[];
}

export default function FeaturedProducts({ 
  title = "Featured", 
  coloredTitle = "Products", 
  products 
}: FeaturedProductsProps) {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="page-container">
        

        <div className="mb-8 flex items-center gap-3 sm:mb-10">
          <div className="h-7 w-1.5 rounded-full bg-[#0aad0a] sm:h-8"></div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
            {title} <span className="text-[#0aad0a]">{coloredTitle}</span>
          </h2>
        </div>


        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product: AllProductsData) => (
      
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
