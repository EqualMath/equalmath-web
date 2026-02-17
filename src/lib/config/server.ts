import { config as clientConfig } from "./client"

export const config = {
  ...clientConfig,
  supabase: {
    ...clientConfig.supabase,
    secret_key: process.env.SUPABASE_SECRET_DEFAULT_KEY!,
  },
  mail: {
    server: {
      host: process.env.SMTP_SERVER_HOST!,
      port: Number(process.env.SMTP_SERVER_PORT!),
      user: process.env.SMTP_SERVER_USERNAME!,
      pass: process.env.SMTP_SERVER_PASSWORD!,
    },
    email: process.env.EMAIL_FROM!,
  },
}
