import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Headphones } from 'lucide-react';

const features = [
  {
    title: 'Free Shipping',
    description: 'On orders over 500 EGP',
    icon: Truck,
    bgClass: 'bg-blue-50',
    iconClass: 'text-blue-500',
  },
  {
    title: 'Secure Payment',
    description: '100% secure transactions',
    icon: ShieldCheck,
    bgClass: 'bg-[#ecfdf5]',
    iconClass: 'text-[#10b981]',
  },
  {
    title: 'Easy Returns',
    description: '14-day return policy',
    icon: RefreshCw,
    bgClass: 'bg-orange-50',
    iconClass: 'text-orange-500',
  },
  {
    title: '24/7 Support',
    description: 'Dedicated support team',
    icon: Headphones,
    bgClass: 'bg-[#f5f3ff]',
    iconClass: 'text-[#8b5cf6]',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-8 bg-white">
      <div className="page-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:-translate-y-1 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${feature.bgClass}`}
                >
                  <Icon className={`w-6 h-6 stroke-[1.8] ${feature.iconClass}`} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[15px] font-bold text-gray-900 group-hover:text-[#0aad0a] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
