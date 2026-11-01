import Link from "next/link"

import { site } from "@/content/site"

import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <Logo />
          <p className="text-sm text-graphite">
            Free math tutoring for all, by high school students in Oakland.
            <span className="mt-1 block text-xs">
              © {new Date().getFullYear()} {site.name}
            </span>
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {site.nav.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-marker-text">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-teal hover:underline"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
