"use client"

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
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"

export default function Login() {
  const router = useRouter()
  const supabase = createClient()

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [incorrect, setIncorrect] = useState(false)

  const handleSubmit = useCallback(async () => {
    setLoading(true)
    try {
      setEmailError(email.length === 0)
      setPasswordError(password.length === 0)
      if (email.length > 0 && password.length > 0) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (!error) {
          router.push("/tutors")
        } else {
          setIncorrect(true)
        }
      }
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }, [email, password])

  return (
    <div className="flex min-h-full flex-1 items-center justify-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Link href="/register">
              <Button variant="link">Sign Up</Button>
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      aria-invalid={emailError || incorrect}
                    />
                    <FieldError
                      errors={
                        emailError ? [{ message: "Email is required" }] : []
                      }
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <div className="flex items-center justify-between">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <Link href="/forgot-password">
                        <Button variant="link" type="button">
                          Forgot password?
                        </Button>
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      aria-invalid={passwordError || incorrect}
                    />
                    <FieldError
                      errors={
                        passwordError ? [{ message: "Password is required" }]
                        : incorrect ?
                          [{ message: "Incorrect username or password" }]
                        : []
                      }
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Loading..." : "Submit"}
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
