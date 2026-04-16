"use client";
import { UserPlus } from "lucide-react";
import { sendUserData } from "./register.services";
import { Controller, useForm, useWatch } from "react-hook-form";
import Link from "next/link";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getPasswordStrength, schema } from "./register.schema";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
export default function RegisterForm() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    resolver: zodResolver(schema),
  });

  const passwordValue = useWatch({ control, name: "password" }) || "";

  const strength = getPasswordStrength(passwordValue);

  const onSubmit = async (data: zod.infer<typeof schema>) => {
    const { terms, ...userDataToSend } = data;
    const isSuccess = await sendUserData(userDataToSend as any);
    if (isSuccess) {
      router.push("/signin");
    }
  };

  return (
    <div className="w-full max-w-115 h-fit bg-white lg:rounded-2xl lg:p-8 lg:shadow-[0_4px_20px_rgb(0,0,0,0.06)] lg:border border-gray-100 mx-auto">
      <div className="text-center mb-7">
        <h2 className="text-[24px] font-bold text-[#1e293b] mb-1.5">
          Create Your Account
        </h2>
        <p className="text-[#64748b] text-[13.5px]">
          Start your fresh journey with us today
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-7">
        <button
          type="button"
          onClick={() => signIn('google')}
          className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 hover:bg-gray-50 transition-colors"
        >
          <span className="text-[#EA4335] font-extrabold text-[15px] leading-none">
            G
          </span>
          <span className="font-semibold text-gray-700 text-[13.5px]">
            Google
          </span>
        </button>
        <button
          type="button"
          onClick={() => signIn("facebook")}
          className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 hover:bg-gray-50 transition-colors"
        >
          <span className="text-[#1877F2] font-extrabold text-[15px] leading-none">
            f
          </span>
          <span className="font-semibold text-gray-700 text-[13.5px]">
            Facebook
          </span>
        </button>
      </div>

      <div className="relative mb-7 text-center flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-100"></div>
        </div>
        <span className="relative z-10 bg-white px-3 text-[12px] text-gray-400 font-medium">
          or
        </span>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
        noValidate
      >

        <div>
          <label className="block text-[12.5px] font-semibold text-[#4b5563] mb-1.5 flex gap-1">
            Name<span className="text-gray-400">*</span>
          </label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="John Doe"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-[13.5px] text-gray-800 focus:outline-none focus:ring-1 placeholder-gray-400 ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-200 focus:ring-[#0aad0a] focus:border-[#0aad0a]"}`}
              />
            )}
          />
          {errors.name?.message && (
            <p className="text-red-500 text-[11px] mt-1 font-medium">
              {errors.name.message as string}
            </p>
          )}
        </div>


        <div>
          <label className="block text-[12.5px] font-semibold text-[#4b5563] mb-1.5 flex gap-1">
            Email<span className="text-gray-400">*</span>
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                placeholder="example@gmail.com"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-[13.5px] text-gray-800 focus:outline-none focus:ring-1 placeholder-gray-400 ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-200 focus:ring-[#0aad0a] focus:border-[#0aad0a]"}`}
              />
            )}
          />
          {errors.email?.message && (
            <p className="text-red-500 text-[11px] mt-1 font-medium">
              {errors.email.message as string}
            </p>
          )}
        </div>


        <div>
          <label className="block text-[12.5px] font-semibold text-[#4b5563] mb-1.5 flex gap-1">
            Password<span className="text-gray-400">*</span>
          </label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="password"
                placeholder="create a strong password"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-[13.5px] text-gray-800 focus:outline-none focus:ring-1 placeholder-gray-400 mb-2 ${errors.password ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-200 focus:ring-[#0aad0a] focus:border-[#0aad0a]"}`}
              />
            )}
          />
          {errors.password?.message && (
            <p className="text-red-500 text-[11px] mt-1 mb-2 font-medium">
              {errors.password.message as string}
            </p>
          )}
          <div className="flex items-center gap-2 mb-1.5">
            <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${strength.color}`}
                style={{ width: `${strength.percent}%` }}
              ></div>
            </div>
            <span
              className={`text-[10px] font-semibold uppercase tracking-wide ${strength.textColor}`}
            >
              {strength.label}
            </span>
          </div>
          <p className="text-[11px] text-[#94a3b8]">
            Must be at least 8 characters with numbers and symbols
          </p>
        </div>


        <div>
          <label className="block text-[12.5px] font-semibold text-[#4b5563] mb-1.5 flex gap-1">
            Confirm Password<span className="text-gray-400">*</span>
          </label>
          <Controller
            name="rePassword"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="password"
                placeholder="confirm your password"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-[13.5px] text-gray-800 focus:outline-none focus:ring-1 placeholder-gray-400 ${errors.rePassword ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-200 focus:ring-[#0aad0a] focus:border-[#0aad0a]"}`}
              />
            )}
          />
          {errors.rePassword?.message && (
            <p className="text-red-500 text-[11px] mt-1 font-medium">
              {errors.rePassword.message as string}
            </p>
          )}
        </div>


        <div>
          <label className="block text-[12.5px] font-semibold text-[#4b5563] mb-1.5 flex gap-1">
            Phone Number<span className="text-gray-400">*</span>
          </label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="tel"
                placeholder="+1 234 567 8900"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-[13.5px] text-gray-800 focus:outline-none focus:ring-1 placeholder-gray-400 ${errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-200 focus:ring-[#0aad0a] focus:border-[#0aad0a]"}`}
              />
            )}
          />
          {errors.phone?.message && (
            <p className="text-red-500 text-[11px] mt-1 font-medium">
              {errors.phone.message as string}
            </p>
          )}
        </div>


        <div className="flex items-start gap-2.5 mt-1 mb-1 ">
          <Controller
            name="terms"
            control={control}
            render={({ field: { value, onChange, ...field } }) => (
              <input
                {...field}
                type="checkbox"
                checked={value}
                onChange={(e) => onChange(e.target.checked)}
                className={`mt-0.5 w-[14px] h-[14px] text-[#0aad0a] rounded cursor-pointer ${errors.terms ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#0aad0a]"}`}
              />
            )}
          />
          <p className="text-[12.5px] text-[#4b5563] leading-relaxed cursor-pointer">
            I agree to the
            <Link
              href="/terms"
              className="text-[#0aad0a] font-medium hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-[#0aad0a] font-medium hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            <span className="text-gray-400">*</span>
          </p>
        </div>
        {errors.terms?.message && (
          <p className="text-red-500 text-[11px] font-medium mt-[-5px]">
            {errors.terms.message as string}
          </p>
        )}


        <button
          type="submit"
          className="w-full cursor-pointer bg-[#10b981] hover:bg-[#059669] text-white py-3 rounded-lg font-bold text-[14.5px] flex items-center justify-center gap-2 transition-colors shadow-[0_4px_12px_rgba(16,185,129,0.25)] mt-2"
        >
          <UserPlus className="w-4.5 h-4.5" />
          Create My Account
        </button>
      </form>


      <div className="text-center mt-6">
        <p className="text-[13.5px] text-gray-600">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-[#10b981] font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
