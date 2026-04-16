'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';


function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.3125 0C0.587891 0 0 0.587891 0 1.3125C0 1.72539 0.194141 2.11367 0.525 2.3625L6.2125 6.62812C6.68008 6.97812 7.31992 6.97812 7.7875 6.62812L13.475 2.3625C13.8059 2.11367 14 1.72539 14 1.3125C14 0.587891 13.4121 0 12.6875 0H1.3125ZM0 3.60938V8.75C0 9.71523 0.784766 10.5 1.75 10.5H12.25C13.2152 10.5 14 9.71523 14 8.75V3.60938L8.575 7.67812C7.64258 8.37812 6.35742 8.37812 5.425 7.67812L0 3.60938Z" fill="currentColor"/>
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.55978 0C6.68556 0 6.81134 0.0273438 6.92618 0.0792969L12.0777 2.26406C12.6793 2.51836 13.1277 3.11172 13.125 3.82812C13.1113 6.54063 11.9957 11.5035 7.28439 13.7594C6.82775 13.9781 6.29728 13.9781 5.84064 13.7594C1.12657 11.5035 0.0136843 6.54063 1.24373e-05 3.82812C-0.00272194 3.11172 0.445716 2.51836 1.04728 2.26406L6.19611 0.0792969C6.31095 0.0273438 6.434 0 6.55978 0ZM6.55978 1.82656V12.1652C10.3332 10.3387 11.3477 6.2918 11.3723 3.86914L6.55978 1.8293V1.82656Z" fill="currentColor"/>
    </svg>
  );
}

function IconLock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 3.5V5.25H7V3.5C7 2.53477 6.21523 1.75 5.25 1.75C4.28477 1.75 3.5 2.53477 3.5 3.5ZM1.75 5.25V3.5C1.75 1.5668 3.3168 0 5.25 0C7.1832 0 8.75 1.5668 8.75 3.5V5.25C9.71523 5.25 10.5 6.03477 10.5 7V13.125C10.5 14.0902 9.71523 14.875 8.75 14.875H1.75C0.784766 14.875 0 14.0902 0 13.125V7C0 6.03477 0.784766 5.25 1.75 5.25Z" fill="currentColor"/>
    </svg>
  );
}

function IconKey({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.875 8.25C10.1531 8.25 12 6.40312 12 4.125C12 1.84688 10.1531 0 7.875 0C5.59688 0 3.75 1.84688 3.75 4.125C3.75 4.56328 3.81797 4.9875 3.94453 5.38359L0.164062 9.16406C0.0585938 9.26953 0 9.4125 0 9.5625V11.4375C0 11.7492 0.250781 12 0.5625 12H2.4375C2.74922 12 3 11.7492 3 11.4375V10.5H3.9375C4.24922 10.5 4.5 10.2492 4.5 9.9375V9H5.4375C5.5875 9 5.73047 8.94141 5.83594 8.83594L6.61641 8.05547C7.0125 8.18203 7.43672 8.25 7.875 8.25ZM8.8125 2.25C9.06114 2.25 9.2996 2.34877 9.47541 2.52459C9.65123 2.7004 9.75 2.93886 9.75 3.1875C9.75 3.43614 9.65123 3.6746 9.47541 3.85041C9.2996 4.02623 9.06114 4.125 8.8125 4.125C8.56386 4.125 8.3254 4.02623 8.14959 3.85041C7.97377 3.6746 7.875 3.43614 7.875 3.1875C7.875 2.93886 7.97377 2.7004 8.14959 2.52459C8.3254 2.34877 8.56386 2.25 8.8125 2.25Z" fill="currentColor"/>
    </svg>
  );
}


