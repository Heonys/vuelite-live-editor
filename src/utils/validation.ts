import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Please enter your password" }),
});
