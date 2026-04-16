import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ArrowLeft, Box } from 'lucide-react';
import { getWishlist } from '../_Components/Wishlist/wishlist.action';
import WishlistItemActions from './WishlistItemActions';

export default async function WishlistPage() {
  let items: any[] = [];
  try {
    items = await getWishlist();
  } catch {
  }

  return (
    <div className="page-shell">
      <div className="page-container max-w-[1100px]">

        <div className="flex items-center gap-2 text-[13px] text-gray-400 mb-6">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1e293b] font-medium">Wishlist</span>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-[52px] h-[52px] bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-red-500">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#1e293b]">My Wishlist</h1>
            <p className="text-[14px] text-gray-500 mt-0.5">{items.length} items saved</p>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="mt-16 flex flex-col items-center justify-center text-center">
            <div className="w-[120px] h-[120px] bg-[#f1f5f9] rounded-full flex items-center justify-center mb-6">
              <Box className="w-14 h-14 text-gray-300" strokeWidth={2} />
            </div>
            <h2 className="text-2xl font-bold text-[#1e293b] mb-3">Your wishlist is empty</h2>
            <p className="text-gray-500 text-[15px] mb-8">Start adding products you love!</p>
            <Link href="/" className="bg-[#16A34A] hover:bg-[#15803d] text-white px-8 py-3.5 rounded-xl font-bold text-[15px] transition-all shadow-[0_6px_16px_rgba(22,163,74,0.25)]">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="bg-white border border-gray-100 rounded-3xl p-5 lg:p-8 shadow-[0_2px_20px_rgb(0,0,0,0.02)]">

            <div className="hidden lg:grid grid-cols-[2.5fr_1fr_1fr_auto] gap-6 pb-4 border-b border-gray-100 text-[14px] text-gray-500 font-medium">
              <div>Product</div>
              <div>Price</div>
              <div>Status</div>
              <div className="text-right pr-6">Actions</div>
            </div>

            <div className="flex flex-col">
              {items.map((item: any, index: number) => (
                <div
                  key={item._id}
                  className={`flex flex-col lg:grid lg:grid-cols-[2.5fr_1fr_1fr_auto] lg:items-center gap-4 lg:gap-6 py-6 ${index !== items.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="flex items-center gap-5">
                    <Link href={`/productDetails/${item._id}`} className="w-[85px] h-[85px] bg-[#f8fafc] rounded-2xl flex items-center justify-center relative border border-gray-100 flex-shrink-0 overflow-hidden">
                      <Image src={item.imageCover} alt={item.title} fill unoptimized className="object-contain p-2 mix-blend-multiply" />
                    </Link>
                    <div className="flex flex-col pr-4">
                      <Link href={`/productDetails/${item._id}`}>
                        <h3 className="font-bold text-[#1e293b] text-[15px] lg:text-[14px] xl:text-[15px] line-clamp-2 hover:text-[#0aad0a] cursor-pointer transition-colors max-w-[400px]">
                          {item.title}
                        </h3>
                      </Link>
                      <span className="text-gray-400 text-[13px] mt-1">{item.category?.name}</span>
                    </div>
                  </div>

                  <div className="flex items-center lg:items-start lg:flex-col gap-2 mt-2 lg:mt-0">
                    <span className="lg:hidden text-gray-500 text-[14px] w-14">Price:</span>
                    <div className="flex flex-col">
                      <span className="font-black text-[#1e293b] text-[16px] xl:text-[17px]">
                        {(item.priceAfterDiscount || item.price).toLocaleString()} EGP
                      </span>
                      {item.priceAfterDiscount && (
                        <span className="text-gray-300 text-[12.5px] line-through font-medium">{item.price.toLocaleString()} EGP</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center lg:items-start gap-2 mt-2 lg:mt-0">
                    <span className="lg:hidden text-gray-500 text-[14px] w-14">Status:</span>
                    {item.quantity > 0 ? (
                      <div className="bg-[#ecfdf5] text-[#10b981] px-3 py-1.5 rounded-full flex items-center gap-1.5 w-fit border border-green-50">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
                        <span className="text-[12px] font-bold">In Stock</span>
                      </div>
                    ) : (
                      <div className="bg-red-50 text-red-500 px-3 py-1.5 rounded-full flex items-center gap-1.5 w-fit border border-red-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <span className="text-[12px] font-bold">Out of Stock</span>
                      </div>
                    )}
                  </div>

                  <WishlistItemActions productId={item._id} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 transition-colors font-medium text-[14px]">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>

      </div>
    </div>
  );
}
