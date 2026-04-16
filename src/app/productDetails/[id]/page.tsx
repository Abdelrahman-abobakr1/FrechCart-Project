import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import ProductInfo from "../_components/ProductInfo";
import ProductTabs from "../_components/ProductTabs";
import YouMayAlsoLike from "../_components/YouMayAlsoLike";
import { getSpecificProduct } from "@/app/home.services";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productDetails = await getSpecificProduct(id);
  const {
    images,
    subcategory,
    _id,
    title,
    slug,
    price,
    description,
    quantity,
    imageCover,
    category,
    brand,
    ratingsAverage,
    reviews,
  } = productDetails;
  return (
    <main className="page-shell bg-white pb-10">

      <div className="page-container py-4 sm:py-6">
        <nav className="flex items-center gap-2 text-[13px] text-gray-500">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#10b981] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="#" className="hover:text-[#10b981] transition-colors">
            {category.name}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="#" className="hover:text-[#10b981] transition-colors">
            {subcategory[0].name}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-medium"> {title}</span>
        </nav>
      </div>

      <ProductInfo productInfo={productDetails}/>
      <ProductTabs productInfo={productDetails}/>
      <YouMayAlsoLike />
    </main>
  );
}
