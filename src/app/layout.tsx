import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { NavigationBar } from "@/components/navigation"
import { cn } from "@/lib/utils"

import "./globals.css"

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "flex min-h-full flex-1 flex-col font-sans antialiased",
        )}
      >
        <NavigationBar />
        <main className="flex min-h-full flex-1 flex-col">{children}</main>
      </body>
    </html>
  )
}
