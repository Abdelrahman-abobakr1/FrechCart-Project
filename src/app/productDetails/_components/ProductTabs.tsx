"use client";

import React, { useState } from "react";
import { Check, Star, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { AllProductsData } from "@/app/home.interface";
type Props = {
  productInfo: AllProductsData;
};type Review = {
  _id: string;
  rating: number;
  review: string;
  user: {
    _id: string;
    name: string;
  };
  createdAt: string;
};

type RatingStat = {
  stars: number;
  percentage: number;
  count: number;
};

export const getRatingStats = (reviews: Review[]): RatingStat[] => {
  const total = reviews.length;
  const counts: Record<number, number> = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  reviews.forEach((r) => {
    counts[r.rating] = (counts[r.rating] || 0) + 1;
  });

  return [5, 4, 3, 2, 1].map((star) => {
    const count = counts[star];
    return {
      stars: star,
      count,
      percentage: total ? Math.round((count / total) * 100) : 0,
    };
  });
};
export default function ProductTabs({ productInfo }: Props) {
  const [activeTab, setActiveTab] = useState("details");
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(3);
  const {
    images,
    subcategory,
    sold,
    _id,
    title,
    slug,
    price,
    description,
    quantity,
    imageCover,
    category,
    brand,
    ratingsQuantity,
    ratingsAverage,
    reviews,
  } = productInfo;
    const stats = getRatingStats(reviews || []);
  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-100 mt-10">
      <div className="container mx-auto">
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("details")}
            className={`flex items-center gap-2 px-6 py-4 font-semibold text-[15px] transition-all relative ${
              activeTab === "details"
                ? "text-[#10b981] bg-[#f0fdf4] border-b-2 border-[#10b981]"
                : "text-gray-500 hover:text-gray-900 border-b-2 border-transparent"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-[3px] ${activeTab === "details" ? "bg-[#10b981]" : "bg-gray-400"}`}
            ></div>
            Product Details
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`flex items-center gap-2 px-6 py-4 font-semibold text-[15px] transition-all relative ${
              activeTab === "reviews"
                ? "text-[#10b981] bg-[#f0fdf4] border-b-2 border-[#10b981]"
                : "text-gray-500 hover:text-gray-900 border-b-2 border-transparent"
            }`}
          >
            <Star
              className={`w-4 h-4 ${activeTab === "reviews" ? "fill-[#10b981] text-[#10b981]" : "fill-gray-400 text-gray-400"}`}
            />
            Reviews ({ratingsQuantity})
          </button>

          <button
            onClick={() => setActiveTab("shipping")}
            className={`flex items-center gap-2 px-6 py-4 font-semibold text-[15px] transition-all relative ${
              activeTab === "shipping"
                ? "text-[#10b981] bg-[#f0fdf4] border-b-2 border-[#10b981]"
                : "text-gray-500 hover:text-gray-900 border-b-2 border-transparent"
            }`}
          >
            <Truck
              className={`w-4 h-4 ${activeTab === "shipping" ? "text-[#10b981]" : "text-gray-400"}`}
            />
            Shipping & Returns
          </button>
        </div>


        {activeTab === "details" && (
          <div className="animate-in fade-in duration-300">

            <div className="mb-10">
              <h3 className="text-lg font-bold text-[#0f172a] mb-3">
                About this Product
              </h3>
              <p className="text-[15px] text-gray-600">{description}</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

              <div className="bg-[#f8fafc] rounded-xl p-6">
                <h4 className="text-[15px] font-bold text-[#0f172a] mb-5">
                  Product Information
                </h4>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-[14px] text-gray-500">Category</span>
                    <span className="text-[14px] font-semibold text-[#0f172a]">
                      {category.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-[14px] text-gray-500">
                      Subcategory
                    </span>
                    <span className="text-[14px] font-semibold text-[#0f172a]">
                      {subcategory[0].name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-[14px] text-gray-500">Brand</span>
                    <span className="text-[14px] font-semibold text-[#0f172a]">
                      {brand.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-gray-500">
                      Items Sold
                    </span>
                    <span className="text-[14px] font-semibold text-[#0f172a]">
                      {sold}+ sold
                    </span>
                  </div>
                </div>
              </div>


              <div className="bg-[#f8fafc] rounded-xl p-6">
                <h4 className="text-[15px] font-bold text-[#0f172a] mb-5">
                  Key Features
                </h4>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#10b981]" />
                    <span className="text-[14px] text-gray-600 font-medium">
                      Premium Quality Product
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#10b981]" />
                    <span className="text-[14px] text-gray-600 font-medium">
                      100% Authentic Guarantee
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#10b981]" />
                    <span className="text-[14px] text-gray-600 font-medium">
                      Fast & Secure Packaging
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#10b981]" />
                    <span className="text-[14px] text-gray-600 font-medium">
                      Quality Tested
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}


        {activeTab === "reviews" && (
          <div className="animate-in fade-in duration-300">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start max-w-4xl pt-4">

              <div className="flex flex-col items-center flex-shrink-0 pt-2">
                <h2 className="text-6xl font-extrabold text-[#0f172a] mb-2">
                 {ratingsAverage}
                </h2>
                <div className="flex text-[#FFC107] mb-2">
          <div className="flex text-[#FFC107]">
                     {Array.from({ length: Math.floor(ratingsAverage) }).map(
                       (e, i) => (
                         <Star key={i} className="w-4.5 h-4.5 fill-current" />
                       ),
                     )}
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
                 
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  Based on {reviews.length} reviews
                </p>
              </div>


    <div className="flex-1 w-full flex flex-col gap-3">
      {stats.map((row) => (
        <div key={row.stars} className="flex items-center gap-4">


          <div className="w-[50px] text-[13px] font-semibold text-gray-600 flex flex-col pb-1">
            <span>{row.stars}</span>
            <span className="text-[11px] text-gray-400 -mt-1">star</span>
          </div>


          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#fbbf24] rounded-full transition-all duration-500"
              style={{ width: `${row.percentage}%` }}
            />
          </div>


          <div className="w-[60px] text-right text-[13px] font-semibold text-gray-500">
            {row.percentage}% 
          </div>

        </div>
      ))}
    </div>
            </div>


            <div className="mt-12 border-t border-gray-100 pt-8">
              <h3 className="text-lg font-bold text-[#0f172a] mb-6">
                Customer Reviews
              </h3>
              {reviews && reviews.length > 0 ? (
                <>
                  <div className="flex flex-col gap-6">
                    {reviews.slice(0, visibleReviewsCount).map((item: any) => (
                      <div
                        key={item._id}
                        className="pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex flex-col">
                            <span className="text-[15px] font-semibold text-[#0f172a] capitalize">
                              {item.user?.name || "Unknown User"}
                            </span>
                            <span className="text-[13px] text-gray-400 mt-1">
                              {new Date(item.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </span>
                          </div>
                          <div className="flex text-[#FFC107]">
                            {Array.from({ length: item.rating || 0 }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                            {Array.from({ length: 5 - (item.rating || 0) }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 stroke-[1.5px] text-[#FFC107]"
                                  fill="none"
                                />
                              )
                            )}
                          </div>
                        </div>
                        <p className="text-[14px] text-gray-600 leading-relaxed whitespace-pre-wrap">
                          {item.review}
                        </p>
                      </div>
                    ))}
                  </div>

                  {reviews.length > visibleReviewsCount && (
                    <div className="flex justify-center mt-6">
                      <button
                        onClick={() => setVisibleReviewsCount((prev) => prev + 3)}
                        className="px-6 py-2.5 bg-white border border-gray-200 text-[#0f172a] text-[14px] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-sm"
                      >
                        Load More Reviews
                      </button>
                    </div>
                  )}
                  
                  {reviews.length > 3 && reviews.length <= visibleReviewsCount && (
                    <div className="flex justify-center mt-6">
                      <button
                        onClick={() => setVisibleReviewsCount(3)}
                        className="px-6 py-2.5 bg-white border border-gray-200 text-[#0f172a] text-[14px] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-sm"
                      >
                        Show Less
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-[14px] text-gray-500">
                  No reviews available for this product.
                </p>
              )}
            </div>
          </div>
        )}


        {activeTab === "shipping" && (
          <div className="animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

              <div className="bg-[#f0fdf4] rounded-xl p-6 border border-[#dcfce7]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#10b981] rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-[16px] font-bold text-[#0f172a]">
                    Shipping Information
                  </h4>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-[18px] h-[18px] text-[#10b981] mt-0.5 flex-shrink-0" />
                    <span className="text-[14px] text-gray-700">
                      Free shipping on orders over $50
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-[18px] h-[18px] text-[#10b981] mt-0.5 flex-shrink-0" />
                    <span className="text-[14px] text-gray-700">
                      Standard delivery: 3-5 business days
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-[18px] h-[18px] text-[#10b981] mt-0.5 flex-shrink-0" />
                    <span className="text-[14px] text-gray-700">
                      Express delivery available (1-2 business days)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-[18px] h-[18px] text-[#10b981] mt-0.5 flex-shrink-0" />
                    <span className="text-[14px] text-gray-700">
                      Track your order in real-time
                    </span>
                  </li>
                </ul>
              </div>


              <div className="bg-[#f0fdf4] rounded-xl p-6 border border-[#dcfce7]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#10b981] rounded-full flex items-center justify-center">
                    <RotateCcw className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-[16px] font-bold text-[#0f172a]">
                    Returns & Refunds
                  </h4>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-[18px] h-[18px] text-[#10b981] mt-0.5 flex-shrink-0" />
                    <span className="text-[14px] text-gray-700">
                      30-day hassle-free returns
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-[18px] h-[18px] text-[#10b981] mt-0.5 flex-shrink-0" />
                    <span className="text-[14px] text-gray-700">
                      Full refund or exchange available
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-[18px] h-[18px] text-[#10b981] mt-0.5 flex-shrink-0" />
                    <span className="text-[14px] text-gray-700">
                      Free return shipping on defective items
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-[18px] h-[18px] text-[#10b981] mt-0.5 flex-shrink-0" />
                    <span className="text-[14px] text-gray-700">
                      Easy online return process
                    </span>
                  </li>
                </ul>
              </div>
            </div>


            <div className="bg-[#f8fafc] rounded-xl p-5 border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[15px] font-bold text-[#0f172a]">
                  Buyer Protection Guarantee
                </h4>
                <p className="text-[14px] text-gray-600">
                  Get a full refund if your order doesn't arrive or isn't as
                  described. We ensure your shopping experience is safe and
                  secure.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
