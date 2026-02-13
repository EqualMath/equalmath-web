import { config as clientConfig } from "./client"

export const config = {
  ...clientConfig,
  // Supabase
  SUPABASE_SECRET_KEY: process.env.SUPABASE_SECRET_KEY!,
  SUPABASE_PROJECT_ID: process.env.SUPABASE_PROJECT_ID!,
  // Mail
  SMTP_SERVER_HOST: process.env.SMTP_SERVER_HOST!,
  SMTP_SERVER_PORT: process.env.SMTP_SERVER_PORT!,
  SMTP_SERVER_USERNAME: process.env.SMTP_SERVER_USERNAME!,
  SMTP_SERVER_PASSWORD: process.env.SMTP_SERVER_PASSWORD!,
  EMAIL_FROM: process.env.EMAIL_FROM!,
}
