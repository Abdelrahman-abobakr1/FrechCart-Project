"use client";

import { Plus } from "lucide-react";
import AppButton from "../shared/AppButton/AppButton";
import { handleAddProductToCart } from "./AddProductToCart.action";
import { toast } from "sonner";
import { useAppDispatch } from "@/store/hooks";
import { setCartCount } from "@/store/cartSlice";

export default function AddToCart({ id }: { id: string }) {
  const dispatch = useAppDispatch();
  async function addProductToCart() {
    toast.promise(handleAddProductToCart({ productId: id }), {
      loading: "Adding product to cart ...",
      success: function ({
        status,
        message,
        numOfCartItems,
        cartId,
        totalCartPrice,
        products,
      }) {
        dispatch(setCartCount(numOfCartItems));
        return message;
        },
        error: function (data) {
          return data.message
      }
    });
  }

  return (
    <AppButton
      onClick={addProductToCart}
      className="w-10 cursor-pointer h-10 bg-[#0aad0a] text-white rounded-full flex items-center justify-center hover:bg-[#088a08] hover:scale-110 shadow-sm hover:shadow-md transition-all duration-200 shrink-0"
      title="Add to Cart"
    >
      <Plus className="w-6 h-6 stroke-[2.5px]" />
    </AppButton>
  );
}
