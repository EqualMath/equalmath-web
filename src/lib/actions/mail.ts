"use server"

import { createTransport, type SentMessageInfo } from "nodemailer"

const server_host = process.env.SMTP_SERVER_HOST!
const server_port = Number(process.env.SMTP_SERVER_PORT)
const username = process.env.SMTP_SERVER_USERNAME!
const password = process.env.SMTP_SERVER_PASSWORD!
const from = process.env.EMAIL_FROM!

const transport = createTransport({
  service: "gmail",
  host: server_host,
  port: server_port,
  secure: true,
  auth: {
    user: username,
    pass: password,
  },
})

export async function sendMail({
  to,
  subject,
  text,
  html,
}: {
  to: string
  subject: string
  text: string
  html?: string
}): Promise<SentMessageInfo> {
  const info = await transport.sendMail({
    from,
    to,
    subject,
    text,
    html,
  })

  return info
}
