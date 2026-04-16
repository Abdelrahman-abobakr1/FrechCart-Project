"use client";
import React from "react";
import { Mail, Lock, LockKeyhole, Users, Star, Facebook } from "lucide-react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaSignIn } from "./SignInSchema";
import sendUserLogin from "./SignIn.services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import * as zod from "zod";

export default function SignInForm() {
  const router = useRouter();
  const { update } = useSession();
  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schemaSignIn),
    mode: "all",
  });

  async function onSubmit(data: zod.infer<typeof schemaSignIn>) {
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res?.ok) {
      await update();
      toast.success("Welcome to our store", {
        position: "top-right",
      });
      router.push("/");
      router.refresh();
    } else {
      toast.error(res?.error || "Incorrect email or password", {
        position: "top-right",
      });
    }
  }

  return (
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-4 sm:px-8 lg:px-0 lg:pl-16 py-8 sm:py-12 lg:pt-16 lg:pb-16 bg-white shrink-0 min-h-screen lg:min-h-0 items-center lg:items-start">
      <div className="w-full max-w-125 h-fit bg-white rounded-[24px] p-8 sm:p-10 lg:p-12 shadow-[0_12px_45px_rgb(0,0,0,0.06)] border border-gray-100">

        <div className="text-center mb-9">
          <h1 className="text-[32px] font-bold text-[#1e293b] mb-1 flex items-center justify-center gap-1.5">
            <span className="text-[#16A34A]">Fresh</span>Cart
          </h1>
          <h2 className="text-[26px] font-bold text-[#1e293b] mt-5 mb-2">
            Welcome Back!
          </h2>
          <p className="text-[#64748b] text-[15px]">
            Sign in to continue your fresh shopping experience
          </p>
        </div>


        <div className="flex flex-col gap-4 mb-8">
          <button
            type="button"
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="w-full cursor-pointer flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-3.5 hover:bg-gray-50 transition-all duration-200 group active:scale-[0.98]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="font-semibold text-gray-700 text-[14.5px]">
              Continue with Google
            </span>
          </button>
          <button
            type="button"
            onClick={() => signIn('facebook', { callbackUrl: '/' })}
            className="w-full cursor-pointer flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-3.5 hover:bg-[#F0F2F5] transition-all duration-200 group active:scale-[0.98]"
          >
            <Facebook className="w-5 h-5 text-[#1877F2] fill-[#1877F2]" />
            <span className="font-semibold text-gray-700 text-[14.5px]">
              Continue with Facebook
            </span>
          </button>
        </div>


        <div className="relative mb-8 text-center flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <span className="relative z-10 bg-white px-4 text-[12px] text-gray-400 font-bold uppercase tracking-wider">
            OR CONTINUE WITH EMAIL
          </span>
        </div>


        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >

          <div>
            <label className="block text-[13px] font-bold text-[#4b5563] mb-2.5">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                         type="text"
                    placeholder="Enter your email"
                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 text-[14px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#16A34A] focus:border-[#16A34A] placeholder-gray-400 transition-all`}
                  />
                )}
                          />
                             {errors.email?.message && (
            <p className="text-red-500 text-[11px] mt-1 font-medium">
              {errors.email.message as string}
            </p>
          )}
            </div>
          </div>


          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="block text-[13px] font-bold text-[#4b5563]">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-[#16A34A] text-[13px] font-bold hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    placeholder="Enter your password"
                    className={`w-full pl-12 pr-12 py-3.5 rounded-xl border border-gray-200 text-[14px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#16A34A] focus:border-[#16A34A] placeholder-gray-400 transition-all`}
                  />
                              )}
                            
              />
  {errors.password?.message && (
            <p className="text-red-500 text-[11px] mt-1 font-medium">
              {errors.password.message as string}
            </p>
          )}

            </div>
          </div>


          <div className="flex items-center gap-3 mt-1">
            <input
              type="checkbox"
              className="w-4 h-4 text-[#16A34A] rounded border-gray-300 focus:ring-[#16A34A]"
            />
            <span className="text-[14px] text-[#4b5563] font-medium mt-[1.5px]">
              Keep me signed in
            </span>
          </div>


          <button
            type="submit"
            className="w-full cursor-pointer bg-[#16A34A] hover:bg-[#15803d] text-white py-4 rounded-xl font-bold text-4 flex items-center justify-center gap-2 transition-colors shadow-[0_4px_14px_rgba(22,163,74,0.25)] mt-2"
          >
            Sign In
          </button>
        </form>


        <div className="text-center mt-7">
          <p className="text-[14px] text-gray-500 font-medium">
            New to FreshCart?{" "}
            <Link
              href="/signup"
              className="text-[#16A34A] font-bold hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>


        <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-gray-100/60">
          <div className="flex items-center gap-1.5 text-gray-400">
            <LockKeyhole className="w-3.25 h-3.25" />
            <span className="text-[11px] font-bold">SSL Secured</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <Users className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold">50K+ Users</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <Star className="w-3.25 h-3.25 fill-current" />
            <span className="text-[11px] font-bold">4.9 Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
}
