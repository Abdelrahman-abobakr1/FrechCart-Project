import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Trash2, Plus, Minus, Lock, Tag, Box, ArrowLeft, ArrowRight, Check 
} from 'lucide-react';
import { getUserCart, handleAddProductToCart } from '../_Components/AddToCart/AddProductToCart.action';
import HandleProductQuntity from '../_Components/AddToCart/HandleProductQuntity';
import RemoveProduct from '../_Components/RemoveProduct/RemoveProduct';
import ClearCartButton from '../_Components/ClearCart/ClearCartButton';
import CartCheckoutButton from '../_Components/CartCheckoutButton';

const TruckIcon = ({ className }: { className?: string }) => (
  <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2.25 2.25C2.25 1.00898 3.25898 0 4.5 0H14.625C15.866 0 16.875 1.00898 16.875 2.25V3.375H18.6574C19.2551 3.375 19.8281 3.61055 20.25 4.03242L21.8426 5.625C22.2645 6.04688 22.5 6.61992 22.5 7.21758V12.375C22.5 13.616 21.491 14.625 20.25 14.625H20.134C19.7684 15.9223 18.573 16.875 17.1562 16.875C15.7395 16.875 14.5477 15.9223 14.1785 14.625H10.5715C10.2059 15.9223 9.01055 16.875 7.59375 16.875C6.17695 16.875 4.98516 15.9223 4.61602 14.625H4.5C3.25898 14.625 2.25 13.616 2.25 12.375V10.6875H0.84375C0.376172 10.6875 0 10.3113 0 9.84375C0 9.37617 0.376172 9 0.84375 9H4.78125C5.24883 9 5.625 8.62383 5.625 8.15625C5.625 7.68867 5.24883 7.3125 4.78125 7.3125H0.84375C0.376172 7.3125 0 6.93633 0 6.46875C0 6.00117 0.376172 5.625 0.84375 5.625H7.03125C7.49883 5.625 7.875 5.24883 7.875 4.78125C7.875 4.31367 7.49883 3.9375 7.03125 3.9375H0.84375C0.376172 3.9375 0 3.56133 0 3.09375C0 2.62617 0.376172 2.25 0.84375 2.25H2.25ZM20.25 9V7.21758L18.6574 5.625H16.875V9H20.25ZM9 13.7812C9 13.4083 8.85184 13.0506 8.58812 12.7869C8.3244 12.5232 7.96671 12.375 7.59375 12.375C7.22079 12.375 6.8631 12.5232 6.59938 12.7869C6.33566 13.0506 6.1875 13.4083 6.1875 13.7812C6.1875 14.1542 6.33566 14.5119 6.59938 14.7756C6.8631 15.0393 7.22079 15.1875 7.59375 15.1875C7.96671 15.1875 8.3244 15.0393 8.58812 14.7756C8.85184 14.5119 9 14.1542 9 13.7812ZM17.1562 15.1875C17.5292 15.1875 17.8869 15.0393 18.1506 14.7756C18.4143 14.5119 18.5625 14.1542 18.5625 13.7812C18.5625 13.4083 18.4143 13.0506 18.1506 12.7869C17.8869 12.5232 17.5292 12.375 17.1562 12.375C16.7833 12.375 16.4256 12.5232 16.1619 12.7869C15.8982 13.0506 15.75 13.4083 15.75 13.7812C15.75 14.1542 15.8982 14.5119 16.1619 14.7756C16.4256 15.0393 16.7833 15.1875 17.1562 15.1875Z" fill="currentColor"/>
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M8.434 0C8.59572 0 8.75744 0.0351563 8.90509 0.101953L15.5285 2.91094C16.302 3.23789 16.8785 4.00078 16.875 4.92188C16.8574 8.40938 15.4231 14.7902 9.36564 17.6906C8.77853 17.9719 8.0965 17.9719 7.50939 17.6906C1.44845 14.7902 0.0175941 8.40938 1.59908e-05 4.92188C-0.00349963 4.00078 0.573063 3.23789 1.3465 2.91094L7.96642 0.101953C8.11408 0.0351563 8.27228 0 8.434 0ZM8.434 2.34844V15.641C13.2856 13.2926 14.5899 8.08945 14.6215 4.97461L8.434 2.35195V2.34844Z" fill="currentColor"/>
  </svg>
);