function ResetIllustration() {
  return (
    <svg width="100%" viewBox="0 0 640 408" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dd_54_20288)">
        <rect x="12" y="2" width="616" height="384" rx="16" fill="url(#paint0_linear_54_20288)"/>
        <rect x="44" y="34" width="96" height="96" rx="48" fill="#DCFCE7" fillOpacity="0.5"/>
        <rect x="460" y="210" width="128" height="128" rx="64" fill="#DCFCE7" fillOpacity="0.5"/>
        <rect x="484" y="82" width="64" height="64" rx="32" fill="#D0FAE5" fillOpacity="0.5"/>
        <rect x="267.008" y="117.15" width="112" height="112" rx="24" transform="rotate(3 267.008 117.15)" fill="white"/>
        <g filter="url(#filter1_dd_54_20288)">
          <rect x="267.008" y="117.15" width="112" height="112" rx="24" transform="rotate(3 267.008 117.15)" fill="white" fillOpacity="0.01" shapeRendering="crispEdges"/>
        </g>
        <rect x="282.148" y="133.966" width="79.9998" height="79.9998" rx="16" transform="rotate(3 282.148 133.966)" fill="#DCFCE7"/>
        <path d="M316.095 164.534L315.86 169.028L324.847 169.499L325.083 165.005C325.213 162.526 323.303 160.405 320.825 160.275C318.346 160.145 316.225 162.055 316.095 164.534ZM311.366 168.792L311.601 164.298C311.861 159.334 316.096 155.521 321.06 155.781C326.024 156.041 329.837 160.276 329.577 165.24L329.341 169.734C331.82 169.864 333.73 171.985 333.6 174.464L332.776 190.193C332.646 192.671 330.525 194.581 328.046 194.451L310.07 193.509C307.591 193.379 305.682 191.258 305.812 188.779L306.636 173.051C306.766 170.572 308.887 168.662 311.366 168.792Z" fill="#16A34A"/>
        <rect x="290" y="256" width="12" height="12" rx="6" fill="#4ADE80"/>
        <rect x="314" y="256" width="12" height="12" rx="6" fill="#22C55E"/>
        <rect x="338" y="256" width="12" height="12" rx="6" fill="#16A34A"/>
        <rect x="194.785" y="142.43" width="56" height="56" rx="12" transform="rotate(-12 194.785 142.43)" fill="white"/>
        <g filter="url(#filter2_dd_54_20288)">
          <rect x="194.785" y="142.43" width="56" height="56" rx="12" transform="rotate(-12 194.785 142.43)" fill="white" fillOpacity="0.01" shapeRendering="crispEdges"/>
        </g>
        <path d="M218.483 158.348C217.47 158.564 216.823 159.56 217.038 160.573C217.161 161.15 217.548 161.635 218.084 161.884L227.301 166.157C228.059 166.507 228.953 166.317 229.502 165.689L236.185 158.037C236.573 157.591 236.729 156.991 236.607 156.413C236.391 155.401 235.395 154.754 234.382 154.969L218.483 158.348ZM217.721 163.783L219.248 170.968C219.535 172.318 220.865 173.181 222.214 172.894L236.89 169.775C238.239 169.488 239.103 168.158 238.816 166.809L237.289 159.624L230.915 166.923C229.82 168.178 228.023 168.56 226.512 167.858L217.721 163.783Z" fill="#22C55E"/>
        <rect x="390.426" y="146.79" width="56" height="56" rx="12" transform="rotate(12 390.426 146.79)" fill="white"/>
        <g filter="url(#filter3_dd_54_20288)">
          <rect x="390.426" y="146.79" width="56" height="56" rx="12" transform="rotate(12 390.426 146.79)" fill="white" fillOpacity="0.01" shapeRendering="crispEdges"/>
        </g>
        <path d="M414.075 170.216C414.251 170.253 414.419 170.329 414.564 170.435L421.115 175.02C421.88 175.554 422.331 176.516 422.114 177.517C421.289 181.304 418.255 187.909 411 189.663C410.297 189.833 409.555 189.675 408.982 189.234C403.063 184.68 402.982 177.413 403.769 173.617C403.978 172.615 404.781 171.919 405.697 171.742L413.543 170.218C413.719 170.18 413.899 170.178 414.075 170.216ZM413.532 172.769L410.461 187.219C416.278 185.787 418.898 180.432 419.652 177.053L413.532 172.772L413.532 172.769Z" fill="#00C950"/>
      </g>
      <defs>
        <filter id="filter0_dd_54_20288" x="0" y="0" width="640" height="408" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_54_20288"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="3"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_20288"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect2_dropShadow_54_20288"/>
          <feOffset dy="10"/>
          <feGaussianBlur stdDeviation="7.5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_54_20288" result="effect2_dropShadow_54_20288"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_54_20288" result="shape"/>
        </filter>
        <filter id="filter1_dd_54_20288" x="242.367" y="118.373" width="155.266" height="155.263" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="6" operator="erode" in="SourceAlpha" result="effect1_dropShadow_54_20288"/>
          <feOffset dy="8"/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_20288"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="5" operator="erode" in="SourceAlpha" result="effect2_dropShadow_54_20288"/>
          <feOffset dy="20"/>
          <feGaussianBlur stdDeviation="12.5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_54_20288" result="effect2_dropShadow_54_20288"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_54_20288" result="shape"/>
        </filter>
        <filter id="filter2_dd_54_20288" x="185.016" y="131.017" width="85.957" height="85.9588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_54_20288"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="3"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_20288"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect2_dropShadow_54_20288"/>
          <feOffset dy="10"/>
          <feGaussianBlur stdDeviation="7.5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_54_20288" result="effect2_dropShadow_54_20288"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_54_20288" result="shape"/>
        </filter>
        <filter id="filter3_dd_54_20288" x="369.012" y="147.02" width="85.9609" height="85.9589" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_54_20288"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="3"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_20288"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect2_dropShadow_54_20288"/>
          <feOffset dy="10"/>
          <feGaussianBlur stdDeviation="7.5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_54_20288" result="effect2_dropShadow_54_20288"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_54_20288" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_54_20288" x1="147.613" y1="-82.5378" x2="492.387" y2="470.538" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F0FDF4"/>
          <stop offset="0.5" stopColor="#F0FDF4"/>
          <stop offset="1" stopColor="#F3F4F6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}


const STEPS = [
  { Icon: IconMail, active: true  },
  { Icon: IconKey,  active: false },
  { Icon: IconLock, active: false },
];

function StepIndicator() {
  return (
    <div className="flex items-center justify-center gap-0 mb-8">
      {STEPS.map((step, i) => (
        <React.Fragment key={i}>

          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              step.active
                ? 'bg-[#16A34A] text-white shadow-[0_4px_12px_rgba(22,163,74,0.35)]'
                : 'bg-gray-100 text-gray-400'
            }`}
          >
            <step.Icon className="w-[16px] h-[16px]" />
          </div>


          {i < STEPS.length - 1 && (
            <div className="w-12 h-[2px] bg-gray-200 mx-1" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}


export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex justify-center">
      <div className="w-full max-w-[1240px] flex flex-col lg:flex-row">


        <div className="hidden lg:flex flex-col justify-center w-1/2 pr-16 pt-16 pb-12 bg-white">
          

          <div className="w-full rounded-[28px] overflow-hidden mb-10 flex justify-center">
            <ResetIllustration />
          </div>

          <div className="w-full flex flex-col items-center px-4">

            <h2 className="text-[28px] xl:text-[32px] font-bold text-[#1e293b] leading-tight mb-3 text-center">
              Reset Your Password
            </h2>
            <p className="text-[#64748b] text-[16px] leading-relaxed mb-9 max-w-[460px] text-center">
              Don&apos;t worry, it happens to the best of us. We&apos;ll help you get back into your account in no time.
            </p>


            <div className="flex flex-wrap items-center justify-center gap-7">
              <div className="flex items-center gap-2">
                <IconMail className="w-[14px] h-[14px] text-[#16A34A]" />
                <span className="text-[13px] font-semibold text-gray-500">Email Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <IconShield className="w-[14px] h-[14px] text-[#16A34A]" />
                <span className="text-[13px] font-semibold text-gray-500">Secure Reset</span>
              </div>
              <div className="flex items-center gap-2">
                <IconLock className="w-[11px] h-[14px] text-[#16A34A]" />
                <span className="text-[13px] font-semibold text-gray-500">Encrypted</span>
              </div>
            </div>
          </div>
        </div>


        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-4 sm:px-8 lg:px-0 lg:pl-16 py-8 sm:py-12 lg:pt-16 lg:pb-16 bg-white shrink-0 min-h-screen lg:min-h-0 items-center lg:items-start">
          <div className="w-full max-w-[460px] h-fit bg-white rounded-[24px] p-8 sm:p-10 shadow-[0_12px_45px_rgb(0,0,0,0.06)] border border-gray-100">


            <div className="text-center mb-8">
              <h1 className="text-[32px] font-bold text-[#1e293b] mb-1 flex items-center justify-center gap-1.5">
                <span className="text-[#16A34A]">Fresh</span>Cart
              </h1>
              <h2 className="text-[24px] font-bold text-[#1e293b] mt-4 mb-1.5">Forgot Password?</h2>
              <p className="text-[#64748b] text-[14px]">No worries, we&apos;ll send you a reset code</p>
            </div>


            <StepIndicator />


            <form className="flex flex-col gap-5">
              

              <div>
                <label className="block text-[13px] font-bold text-[#4b5563] mb-2.5">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <IconMail className="w-[16px] h-[13px] text-gray-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 text-[14px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#16A34A] focus:border-[#16A34A] placeholder-gray-400 transition-all"
                  />
                </div>
              </div>


              <button
                type="submit"
                className="w-full bg-[#16A34A] hover:bg-[#15803d] text-white py-3.5 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 transition-colors shadow-[0_4px_14px_rgba(22,163,74,0.25)] mt-1"
              >
                Send Reset Code
              </button>


              <Link
                href="/signin"
                className="flex items-center justify-center gap-1.5 text-[#16A34A] font-semibold text-[14px] hover:underline mt-1"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Sign In
              </Link>
            </form>


            <div className="text-center mt-8 pt-6 border-t border-gray-100">
              <p className="text-[14px] text-gray-500 font-medium">
                Remember your password?{' '}
                <Link href="/signin" className="text-[#16A34A] font-bold hover:underline">
                  Sign In
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
