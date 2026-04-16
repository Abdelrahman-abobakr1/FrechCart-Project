'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, Lock, ShieldCheck, Truck } from 'lucide-react';
import { 
  ReceiptIcon, 
  BookmarkIcon, 
  HomeAddressIcon, 
  InfoCircleIcon, 
  WalletIcon, 
  CardOutlineIcon,
  OrangeBoxIcon
} from './CheckoutIcons';
import CheckoutAddressForm, { CheckoutFormValues } from './CheckoutAddressForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getUserCart } from '../_Components/AddToCart/AddProductToCart.action';
import { createCashOrder, createOnlineOrder } from './Checkout.action';
import { toast } from 'react-toastify';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'online'>('cod');
  const [cartId, setCartId] = useState<string>("");
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [isOrdering, setIsOrdering] = useState(false);

  const { status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signin');
    } else if (status === 'authenticated') {
      getUserCart().then((res: any) => {
        if (res) {
          setCartId(res.cartId);
          setCartItems(res.products || []);
          setSubtotal(res.totalCartPrice || 0);
        }
      });
    }
  }, [status, router]);

  const total = subtotal;

  const handleCheckoutSubmit = async (data: CheckoutFormValues) => {
    if (!cartId) return;
    setIsOrdering(true);

    const payload = {
      shippingAddress: {
        details: data.details,
        phone: data.phone,
        city: data.city,
        postalCode: "12345" 
      }
    };

    if (paymentMethod === 'cod') {
      const result = await createCashOrder(cartId, payload.shippingAddress);
      setIsOrdering(false);
      if (result.status === "success") {
        toast.success("Order completed successfully!");
        router.push('/orders');
      } else {
        toast.error("Failed to place order.");
      }
    } else {
      const baseUrl = window.location.origin + '/orders';
      const result = await createOnlineOrder(cartId, payload.shippingAddress, baseUrl);
      setIsOrdering(false);
      if (result.status === "success") {
        toast.success('Redirecting to secure payment...');
        if (result.session && result.session.url) {
          window.location.href = result.session.url;
        }
      } else {
        toast.error('Failed to create payment session.');
      }
    }
  };

  if (status === "loading") {
    return <div className="page-shell flex items-center justify-center"><div className="w-10 h-10 border-4 border-[#16A34A] border-t-transparent rounded-full animate-spin"></div></div>;
  }
  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className="page-shell border-t border-gray-100">
      <div className="page-container">
        

        <div className="flex items-center gap-2 text-[13px] text-gray-400 mb-6">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/cart" className="hover:text-gray-600 transition-colors">Cart</Link>
          <span>/</span>
          <span className="text-[#1e293b] font-medium">Checkout</span>
        </div>


        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-[52px] h-[52px] bg-[#16A34A] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-200/50 text-white">
              <ReceiptIcon />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#1e293b]">Complete Your Order</h1>
              <p className="text-[14px] text-gray-500 mt-1">Review your items and complete your purchase</p>
            </div>
          </div>
          <Link href="/cart" className="hidden sm:flex items-center gap-1.5 text-[#16A34A] font-bold text-[14px] hover:underline">
            <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
            Back to Cart
          </Link>
        </div>


        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          

          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            

            <div className="bg-white rounded-[20px] shadow-[0_2px_15px_rgb(0,0,0,0.02)] border border-gray-100 overflow-hidden">
              <div className="bg-[#16A34A] px-6 py-4 flex flex-col justify-center text-white">
                <div className="flex items-center gap-2 font-bold text-[17px]">
                  <HomeAddressIcon />
                  <h2>Shipping Address</h2>
                </div>
                <p className="text-green-100 text-[13px] mt-0.5">Where should we deliver your order?</p>
              </div>
              
              <div className="p-6">
                

                <div className="mb-8">
                  <div className="flex items-center gap-2 text-[#16A34A] font-bold text-[15px] mb-1">
                    <BookmarkIcon />
                    <h3>Saved Addresses</h3>
                  </div>
                  <p className="text-gray-500 text-[13px] mb-4">Select a saved address or enter a new one below</p>
              
                </div>


                <div className="bg-[#f0f9ff] border border-blue-100 rounded-xl p-4 flex gap-3 mb-6">
                  <div className="text-blue-600 mt-0.5">
                    <InfoCircleIcon />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-blue-700 text-[13px]">Delivery Information</span>
                    <span className="text-blue-500 text-[12px]">Please ensure your address is accurate for smooth delivery</span>
                  </div>
                </div>


                <CheckoutAddressForm onSubmit={handleCheckoutSubmit} />

              </div>
            </div>


            <div className="bg-white rounded-[20px] shadow-[0_2px_15px_rgb(0,0,0,0.02)] border border-gray-100 overflow-hidden">
              <div className="bg-[#16A34A] px-6 py-4 flex flex-col justify-center text-white">
                <div className="flex items-center gap-2 font-bold text-[17px]">
                  <WalletIcon />
                  <h2>Payment Method</h2>
                </div>
                <p className="text-green-100 text-[13px] mt-0.5">Choose how you'd like to pay</p>
              </div>

              <div className="p-6 flex flex-col gap-4">
                

                <div 
                  onClick={() => setPaymentMethod('cod')}
                  className={`rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all border ${paymentMethod === 'cod' ? 'border-[#16A34A] bg-[#f0fdf4]' : 'border-gray-200 hover:border-green-300 bg-white'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-[42px] h-[42px] rounded-xl flex items-center justify-center bg-[#16A34A] text-white">
                      <WalletIcon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className={`font-bold text-[15px] ${paymentMethod === 'cod' ? 'text-[#16A34A]' : 'text-[#1e293b]'}`}>Cash on Delivery</span>
                      <span className="text-gray-500 text-[13px] mt-0.5">Pay when your order arrives at your doorstep</span>
                    </div>
                  </div>
                  <div className={`w-[22px] h-[22px] rounded-full flex items-center justify-center ${paymentMethod === 'cod' ? 'bg-[#16A34A]' : 'border-2 border-gray-200'}`}>
                    {paymentMethod === 'cod' && <CheckCircle2 className="w-[18px] h-[18px] text-white" strokeWidth={3} />}
                  </div>
                </div>


                <div 
                  onClick={() => setPaymentMethod('online')}
                  className={`rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all border ${paymentMethod === 'online' ? 'border-[#16A34A] bg-[#f0fdf4]' : 'border-gray-200 hover:border-green-300 bg-white'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-[42px] h-[42px] rounded-xl flex items-center justify-center bg-gray-100 text-gray-500">
                      <CardOutlineIcon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className={`font-bold text-[15px] ${paymentMethod === 'online' ? 'text-[#16A34A]' : 'text-[#1e293b]'}`}>Pay Online</span>
                      <span className="text-gray-500 text-[13px] mt-0.5">Secure payment with Credit/Debit Card via Stripe</span>
                      <div className="flex gap-2 mt-2">

                        <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-[8px] text-white font-bold opacity-80">VISA</div>
                        <div className="w-8 h-5 bg-orange-500 rounded flex items-center justify-center text-[8px] text-white font-bold opacity-80">MC</div>
                        <div className="w-8 h-5 bg-blue-400 rounded flex items-center justify-center text-[8px] text-white font-bold opacity-80">AMEX</div>
                      </div>
                    </div>
                  </div>
                  <div className={`w-[22px] h-[22px] rounded-full flex items-center justify-center ${paymentMethod === 'online' ? 'bg-[#16A34A]' : 'border-2 border-gray-200'}`}>
                    {paymentMethod === 'online' && <CheckCircle2 className="w-[18px] h-[18px] text-white" strokeWidth={3} />}
                  </div>
                </div>

                <div className="bg-[#f0fdf4] rounded-xl p-4 flex gap-3 items-center mt-2 border border-green-50/50">
                  <div className="text-[#16A34A]">
                    <ShieldCheck strokeWidth={2.5} className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#16A34A] text-[13px]">Secure & Encrypted</span>
                    <span className="text-[#15803d] text-[12px]">Your payment info is protected with 256-bit SSL encryption</span>
                  </div>
                </div>

              </div>
            </div>

          </div>


          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 shadow-[0_12px_45px_rgb(0,0,0,0.06)] rounded-[20px]">
              
              <div className="bg-[#16A34A] p-5 sm:p-6 rounded-t-[20px] text-white">
                <h3 className="text-[18px] font-bold flex items-center gap-2 mb-1">
                  <Lock className="w-5 h-5" strokeWidth={2.5} />
                  Order Summary
                </h3>
                <p className="text-green-100 text-[13px]">{cartItems.length} items</p>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-b-[20px] border border-t-0 border-gray-100 flex flex-col gap-6">
                

                <div className="flex flex-col gap-4">
                  {cartItems.map((item: any) => {
                    const price = item.price;
                    const qty = item.count;
                    const name = item.product?.title || 'Product';
                    const image = item.product?.imageCover || '/placeholder.png';
                    
                    return (
                      <div key={item._id || item.product?.id} className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="w-[60px] h-[60px] bg-[#f8fafc] rounded-lg overflow-hidden flex-shrink-0 relative border border-gray-100">
                          <Image src={image} alt={name} fill className="object-cover" unoptimized />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[14px] font-bold text-[#1e293b] truncate">{name}</h4>
                          <span className="text-[12px] text-gray-500 flex gap-1 items-center mt-0.5">
                            {qty} × {price} EGP
                          </span>
                        </div>
                        <div className="font-bold text-[#1e293b] text-[15px]">
                          {(price * qty).toLocaleString()}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="h-[1px] bg-gray-100 w-full" />


                <div className="flex flex-col gap-3.5">
                  <div className="flex justify-between items-center text-[14px]">
                    <span className="text-[#4b5563] font-medium">Subtotal</span>
                    <span className="text-[#1e293b] font-bold">{subtotal.toLocaleString()} EGP</span>
                  </div>
                  <div className="flex justify-between items-center text-[14px]">
                    <span className="text-[#4b5563] font-medium flex items-center gap-2">
                       <Truck className="w-4 h-4" /> Shipping
                    </span>
                    <span className="text-[#16A34A] font-bold uppercase tracking-wide">FREE</span>
                  </div>
                </div>


                <div className="flex justify-between items-end">
                  <span className="text-[#1e293b] font-bold text-[18px] pb-0.5">Total</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[28px] font-black text-[#16A34A] leading-none">{total.toLocaleString()}</span>
                    <span className="text-[13px] font-bold text-gray-400">EGP</span>
                  </div>
                </div>

                <button disabled={isOrdering} type="submit" form="checkout-form" className={`w-full ${isOrdering ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#16A34A] hover:bg-[#15803d] cursor-pointer shadow-[0_6px_20px_rgba(22,163,74,0.25)] hover:shadow-none hover:translate-y-[2px]'} text-white py-4 rounded-xl font-bold text-[16px] flex items-center justify-center gap-2 transition-all`}>
                  {isOrdering ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Lock className="w-5 h-5" strokeWidth={2.5} />
                  )}
                  {isOrdering ? 'Processing...' : 'Place Order'}
                </button>

                <div className="flex items-center justify-between px-2 pt-2 gap-2">
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <ShieldCheck className="w-[14px] h-[14px] text-[#16A34A]" />
                    <span className="text-[11px] font-medium">Secure</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Truck className="w-[14px] h-[14px] text-[#155DFC]" />
                    <span className="text-[11px] font-medium">Fast Delivery</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <OrangeBoxIcon className="w-[12px] h-[12px]" />
                    <span className="text-[11px] font-medium">Easy Returns</span>
                  </div>
                </div>
                
              </div>
            </div>
            
            <Link href="/cart" className="flex sm:hidden justify-center items-center gap-1.5 text-[#16A34A] font-bold text-[14px] mt-8 hover:underline">
              <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
              Back to Cart
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}