const CartHeaderIcon = () => (
  <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.40625 0C0.626953 0 0 0.626953 0 1.40625C0 2.18555 0.626953 2.8125 1.40625 2.8125H4.06055C4.28906 2.8125 4.48242 2.97656 4.52344 3.19922L7.57617 19.9746C7.93945 21.9785 9.68555 23.4375 11.7246 23.4375H26.7188C27.498 23.4375 28.125 22.8105 28.125 22.0312C28.125 21.252 27.498 20.625 26.7188 20.625H11.7246C11.0449 20.625 10.4648 20.1387 10.3418 19.4707L10.043 17.8125H27.832C29.6367 17.8125 31.1836 16.5293 31.5176 14.7539L33.334 5.0332C33.5508 3.87891 32.666 2.8125 31.4883 2.8125H7.30664L7.2832 2.69531C7.00195 1.13672 5.64258 0 4.05469 0H1.40625ZM12.1875 30.9375C12.9334 30.9375 13.6488 30.6412 14.1762 30.1137C14.7037 29.5863 15 28.8709 15 28.125C15 27.3791 14.7037 26.6637 14.1762 26.1363C13.6488 25.6088 12.9334 25.3125 12.1875 25.3125C11.4416 25.3125 10.7262 25.6088 10.1988 26.1363C9.67132 26.6637 9.375 27.3791 9.375 28.125C9.375 28.8709 9.67132 29.5863 10.1988 30.1137C10.7262 30.6412 11.4416 30.9375 12.1875 30.9375ZM25.3125 30.9375C26.0584 30.9375 26.7738 30.6412 27.3012 30.1137C27.8287 29.5863 28.125 28.8709 28.125 28.125C28.125 27.3791 27.8287 26.6637 27.3012 26.1363C26.7738 25.6088 26.0584 25.3125 25.3125 25.3125C24.5666 25.3125 23.8512 25.6088 23.3238 26.1363C22.7963 26.6637 22.5 27.3791 22.5 28.125C22.5 28.8709 22.7963 29.5863 23.3238 30.1137C23.8512 30.6412 24.5666 30.9375 25.3125 30.9375Z" fill="white"/>
  </svg>
);

