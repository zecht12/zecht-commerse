"use server";

import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import * as z from "zod";
import { LoginSchema } from '@/schema';
import { signIn } from "@/auth";
import { AuthError } from 'next-auth';
import { generateVerificationToken, generateTwoFactorToken } from "@/lib/tokens";
import { getUserByEmail } from '@/data/user';
import { sendVerificationEmail, sendTwoFactorEmail } from '@/lib/mail';
import { getTwoFactorTokenByEmail } from '@/data/two-factor-token';
import { db } from '@/lib/db';
import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation';

export const login = async (values : z.infer<typeof LoginSchema>, callbackUrl?:string | null) => {
    const validatedField = LoginSchema.safeParse(values);
    if (!validatedField.success) {
        return{error:"Terjadi Kesalan Saat Melakukan Login Ke Akun!"};
    }

    
}