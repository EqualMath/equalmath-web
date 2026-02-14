"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import { RefreshCwIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { JSX } from "react"
import { useCallback, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { createUser, emailUsed } from "@/lib/actions/auth"
import { sendVerificationCode, verifyCode } from "@/lib/actions/verify-email"
import { config } from "@/lib/config/client"
import { createClient } from "@/lib/supabase/client"

const errorMessages = {
  email: {
    empty: "Email is required",
    malformed: 'Email must contain "@"',
    used: "Email is already in use",
  },
  code: {
    empty: "Verification code is required",
    malformed: `Verification code must be ${config.CODE_LENGTH} digits`,
    incorrect: "Incorrect verification code",
  },
  name: {
    empty: "Name is required",
    malformed: `Name must be less than ${config.MAX_NAME_LENGTH} characters`,
  },
  password: {
    empty: "Set password",
    malformed: `Password must be between ${config.MIN_PASSWORD_LENGTH} and ${config.MAX_PASSWORD_LENGTH} characters`,
  },
  confirmPassword: {
    incorrect: "Passwords must match",
  },
} satisfies Record<string, Record<string, string>>

type ErrorMessages = typeof errorMessages
type Errors = {
  [K in keyof ErrorMessages]: Set<keyof ErrorMessages[K]>
}

async function check({ email }: { email: string }): Promise<Errors>
async function check({
  email,
  code,
}: {
  email: string
  code: string
}): Promise<Errors>
async function check({
  email,
  code,
  name,
  password,
  confirmPassword,
}: {
  email: string
  code: string
  name: string
  password: string
  confirmPassword: string
}): Promise<Errors>
async function check({
  email,
  code,
  name,
  password,
  confirmPassword,
}: {
  email?: string
  code?: string
  name?: string
  password?: string
  confirmPassword?: string
}): Promise<Errors> {
  const errors: Errors = {
    email: new Set(),
    code: new Set(),
    name: new Set(),
    password: new Set(),
    confirmPassword: new Set(),
  }

  if (email !== undefined) {
    if (!email) {
      errors.email.add("empty")
    } else if (!email.includes("@")) {
      errors.email.add("malformed")
    } else if (await emailUsed(email)) {
      errors.email.add("used")
    }
  }

  if (email !== undefined && code !== undefined) {
    if (!code) {
      errors.code.add("empty")
    } else if (code.length !== config.CODE_LENGTH) {
      errors.code.add("malformed")
    } else if (!(await verifyCode(email, code))) {
      errors.code.add("incorrect")
    }
  }

  if (
    email !== undefined &&
    code !== undefined &&
    name !== undefined &&
    password !== undefined &&
    confirmPassword !== undefined
  ) {
    if (!name) {
      errors.name.add("empty")
    } else if (name.length > config.MAX_NAME_LENGTH) {
      errors.name.add("malformed")
    }

    if (!password) {
      errors.password.add("empty")
    } else if (
      password.length < config.MIN_PASSWORD_LENGTH ||
      password.length > config.MAX_PASSWORD_LENGTH
    ) {
      errors.password.add("malformed")
    }

    if (confirmPassword !== password) {
      errors.confirmPassword.add("incorrect")
    }
  }

  return errors
}

export default function Register(): JSX.Element {
  const router = useRouter()
  const supabase = createClient()

  const [step, setStep] = useState<"email" | "code" | "details">("email")
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [errors, setErrors] = useState<Errors>({
    email: new Set(),
    code: new Set(),
    name: new Set(),
    password: new Set(),
    confirmPassword: new Set(),
  })

  const handleEmailSubmit = useCallback(async () => {
    setLoading(true)
    try {
      const newErrors = await check({ email })
      setErrors(newErrors)
      if (newErrors.email.size === 0) {
        await sendVerificationCode(email)
        setStep("code")
      }
    } catch {
      // TODO: Error handling
    } finally {
      setLoading(false)
    }
  }, [email])

  const handleCodeSubmit = useCallback(async () => {
    setLoading(true)
    try {
      const newErrors = await check({ email, code })
      setErrors(newErrors)
      if (newErrors.code.size === 0) {
        setStep("details")
      }
    } catch {
      // TODO: Error handling
    } finally {
      setLoading(false)
    }
  }, [email, code])

  const handleDetailsSubmit = useCallback(async () => {
    setLoading(true)
    try {
      const newErrors = await check({
        email,
        code,
        name,
        password,
        confirmPassword,
      })
      setErrors(newErrors)
      if (
        newErrors.name.size === 0 &&
        newErrors.password.size === 0 &&
        newErrors.confirmPassword.size === 0
      ) {
        await createUser({ email, code, name, password })
        await supabase.auth.signInWithPassword({ email, password })
        router.push("/tutors")
      }
    } catch {
      // TODO: Error handling
    } finally {
      setLoading(false)
    }
  }, [email, code, name, password, confirmPassword, router, supabase.auth])

  return (
    <div className="flex min-h-full flex-1 items-center justify-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Enter an email to create an account</CardDescription>
          <CardAction>
            <Link href="/login">
              <Button variant="link">Log In</Button>
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault()
              switch (step) {
                case "email":
                  handleEmailSubmit()
                  break
                case "code":
                  handleCodeSubmit()
                  break
                case "details":
                  handleDetailsSubmit()
                  break
              }
            }}
          >
            <FieldGroup>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="user@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={step !== "email"}
                      required
                      aria-invalid={!!errors.email.size}
                    />
                    <FieldError
                      errors={[...errors.email].map((error) => ({
                        message: errorMessages.email[error],
                      }))}
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
              {step !== "email" && (
                <FieldSet>
                  <FieldGroup>
                    <Field>
                      <div className="flex items-center justify-between">
                        <FieldLabel htmlFor="verification-code">
                          Verification Code
                        </FieldLabel>
                        <Button
                          type="button"
                          variant="outline"
                          size="xs"
                          onClick={handleEmailSubmit}
                          disabled={step !== "code" || loading}
                        >
                          <RefreshCwIcon />
                          Resend Code
                        </Button>
                      </div>
                      <div className="flex items-center justify-center">
                        <InputOTP
                          id="verification-code"
                          maxLength={config.CODE_LENGTH}
                          pattern={REGEXP_ONLY_DIGITS}
                          onChange={setCode}
                          required
                          disabled={step !== "code"}
                        >
                          <InputOTPGroup>
                            {[...Array(6)].map((_, i) => (
                              <InputOTPSlot
                                key={i}
                                index={i}
                                aria-invalid={!!errors.code.size}
                              />
                            ))}
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                      <FieldError
                        errors={[...errors.code].map((error) => ({
                          message: errorMessages.code[error],
                        }))}
                      />
                    </Field>
                  </FieldGroup>
                </FieldSet>
              )}
              {step === "details" && (
                <>
                  <FieldSet>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="name">Name</FieldLabel>
                        <Input
                          id="name"
                          onChange={(e) => setName(e.target.value)}
                          required
                          aria-invalid={!!errors.name.size}
                        />
                        <FieldError
                          errors={[...errors.name].map((error) => ({
                            message: errorMessages.name[error],
                          }))}
                        />
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                  <FieldSet>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <Input
                          id="password"
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          aria-invalid={!!errors.password.size}
                        />
                        <FieldError
                          errors={[...errors.password].map((error) => ({
                            message: errorMessages.password[error],
                          }))}
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="confirm-password">
                          Confirm Password
                        </FieldLabel>
                        <Input
                          id="confirm-password"
                          type="password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                          aria-invalid={
                            !!errors.password.size ||
                            !!errors.confirmPassword.size
                          }
                        />
                        <FieldError
                          errors={[...errors.confirmPassword].map((error) => ({
                            message: errorMessages.confirmPassword[error],
                          }))}
                        />
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                </>
              )}
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <Button type="submit" disabled={loading}>
                      {loading ?
                        "Loading..."
                      : step === "details" ?
                        "Submit"
                      : "Continue"}
                    </Button>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
