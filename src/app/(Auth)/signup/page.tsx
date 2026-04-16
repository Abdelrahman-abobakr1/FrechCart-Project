import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import RegisterForm from './RegisterForm';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex justify-center">
      <div className="w-full max-w-287.5 flex flex-col lg:flex-row">
        

        <div className="flex flex-col w-full lg:w-1/2 px-6 sm:px-12 lg:px-0 lg:pr-14 pt-12 lg:pt-16 pb-10 lg:pb-12 lg:border-r border-gray-100 bg-white">
          <h1 className="text-3xl sm:text-4xl xl:text-[40px] font-bold text-[#1e293b] mb-3">
            Welcome to <br className="lg:hidden" />
            <span className="text-[#0aad0a]">FreshCart</span>
          </h1>
          <p className="text-[#64748b] text-[15px] leading-relaxed mb-10 max-w-[400px]">
            Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.
          </p>
          
          <div className="flex flex-col gap-7 mb-10">
    
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center flex-shrink-0 text-[#0aad0a]">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-bold text-[#334155] text-[16px] mb-1">Premium Quality</h3>
                <p className="text-[#64748b] text-[14px] leading-relaxed max-w-[320px]">Premium quality products sourced from trusted suppliers.</p>
              </div>
            </div>
            
    
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center flex-shrink-0 text-[#16A34A]">
                <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.25 2.25C2.25 1.00898 3.25898 0 4.5 0H14.625C15.866 0 16.875 1.00898 16.875 2.25V3.375H18.6574C19.2551 3.375 19.8281 3.61055 20.25 4.03242L21.8426 5.625C22.2645 6.04688 22.5 6.61992 22.5 7.21758V12.375C22.5 13.616 21.491 14.625 20.25 14.625H20.134C19.7684 15.9223 18.573 16.875 17.1562 16.875C15.7395 16.875 14.5477 15.9223 14.1785 14.625H10.5715C10.2059 15.9223 9.01055 16.875 7.59375 16.875C6.17695 16.875 4.98516 15.9223 4.61602 14.625H4.5C3.25898 14.625 2.25 13.616 2.25 12.375V10.6875H0.84375C0.376172 10.6875 0 10.3113 0 9.84375C0 9.37617 0.376172 9 0.84375 9H4.78125C5.24883 9 5.625 8.62383 5.625 8.15625C5.625 7.68867 5.24883 7.3125 4.78125 7.3125H0.84375C0.376172 7.3125 0 6.93633 0 6.46875C0 6.00117 0.376172 5.625 0.84375 5.625H7.03125C7.49883 5.625 7.875 5.24883 7.875 4.78125C7.875 4.31367 7.49883 3.9375 7.03125 3.9375H0.84375C0.376172 3.9375 0 3.56133 0 3.09375C0 2.62617 0.376172 2.25 0.84375 2.25H2.25ZM20.25 9V7.21758L18.6574 5.625H16.875V9H20.25ZM9 13.7812C9 13.4083 8.85184 13.0506 8.58812 12.7869C8.3244 12.5232 7.96671 12.375 7.59375 12.375C7.22079 12.375 6.8631 12.5232 6.59938 12.7869C6.33566 13.0506 6.1875 13.4083 6.1875 13.7812C6.1875 14.1542 6.33566 14.5119 6.59938 14.7756C6.8631 15.0393 7.22079 15.1875 7.59375 15.1875C7.96671 15.1875 8.3244 15.0393 8.58812 14.7756C8.85184 14.5119 9 14.1542 9 13.7812ZM17.1562 15.1875C17.5292 15.1875 17.8869 15.0393 18.1506 14.7756C18.4143 14.5119 18.5625 14.1542 18.5625 13.7812C18.5625 13.4083 18.4143 13.0506 18.1506 12.7869C17.8869 12.5232 17.5292 12.375 17.1562 12.375C16.7833 12.375 16.4256 12.5232 16.1619 12.7869C15.8982 13.0506 15.75 13.4083 15.75 13.7812C15.75 14.1542 15.8982 14.5119 16.1619 14.7756C16.4256 15.0393 16.7833 15.1875 17.1562 15.1875Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#334155] text-[16px] mb-1">Fast Delivery</h3>
                <p className="text-[#64748b] text-[14px] leading-relaxed max-w-[320px]">Same-day delivery available in most areas</p>
              </div>
            </div>
            
    
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center flex-shrink-0 text-[#16A34A]">
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.434 0C8.59572 0 8.75744 0.0351563 8.90509 0.101953L15.5285 2.91094C16.302 3.23789 16.8785 4.00078 16.875 4.92188C16.8574 8.40938 15.4231 14.7902 9.36564 17.6906C8.77853 17.9719 8.0965 17.9719 7.50939 17.6906C1.44845 14.7902 0.0175941 8.40938 1.59908e-05 4.92188C-0.00349963 4.00078 0.573063 3.23789 1.3465 2.91094L7.96642 0.101953C8.11408 0.0351563 8.27228 0 8.434 0ZM8.434 2.34844V15.641C13.2856 13.2926 14.5899 8.08945 14.6215 4.97461L8.434 2.35195V2.34844Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#334155] text-[16px] mb-1">Secure Shopping</h3>
                <p className="text-[#64748b] text-[14px] leading-relaxed max-w-[320px]">Your data and payments are completely secure</p>
              </div>
            </div>
          </div>


          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm max-w-[420px] relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" 
                  alt="Sarah Johnson" 
                  fill 
                  unoptimized 
                  className="object-cover" 
                />
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-[#334155] text-[14px] leading-tight mb-0.5">Sarah Johnson</h4>
                <div className="flex text-[#FFC107]">
                  {Array(5).fill(0).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
              </div>
            </div>
            <p className="text-[#475569] text-[13.5px] italic leading-relaxed">
              "FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend!"
            </p>
          </div>
        </div>


        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-6 sm:px-12 lg:px-0 lg:pl-14 py-8 lg:pt-16 lg:pb-16 bg-white min-h-screen lg:min-h-0">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
