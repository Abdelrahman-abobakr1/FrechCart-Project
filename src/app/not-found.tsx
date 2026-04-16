'use client';

import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';


const AppleSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 448 512" fill="currentColor">
    <path d="M224 112c-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80l16 0c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80l-16 0zM0 288c0-76.3 35.7-160 112-160 27.3 0 59.7 10.3 82.7 19.3 18.8 7.3 39.9 7.3 58.7 0 22.9-8.9 55.4-19.3 82.7-19.3 76.3 0 112 83.7 112 160 0 128-80 224-160 224-16.5 0-38.1-6.6-51.5-11.3-8.1-2.8-16.9-2.8-25 0-13.4 4.7-35 11.3-51.5 11.3-80 0-160-96-160-224z" />
  </svg>
);

const CarrotSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 640 512" fill="currentColor">
    <path d="M453.1-36.7L440.9-24.6c-31.2 31.2-31.2 81.9 0 113.1 15.6 15.6 31.2 31.2 46.9 46.9 31.2 31.2 81.9 31.2 113.1 0l12.1-12.1c6.2-6.2 6.2-16.4 0-22.6L600.9 88.6c-31.2-31.2-81.9-31.2-113.1 0 31.2-31.2 31.2-81.9 0-113.1L475.7-36.7c-6.2-6.2-16.4-6.2-22.6 0zM331.6 96c-45.2 0-87.1 20.4-115 54.3L273.3 207c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L191.6 193.2 67.2 466.8c-5.5 12.1-2.9 26.4 6.5 35.9s23.7 12 35.9 6.5l141.6-64.4-43.8-43.8c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l56.5 56.5 95.3-43.3c53.1-24.1 87.2-77.1 87.2-135.5 0-82.2-66.6-148.8-148.8-148.8z" />
  </svg>
);

const LemonSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 448 512" fill="currentColor">
    <path d="M448 96c0-35.3-28.7-64-64-64-6.6 0-13 1-19 2.9-22.5 7-48.1 14.9-71 9-75.2-19.1-156.4 11-213.7 68.3S-7.2 250.8 11.9 326c5.8 22.9-2 48.4-9 71-1.9 6-2.9 12.4-2.9 19 0 35.3 28.7 64 64 64 6.6 0 13-1 19.1-2.9 22.5-7 48.1-14.9 71-9 75.2 19.1 156.4-11 213.7-68.3S455.2 261.2 436.1 186c-5.8-22.9 2-48.4 9-71 1.9-6 2.9-12.4 2.9-19.1zM222.7 143c-52 15.2-96.5 59.7-111.7 111.7-3.7 12.7-17.1 20-29.8 16.3S61.2 254 65 241.3c19.8-67.7 76.6-124.5 144.3-144.3 12.7-3.7 26.1 3.6 29.8 16.3s-3.6 26.1-16.3 29.8z" />
  </svg>
);

const SeedlingSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 512 512" fill="currentColor">
    <path d="M512 32C512 140.1 435.4 230.3 333.6 251.4 325.7 193.3 299.6 141 261.1 100.5 301.2 40 369.9 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z" />
  </svg>
);

const CartSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 640 512" fill="currentColor">
    <path d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
  </svg>
);

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-[#fafbfc] flex items-center justify-center px-4 py-16 relative overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes customFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-1 { animation: customFloat 6s ease-in-out infinite; }
        .animate-float-2 { animation: customFloat 8s ease-in-out infinite 1s; }
        .animate-float-3 { animation: customFloat 7s ease-in-out infinite 0.5s; }
        .animate-float-4 { animation: customFloat 9s ease-in-out infinite 2s; }
        .animate-float-5 { animation: customFloat 5s ease-in-out infinite 1.5s; }
        .animate-float-6 { animation: customFloat 6s ease-in-out infinite 0.8s; }
      `}} />


      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] text-[#e0f2fe] w-10 animate-float-1">
          <AppleSvg />
        </div>
        <div className="absolute top-[20%] right-[10%] text-[#dcfce7] w-8 animate-float-2">
          <CarrotSvg />
        </div>
        <div className="absolute bottom-[25%] left-[8%] text-[#ecfdf5] w-9 animate-float-3">
          <LemonSvg />
        </div>
        <div className="absolute bottom-[15%] right-[15%] text-[#dcfce7] w-10 animate-float-4">
          <SeedlingSvg />
        </div>
        <div className="absolute top-[50%] left-[15%] text-[#d1fae5] w-6 animate-float-5">
          <AppleSvg />
        </div>
        <div className="absolute top-[40%] right-[5%] text-[#dcfce7] w-7 animate-float-6">
          <CarrotSvg />
        </div>


        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#dcfce7]/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#dcfce7]/30 to-transparent rounded-full blur-3xl" />
      </div>


      <div className="relative z-10 max-w-xl w-full">
        

        <div className="flex justify-center mb-10">
          <div className="relative mt-8">

            <div className="absolute inset-0 w-64 h-52 sm:w-72 sm:h-60 bg-[#dcfce7]/50 rounded-[32px] blur-2xl"></div>
            
            <div className="relative w-64 h-52 sm:w-72 sm:h-60">

              <div className="absolute inset-x-0 top-4 mx-auto w-52 h-40 sm:w-60 sm:h-44 bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4]/80 via-transparent to-[#dcfce7]/40"></div>

                <CartSvg className="relative w-20 h-20 sm:w-24 sm:h-24 text-[#4ade80]" />
              </div>


              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-20">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-white shadow-lg"></div>
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#16A34A] flex items-center justify-center shadow-lg shadow-[#16A34A]/40">
                    <span className="text-[20px] sm:text-[24px] font-black text-white tracking-tight">404</span>
                  </div>
                </div>
              </div>


              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2.5 z-10">
                <div className="w-2 h-2 rounded-full bg-[#4ade80]"></div>
                <div className="w-6 h-3 border-b-2 border-[#4ade80] rounded-b-full"></div>
                <div className="w-2 h-2 rounded-full bg-[#4ade80]"></div>
              </div>
            </div>
          </div>
        </div>


        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-[44px] font-black text-[#1e293b] mb-4 tracking-tight">
            Oops! Nothing Here
          </h1>
          <p className="text-[#64748b] text-[16px] leading-relaxed max-w-sm mx-auto">
            Looks like this page went out of stock! Don&apos;t worry, there&apos;s plenty more fresh content to explore.
          </p>
        </div>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#16A34A] hover:bg-[#15803d] text-white py-3.5 px-8 rounded-xl font-bold text-[16px] transition-all duration-300 shadow-[0_8px_20px_rgba(22,163,74,0.3)] hover:-translate-y-1"
          >
            <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-gray-50 text-[#334155] py-3.5 px-8 rounded-xl font-bold text-[16px] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-gray-200 hover:-translate-y-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
            Go Back
          </button>
        </div>


        <div className="bg-white rounded-[24px] border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] p-6 sm:p-8">
          <p className="text-center text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-5">
            Destinations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/shop"
              className="px-5 py-2.5 rounded-xl bg-[#f0fdf4] text-[#16A34A] font-semibold text-[14px] hover:bg-[#dcfce7] transition-colors"
            >
              All Products
            </Link>
            <Link
              href="/categories"
              className="px-5 py-2.5 rounded-xl bg-gray-50 text-[#64748b] font-semibold text-[14px] hover:bg-gray-100 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/deals"
              className="px-5 py-2.5 rounded-xl bg-gray-50 text-[#64748b] font-semibold text-[14px] hover:bg-gray-100 transition-colors"
            >
              Today&apos;s Deals
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-gray-50 text-[#64748b] font-semibold text-[14px] hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
