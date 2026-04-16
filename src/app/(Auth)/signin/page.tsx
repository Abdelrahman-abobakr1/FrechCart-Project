import Image from "next/image";

import { Truck, ShieldCheck, Clock } from "lucide-react";

import loginImage from "@/assets/images/381609d78c4d97f9277837bc4bdf05035b888463.png";
import SignInForm from "./SingInForm";

export default function SigninPage() {

  return (
    <div className="min-h-screen bg-[#f8fafc] flex justify-center">
      <div className="w-full max-w-310 flex flex-col lg:flex-row">

        <div className="hidden lg:flex flex-col w-1/2 pr-16 pt-16 pb-12 bg-white items-start text-left">
          <div className="w-full max-w-125 lg:max-w-full relative aspect-4/3 rounded-[28px] overflow-hidden mb-8 lg:mb-12 shadow-[0_12px_45px_rgb(0,0,0,0.08)] border border-gray-100/50">
            <Image
              src={loginImage}
              alt="FreshCart Groceries"
              fill
              className="object-cover"
              placeholder="blur"
            />
          </div>

          <h2 className="text-[28px] sm:text-[32px] xl:text-[34px] font-bold text-[#1e293b] leading-tight mb-4 px-2 lg:px-0">
            FreshCart - Your One-Stop Shop for Fresh Products
          </h2>

          <p className="text-[#64748b] text-4 leading-relaxed mb-10 max-w-115 mx-auto lg:mx-0">
            Join thousands of happy customers who trust FreshCart for their
            daily grocery needs
          </p>


          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-7 sm:gap-10">
            <div className="flex items-center gap-2.5">
              <Truck className="w-5 h-5 text-[#16A34A]" />
              <span className="text-[14px] font-semibold text-gray-500">
                Free Delivery
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#16A34A]" />
              <span className="text-[14px] font-semibold text-gray-500">
                Secure Payment
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-[#16A34A]" />
              <span className="text-[14px] font-semibold text-gray-500">
                24/7 Support
              </span>
            </div>
          </div>
        </div>


        <SignInForm />
      </div>
    </div>
  );
}
