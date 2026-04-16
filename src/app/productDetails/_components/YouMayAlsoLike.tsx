'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, RefreshCw, Eye, Star, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface MockProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice: number | null;
  discount: string | null;
  rating: number;
  reviews: number;
  image: string;
}

export default function YouMayAlsoLike() {
  const products: MockProduct[] = [
    {
      id: 1,
      name: "Woman Shawl Floral",
      category: "Women's Fashion",
      price: 191,
      oldPrice: null,
      discount: null,
      rating: 4.8,
      reviews: 18,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Woman Shawl Abstract",
      category: "Women's Fashion",
      price: 149,
      oldPrice: null,
      discount: null,
      rating: 4.8,
      reviews: 18,
      image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Woman Shawl Orange",
      category: "Women's Fashion",
      price: 149,
      oldPrice: null,
      discount: null,
      rating: 4.8,
      reviews: 18,
      image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Woman Shawl Purple",
      category: "Women's Fashion",
      price: 349,
      oldPrice: null,
      discount: null,
      rating: 4.2,
      reviews: 10,
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Woman Bordeaux Long Sleeve Blouse",
      category: "Women's Fashion",
      price: 349,
      oldPrice: 499,
      discount: "-30%",
      rating: 4.2,
      reviews: 10,
      image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Woman Brown Long Sleeve Tunic",
      category: "Women's Fashion",
      price: 359,
      oldPrice: 499,
      discount: "-28%",
      rating: 4.7,
      reviews: 5,
      image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=400&h=400&fit=crop",
    },
    {
      id: 7,
      name: "Woman Standard Fit Knitted Cardigan",
      category: "Women's Fashion",
      price: 449,
      oldPrice: 499,
      discount: "-10%",
      rating: 4.8,
      reviews: 6,
      image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=400&h=400&fit=crop",
    },
    {
      id: 8,
      name: "Relaxed Fit Knitted Joggers Lilac",
      category: "Women's Fashion",
      price: 189,
      oldPrice: 499,
      discount: "-62%",
      rating: 1.0,
      reviews: 1,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    },
  ];


  const extendedProducts = [...products, ...products.map(p => ({ ...p, id: p.id + 100 }))];

  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="container mx-auto">
        

        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-7 sm:h-8 bg-[#0aad0a] rounded-full"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              You May Also <span className="text-[#0aad0a]">Like</span>
            </h2>
          </div>
          

          <div className="flex items-center gap-3">
            <button className="you-may-like-prev w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0aad0a] hover:text-white transition-colors border border-gray-100 shadow-sm cursor-pointer">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="you-may-like-next w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0aad0a] hover:text-white transition-colors border border-gray-100 shadow-sm cursor-pointer">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>


        <div className="relative mt-8">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              prevEl: '.you-may-like-prev',
              nextEl: '.you-may-like-next',
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 }
            }}
            className="pb-4"
          >
            {extendedProducts.map((product: MockProduct) => (
              <SwiperSlide key={product.id} className="h-auto">
                <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group mx-[1px]">
                  

                  <div className="relative w-full aspect-square mb-4 flex items-center justify-center">
                    

                    {product.discount && (
                      <div className="absolute top-0 left-0 z-10 bg-[#FF3B30] text-white text-[11px] font-bold px-2 py-0.5 rounded">
                        {product.discount}
                      </div>
                    )}


                    <div className="absolute top-0 right-0 flex flex-col gap-2.5 z-10">
                      <Link 
                        href="#" 
                        className="w-[34px] h-[34px] bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-gray-500 hover:text-red-500 hover:scale-110 transition-all duration-200"
                        title="Add to Wishlist"
                      >
                        <Heart className="w-4 h-4" />
                      </Link>
                      <Link 
                        href="#" 
                        className="w-[34px] h-[34px] bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-gray-500 hover:text-[#0aad0a] hover:scale-110 transition-all duration-200"
                        title="Compare"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </Link>
                      <Link 
                        href="#" 
                        className="w-[34px] h-[34px] bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-gray-500 hover:text-[#0aad0a] hover:scale-110 transition-all duration-200"
                        title="Quick View"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                    </div>


                    <div className="relative w-[85%] h-[85%] mix-blend-multiply">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill
                        unoptimized
                        className="object-contain object-center"
                      />
                    </div>
                  </div>


                  <div className="flex flex-col flex-grow">

                    <p className="text-[13px] text-[#64748b] mb-1">{product.category}</p>
                    

                    <h3 className="text-[16px] text-[#1e293b] mb-1.5 line-clamp-2 min-h-[48px]">
                      {product.name}
                    </h3>
                    

                    <div className="flex items-center gap-1.5 mb-5">
                      <div className="flex text-[#FFC107]">
                        <Star className="w-[18px] h-[18px] fill-current" />
                        <Star className="w-[18px] h-[18px] fill-current" />
                        <Star className="w-[18px] h-[18px] fill-current" />
                        <Star className="w-[18px] h-[18px] fill-current" />
                        <Star className="w-[18px] h-[18px] stroke-[1.5px] text-[#FFC107]" fill="none" />
                      </div>
                      <span className="text-[14px] text-[#64748b]">{product.rating} ({product.reviews})</span>
                    </div>
                    

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex flex-col">
                        {product.oldPrice ? (
                          <>
                            <span className="text-[18px] font-bold text-[#0aad0a]">{product.price} EGP</span>
                            <span className="text-[13px] text-gray-400 line-through">{product.oldPrice} EGP</span>
                          </>
                        ) : (
                          <span className="text-[18px] font-[800] text-[#0f172a]">{product.price} EGP</span>
                        )}
                      </div>
                      

                      <Link 
                        href="#" 
                        className="w-10 h-10 bg-[#10b981] text-white rounded-full flex items-center justify-center hover:bg-[#059669] hover:scale-110 shadow-sm hover:shadow-md transition-all duration-200 shrink-0"
                        title="Add to Cart"
                      >
                        <Plus className="w-6 h-6 stroke-[2.5px]" />
                      </Link>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
}
