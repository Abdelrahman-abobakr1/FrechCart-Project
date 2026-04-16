import React from 'react';
import Link from 'next/link';
import { Tag, Filter, X, Package } from 'lucide-react';
import PageBanner from '../../_Components/PageBanner';
import ProductCard from '../../_Components/ProductCard';
import { getProductsByBrand, getSpecificBrand } from '../../home.services';
import { AllProductsData } from '../../home.interface';

interface BrandPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BrandPage(props: BrandPageProps) {
  const params = await props.params;
  const { id } = params;
  
  const [brand, brandProducts] = await Promise.all([
    getSpecificBrand(id),
    getProductsByBrand(id),
  ]);

  if (!brand) {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Brand Not Found</h2>
          <p className="text-gray-600">The brand you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <PageBanner
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Brands', href: '/brands' },
          { label: brand.name },
        ]}
        icon={Tag}
        title={brand.name}
        subtitle={`Shop ${brand.name} products`}
      />

      <div className="page-container max-w-7xl py-8">
        <div className="flex items-center gap-3 mb-2 text-[14px] text-gray-600">
          <Filter className="w-4 h-4 text-gray-500 shrink-0" />
          <span className="font-medium">Active Filters:</span>
          <div className="flex items-center gap-1.5 bg-[#ede9fe] text-[#7c3aed] text-[13px] font-semibold px-3 py-1 rounded-full">
            <Tag className="w-3.5 h-3.5" />
            <span>{brand.name}</span>
            <Link href="/brands" className="ml-1 hover:opacity-70 transition-opacity">
              <X className="w-3.5 h-3.5" />
            </Link>
          </div>
          <Link href="/brands" className="text-gray-400 hover:text-gray-600 text-[13px] transition-colors ml-1">Clear all</Link>
        </div>

        <p className="text-[13px] text-gray-500 mb-6">
          Showing {brandProducts.length} product{brandProducts.length !== 1 ? 's' : ''}
        </p>

        {brandProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {brandProducts.map((product: AllProductsData) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-5">
              <Package className="w-9 h-9 text-gray-400 stroke-[1.5]" />
            </div>
            <h3 className="text-[20px] font-bold text-gray-900 mb-2">No Products Found</h3>
            <p className="text-[14px] text-gray-500 mb-8">No products match your current filters.</p>
            <Link
              href="/shop"
              className="rounded-md bg-[#0aad0a] hover:bg-[#088c08] transition-colors px-7 py-3 text-[14px] font-bold text-white"
            >
              View All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
