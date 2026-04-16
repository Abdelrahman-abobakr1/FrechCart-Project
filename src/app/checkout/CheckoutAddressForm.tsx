'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Building2, Phone } from 'lucide-react';

const formSchema = z.object({
  city: z.string().min(2, "City name must be at least 2 characters"),
  details: z.string().min(10, "Address details must be at least 10 characters"),
  phone: z.string().regex(/^01[0125][0-9]{8}$/, "Please enter a valid Egyptian phone number"),
});

export type CheckoutFormValues = z.infer<typeof formSchema>;

interface Props {
  onSubmit: (data: CheckoutFormValues) => void;
}

export default function CheckoutAddressForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',
  });

  return (
    <form id="checkout-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      

      <div>
        <label className="block text-[14px] font-semibold text-[#1e293b] mb-2">
          City <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Building2 className={`w-5 h-5 ${errors.city ? 'text-red-400' : 'text-gray-400'}`} />
          </div>
          <input 
            {...register('city')}
            type="text" 
            placeholder="e.g. Cairo, Alexandria, Giza" 
            className={`w-full pl-12 pr-4 py-3.5 rounded-xl border text-[14px] focus:outline-none focus:ring-1 transition-all
              ${errors.city 
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500 text-red-900 placeholder-red-300' 
                : 'border-gray-200 focus:ring-[#16A34A] focus:border-[#16A34A] text-gray-800 placeholder-gray-400'
              }`} 
          />
        </div>
        {errors.city && (
          <div className="text-red-600 text-[13px] mt-2 font-medium">
            • {errors.city.message}
          </div>
        )}
      </div>


      <div>
        <label className="block text-[14px] font-semibold text-[#1e293b] mb-2">
          Street Address <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
            <MapPin className={`w-5 h-5 ${errors.details ? 'text-red-400' : 'text-gray-400'}`} />
          </div>
          <textarea 
            {...register('details')}
            rows={3} 
            placeholder="Street name, building number, floor, apartment..." 
            className={`w-full pl-12 pr-4 py-3.5 rounded-xl border text-[14px] focus:outline-none focus:ring-1 transition-all resize-none
               ${errors.details 
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500 text-red-900 placeholder-red-300' 
                : 'border-gray-200 focus:ring-[#16A34A] focus:border-[#16A34A] text-gray-800 placeholder-gray-400'
              }`}
          ></textarea>
        </div>
        {errors.details && (
          <div className="text-red-600 text-[13px] mt-2 font-medium">
            • {errors.details.message}
          </div>
        )}
      </div>


      <div>
        <label className="block text-[14px] font-semibold text-[#1e293b] mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Phone className={`w-5 h-5 ${errors.phone ? 'text-red-400' : 'text-gray-400'}`} />
          </div>
          <input 
            {...register('phone')}
            type="tel" 
            placeholder="01xxxxxxxxx" 
            className={`w-full pl-12 pr-4 py-3.5 rounded-xl border text-[14px] focus:outline-none focus:ring-1 transition-all
               ${errors.phone 
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500 text-red-900 placeholder-red-300' 
                : 'border-gray-200 focus:ring-[#16A34A] focus:border-[#16A34A] text-gray-800 placeholder-gray-400'
              }`} 
          />
        </div>
        {errors.phone && (
          <div className="text-red-600 text-[13px] mt-2 font-medium">
            • {errors.phone.message}
          </div>
        )}
      </div>

    </form>
  );
}
