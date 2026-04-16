"use client";

import { ShoppingCart, Trash2, Loader2 } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";
import { removeFromWishlist } from "../_Components/Wishlist/wishlist.action";
import { handleAddProductToCart } from "../_Components/AddToCart/AddProductToCart.action";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setWishlistCount } from "@/store/wishlistSlice";
import { setCartCount } from "@/store/cartSlice";
import { useRouter } from "next/navigation";

export default function WishlistItemActions({ productId }: { productId: string }) {
  const [isRemoving, startRemove] = useTransition();
  const [isAdding, startAdd] = useTransition();
  const wishlistCount = useAppSelector((state) => state.wishlist.wishlistCount);
  const dispatch = useAppDispatch();
  const router = useRouter();

  function handleRemove() {
    startRemove(async () => {
      toast.promise(removeFromWishlist(productId), {
        loading: "Removing...",
        success: () => {
          dispatch(setWishlistCount(Math.max(0, wishlistCount - 1)));
          router.refresh();
          return "Removed from wishlist";
        },
        error: (err) => err?.message || "Failed to remove",
      });
    });
  }

  function handleAddToCart() {
    startAdd(async () => {
      toast.promise(handleAddProductToCart({ productId }), {
        loading: "Adding to cart...",
        success: (data) => {
          dispatch(setCartCount(data.numOfCartItems));
          return data.message;
        },
        error: (err) => err?.message || "Failed to add to cart",
      });
    });
  }

  return (
    <div className="flex items-center gap-3 w-full lg:w-auto mt-4 lg:mt-0 lg:justify-end">
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className="flex-1 lg:flex-none bg-[#10b981] hover:bg-[#059669] text-white px-5 xl:px-6 py-2.5 rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 transition-all shadow-[0_4px_12px_rgba(16,185,129,0.25)] hover:shadow-none hover:translate-y-[1px] disabled:opacity-70"
      >
        {isAdding ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShoppingCart className="w-[18px] h-[18px]" strokeWidth={2.5} />}
        <span>Add to Cart</span>
      </button>
      <button
        onClick={handleRemove}
        disabled={isRemoving}
        className="w-[42px] h-[42px] rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all flex-shrink-0 disabled:opacity-50"
      >
        {isRemoving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-5 h-5" />}
      </button>
    </div>
  );
}
