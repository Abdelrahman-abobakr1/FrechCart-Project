"use client"
import React, { useTransition } from 'react'
import AppButton from '../shared/AppButton/AppButton'
import { Trash2, Loader2 } from 'lucide-react'
import { removeProduct } from '../AddToCart/AddProductToCart.action';
import Swal from 'sweetalert2'
import { useAppDispatch } from '@/store/hooks';
import { setCartCount } from '@/store/cartSlice';

export default function RemoveProduct({
  productId,
  productName = "this item",
}: {
  productId: string;
  productName?: string;
}) {
  const [isPending, startTransition] = useTransition()
  const dispatch = useAppDispatch();

  function handleDeleteProduct() {
    Swal.fire({
      html: `
        <div class="text-center py-2">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Remove Item?</h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            Remove <span class="font-semibold text-gray-700">${productName}</span> from your cart?
          </p>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Remove',
      cancelButtonText: 'Cancel',
      customClass: {
        popup: 'rounded-2xl shadow-2xl border-0 p-0',
        htmlContainer: 'p-6 m-0',
        actions: 'px-6 pb-6 pt-0 gap-3 flex-row-reverse',
        confirmButton: 'bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all',
        cancelButton: 'bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all'
      },
      buttonsStyling: false,
      showCloseButton: false,
    }).then((result) => {
      if (result.isConfirmed) {
        startTransition(async () => {
          const data = await removeProduct(productId)
          if (data && data.numOfCartItems !== undefined) {
             dispatch(setCartCount(data.numOfCartItems));
          }
        })
      }
    })
  }

  return (
    <AppButton  
      onClick={handleDeleteProduct}
      disabled={isPending}
      className="cursor-pointer w-10 h-10 bg-[#fee2e2] hover:bg-red-200 text-red-500 rounded-xl flex items-center justify-center transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
      title="Remove item"
    >
      {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" strokeWidth={2.5} />}
    </AppButton>
  )
}
