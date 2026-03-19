import { Montserrat } from "next/font/google"

import "./globals.css"
import { Metadata } from "next"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Equal Math",
  description: "Free math tutoring!",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="top" className={`${montserrat.variable}`}>
        {children}
      </body>
    </html>
  )
}
