"use server"

import { type JwtPayload } from "@supabase/supabase-js"

import { sendMail } from "./mail"

import { config } from "@/lib/config/server"
import { supabaseAdmin } from "@/lib/supabase/admin"
import { createClient } from "@/lib/supabase/server"

/** Authentication errors. */
namespace AuthError {
  export class InvalidCode extends Error {
    constructor(email: string, code: string) {
      super(`Code ${code} is invalid for email ${email}`)
      this.name = "InvalidCodeError"
    }
  }

  export namespace Password {
    export class TooShort extends Error {
      constructor() {
        super(
          `Password must be at least ${config.auth.password.minLength} characters`,
        )
        this.name = "PasswordTooShort"
      }
    }

    export class TooLong extends Error {
      constructor() {
        super(
          `Password must not exceed ${config.auth.password.maxLength} characters`,
        )
        this.name = "PasswordTooLong"
      }
    }
  }
}

/**
 * Gets the currently signed in user server side.
 *
 * @returns User.
 */
async function getUser(): Promise<JwtPayload | null> {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getClaims()

  if (error) throw error

  const user = data?.claims

  return user ?? null
}

export async function isAdmin(): Promise<boolean> {
  const user = await getUser()

  if (!user) return false

  const { data, error } = await supabaseAdmin
    .from("roles")
    .select("is_admin")
    .eq("user_id", user.sub)
    .maybeSingle()

  if (error) throw error

  return data?.is_admin ?? false
}

/**
 * Check if email is taken.
 *
 * @param email Query email.
 * @returns `true` if the email is taken, `false` otherwise.
 */
export async function isEmailTaken(email: string): Promise<boolean> {
  const { data, error } = await supabaseAdmin.rpc("is_email_taken", {
    query_email: email,
  })

  if (error) throw error

  return data
}

/**
 * Creates a new user.
 *
 * @param email User email.
 * @param password User password.
 * @param code Verification code.
 */
export async function createUser(
  email: string,
  password: string,
  code: string,
  name: string,
): Promise<void> {
  if (!(await verifyCode(email, code))) {
    throw new AuthError.InvalidCode(email, code)
  }

  if (password.length < config.auth.password.minLength) {
    throw new AuthError.Password.TooShort()
  } else if (password.length > config.auth.password.maxLength) {
    throw new AuthError.Password.TooLong()
  }

  await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      display_name: name,
      is_admin: false,
      is_tutor: false,
    },
  })
}

/**
 * Generate and send a verification code to the specefied email.
 *
 * @param email User email.
 */
export async function sendVerificationCode(email: string): Promise<void> {
  const code = String(
    Math.floor(Math.pow(10, config.auth.code.length) * Math.random()),
  ).padStart(config.auth.code.length, "0")

  const { error } = await supabaseAdmin
    .from("verification_codes")
    .insert({ email, code })

  if (error) throw error

  await sendMail(email, "Email Verification Code", `Code: ${code}`)
}

/**
 * Verify code is correct for given email.
 *
 * @param email User email.
 * @param code Verification code.
 */
export async function verifyCode(
  email: string,
  code: string,
): Promise<boolean> {
  const { data, error } = await supabaseAdmin
    .from("verification_codes")
    .select()
    .eq("email", email)
    .eq("code", code)
    .limit(1)
    .maybeSingle()

  if (error) {
    throw error
  }

  return data !== null
}
