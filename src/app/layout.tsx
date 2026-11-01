import type { Metadata } from "next"
import { Caveat, Fraunces, Inter } from "next/font/google"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { themeScript } from "@/components/theme-toggle"
import { site } from "@/content/site"

import "./globals.css"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] })
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: { siteName: site.name, type: "website" },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // The theme script sets data-theme before hydration, so React would
    // otherwise warn that <html> doesn't match the server markup.
    // data-scroll-behavior lets Next.js turn off smooth scrolling during
    // route changes, so new pages start at the top.
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} ${caveat.variable} flex min-h-dvh flex-col font-sans antialiased`}
      >
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
