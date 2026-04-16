"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Leaf, ArrowRight, Star } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="container mx-auto">
        

        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-white via-[#f0fdf4] to-[#dcfce7] border border-gray-100 shadow-sm p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">


          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#00C950] opacity-5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#00C950] opacity-5 blur-3xl pointer-events-none" />


          <div className="relative z-10 flex-1 w-full">
            

            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-10 h-10 bg-[#0aad0a] rounded-xl flex items-center justify-center shadow-sm shrink-0">

                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </span>
              <div>
                <p className="text-[11px] font-extrabold text-[#0aad0a] uppercase tracking-[0.15em]">Newsletter</p>
                <p className="text-[12px] text-gray-400">50,000+ subscribers</p>
              </div>
            </div>


            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-gray-900 leading-tight mb-3">
              Get the Freshest Updates{" "}
              <span className="text-[#0aad0a]">Delivered Free</span>
            </h2>
            

            <p className="text-[15px] text-gray-500 mb-6 max-w-lg">
              Weekly recipes, seasonal offers & exclusive member perks.
            </p>


            <div className="flex flex-wrap gap-2.5 mb-7">
              <span className="flex items-center gap-1.5 bg-white text-[13px] font-medium text-gray-700 border border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.05)] px-3.5 py-1.5 rounded-full">
                <Leaf className="w-3.5 h-3.5 text-[#0aad0a] fill-current" /> Fresh Picks Weekly
              </span>
              <span className="flex items-center gap-1.5 bg-white text-[13px] font-medium text-gray-700 border border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.05)] px-3.5 py-1.5 rounded-full">
                <Leaf className="w-3.5 h-3.5 text-[#0aad0a] fill-current" /> Free Delivery Codes
              </span>
              <span className="flex items-center gap-1.5 bg-white text-[13px] font-medium text-gray-700 border border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.05)] px-3.5 py-1.5 rounded-full">
                <Leaf className="w-3.5 h-3.5 text-[#0aad0a] fill-current" /> Members-Only Deals
              </span>
            </div>


            <div className="flex flex-col sm:flex-row items-stretch gap-3 max-w-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-[15px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0aad0a]/30 focus:border-[#0aad0a] transition-all"
              />
              <Link 
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-[#0aad0a] hover:bg-[#00963C] hover:-translate-y-0.5 hover:shadow-lg text-white font-bold text-[15px] px-7 py-3.5 rounded-xl shadow-sm transition-all duration-200 whitespace-nowrap"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-[12px] text-gray-400 mt-2.5">✨ Unsubscribe anytime. No spam, ever.</p>
          </div>


          <div className="relative z-10 w-full lg:w-[420px] xl:w-[500px] shrink-0">
            <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#0d1f2d] to-[#1e3a4a] text-white p-6 sm:p-7 shadow-xl">
              

              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-[#00C950] opacity-20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-32 h-32 bg-[#0aad0a] opacity-10 rounded-full blur-2xl pointer-events-none" />
              

              <div className="relative z-10 inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C950]" /> Mobile App
              </div>

              <h3 className="relative z-10 text-2xl sm:text-[26px] font-extrabold leading-tight mb-2">
                Shop Faster on Our App
              </h3>
              <p className="relative z-10 text-[14px] text-white/70 mb-6 max-w-[240px]">
                Get app-exclusive deals & 15% off your first order.
              </p>


              <div className="relative z-10 flex flex-col gap-2.5 mb-5">
                <Link 
                  href="#"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl px-4 py-3 transition-all duration-200 group/app"
                >

                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.35 2.77M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] text-white/60 uppercase tracking-wider">Download on the</p>
                    <p className="text-[15px] font-bold">App Store</p>
                  </div>
                </Link>

                <Link 
                  href="#"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl px-4 py-3 transition-all duration-200 group/app"
                >

                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.37.2.8.22 1.2.06l12.71-7.34-2.68-2.68-11.23 9.96zM20.65 10.38L17.5 8.6l-3.01 2.71 3.01 2.99 3.15-1.82a1.5 1.5 0 0 0 0-2.1zM2.21 1.03C2.08 1.26 2 1.53 2 1.84v20.32c0 .31.08.58.21.81l.11.1 11.38-11.38v-.26L2.32.93l-.11.1zM14.63 10.27L3.18.31l-.09.1 11.54 9.86z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] text-white/60 uppercase tracking-wider">Get it on</p>
                    <p className="text-[15px] font-bold">Google Play</p>
                  </div>
                </Link>
              </div>


              <div className="relative z-10 flex items-center gap-2">
                <div className="flex text-[#FFC107]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[13px] text-white/70">4.9 · 100K+ downloads</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
