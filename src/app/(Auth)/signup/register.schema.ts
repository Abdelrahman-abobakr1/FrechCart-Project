
import * as zod from "zod";
export const schema = zod
  .object({
    name: zod.string().min(1, { message: "Please enter your name" }),
    email: zod
      .string()
      .regex(
        /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        "Invalid email address",
      ),
    password: zod
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, "Password must include at least one uppercase letter")
      .regex(/[a-z]/, "Password must include at least one lowercase letter")
      .regex(/[0-9]/, "Password must include at least one number")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must include at least one special character",
      ),
    rePassword: zod
      .string()
      .min(1, { message: "Please confirm your password" }),
    phone: zod
      .string()
      .regex(
        /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/,
        "Only Egyptian phone numbers are allowed",
      ),
    terms: zod.boolean().refine((val) => val === true, {
      message: "You must agree to the terms",
    }),
  })
  .refine((data) => data.password === data.rePassword, {
    path: ["rePassword"],
    error: "Passwords don't match",
  });

   export const getPasswordStrength = (pass: string) => {
    if (!pass)
      return {
        label: "Weak",
        percent: 0,
        color: "bg-gray-200",
        textColor: "text-gray-500",
      };
    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[a-z]/.test(pass)) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^a-zA-Z0-9]/.test(pass)) score += 1;

    if (score <= 1)
      return {
        label: "Weak",
        percent: 33,
        color: "bg-red-500",
        textColor: "text-red-500",
      };
    if (score <= 3)
      return {
        label: "Medium",
        percent: 66,
        color: "bg-yellow-500",
        textColor: "text-yellow-500",
      };
    return {
      label: "Strong",
      percent: 100,
      color: "bg-[#0aad0a]",
      textColor: "text-[#0aad0a]",
    };
  };