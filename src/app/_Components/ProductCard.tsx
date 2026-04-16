import React from "react";
import Link from "next/link";
import { Heart, RefreshCw, Eye, Star, Plus } from "lucide-react";
import { AllProductsData } from "../home.interface";
import Image from "next/image";
import AppButton from "./shared/AppButton/AppButton";
import AddToCart from "./AddToCart/AddToCart";
import WishlistButton from "./Wishlist/WishlistButton";

export default function ProductCard({ product }: { product: AllProductsData }) {
  const {
    title,
    imageCover,
    price,
    id,
    ratingsAverage,
    ratingsQuantity,
    priceAfterDiscount,
    category,
  } = product;
  return (
    <div className="section-card group flex h-full flex-col p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5">
      <div className="relative mb-4 flex aspect-square w-full items-center justify-center">
        {priceAfterDiscount ?  (
          <div className="absolute left-0 top-0 z-10 rounded bg-[#FF3B30] px-2 py-0.5 text-[11px] font-bold text-white">
            -{Math.round(((price - priceAfterDiscount) / price) * 100)}%
          </div>
        ) : ''}

        <div className="absolute top-0 right-0 flex flex-col gap-2.5 z-10">
          <WishlistButton productId={id} variant="icon" />
          <Link
            href="#"
            className="w-8.5 h-8.5 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-gray-500 hover:text-[#0aad0a] hover:scale-110 transition-all duration-200"
          >
            <RefreshCw className="w-4 h-4" />
          </Link>
          <Link
            href={`/productDetails/${id}`}
            className="w-8.5 h-8.5 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-gray-500 hover:text-[#0aad0a] hover:scale-110 transition-all duration-200"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>

        <Link href={`/productDetails/${id}`} className="relative block h-[85%] w-[85%] cursor-pointer mix-blend-multiply">
          <Image
            src={imageCover}
            alt={title}
            fill
            unoptimized
            className="object-contain bg-white"
          />
        </Link>
      </div>

      <div className="flex flex-col grow">
        <Link href={`/productDetails/${id}`} className="block cursor-pointer">
          <p className="text-[13px] text-[#64748b]">{product.category.name}</p>
          <h3 className="mb-1 line-clamp-2 text-[16px] font-semibold text-[#1e293b] transition-colors hover:text-[#0aad0a]">
            {title}
          </h3>
        </Link>
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex text-[#FFC107]">
            {Array.from({ length: Math.floor(ratingsAverage) }).map((e, i) => (
              <Star key={i} className="w-4.5 h-4.5 fill-current" />
            ))}
            {Array.from({ length: 5 - Math.floor(ratingsAverage) }).map(
              (e, i) => (
                <Star
                  key={i}
                  className="w-4.5 h-4.5 stroke-[1.5px] text-[#FFC107]"
                  fill="none"
                />
              ),
            )}
          </div>
          <span className="text-[14px] text-[#64748b]">
            {ratingsAverage} ({ratingsQuantity})
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="flex flex-col">
            {priceAfterDiscount ? (
              <div className="flex gap-1 items-center">
                <span className="text-[18px] font-[800] text-[#0aad0a]">
                  {priceAfterDiscount} EGP
                </span>
                <span className="text-[13px] text-gray-400 line-through">
                  {price} EGP
                </span>
              </div>
            ) : (
              <span className="text-[18px] font-extrabold text-[#0f172a]">
                {price} EGP
              </span>
            )}
          </div>

            <AddToCart id={ id} />
        </div>
      </div>
    </div>
  );
}
