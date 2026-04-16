"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, Headphones } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Message Sent Successfully! We will get back to you shortly.");
    reset();
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen pb-16">
      
      {/* Green Splash Banner */}
      <div className="bg-[#0aad0a] w-full pt-6 pb-12">
        <div className="page-container max-w-[1200px]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[14px] text-white/80 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-bold">Contact Us</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-[68px] h-[68px] bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-tight">Contact Us</h1>
              <p className="text-[16px] text-white/90 font-medium mt-1">
                We'd love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container max-w-[1200px] -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-white rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex items-start gap-4">
               <div className="mt-1">
                 <div className="w-12 h-12 flex items-center justify-center bg-[#e5f9ed] rounded-xl text-[#0aad0a]">
                   <Phone className="w-5 h-5 fill-current" />
                 </div>
               </div>
               <div>
                  <h3 className="font-bold text-gray-900 text-[16px] mb-1">Phone</h3>
                  <p className="text-[14px] text-gray-500 mb-2">Mon-Fri from 8am to 6pm</p>
                  <a href="tel:+18001234567" className="text-[15px] font-semibold text-[#0aad0a] transition-colors cursor-pointer">
                    +1 (800) 123-4567
                  </a>
               </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex items-start gap-4">
               <div className="mt-1">
                 <div className="w-12 h-12 flex items-center justify-center bg-[#e5f9ed] rounded-xl text-[#0aad0a]">
                   <Mail className="w-5 h-5" />
                 </div>
               </div>
               <div>
                  <h3 className="font-bold text-gray-900 text-[16px] mb-1">Email</h3>
                  <p className="text-[14px] text-gray-500 mb-2">We'll respond within 24 hours</p>
                  <a href="mailto:support@freshcart.com" className="text-[15px] font-semibold text-[#0aad0a] transition-colors cursor-pointer">
                    support@freshcart.com
                  </a>
               </div>
            </div>

            {/* Office Card */}
            <div className="bg-white rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex items-start gap-4">
               <div className="mt-1">
                 <div className="w-12 h-12 flex items-center justify-center bg-[#e5f9ed] rounded-xl text-[#0aad0a]">
                   <MapPin className="w-5 h-5" />
                 </div>
               </div>
               <div>
                  <h3 className="font-bold text-gray-900 text-[16px] mb-1">Office</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                    123 Commerce Street<br />
                    New York, NY 10001<br />
                    United States
                  </p>
               </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex items-start gap-4">
               <div className="mt-1">
                 <div className="w-12 h-12 flex items-center justify-center bg-[#e5f9ed] rounded-xl text-[#0aad0a]">
                   <Clock className="w-5 h-5" />
                 </div>
               </div>
               <div>
                  <h3 className="font-bold text-gray-900 text-[16px] mb-1">Business Hours</h3>
                  <div className="text-[14px] text-gray-500 font-medium space-y-1">
                    <p>Monday - Friday: 8am - 6pm</p>
                    <p>Saturday: 9am - 4pm</p>
                    <p>Sunday: Closed</p>
                  </div>
               </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100">
              
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 flex items-center justify-center bg-[#e5f9ed] rounded-xl text-[#0aad0a]">
                   <Headphones className="w-6 h-6" />
                 </div>
                 <div>
                   <h2 className="text-[20px] font-bold text-[#21313C]">Send us a Message</h2>
                   <p className="text-[13px] text-gray-500 font-medium">
                     Fill out the form and we'll get back to you
                   </p>
                 </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-semibold text-gray-800">Full Name</label>
                    <input 
                      type="text" 
                      required
                      {...register("fullName")}
                      placeholder="John Doe" 
                      className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-[14px] outline-none transition-all placeholder:text-gray-400 focus:border-[#0aad0a] focus:ring-1 focus:ring-[#0aad0a]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-semibold text-gray-800">Email Address</label>
                    <input 
                      type="email" 
                      required
                      {...register("email")}
                      placeholder="john@example.com" 
                      className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-[14px] outline-none transition-all placeholder:text-gray-400 focus:border-[#0aad0a] focus:ring-1 focus:ring-[#0aad0a]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-gray-800">Subject</label>
                  <select 
                    required
                    {...register("subject")}
                    defaultValue=""
                    className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-[14px] outline-none transition-all focus:border-[#0aad0a] focus:ring-1 focus:ring-[#0aad0a] text-gray-600 appearance-none bg-white"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="shipping">Shipping & Delivery</option>
                    <option value="returns">Returns & Refunds</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-gray-800">Message</label>
                  <textarea 
                    rows={6}
                    required
                    {...register("message")}
                    placeholder="Write your message here" 
                    className="w-full resize-none rounded-md border border-gray-200 px-4 py-2.5 text-[14px] outline-none transition-all placeholder:text-gray-400 focus:border-[#0aad0a] focus:ring-1 focus:ring-[#0aad0a]"
                  />
                </div>

                <div className="mt-2">
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="rounded-md bg-[#0aad0a] disabled:opacity-75 disabled:cursor-not-allowed hover:bg-[#088c08] px-6 py-2.5 text-[14px] font-bold text-white transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
