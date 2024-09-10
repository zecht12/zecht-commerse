import * as z from "zod";
import { UserRole } from "@prisma/client";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email dibutuhkan",
    }),
    password: z.string().min(1, {
        message: "Password dibutuhkan",
    }),
    code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email dibutuhkan",
    }),
    password: z.string().min(6, {
        message: "Minimal 6 karakter",
    }),
    name: z.string().min(1, {
        message: "Nama dibutuhkan",
    }),
});