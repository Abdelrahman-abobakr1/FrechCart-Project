"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getUserOrders } from './Orders.action';
import { Package, ShoppingBag, Clock, Hash, Banknote, CalendarDays, MapPin, ChevronDown, Receipt, Phone, Truck } from 'lucide-react'; 

export default function MyOrdersPage() {
  const router = useRouter();
  const { status } = useSession({ required: true, onUnauthenticated() { router.push('/signin'); } });
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'authenticated') {
      getUserOrders().then((data) => {
        setOrders(Array.isArray(data) ? data : []);
        setLoading(false);
      });
    }
  }, [status]);

  if (status === "loading" || loading) {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#16A34A] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="page-shell flex items-center justify-center">
        <div className="max-w-sm text-center px-4">
          <div className="w-24 h-24 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
            <Package className="w-10 h-10 text-gray-400 stroke-1" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No orders yet</h2>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">
            When you place orders, they'll appear here<br />so you can track them.
          </p>
          <Link 
            className="inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white py-3.5 px-8 rounded-xl font-semibold transition-all shadow-[0_6px_20px_rgba(22,163,74,0.25)] w-full sm:w-auto" 
            href="/"
          >
            <ShoppingBag className="w-4 h-4 stroke-2" />
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <div className="page-container py-8">
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link className="hover:text-[#16A34A] transition" href="/">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">My Orders</span>
          </nav>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#16A34A] to-[#15803d] flex items-center justify-center shadow-lg shadow-green-500/25">
                <Package className="w-6 h-6 text-white stroke-2" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Orders</h1>
                <p className="text-gray-500 text-sm mt-0.5">Track and manage your {orders.length} order{orders.length !== 1 && 's'}</p>
              </div>
            </div>
            <Link className="self-start sm:self-auto text-[#16A34A] hover:text-[#15803d] font-medium flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-green-50 transition-all text-sm" href="/">
              <ShoppingBag className="w-4 h-4" />
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {orders.map((order, idx) => (
            <div key={order.id || idx} className="bg-white rounded-2xl border transition-all duration-300 overflow-hidden border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200">
              <div className="p-5 sm:p-6">
                <div className="flex gap-5">
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-2.5 overflow-hidden flex items-center justify-center">
                      <Image 
                        alt="Order Item" 
                        width={90} height={90} 
                        className="w-full h-full object-contain" 
                        src={order.cartItems?.[0]?.product?.imageCover || "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=100&h=100&fit=crop"} 
                        unoptimized 
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-2 ${order.isDelivered ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'}`}>
                          {order.isDelivered ? (
                            <Truck className="w-3.5 h-3.5" />
                          ) : (
                            <Clock className="w-3.5 h-3.5" />
                          )}
                          <span className={`text-xs font-semibold`}>
                            {order.isDelivered ? 'On the way' : 'Processing'}
                          </span>
                        </div>
                        
                        <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                          <Hash className="w-4 h-4 text-gray-400 stroke-2" />
                          {order.id}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="w-3.5 h-3.5 text-gray-400" />
                        {new Date(order.createdAt).toLocaleDateString()}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="flex items-center gap-1.5">
                        <Package className="w-3.5 h-3.5 text-gray-400" />
                        {order.cartItems?.length || 0} items
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        {order.shippingAddress?.city || 'Cairo'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">{order.totalOrderPrice}</span>
                        <span className="text-sm font-medium text-gray-400 ml-1">EGP</span>
                      </div>
                      <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all bg-gray-100 text-gray-700 hover:bg-gray-200">
                        Details
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
