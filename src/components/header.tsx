import Link from "next/link"

import { site } from "@/content/site"

import { Button } from "./button"
import { Logo } from "./logo"
import { MobileNav } from "./mobile-nav"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <div className="flex items-center gap-2 md:gap-6">
          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {site.nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-graphite transition-colors hover:text-ink"
              >
                {label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href={site.cta.href}>{site.cta.label}</Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
