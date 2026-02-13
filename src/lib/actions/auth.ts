"use server"

import { supabaseAdmin } from "@/lib/supabase/admin"
import { createClient } from "@/lib/supabase/server"
import { verifyCode } from "@/lib/actions/verify-email"
import { config } from "../config/server"

export async function isAdmin(): Promise<boolean> {
  const supabase = await createClient()

  const { data: claims } = await supabase.auth.getClaims()
  const user = claims?.claims

  if (!user) return false

  const { data: roles } = await supabase
    .from("roles")
    .select("is_admin")
    .eq("user_id", user.sub)
    .maybeSingle()

  return roles?.is_admin ?? false
}

export async function emailUsed(email: string): Promise<boolean> {
  const { data } = await supabaseAdmin.rpc("check_user_exists", {
    user_email: email,
  })

  if (data === null) throw new Error("Failed to check users")

  return data
}

export async function createUser({
  email,
  code,
  name,
  password,
}: {
  email: string
  code: string
  name: string
  password: string
}): Promise<void> {
  if (name.length < 1 || name.length > config.MAX_NAME_LENGTH) {
    throw new Error(
      `Name must be between 1 and ${config.MAX_NAME_LENGTH} characters`,
    )
  }

  if (
    password.length < config.MIN_PASSWORD_LENGTH ||
    password.length > config.MAX_PASSWORD_LENGTH
  ) {
    throw new Error(
      `Password must be between ${config.MIN_PASSWORD_LENGTH} and ${config.MAX_PASSWORD_LENGTH} characters`,
    )
  }

  if (await verifyCode(email, code)) {
    await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        display_name: name,
      },
    })

    await supabaseAdmin.from("email_verify").delete().eq("email", email)
  } else {
    throw new Error("Incorrect code")
  }
}
