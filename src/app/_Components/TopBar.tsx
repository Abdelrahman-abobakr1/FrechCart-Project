"use client";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import {
  PhoneIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import SignUpIcon from "./icons/SignUpIcon";
import { UserIcon } from "lucide-react";

export default function TopBar() {
  const { data: session, status } = useSession();

  return (
    <div className="hidden border-b border-gray-100 bg-[#f8fafc] text-sm lg:block">
      <div className="page-container">
        <div className="flex h-10 items-center justify-between">

          <div className="flex items-center gap-6 text-gray-500">
            <span className="flex items-center gap-2">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.5C0 0.672656 0.672656 0 1.5 0H8.25C9.07734 0 9.75 0.672656 9.75 1.5V2.25H10.9383C11.3367 2.25 11.7188 2.40703 12 2.68828L13.0617 3.75C13.343 4.03125 13.5 4.41328 13.5 4.81172V8.25C13.5 9.07734 12.8273 9.75 12 9.75H11.9227C11.6789 10.6148 10.882 11.25 9.9375 11.25C8.99297 11.25 8.19844 10.6148 7.95234 9.75H5.54766C5.30391 10.6148 4.50703 11.25 3.5625 11.25C2.61797 11.25 1.82344 10.6148 1.57734 9.75H1.5C0.672656 9.75 0 9.07734 0 8.25V1.5ZM12 6V4.81172L10.9383 3.75H9.75V6H12ZM4.5 9.1875C4.5 8.93886 4.40123 8.7004 4.22541 8.52459C4.0496 8.34877 3.81114 8.25 3.5625 8.25C3.31386 8.25 3.0754 8.34877 2.89959 8.52459C2.72377 8.7004 2.625 8.93886 2.625 9.1875C2.625 9.43614 2.72377 9.6746 2.89959 9.85041C3.0754 10.0262 3.31386 10.125 3.5625 10.125C3.81114 10.125 4.0496 10.0262 4.22541 9.85041C4.40123 9.6746 4.5 9.43614 4.5 9.1875ZM9.9375 10.125C10.1861 10.125 10.4246 10.0262 10.6004 9.85041C10.7762 9.6746 10.875 9.43614 10.875 9.1875C10.875 8.93886 10.7762 8.7004 10.6004 8.52459C10.4246 8.34877 10.1861 8.25 9.9375 8.25C9.68886 8.25 9.4504 8.34877 9.27459 8.52459C9.09877 8.7004 9 8.93886 9 9.1875C9 9.43614 9.09877 9.6746 9.27459 9.85041C9.4504 10.0262 9.68886 10.125 9.9375 10.125Z"
                  fill="#16A34A"
                />
              </svg>

              <span>Free Shipping on Orders 500 EGP</span>
            </span>
            <span className="flex items-center gap-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.53516 1.6125C7.71328 1.31016 8.03672 1.125 8.38594 1.125H8.4375C8.95547 1.125 9.375 1.54453 9.375 2.0625C9.375 2.58047 8.95547 3 8.4375 3H6.71953L7.53516 1.6125ZM4.46484 1.6125L5.28047 3H3.5625C3.04453 3 2.625 2.58047 2.625 2.0625C2.625 1.54453 3.04453 1.125 3.5625 1.125H3.61406C3.96328 1.125 4.28906 1.31016 4.46484 1.6125ZM6.56484 1.04297L6 2.00391L5.43516 1.04297C5.05547 0.396094 4.36172 0 3.61406 0H3.5625C2.42344 0 1.5 0.923438 1.5 2.0625C1.5 2.4 1.58203 2.71875 1.725 3H0.75C0.335156 3 0 3.33516 0 3.75V4.5C0 4.91484 0.335156 5.25 0.75 5.25H11.25C11.6648 5.25 12 4.91484 12 4.5V3.75C12 3.33516 11.6648 3 11.25 3H10.275C10.418 2.71875 10.5 2.4 10.5 2.0625C10.5 0.923438 9.57656 0 8.4375 0H8.38594C7.63828 0 6.94453 0.396094 6.56484 1.04063V1.04297ZM11.25 6.375H6.5625V11.25H9.75C10.5773 11.25 11.25 10.5773 11.25 9.75V6.375ZM5.4375 6.375H0.75V9.75C0.75 10.5773 1.42266 11.25 2.25 11.25H5.4375V6.375Z"
                  fill="#16A34A"
                />
              </svg>

              <span>New Arrivals Daily</span>
            </span>
          </div>


          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-gray-500">
              <a
                href="tel:+18001234567"
                className="flex items-center gap-1.5 hover:text-[#0aad0a] transition-colors"
              >
                <PhoneIcon className="w-3.5 h-3.5" aria-hidden="true" />
                <span>+1 (800) 123-4567</span>
              </a>
              <a
                href="mailto:support@freshcart.com"
                className="flex items-center gap-1.5 hover:text-[#0aad0a] transition-colors"
              >
                <svg
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.43906 0C0.644531 0 0 0.644531 0 1.43906C0 1.46016 0 1.47891 0.00234375 1.5H0V7.5C0 8.32734 0.672656 9 1.5 9H10.5C11.3273 9 12 8.32734 12 7.5V1.5H11.9977C11.9977 1.47891 12 1.46016 12 1.43906C12 0.644531 11.3555 0 10.5609 0H1.43906ZM10.875 3.00703V7.5C10.875 7.70625 10.7063 7.875 10.5 7.875H1.5C1.29375 7.875 1.125 7.70625 1.125 7.5V3.00703L4.75313 5.75859C5.48906 6.31875 6.50859 6.31875 7.24688 5.75859L10.875 3.00703ZM1.125 1.43906C1.125 1.26562 1.26562 1.125 1.43906 1.125H10.5609C10.7344 1.125 10.875 1.26562 10.875 1.43906C10.875 1.5375 10.8281 1.63125 10.7508 1.68984L6.56719 4.86328C6.23203 5.11641 5.76797 5.11641 5.43281 4.86328L1.24922 1.68984C1.17188 1.63125 1.125 1.5375 1.125 1.43906Z"
                    fill="currentColor"
                  />
                </svg>

                <span>support@freshcart.com</span>
              </a>
            </div>

            <span className="w-px h-4 bg-gray-200"></span>

            <div className="flex items-center gap-4">
              {status === "authenticated" ? (
                <>
                  <Link href="/account/settings" className="group flex items-center gap-2 text-gray-700 hover:text-[#0aad0a] transition-colors cursor-pointer">
                    <UserIcon className="w-4 h-4 transition-colors" />
                    <span className="font-medium text-[13.5px] text-gray-800 group-hover:text-[#0aad0a] transition-colors">
                    {session?.user?.name?.split(" ")[0] || "User"}
                    </span>
                  </Link>
                  <span className="w-px h-3.5 bg-gray-300"></span>
                  <button
                    onClick={() => signOut()}
                    className="flex items-center gap-1.5 text-gray-600 hover:text-red-500 transition-colors"
                  >
                    <span>
                      <svg
                        width="12"
                        height="11"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.8359 5.64844C12.0562 5.42812 12.0562 5.07188 11.8359 4.85391L8.46094 1.47656C8.29922 1.31484 8.05781 1.26797 7.84687 1.35469C7.63594 1.44141 7.5 1.64766 7.5 1.875V3.75H4.875C4.25391 3.75 3.75 4.25391 3.75 4.875V5.625C3.75 6.24609 4.25391 6.75 4.875 6.75H7.5V8.625C7.5 8.85234 7.63594 9.05859 7.84687 9.14531C8.05781 9.23203 8.29922 9.18516 8.46094 9.02344L11.8359 5.64844ZM3.75 1.5C4.16484 1.5 4.5 1.16484 4.5 0.75C4.5 0.335156 4.16484 0 3.75 0H2.25C1.00781 0 0 1.00781 0 2.25V8.25C0 9.49219 1.00781 10.5 2.25 10.5H3.75C4.16484 10.5 4.5 10.1648 4.5 9.75C4.5 9.33516 4.16484 9 3.75 9H2.25C1.83516 9 1.5 8.66484 1.5 8.25V2.25C1.5 1.83516 1.83516 1.5 2.25 1.5H3.75Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="text-[13px] font-medium">sign Out</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.375 3C3.375 2.50272 3.57254 2.02581 3.92417 1.67417C4.27581 1.32254 4.75272 1.125 5.25 1.125C5.74728 1.125 6.22419 1.32254 6.57583 1.67417C6.92746 2.02581 7.125 2.50272 7.125 3C7.125 3.49728 6.92746 3.97419 6.57583 4.32583C6.22419 4.67746 5.74728 4.875 5.25 4.875C4.75272 4.875 4.27581 4.67746 3.92417 4.32583C3.57254 3.97419 3.375 3.49728 3.375 3ZM8.25 3C8.25 2.20435 7.93393 1.44129 7.37132 0.87868C6.80871 0.316071 6.04565 0 5.25 0C4.45435 0 3.69129 0.316071 3.12868 0.87868C2.56607 1.44129 2.25 2.20435 2.25 3C2.25 3.79565 2.56607 4.55871 3.12868 5.12132C3.69129 5.68393 4.45435 6 5.25 6C6.04565 6 6.80871 5.68393 7.37132 5.12132C7.93393 4.55871 8.25 3.79565 8.25 3ZM1.125 11.25C1.125 9.59297 2.46797 8.25 4.125 8.25H6.375C8.03203 8.25 9.375 9.59297 9.375 11.25V11.4375C9.375 11.7492 9.62578 12 9.9375 12C10.2492 12 10.5 11.7492 10.5 11.4375V11.25C10.5 8.97188 8.65312 7.125 6.375 7.125H4.125C1.84688 7.125 0 8.97188 0 11.25V11.4375C0 11.7492 0.250781 12 0.5625 12C0.874219 12 1.125 11.7492 1.125 11.4375V11.25Z"
                        fill="#4A5565"
                      />
                    </svg>
                    <span className="text-[13px] font-medium">Sign in</span>
                  </Link>
                  <Link
                    href="/signup"
                    className="flex items-center cursor-pointer gap-1.5 text-gray-600 hover:text-[#0aad0a] transition-colors pl-2 border-l border-gray-200"
                  >
                    <span>
                      <SignUpIcon />
                    </span>
                    <span className="text-[13px] font-medium">Sign Up</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