export default async function CartPage() {
  const { numOfCartItems, cartId, totalCartPrice, products, } = await getUserCart()
  const subtotal = totalCartPrice || 0;
  const FREE_SHIPPING_THRESHOLD = 500;
  const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 50;
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD; 
  const total = subtotal + shippingCost;
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div className="page-shell">
      <div className="page-container">
        
        <div className="flex items-center gap-2 text-[13px] text-gray-400 mb-6">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1e293b] font-medium">Shopping Cart</span>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-[52px] h-[52px] bg-[#16A34A] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-200/50">
            <CartHeaderIcon />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#1e293b]">Shopping Cart</h1>
            <p className="text-[14px] text-gray-500 mt-1">
              You have <span className="text-[#16A34A] font-bold">{numOfCartItems || 0} items</span> in your cart
            </p>
          </div>
        </div>

        {(!products || products.length === 0) ? (
     
          <div className="mt-16 sm:mt-24 flex flex-col items-center justify-center text-center">
            <div className="w-[120px] h-[120px] bg-[#f1f5f9] rounded-full flex items-center justify-center mb-6">
              <Box className="w-14 h-14 text-gray-300" strokeWidth={2} />
            </div>
            <h2 className="text-2xl font-bold text-[#1e293b] mb-3">Your cart is empty</h2>
            <p className="text-gray-500 text-[15px] mb-1">Looks like you haven't added anything to your cart yet.</p>
            <p className="text-gray-500 text-[15px] mb-8">Start exploring our products!</p>
            <Link href="/" className="bg-[#16A34A] hover:bg-[#15803d] text-white px-8 py-3.5 rounded-xl font-bold text-[15px] flex items-center gap-2 transition-all shadow-[0_6px_16px_rgba(22,163,74,0.25)] hover:shadow-none hover:translate-y-[2px]">
              Start Shopping
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        ) : (
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            
            <div className="w-full lg:w-2/3 flex flex-col gap-5">
              
              {products?.map((item: any) => (
                <div key={item._id} className="bg-white rounded-[24px] border border-gray-100 p-5 flex flex-col sm:flex-row gap-6 shadow-[0_2px_15px_rgb(0,0,0,0.02)] relative">
                  
                  <div className="flex flex-col gap-3 flex-shrink-0 items-center sm:items-start">
                    <div className="w-[120px] h-[120px] bg-[#f8fafc] rounded-2xl relative overflow-hidden flex items-center justify-center p-3">
                      <Image 
                        src={item.product?.imageCover} 
                        alt={item.product?.title || 'Product'} 
                        fill 
                        className="object-contain p-2"
                        unoptimized
                      />
                    </div>
                    <div className="bg-[#16A34A] text-white px-2.5 py-1 rounded-full flex items-center gap-1.5 self-center sm:self-center shadow-sm">
                      <Check className="w-3 h-3 stroke-[4]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">In Stock</span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between flex-1 py-1">
                    
                    <div className="flex flex-col sm:flex-row justify-between mb-4 sm:mb-0 gap-4">
                      <div>
                        <h3 className="text-[17px] font-bold text-[#1e293b] leading-tight mb-2 pr-4">{item.product?.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="bg-[#dcfce7] text-[#16A34A] px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide">
                            {item.product?.category?.name || 'Category'}
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className="text-gray-400 text-[12px]">SKU: {item.product?.id?.substring(0,6)?.toUpperCase() || 'N/A'}</span>
                        </div>
                        
                        <div className="flex items-end gap-1.5">
                          <span className="text-[18px] font-extrabold text-[#16A34A] leading-none">{item.price} EGP</span>
                          <span className="text-[12px] text-gray-400 font-medium pb-0.5">per unit</span>
                        </div>
                      </div>

                      <div className="hidden sm:flex flex-col items-end text-right">
                        <span className="text-[12px] text-gray-400 font-medium mb-1 pt-1">Total</span>
                        <div className="flex items-end gap-1">
                          <span className="text-[22px] font-black text-[#1e293b] leading-none">{(item.price * item.count).toLocaleString()}</span>
                          <span className="text-[13px] text-gray-500 font-bold pb-0.5">EGP</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row items-end justify-between sm:mt-auto mt-2">
                      
                      <div className="flex items-center gap-3">
                        <HandleProductQuntity quntity={item.count} productId={item.product._id || item.product.id} />
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="flex sm:hidden flex-col items-end text-right">
                          <span className="text-[11px] text-gray-400 font-medium mb-0.5">Total</span>
                          <div className="flex items-end gap-1">
                            <span className="text-[20px] font-black text-[#1e293b] leading-none">{(item.price * item.count).toLocaleString()}</span>
                            <span className="text-[12px] text-gray-500 font-bold pb-0.5">EGP</span>
                          </div>
                        </div>

                       <RemoveProduct 
                         productId={item.product._id || item.product.id} 
                         productName={item.product.title} 
                       />
                      </div>

                    </div>
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between pt-4 pb-8 sm:pb-0">
                <Link href="/" className="flex items-center gap-1.5 text-[#16A34A] font-bold text-[14px] hover:underline">
                  <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
                  Continue Shopping
                </Link>
                <ClearCartButton />
              </div>

            </div>

            <div className="w-full lg:w-1/3">
              <div className="sticky top-24 shadow-[0_12px_45px_rgb(0,0,0,0.06)] rounded-2xl">
                
                <div className="bg-gradient-to-r from-[#16A34A] to-[#15803d] p-5 sm:p-6 rounded-t-2xl text-white">
                  <h3 className="text-[18px] font-bold flex items-center gap-2 mb-1">
                    <Box className="w-5 h-5" strokeWidth={2.5} />
                    Order Summary
                  </h3>
                  <p className="text-green-100 text-[13px]">{numOfCartItems || 0} items in your cart</p>
                </div>

                <div className="bg-white p-5 sm:p-6 rounded-b-2xl border border-t-0 border-gray-100">
                  
                  {isFreeShipping ? (
                    <div className="bg-[#f0fdf4] border border-green-100/50 rounded-xl p-4 flex gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-[#16A34A]">
                        <TruckIcon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col pt-0.5">
                        <span className="text-[#16A34A] font-bold text-[14px] leading-tight">Free Shipping!</span>
                        <span className="text-[#15803d] text-[12px] font-medium">You qualify for free delivery</span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <TruckIcon className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-medium text-gray-700">Add {amountNeededForFreeShipping} EGP for free shipping</span>
                      </div>
                      <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500" 
                          style={{ width: `${freeShippingProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-3.5 mb-5 pb-5 border-b border-gray-100">
                    <div className="flex justify-between items-center text-[14px]">
                      <span className="text-[#4b5563] font-medium">Subtotal</span>
                      <span className="text-[#1e293b] font-bold">{subtotal.toLocaleString()} EGP</span>
                    </div>
                    <div className="flex justify-between items-center text-[14px]">
                      <span className="text-[#4b5563] font-medium">Shipping</span>
                      <span className={`font-bold ${isFreeShipping ? 'text-[#16A34A] uppercase tracking-wide' : 'text-[#1e293b]'}`}>
                        {isFreeShipping ? 'FREE' : `${shippingCost} EGP`}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-end mb-6">
                    <span className="text-[#1e293b] font-bold text-[16px] pb-1">Total</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[30px] font-black text-[#1e293b] leading-none">{total.toLocaleString()}</span>
                      <span className="text-[13px] font-bold text-gray-500">EGP</span>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 border-[1.5px] border-dashed border-gray-300 rounded-xl py-3.5 mb-5 hover:bg-gray-50 transition-colors group">
                    <Tag className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    <span className="text-[14px] font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">Apply Promo Code</span>
                  </button>

                  <CartCheckoutButton />

                  <div className="flex items-center justify-center gap-6 mb-6">
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <ShieldIcon className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium">Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <TruckIcon className="w-[15px] h-[11px]" />
                      <span className="text-[11px] font-medium">Fast Delivery</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Link href="/" className="inline-flex items-center gap-1 text-[#16A34A] text-[13px] font-bold hover:underline">
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Continue Shopping
                    </Link>
                  </div>

                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
