import React from 'react';
import { ShoppingBag } from 'lucide-react';
import PageBanner from '../_Components/PageBanner';
import ProductCard from '../_Components/ProductCard';
import { getAllProducts } from '../home.services';
import { AllProductsData } from '../home.interface';

export default async function ShopPage() {
  const allProducts = await getAllProducts();

  return (
    <div className="page-shell">
      <PageBanner
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'All Products' },
        ]}
        icon={ShoppingBag}
        title="All Products"
        subtitle="Explore our complete product collection"
      />

      <div className="page-container max-w-7xl py-8 md:py-16">
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <div className="w-1.5 h-7 sm:h-8 bg-[#0aad0a] rounded-full"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Total Products: <span className="text-[#0aad0a]">{allProducts.length}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-8">
          {allProducts.map((product: AllProductsData) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
