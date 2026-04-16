"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { addToWishlist, removeFromWishlist } from "./wishlist.action";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setWishlistCount } from "@/store/wishlistSlice";

interface WishlistButtonProps {
  productId: string;
  initialInWishlist?: boolean;
  variant?: "icon" | "full";
  className?: string;
}

export default function WishlistButton({
  productId,
  initialInWishlist = false,
  variant = "icon",
  className,
}: WishlistButtonProps) {
  const [inWishlist, setInWishlist] = useState(initialInWishlist);
  const [loading, setLoading] = useState(false);
  const wishlistCount = useAppSelector((state) => state.wishlist.wishlistCount);
  const dispatch = useAppDispatch();

  async function toggle() {
    if (loading) return;
    setLoading(true);
    const wasIn = inWishlist;
    setInWishlist(!wasIn);
    dispatch(setWishlistCount(wasIn ? Math.max(0, wishlistCount - 1) : wishlistCount + 1));

    toast.promise(
      wasIn ? removeFromWishlist(productId) : addToWishlist(productId),
      {
        loading: wasIn ? "Removing from wishlist..." : "Adding to wishlist...",
        success: () => wasIn ? "Removed from wishlist" : "Added to wishlist!",
        error: (err) => {
          setInWishlist(wasIn);
          dispatch(setWishlistCount(wasIn ? wishlistCount + 1 : Math.max(0, wishlistCount - 1)));
          return err?.message || "Something went wrong";
        },
      }
    );
    setLoading(false);
  }

  if (variant === "full") {
    return (
      <button
        onClick={toggle}
        disabled={loading}
        className={
          className ||
          `flex-1 h-11 border rounded-lg flex items-center justify-center gap-2 text-sm font-semibold transition-colors ${
            inWishlist
              ? "bg-red-50 border-red-200 text-red-500 hover:bg-red-100"
              : "border-gray-200 text-gray-700 hover:bg-gray-50"
          }`
        }
      >
        <Heart
          className={`w-4 h-4 transition-all ${inWishlist ? "fill-red-500 text-red-500" : ""}`}
        />
        {inWishlist ? "In Wishlist" : "Add to Wishlist"}
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      disabled={loading}
      title={inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
      className={
        className ||
        `w-8.5 h-8.5 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:scale-110 transition-all duration-200 ${
          inWishlist ? "text-red-500" : "text-gray-500 hover:text-red-500"
        }`
      }
    >
      <Heart
        className={`w-4 h-4 transition-all duration-200 ${inWishlist ? "fill-red-500" : ""}`}
      />
    </button>
  );
}
