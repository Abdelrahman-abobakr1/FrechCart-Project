"use client";

import React from 'react';
import Link from 'next/link';
import { Lock } from 'lucide-react';
import { useSession } from 'next-auth/react';

export default function CartCheckoutButton() {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <Link href="/checkout" className="w-full cursor-pointer bg-[#16A34A] hover:bg-[#15803d] text-white py-4 rounded-xl font-bold text-[16px] flex items-center justify-center gap-2 transition-all shadow-[0_6px_20px_rgba(22,163,74,0.25)] hover:shadow-none hover:translate-y-[2px] mb-5">
        <Lock className="w-5 h-5" strokeWidth={2.5} />
        Secure Checkout
      </Link>
    );
  }

  return (
    <Link href="/signin" className="w-full cursor-pointer bg-[#16A34A] hover:bg-[#15803d] text-white py-4 rounded-xl font-bold text-[16px] flex items-center justify-center gap-2 transition-all shadow-[0_6px_20px_rgba(22,163,74,0.25)] hover:shadow-none hover:translate-y-[2px] mb-5">
      <Lock className="w-5 h-5" strokeWidth={2.5} />
      Login to Checkout
    </Link>
  );
}
