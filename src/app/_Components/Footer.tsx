import React from 'react';
import Link from 'next/link';
import { 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Headphones, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  CreditCard
} from 'lucide-react';
import FreshCartLogo from './icons/freshCartLogo';

export default function Footer() {
  return (
    <footer className="w-full">

      <div className="w-full border-b border-gray-100/50 bg-[#f4fcf7] px-4 py-10 sm:px-6 lg:px-8 md:py-12">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#e5f9ed] text-[#0aad0a]">
                <Truck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-[16px] font-extrabold text-[#21313C]">Free Shipping</h3>
                <p className="text-[13px] text-gray-500 font-medium">On orders over 500 EGP</p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#e5f9ed] text-[#0aad0a]">
                <RotateCcw className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-[16px] font-extrabold text-[#21313C]">Easy Returns</h3>
                <p className="text-[13px] text-gray-500 font-medium">14-day return policy</p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#e5f9ed] text-[#0aad0a]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-[16px] font-extrabold text-[#21313C]">Secure Payment</h3>
                <p className="text-[13px] text-gray-500 font-medium">100% secure checkout</p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#e5f9ed] text-[#0aad0a]">
                <Headphones className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-[16px] font-extrabold text-[#21313C]">24/7 Support</h3>
                <p className="text-[13px] text-gray-500 font-medium">Contact us anytime</p>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="bg-[#0f172a] px-4 pb-8 pt-16 text-gray-300 sm:px-6 lg:px-8">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
            

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-lg p-2 w-fit">
                <FreshCartLogo />
              </div>
              <p className="text-[15px] leading-relaxed max-w-sm">
                FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0aad0a]" />
                  <span className="text-[15px]">+1 (800) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#0aad0a]" />
                  <span className="text-[15px]">support@freshcart.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0aad0a] mt-0.5" />
                  <span className="text-[15px]">123 Commerce Street, New York, NY 10001</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0aad0a] hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0aad0a] hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0aad0a] hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0aad0a] hover:text-white transition-all">
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>


            <div className="space-y-6">
              <h4 className="text-white font-bold text-[18px]">Shop</h4>
              <ul className="space-y-4 text-[15px]">
                <li><Link href="/shop" className="hover:text-[#0aad0a] transition-colors">All Products</Link></li>
                <li><Link href="/categories" className="hover:text-[#0aad0a] transition-colors">Categories</Link></li>
                <li><Link href="/brands" className="hover:text-[#0aad0a] transition-colors">Brands</Link></li>
                <li><Link href="/categories/6439d2d167d9aa4ca970649f" className="hover:text-[#0aad0a] transition-colors">Electronics</Link></li>
                <li><Link href="/categories/6439d5b90049ad0b52b90048" className="hover:text-[#0aad0a] transition-colors">Men&apos;s Fashion</Link></li>
                <li><Link href="/categories/6439d58a0049ad0b52b9003f" className="hover:text-[#0aad0a] transition-colors">Women&apos;s Fashion</Link></li>
              </ul>
            </div>


            <div className="space-y-6">
              <h4 className="text-white font-bold text-[18px]">Account</h4>
              <ul className="space-y-4 text-[15px]">
                <li><Link href="/account/settings" className="hover:text-[#0aad0a] transition-colors">My Account</Link></li>
                <li><Link href="/orders" className="hover:text-[#0aad0a] transition-colors">Order History</Link></li>
                <li><Link href="/wishlist" className="hover:text-[#0aad0a] transition-colors">Wishlist</Link></li>
                <li><Link href="/cart" className="hover:text-[#0aad0a] transition-colors">Shopping Cart</Link></li>
                <li><Link href="/signin" className="hover:text-[#0aad0a] transition-colors">Sign In</Link></li>
                <li><Link href="/signup" className="hover:text-[#0aad0a] transition-colors">Create Account</Link></li>
              </ul>
            </div>


            <div className="space-y-6 md:col-start-1 lg:col-start-5">
              <h4 className="text-white font-bold text-[18px]">Support</h4>
              <ul className="space-y-4 text-[15px]">
                <li><Link href="/contact" className="hover:text-[#0aad0a] transition-colors">Contact Us</Link></li>
                <li><Link href="/account/settings" className="hover:text-[#0aad0a] transition-colors">Help Center</Link></li>
                <li><Link href="/checkout" className="hover:text-[#0aad0a] transition-colors">Shipping Info</Link></li>
                <li><Link href="/account/addresses" className="hover:text-[#0aad0a] transition-colors">Returns & Refunds</Link></li>
                <li><Link href="/orders" className="hover:text-[#0aad0a] transition-colors">Track Order</Link></li>
              </ul>

              <div className="pt-8 space-y-6 lg:hidden">
                 <h4 className="text-white font-bold text-[18px]">Legal</h4>
                  <ul className="space-y-4 text-[15px]">
                    <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Privacy Policy</Link></li>
                    <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Terms of Service</Link></li>
                    <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Cookie Policy</Link></li>
                  </ul>
              </div>
            </div>


            <div className="hidden lg:block space-y-6">
              <h4 className="text-white font-bold text-[18px]">Legal</h4>
              <ul className="space-y-4 text-[15px]">
                <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-[#0aad0a] transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>

          </div>


          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[14px] text-gray-500">
              © 2026 FreshCart. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                <span className="text-[13px] font-medium">Visa</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                <span className="text-[13px] font-medium">Mastercard</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                <span className="text-[13px] font-medium">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
