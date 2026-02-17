export const config = {
  auth: {
    password: {
      minLength: 8,
      maxLength: 64,
    },
    code: {
      length: 6,
    },
    name: {
      maxLength: 64,
    },
  },
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    publishable_key: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!,
  },
}
