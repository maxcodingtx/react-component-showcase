import * as z from "zod";

export const formSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .max(50, "First name must be less than 50 characters"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .max(50, "Last name must be less than 50 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    password: z.string().min(4, "Password must be at least 4 characters long"),
    confirmPassword: z
      .string()
      .min(4, "Confirm Password must be at least 4 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });

export type FormData = z.infer<typeof formSchema>;
