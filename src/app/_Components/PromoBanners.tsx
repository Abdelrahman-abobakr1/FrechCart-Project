import React from 'react';
import Link from 'next/link';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';

export default function PromoBanners() {
  return (
    <div className="w-full bg-transparent px-4 sm:px-6 lg:px-8 pb-10 md:pb-16 pt-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          

          <Link 
            href="/shop"
            className="group relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#00C950] to-[#00963C] p-6 sm:p-8 lg:p-10 text-white min-h-[300px] sm:min-h-[320px] shadow-sm flex flex-col justify-start transition-all duration-300 block"
          >

            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-[0.08] rounded-full blur-2xl transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute bottom-0 right-0 -mr-8 -mb-12 w-48 h-48 bg-white opacity-[0.04] rounded-full transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 bg-black opacity-[0.03] rounded-full blur-xl"></div>
            
            <div className="relative z-10 flex flex-col h-full">

              <div className="w-fit mb-5">
                <span className="inline-flex items-center gap-1.5 bg-white/20 px-3.5 py-1.5 rounded-full text-[13px] font-medium backdrop-blur-md">
                  <Flame className="w-4 h-4 text-[#ffc107]" fill="currentColor" /> Deal of the Day
                </span>
              </div>
              

              <h3 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold mb-3 tracking-wide">
                Fresh Organic Fruits
              </h3>
              <p className="text-white/90 text-[14px] sm:text-[15px] mb-8 max-w-[280px] leading-relaxed">
                Get up to 40% off on selected organic fruits
              </p>
              
              <div className="flex items-end gap-3 mb-10 mt-auto">
                <span className="text-4xl sm:text-[44px] font-black leading-none tracking-tight">
                  40% OFF
                </span>
                <span className="text-[12px] sm:text-[13px] font-medium opacity-90 pb-1">
                  Use code: <span className="font-bold tracking-wider text-white">ORGANIC40</span>
                </span>
              </div>
              

              <div className="w-fit">
                <div 
                  className="inline-flex items-center gap-2 bg-white text-[#0aad0a] px-6 py-3 rounded-full font-bold text-[14px] sm:text-[15px] shadow-sm hover:bg-gray-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group/btn"
                >
                  Shop Now <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>


          <Link 
            href="/shop"
            className="group relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#FF8A00] to-[#FF2A5F] p-6 sm:p-8 lg:p-10 text-white min-h-[300px] sm:min-h-[320px] shadow-sm flex flex-col justify-start transition-all duration-300 block"
          >

            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-[0.08] rounded-full blur-2xl transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute bottom-0 right-0 -mr-8 -mb-12 w-48 h-48 bg-white opacity-[0.04] rounded-full transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 bg-black opacity-[0.03] rounded-full blur-xl"></div>
            
            <div className="relative z-10 flex flex-col h-full">

              <div className="w-fit mb-5">
                <span className="inline-flex items-center gap-1.5 bg-white/20 px-3.5 py-1.5 rounded-full text-[13px] font-medium backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-[#ffe066]" fill="currentColor" /> New Arrivals
                </span>
              </div>
              

              <h3 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold mb-3 tracking-wide">
                Exotic Vegetables
              </h3>
              <p className="text-white/90 text-[14px] sm:text-[15px] mb-8 max-w-[280px] leading-relaxed">
                Discover our latest collection of premium vegetables
              </p>
              
              <div className="flex items-end gap-3 mb-10 mt-auto">
                <span className="text-4xl sm:text-[44px] font-black leading-none tracking-tight">
                  25% OFF
                </span>
                <span className="text-[12px] sm:text-[13px] font-medium opacity-90 pb-1">
                  Use code: <span className="font-bold tracking-wider text-white">FRESH25</span>
                </span>
              </div>
              

              <div className="w-fit">
                <div 
                  className="inline-flex items-center gap-2 bg-white text-[#ff5a30] px-6 py-3 rounded-full font-bold text-[14px] sm:text-[15px] shadow-sm hover:bg-gray-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group/btn"
                >
                  Explore Now <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
