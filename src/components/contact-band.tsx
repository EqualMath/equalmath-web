import { Mail } from "lucide-react"

import { site } from "@/content/site"

import { Button } from "./button"

export function ContactBand() {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 paper-card graph-paper p-8 md:flex-row md:items-center md:p-12">
        <div>
          <h2 className="font-serif text-2xl font-semibold md:text-3xl">
            Questions? Want to tutor with us?
          </h2>
          <p className="mt-2 text-graphite">
            Email us any time. We&apos;re happy to help.
          </p>
        </div>
        <Button href={`mailto:${site.email}`}>
          <Mail aria-hidden="true" className="size-4" />
          {site.email}
        </Button>
      </div>
    </section>
  )
}
