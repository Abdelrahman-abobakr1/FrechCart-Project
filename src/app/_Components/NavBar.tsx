"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, User, Menu, Search, Headset, ChevronDown, X, LogOut, Package, Settings as SettingsIcon } from "lucide-react";
import FreshCartLogo from "./icons/freshCartLogo";
import { useSession, signOut } from "next-auth/react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setCartCount } from "@/store/cartSlice";
import { setWishlistCount } from "@/store/wishlistSlice";
import { getUserCart } from "./AddToCart/AddProductToCart.action";
import { getWishlist } from "./Wishlist/wishlist.action";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const s = useSession();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const cartCount = useAppSelector((state) => state.cart.cartCount);
  const wishlistCount = useAppSelector((state) => state.wishlist.wishlistCount);
  const dispatch = useAppDispatch();

  useEffect(function () {
    getUserCart().then(function (response) {
      if (response && response.numOfCartItems !== undefined) {
        dispatch(setCartCount(response.numOfCartItems));
      }
    }).catch(() => {});
    getWishlist().then(function (items: any[]) {
      if (Array.isArray(items)) dispatch(setWishlistCount(items.length));
    }).catch(() => {});
  }, []);

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100/90 bg-white/95 backdrop-blur-md">
      <div className="page-container py-3.5">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          <Link href="/" className="flex-shrink-0 flex items-center">
            <FreshCartLogo />
          </Link>

          <div className="hidden max-w-2xl flex-1 md:flex">
            <form onSubmit={handleSearch} className="relative w-full">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, brands and more..." 
                className="w-full rounded-full border border-gray-200 bg-[#fbfcfd] py-2.5 pl-5 pr-14 text-[14px] text-gray-700 focus:border-[#0aad0a] focus:outline-none focus:ring-1 focus:ring-[#0aad0a]"
              />
              <button 
                type="submit" 
                className="absolute right-1.5 top-1/2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full bg-[#0aad0a] text-white transition-colors hover:bg-[#088a08]"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>

          <nav className="hidden items-center gap-7 text-[15px] font-medium text-gray-700 lg:flex">
            <Link href="/" className="hover:text-[#0aad0a] transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-[#0aad0a] transition-colors">Shop</Link>
            
            <div className="-my-4 relative cursor-pointer py-4 group">
              <div className="flex items-center gap-1 group-hover:text-[#0aad0a] transition-colors">
                Categories <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#0aad0a] group-hover:rotate-180 transition-all duration-300" />
              </div>
              
              <div className="invisible absolute left-0 top-full z-50 w-[220px] pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 py-3">
                  <ul className="flex flex-col font-normal text-gray-600 text-[15px]">
                    <li><Link href="/categories" className="block px-6 py-2.5 hover:bg-green-50 hover:text-[#0aad0a] transition-colors">All Categories</Link></li>
                    <li><Link href="/categories/6439d2d167d9aa4ca970649f" className="block px-6 py-2.5 hover:bg-green-50 hover:text-[#0aad0a] transition-colors">Electronics</Link></li>
                    <li><Link href="/categories/6439d58a0049ad0b52b9003f" className="block px-6 py-2.5 hover:bg-green-50 hover:text-[#0aad0a] transition-colors">Women's Fashion</Link></li>
                    <li><Link href="/categories/6439d5b90049ad0b52b90048" className="block px-6 py-2.5 hover:bg-green-50 hover:text-[#0aad0a] transition-colors">Men's Fashion</Link></li>
                    <li><Link href="/categories" className="block px-6 py-2.5 hover:bg-green-50 hover:text-[#0aad0a] transition-colors">Beauty & Health</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <Link href="/brands" className="hover:text-[#0aad0a] transition-colors">Brands</Link>
            <Link href="/contact" className="hover:text-[#0aad0a] transition-colors">Contact Us</Link>
          </nav>

          <div className="flex items-center gap-4 lg:gap-6 ml-auto lg:ml-0">
            
            <Link href="/contact" className="hidden items-center gap-3 md:flex group cursor-pointer">
              <div className="w-[38px] h-[38px] rounded-full bg-[#ECFDF5] flex items-center justify-center text-[#0aad0a] transition-colors group-hover:bg-[#d1f4e0]">
                <Headset className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-[13px] leading-tight mt-0.5">
                <span className="text-gray-500 font-medium group-hover:text-[#0aad0a] transition-colors">Support</span>
                <span className="text-gray-900 font-bold group-hover:text-[#0aad0a] transition-colors">24/7 Help</span>
              </div>
            </Link>

            <div className="hidden h-8 w-px bg-gray-200 md:block"></div>

            <div className="flex items-center gap-5 text-[#4A5568]">
              <Link href="/wishlist" className="relative hover:text-[#0aad0a] transition-colors" aria-label="Wishlist">
                <Heart className="w-[24px] h-[24px] stroke-[1.8]" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-[18px] h-[18px] bg-[#0aad0a] text-white text-[11px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link href="/cart" className="hover:text-[#0aad0a] transition-colors relative" aria-label="Cart">
                <ShoppingCart className="w-[24px] h-[24px] stroke-[1.8]" />
                {cartCount ? <span className="absolute -top-2 -right-2 w-[18px] h-[18px] bg-[#0aad0a] text-white text-[11px] font-bold rounded-full flex items-center justify-center">{ cartCount}</span>:''}
              </Link>
              
              {s.status === "authenticated" ? (
                <div className="relative group cursor-pointer hidden md:flex items-center">
                 <div className="w-[36px] h-[36px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center transition-colors group-hover:border-[#0aad0a]/30 group-hover:bg-green-50">
                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M15.8789 15.6094C15.1328 13.7852 13.3398 12.5 11.25 12.5H8.75C6.66016 12.5 4.86719 13.7852 4.12109 15.6094C2.73047 14.1523 1.875 12.1758 1.875 10C1.875 5.51172 5.51172 1.875 10 1.875C14.4883 1.875 18.125 5.51172 18.125 10C18.125 12.1758 17.2695 14.1484 15.8789 15.6094ZM14.3125 16.8867C13.0625 17.6719 11.5859 18.125 10 18.125C8.41406 18.125 6.9375 17.6719 5.68359 16.8867C5.96875 15.4531 7.23438 14.375 8.75 14.375H11.25C12.7656 14.375 14.0312 15.4531 14.3164 16.8867H14.3125ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM10 9.375C9.5856 9.375 9.18817 9.21038 8.89515 8.91735C8.60212 8.62433 8.4375 8.2269 8.4375 7.8125C8.4375 7.3981 8.60212 7.00067 8.89515 6.70765C9.18817 6.41462 9.5856 6.25 10 6.25C10.4144 6.25 10.8118 6.41462 11.1049 6.70765C11.3979 7.00067 11.5625 7.3981 11.5625 7.8125C11.5625 8.2269 11.3979 8.62433 11.1049 8.91735C10.8118 9.21038 10.4144 9.375 10 9.375ZM6.5625 7.8125C6.5625 8.72418 6.92466 9.59852 7.56932 10.2432C8.21398 10.8878 9.08832 11.25 10 11.25C10.9117 11.25 11.786 10.8878 12.4307 10.2432C13.0753 9.59852 13.4375 8.72418 13.4375 7.8125C13.4375 6.90082 13.0753 6.02648 12.4307 5.38182C11.786 4.73716 10.9117 4.375 10 4.375C9.08832 4.375 8.21398 4.73716 7.56932 5.38182C6.92466 6.02648 6.5625 6.90082 6.5625 7.8125Z" fill="#6A7282"/>
                   </svg>
                 </div>
                 <div className="absolute top-10 right-0 w-[235px] pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-white rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.13)] border border-gray-100 overflow-hidden">
                       <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3 border-l-[3px] border-l-[#0aad0a]">
                         <div className="w-[38px] h-[38px] rounded-full bg-[#ecfdf5] flex items-center justify-center border-2 border-[#0aad0a] shrink-0 text-[#0aad0a]">
                           <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M15.8789 15.6094C15.1328 13.7852 13.3398 12.5 11.25 12.5H8.75C6.66016 12.5 4.86719 13.7852 4.12109 15.6094C2.73047 14.1523 1.875 12.1758 1.875 10C1.875 5.51172 5.51172 1.875 10 1.875C14.4883 1.875 18.125 5.51172 18.125 10C18.125 12.1758 17.2695 14.1484 15.8789 15.6094ZM14.3125 16.8867C13.0625 17.6719 11.5859 18.125 10 18.125C8.41406 18.125 6.9375 17.6719 5.68359 16.8867C5.96875 15.4531 7.23438 14.375 8.75 14.375H11.25C12.7656 14.375 14.0312 15.4531 14.3164 16.8867H14.3125ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM10 9.375C9.5856 9.375 9.18817 9.21038 8.89515 8.91735C8.60212 8.62433 8.4375 8.2269 8.4375 7.8125C8.4375 7.3981 8.60212 7.00067 8.89515 6.70765C9.18817 6.41462 9.5856 6.25 10 6.25C10.4144 6.25 10.8118 6.41462 11.1049 6.70765C11.3979 7.00067 11.5625 7.3981 11.5625 7.8125C11.5625 8.2269 11.3979 8.62433 11.1049 8.91735C10.8118 9.21038 10.4144 9.375 10 9.375ZM6.5625 7.8125C6.5625 8.72418 6.92466 9.59852 7.56932 10.2432C8.21398 10.8878 9.08832 11.25 10 11.25C10.9117 11.25 11.786 10.8878 12.4307 10.2432C13.0753 9.59852 13.4375 8.72418 13.4375 7.8125C13.4375 6.90082 13.0753 6.02648 12.4307 5.38182C11.786 4.73716 10.9117 4.375 10 4.375C9.08832 4.375 8.21398 4.73716 7.56932 5.38182C6.92466 6.02648 6.5625 6.90082 6.5625 7.8125Z" fill="#0aad0a"/>
                           </svg>
                         </div>
                         <div className="font-bold text-[#1e293b] text-[14px] leading-tight">{s.data?.user?.name || "User"}</div>
                       </div>
                       <div className="py-1.5 flex flex-col text-[14px]">
                        <Link href="/account/settings" className="px-5 py-[9px] hover:bg-gray-50 flex items-center gap-3 text-gray-600 hover:text-[#0aad0a] transition-colors font-medium">
                           <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 opacity-60">
                             <path d="M15.8789 15.6094C15.1328 13.7852 13.3398 12.5 11.25 12.5H8.75C6.66016 12.5 4.86719 13.7852 4.12109 15.6094C2.73047 14.1523 1.875 12.1758 1.875 10C1.875 5.51172 5.51172 1.875 10 1.875C14.4883 1.875 18.125 5.51172 18.125 10C18.125 12.1758 17.2695 14.1484 15.8789 15.6094ZM14.3125 16.8867C13.0625 17.6719 11.5859 18.125 10 18.125C8.41406 18.125 6.9375 17.6719 5.68359 16.8867C5.96875 15.4531 7.23438 14.375 8.75 14.375H11.25C12.7656 14.375 14.0312 15.4531 14.3164 16.8867H14.3125ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM10 9.375C9.5856 9.375 9.18817 9.21038 8.89515 8.91735C8.60212 8.62433 8.4375 8.2269 8.4375 7.8125C8.4375 7.3981 8.60212 7.00067 8.89515 6.70765C9.18817 6.41462 9.5856 6.25 10 6.25C10.4144 6.25 10.8118 6.41462 11.1049 6.70765C11.3979 7.00067 11.5625 7.3981 11.5625 7.8125C11.5625 8.2269 11.3979 8.62433 11.1049 8.91735C10.8118 9.21038 10.4144 9.375 10 9.375ZM6.5625 7.8125C6.5625 8.72418 6.92466 9.59852 7.56932 10.2432C8.21398 10.8878 9.08832 11.25 10 11.25C10.9117 11.25 11.786 10.8878 12.4307 10.2432C13.0753 9.59852 13.4375 8.72418 13.4375 7.8125C13.4375 6.90082 13.0753 6.02648 12.4307 5.38182C11.786 4.73716 10.9117 4.375 10 4.375C9.08832 4.375 8.21398 4.73716 7.56932 5.38182C6.92466 6.02648 6.5625 6.90082 6.5625 7.8125Z" fill="currentColor"/>
                           </svg>
                           <span>My Profile</span>
                         </Link>
                         <Link href="/orders" className="px-5 py-[9px] hover:bg-gray-50 flex items-center gap-3 text-gray-600 hover:text-[#0aad0a] transition-colors font-medium">
                           <Package className="w-[18px] h-[18px] stroke-[1.5] shrink-0 opacity-60" /> <span>My Orders</span>
                         </Link>
                         <Link href="/wishlist" className="px-5 py-[9px] hover:bg-gray-50 flex items-center gap-3 text-gray-600 hover:text-[#0aad0a] transition-colors font-medium">
                           <Heart className="w-[18px] h-[18px] stroke-[1.5] shrink-0 opacity-60" /> <span>My Wishlist</span>
                         </Link>
                         <Link href="/account/addresses" className="px-5 py-[9px] hover:bg-gray-50 flex items-center gap-3 text-gray-600 hover:text-[#0aad0a] transition-colors font-medium">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-60"><path d="M15 13a3 3 0 1 0-6 0"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><circle cx="12" cy="8" r="2"/></svg>
                           <span>Addresses</span>
                         </Link>
                         <Link href="/account/settings" className="px-5 py-[9px] hover:bg-gray-50 flex items-center gap-3 text-gray-600 hover:text-[#0aad0a] transition-colors font-medium">
                           <SettingsIcon className="w-[18px] h-[18px] stroke-[1.5] shrink-0 opacity-60" /> <span>Settings</span>
                         </Link>
                       </div>
                       <div className="border-t border-gray-100 py-1">
                         <button onClick={() => signOut()} className="w-full px-5 py-[9px] hover:bg-red-50 flex items-center gap-3 text-[#ef4444] font-medium transition-colors">
                           <LogOut className="w-[18px] h-[18px] stroke-[1.5] shrink-0" /> <span className="text-[14px]">Sign Out</span>
                         </button>
                       </div>
                    </div>
                 </div>
              </div>
              ) : (
                <Link href="/signin" className="hidden md:flex items-center justify-center bg-[#0aad0a] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#088a08] transition-colors text-[14px]">
                  Sign In
                </Link>
              )}
              
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden bg-[#0aad0a] text-white p-2 border border-[#0aad0a] rounded-full hover:bg-[#088a08] transition-colors shadow-[0_4px_12px_rgba(10,173,10,0.3)]"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      <div 
        className={`fixed inset-y-0 right-0 z-50 w-[320px] max-w-full bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.1)] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <FreshCartLogo />
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="p-2 bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#0aad0a]/20 hover:[&::-webkit-scrollbar-thumb]:bg-[#0aad0a]/30 [&::-webkit-scrollbar-thumb]:rounded-full">
          
          <form onSubmit={handleSearch} className="relative w-full mb-6">
             <input 
               type="text" 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               placeholder="Search products..." 
               className="w-full pl-4 pr-14 py-[11px] rounded-lg border border-gray-100 bg-[#f8fafc] text-[15px] focus:outline-none focus:border-[#0aad0a] focus:ring-1 focus:ring-[#0aad0a]" 
             />
             <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 w-10 bg-[#0aad0a] hover:bg-[#088a08] text-white rounded-md flex items-center justify-center transition-colors">
               <Search className="w-[18px] h-[18px]" />
             </button>
          </form>

          <div className="h-px bg-gray-100 w-full mb-6" />

          <nav className="flex flex-col gap-6 text-[15px] font-semibold text-[#4b5563] mb-6">
             <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#0aad0a] transition-colors">Home</Link>
             <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#0aad0a] transition-colors">Shop</Link>
             <Link href="/categories" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#0aad0a] transition-colors">Categories</Link>
             <Link href="/brands" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#0aad0a] transition-colors">Brands</Link>
             <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#0aad0a] transition-colors">Contact Us</Link>
          </nav>

          <div className="h-px bg-gray-100 w-full mb-6" />

          <div className="flex flex-col gap-5 mb-6">
               <Link href="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between text-gray-700 font-medium hover:text-[#0aad0a] group transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${wishlistCount > 0 ? 'bg-red-100 text-red-500' : 'bg-red-50 text-red-400 group-hover:bg-red-100'}`}>
                      <Heart className={`w-[18px] h-[18px] stroke-2 ${wishlistCount > 0 ? 'fill-red-500' : ''}`} />
                    </div>
                    <span className="text-[15px]">Wishlist</span>
                  </div>
                  {wishlistCount > 0 && (
                    <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-[12px] font-bold">{wishlistCount}</div>
                  )}
               </Link>
             <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between text-gray-700 font-medium hover:text-[#0aad0a] group transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#ecfdf5] flex items-center justify-center text-[#0aad0a] group-hover:bg-green-100 transition-colors">
                    <ShoppingCart className="w-[18px] h-[18px] stroke-2" />
                  </div>
                  <span className="text-[15px]">Cart</span>
                </div>
                {cartCount > 0 && <div className="w-6 h-6 rounded-full bg-[#0aad0a] text-white flex items-center justify-center text-[12px] font-bold">{cartCount}</div>}
             </Link>
             {s.status === "authenticated" && (
               <Link href="/orders" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between text-gray-700 font-medium hover:text-[#0aad0a] group transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-100 transition-colors">
                      <Package className="w-[18px] h-[18px] stroke-2" />
                    </div>
                    <span className="text-[15px]">My Orders</span>
                  </div>
                  <ChevronDown className="w-4 h-4 -rotate-90 text-gray-400" />
               </Link>
             )}
          </div>

          <div className="h-px bg-gray-100 w-full mb-6" />
          
          <div className="flex flex-col gap-5 mb-auto">
             {s.status === "authenticated" ? (
               <>
                 <Link href="/account/settings" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-gray-700 font-medium hover:text-[#0aad0a] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[#4b5563]">
                      <User className="w-[18px] h-[18px] stroke-2" />
                    </div>
                    <span className="text-[15px]">{s.data?.user?.name || "User"}</span>
                 </Link>
                 <button onClick={() => { signOut(); setIsMobileMenuOpen(false); }} className="flex items-center gap-4 text-red-500 font-medium hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                      <LogOut className="w-[18px] h-[18px] stroke-2" />
                    </div>
                    <span className="text-[15px]">Sign Out</span>
                 </button>
               </>
             ) : (
               <Link href="/signin" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center w-full py-3 bg-[#0aad0a] text-white rounded-lg font-semibold hover:bg-[#088a08] transition-colors">
                  Sign In
               </Link>
             )}
          </div>

          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 bg-[#f8fafc] rounded-xl p-4 flex items-center gap-4 group cursor-pointer hover:bg-green-50 transition-colors">
             <div className="w-[42px] h-[42px] rounded-full bg-[#dcfce7] flex items-center justify-center text-[#0aad0a] group-hover:bg-[#cbf6d8] transition-colors">
               <Headset className="w-[20px] h-[20px] stroke-2" />
             </div>
             <div className="flex flex-col">
                <span className="font-semibold text-gray-800 text-[14px]">Need Help?</span>
                <span className="text-[#0aad0a] text-[13px] font-medium mt-[2px]">Contact Support</span>
             </div>
          </Link>

        </div>
      </div>

    </header>
  );
}
