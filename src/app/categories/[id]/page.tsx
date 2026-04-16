import React from 'react';
import { LayoutGrid, ShoppingBag } from 'lucide-react';
import PageBanner from '../../_Components/PageBanner';
import ProductCard from '../../_Components/ProductCard';
import { getProductsByCategory, getSpecificCategory } from '../../home.services';
import { AllProductsData } from '../../home.interface';

interface CategoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CategoryPage(props: CategoryPageProps) {
  const params = await props.params;
  const { id } = params;
  

  const [category, categoryProducts] = await Promise.all([
    getSpecificCategory(id),
    getProductsByCategory(id),
  ]);

  if (!category) {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Category Not Found</h2>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <PageBanner
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Categories', href: '/categories' },
          { label: category.name },
        ]}
        icon={LayoutGrid}
        title={category.name}
        subtitle={`Explore our collection of ${category.name.toLowerCase()} products`}
      />

      <div className="page-container max-w-7xl py-8 md:py-16">
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <div className="w-1.5 h-7 sm:h-8 bg-[#0aad0a] rounded-full"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            {category.name}: <span className="text-[#0aad0a]">{categoryProducts.length}</span> Products
          </h2>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-8">
            {categoryProducts.map((product: AllProductsData) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">No Products Found</h3>
            <p className="text-gray-500">We couldn't find any products in this category right now.</p>
          </div>
        )}
      </div>
    </div>
  );
}
