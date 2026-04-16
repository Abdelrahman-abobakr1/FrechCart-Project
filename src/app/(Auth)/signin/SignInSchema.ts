import * as zod from "zod";
export const schemaSignIn = zod
  .object({
    email: zod.string().regex(
        /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        "Invalid email address",
      ),
    password: zod.string().min(1, "Password is required")
  .regex(/^.{8,}$/, "Password must be at least 8 characters"),
    
  })
 