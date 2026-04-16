import React, { lazy } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CategoryCard, { Category } from './CategoryCard';
import { getAllCategories } from './Categories.services';


export default async function Categories() {
  const categoryList = await getAllCategories();
  return (
    <div className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-7 sm:h-8 bg-[#0aad0a] rounded-full"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Shop By <span className="text-[#0aad0a]">Category</span>
            </h2>
          </div>
          <Link
            href="/categories"
            className="hidden sm:flex items-center gap-1.5 text-[#0aad0a] font-medium text-[15px] hover:underline transition-all"
          >
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categoryList.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/categories"
            className="flex items-center gap-1.5 text-[#0aad0a] font-medium text-[15px] hover:underline"
          >
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
