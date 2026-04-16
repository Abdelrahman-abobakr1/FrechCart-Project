import React from 'react';
import { LayoutGrid } from 'lucide-react';
import PageBanner from '../_Components/PageBanner';
import CategoryCard from '../_Components/CategoryCard';
import { getAllCategories } from '../_Components/Categories.services';

export default async function CategoriesPage() {
    const categoryList = await getAllCategories();
  return (
    <div className="page-shell">


      <PageBanner
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Categories' },
        ]}
        icon={LayoutGrid}
        title="All Categories"
        subtitle="Browse our wide range of product categories"
      />

    
      <div className="page-container max-w-7xl py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {categoryList.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      </div>

    </div>
  );
}
