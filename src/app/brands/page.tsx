import React from 'react';
import Link from 'next/link';
import { Tag } from 'lucide-react';
import PageBanner from '../_Components/PageBanner';
import { getAllBrands } from '../home.services';

function BrandCard({ brand }: { brand: any }) {
  return (
    <Link
      href={`/brands/${brand._id || brand.slug || brand.name.toLowerCase()}`}
      className="bg-white rounded-[14px] border border-gray-100/80 p-3 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#8b5cf6]/30 transition-all duration-300 group flex flex-col"
    >
      <div className="flex items-center justify-center bg-[#f8f9fa] rounded-[10px] aspect-square w-full p-6">
        <img
          src={brand.image}
          alt={brand.name}
          className="w-full h-full object-contain mix-blend-multiply opacity-90 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="mt-3.5 mb-1 flex items-center justify-center">
        <span className="text-[13px] font-bold text-gray-900 text-center">
          {brand.name}
        </span>
      </div>
    </Link>
  );
}

export default async function BrandsPage() {
  const brands = await getAllBrands();

  return (
    <div className="page-shell">


      <PageBanner
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Brands' },
        ]}
        icon={Tag}
        title="Top Brands"
        subtitle="Shop from your favorite brands"
        bgClass="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa]"
      />


      <div className="page-container max-w-[1100px] py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand: any) => (
            <BrandCard key={brand._id || brand.slug} brand={brand} />
          ))}
        </div>
      </div>

    </div>
  );
}
