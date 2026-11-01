"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { site } from "@/content/site"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="-mr-2 rounded-md p-2 text-ink"
      >
        {open ?
          <X className="size-6" />
        : <Menu className="size-6" />}
      </button>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="absolute inset-x-0 top-16 border-b border-rule bg-paper px-4 pt-2 pb-6"
        >
          <ul className="flex flex-col">
            {[{ href: "/", label: "Home" }, site.cta, ...site.nav].map(
              ({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === href ? "page" : undefined}
                    className="block border-b border-rule py-3 font-serif text-lg aria-[current=page]:text-marker-text"
                  >
                    {label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      )}
    </div>
  )
}
