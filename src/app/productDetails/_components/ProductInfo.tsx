"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ShoppingCart,
  Zap,
  Heart,
  Share2,
  Minus,
  Plus,
  Truck,
  RotateCcw,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import { AllProductsData } from "@/app/home.interface";
import { toast } from "sonner";
import { handleAddProductToCart, handleProductQty } from "@/app/_Components/AddToCart/AddProductToCart.action";
import { useAppDispatch } from "@/store/hooks";
import { setCartCount } from "@/store/cartSlice";
type Props = {
  productInfo: AllProductsData;
};

export default function ProductInfo({ productInfo }: Props) {
  const {
    images,
    subcategory,
    _id,
    title,
    slug,
    price,
    priceAfterDiscount,
    description,
    quantity,
    imageCover,
    category,
    brand,
    ratingsQuantity,
    ratingsAverage,
    reviews,
  } = productInfo;
  const isInStock = quantity > 0;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [localQuantity, setLocalQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useAppDispatch();

  const currentPrice = priceAfterDiscount || price;

  const increaseQuantity = () => {
    if (localQuantity < quantity) setLocalQuantity(prev => prev + 1);
  };
  const decreaseQuantity = () => {
    if (localQuantity > 1) setLocalQuantity(prev => prev - 1);
  };

  async function handleAddToCart() {
    toast.promise(
      async () => {
        const addRes = await handleAddProductToCart({ productId: _id });
        if (localQuantity > 1) {
          const qtyRes = await handleProductQty({ count: localQuantity }, _id);
          dispatch(setCartCount(qtyRes.numOfCartItems));
        } else {
          dispatch(setCartCount(addRes.numOfCartItems));
        }
        return addRes.message;
      },
      {
        loading: "Adding product to cart...",
        success: (msg) => msg,
        error: (err) => err?.message || "Failed to add product to cart",
      }
    );
  }

  const handleThumbnailClick = (idx: number) => {
    if (idx > activeIndex) {
      setDirection(1);
    } else if (idx < activeIndex) {
      setDirection(-1);
    }
    setActiveIndex(idx);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0,
      };
    },
  };

  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-8 pt-10 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
          <div className="w-full lg:w-[38%] flex flex-col gap-4">
            <div className="relative w-full aspect-[4/5] bg-[#f8f8f8] rounded-xl overflow-hidden border border-gray-100 flex-shrink-0">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "tween", duration: 0.6, ease: "easeInOut" },
                    opacity: { duration: 0.4 },
                  }}
                  className="absolute inset-0 flex items-center justify-center p-4 mix-blend-multiply"
                >
                  <Image
                    src={images[activeIndex]}
                    alt={`${title} ${activeIndex + 1}`}
                    fill
                    unoptimized
                    priority
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex gap-4 h-[80px] sm:h-[100px]">
              {images.map((thumb, idx) => (
                <div
                  key={idx}
                  onClick={() => handleThumbnailClick(idx)}
                  className={`relative h-full flex-1 bg-[#f8f8f8] rounded-lg border-2 cursor-pointer transition-all overflow-hidden ${
                    activeIndex === idx
                      ? "border-[#0aad0a]"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    unoptimized
                    className="object-contain p-2 mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[62%] flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-[#f1f5f9] text-[#10b981] text-xs font-semibold rounded-full border border-gray-100">
                {category.name}
              </span>
              <span className="px-3 py-1 bg-[#f1f5f9] text-gray-500 text-xs font-semibold rounded-full border border-gray-100">
                {brand.name}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-2 sm:mb-3">
              {title}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-[#FFC107]">
                {Array.from({ length: Math.floor(ratingsAverage) }).map(
                  (e, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-current" />
                  ),
                )}
                {Array.from({ length: 5 - Math.floor(ratingsAverage) }).map(
                  (e, i) => (
                    <Star
                      key={i}
                      className="w-4.5 h-4.5 stroke-[1.5px] text-[#FFC107]"
                      fill="none"
                    />
                  ),
                )}
              </div>
              <span className="text-[14px] text-[#64748b]">
                {ratingsAverage} ({ratingsQuantity} reviews)
              </span>
            </div>

            <div className="mb-6 flex flex-col items-start gap-4">
              <div className="flex flex-col">
                {priceAfterDiscount ? (
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-extrabold text-[#10b981]">
                      {priceAfterDiscount} EGP
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {price} EGP
                    </span>
                  </div>
                ) : (
                  <div className="text-3xl font-extrabold text-[#0f172a]">
                    {price} EGP
                  </div>
                )}
              </div>
              {isInStock ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#dcfce7] rounded-full">
                  <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                  <span className="text-xs font-semibold text-[#10b981]">
                    In Stock
                  </span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fee2e2] rounded-full">
                  <div className="w-2 h-2 rounded-fullbg-[#ef4444]"></div>
                  <span className="text-xs font-semibold text-[#ef4444]">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              {description}
            </p>

            <div className="mb-6">
              <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-200 rounded-lg h-11 w-[120px]">
                  <button
                    onClick={decreaseQuantity}
                    disabled={localQuantity <= 1}
                    className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="flex-1 h-full flex items-center justify-center text-sm font-semibold border-x border-gray-200">
                    {localQuantity}
                  </div>
                  <button
                    onClick={increaseQuantity}
                    disabled={localQuantity >= quantity}
                    className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  {quantity} available
                </span>
              </div>
            </div>

            <div className="bg-[#f8fafc] rounded-xl p-4 flex items-center justify-between mb-6 border border-gray-100">
              <span className="text-gray-500 font-semibold">Total Price:</span>
              <span className="text-2xl font-bold text-[#10b981]">
                {(currentPrice * localQuantity).toLocaleString()} EGP
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <button 
                onClick={handleAddToCart}
                disabled={isAdding}
                className="flex-1 h-12 bg-[#10b981] text-white rounded-lg flex items-center justify-center gap-2 font-bold hover:bg-[#059669] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isAdding ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShoppingCart className="w-5 h-5" />}
                {isAdding ? "Adding..." : "Add to Cart"}
              </button>
              <button className="flex-1 h-12 bg-[#0f172a] text-white rounded-lg flex items-center justify-center gap-2 font-bold hover:bg-gray-800 transition-colors">
                <Zap className="w-5 h-5 fill-current" />
                Buy Now
              </button>
            </div>

            <div className="flex gap-3 mb-8">
              <button className="flex-1 h-11 border border-gray-200 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                <Heart className="w-4 h-4" />
                Add to Wishlist
              </button>
              <button className="w-11 h-11 border border-gray-200 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors flex-shrink-0">
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between py-4 border-t border-gray-100">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-[#ecfdf5] flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-[#10b981]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-[#0f172a]">
                    Free Delivery
                  </span>
                  <span className="text-[12px] text-gray-500">
                    Orders over $100
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-[#ecfdf5] flex items-center justify-center flex-shrink-0">
                  <RotateCcw className="w-5 h-5 text-[#10b981]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-[#0f172a]">
                    30 Days Return
                  </span>
                  <span className="text-[12px] text-gray-500">Money back</span>
                </div>
              </div>

              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-[#ecfdf5] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#10b981]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-[#0f172a]">
                    Secure Payment
                  </span>
                  <span className="text-[12px] text-gray-500">
                    100% Protected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
