"use server"

import { createTransport } from "nodemailer"

import { config } from "@/lib/config/server"

const transport = createTransport({
  service: "gmail",
  host: config.mail.server.host,
  port: config.mail.server.port,
  secure: true,
  auth: {
    user: config.mail.server.user,
    pass: config.mail.server.pass,
  },
})

/**
 * Send email to the specefied address.
 *
 * @param to Recipient email address.
 * @param subject Email subject.
 * @param text Email body text.
 * @param html Email body HTML.
 */
export async function sendMail(
  to: string,
  subject: string,
  text: string,
  html?: string,
): Promise<void> {
  await transport.sendMail({
    from: config.mail.email,
    to,
    subject,
    text,
    html,
  })
}
