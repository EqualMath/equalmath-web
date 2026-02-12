"use server"

import { supabaseAdmin } from "@/lib/supabase/admin"
import { sendMail } from "./mail"

const codeLength = Number(process.env.NEXT_PUBLIC_VERIFICATION_CODE_LENGTH)

export async function sendVerificationCode(email: string): Promise<void> {
  const code = String(
    Math.floor(Math.pow(10, codeLength) * Math.random()),
  ).padStart(codeLength, "0")

  // TODO: Create a Cron job that deletes old codes
  const { error } = await supabaseAdmin
    .from("email_verify")
    .insert({ email, code })

  if (error) {
    throw new Error("Failed to generate code")
  }

  sendMail({
    to: email,
    subject: "Verify Email",
    text: `code: ${code}`,
  })
}

export async function verifyCode(
  email: string,
  code: string,
): Promise<boolean> {
  const { data } = await supabaseAdmin
    .from("email_verify")
    .select("code")
    .eq("email", email)

  if (!data) {
    throw new Error("Failed to fetch code")
  }

  for (const row of data) {
    if (code == row.code) return true
  }

  return false
}
