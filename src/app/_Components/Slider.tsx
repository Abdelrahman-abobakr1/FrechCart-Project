"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  const slides = [
    {
      id: 1,
      title: "Fresh Products Delivered to your Door",
      subtitle: "Get 20% off your first order",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80",
    },
    {
      id: 2,
      title: "100% Organic & Healthy Vegetables",
      subtitle: "Fresh from the farm to your table",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1920&q=80",
    },
    {
      id: 3,
      title: "Daily Fresh Bakery & Dairy Mix",
      subtitle: "Enjoy the freshly baked goods every morning",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1920&q=80",
    },
  ];

  return (
    <div className="group mx-auto w-full max-w-[1920px]">
      <div className="relative w-full overflow-hidden rounded-b-[28px]">
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-bullet",
          bulletActiveClass: "swiper-bullet-active",
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[320px] w-full overflow-hidden md:h-[420px]">
              

              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              

              <div className="absolute inset-0 bg-gradient-to-r from-[#00C950E8] via-[#13b567cc] to-[#14c77499]" />
              

              <div className="page-container relative flex h-full flex-col justify-center">
                <h1 className="mb-3 max-w-[320px] text-[30px] font-bold leading-[1.15] text-white sm:max-w-md md:text-[40px] lg:mb-5 lg:max-w-2xl lg:text-[48px]">
                  {slide.title}
                </h1>
                
                <p className="mb-8 text-[16px] font-medium text-white/95">
                  {slide.subtitle}
                </p>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <Link
                    href="/shop"
                    className="rounded-lg bg-white px-6 py-2.5 text-[14px] font-bold text-[#0aad0a] shadow-sm transition-colors hover:bg-gray-100 sm:px-8 sm:py-3.5 sm:text-[15px]"
                  >
                    Shop Now
                  </Link>
                  <Link
                    href="/shop"
                    className="rounded-lg border border-white/80 bg-transparent px-6 py-2.5 text-[14px] font-bold text-white transition-colors hover:bg-white hover:text-[#0aad0a] sm:px-8 sm:py-3.5 sm:text-[15px]"
                  >
                    View Deals
                  </Link>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      <button className="custom-prev absolute left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0aad0a] shadow-lg transition-colors hover:bg-gray-50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:left-8 sm:h-11 sm:w-11">
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button className="custom-next absolute right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0aad0a] shadow-lg transition-colors hover:bg-gray-50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:right-8 sm:h-11 sm:w-11">
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>


      <div className="custom-pagination absolute bottom-4 md:bottom-8 left-0 right-0 z-10 flex justify-center gap-2" />
      </div>


      <style dangerouslySetInnerHTML={{__html: `
        .swiper-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .swiper-bullet-active {
          width: 24px;
          background: #ffffff;
          border-radius: 4px;
        }
      `}} />
    </div>
  );
}
