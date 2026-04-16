"use client";
import { Minus, Plus, Loader2 } from "lucide-react";
import { useTransition } from "react";
import AppButton from "../shared/AppButton/AppButton";
import { handleProductQty } from "./AddProductToCart.action";
import { useAppDispatch } from "@/store/hooks";
import { setCartCount } from "@/store/cartSlice";

export default function HandleProductQuntity({quntity, productId,}: {quntity: number;productId: string;}) {
  const [isPending, startTransition] = useTransition();
  const dispatch = useAppDispatch();

  function handleProductCount(newCount: number) {
    if (newCount < 1) return; 
    startTransition(async () => {
      const dataReq = { count: newCount }
      const data = await handleProductQty(dataReq, productId)
      if (data && data.numOfCartItems !== undefined) {
         dispatch(setCartCount(data.numOfCartItems));
      }
    });
  }

  return (
    <div className="flex items-center bg-white border border-gray-200 rounded-full p-1 h-[36px]">
      <AppButton
        onClick={function () {
          handleProductCount(quntity - 1);
        }}
        disabled={isPending}
        className="w-7 h-7 bg-[#16A34A] flex items-center justify-center cursor-pointer text-white rounded-full hover:bg-[#15803d] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Minus className="w-4 h-4" strokeWidth={2.5} />
      </AppButton>
      <span className="w-6 flex justify-center text-center text-[14px] font-bold text-[#1e293b]">
        {isPending ? (
          <Loader2 className="w-4 h-4 animate-spin text-[#16A34A]" />
        ) : (
          quntity
        )}
      </span>
      <AppButton
        onClick={function () {
          handleProductCount(quntity + 1);
        }}
        disabled={isPending}
        className="w-7 h-7 bg-[#16A34A] flex items-center justify-center cursor-pointer text-white rounded-full hover:bg-[#15803d] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Plus className="w-4 h-4" strokeWidth={3} />
      </AppButton>
    </div> 
  );
}
