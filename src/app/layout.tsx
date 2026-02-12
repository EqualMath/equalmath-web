import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Equal Math",
  description: "Free math tutoring",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="flex min-h-full flex-col">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "flex min-h-full flex-1 flex-col antialiased",
        )}
      >
        {children}
      </body>
    </html>
  )
}
