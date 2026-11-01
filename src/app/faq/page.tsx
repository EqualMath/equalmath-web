import type { Metadata } from "next"

import { ContactBand } from "@/components/contact-band"
import { FaqList } from "@/components/faq-list"
import { PageHeader } from "@/components/page-header"
import { getFaqs } from "@/content/faq"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Equal Math tutoring.",
}

export default function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="Good questions" title="Frequently asked questions" />
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        <FaqList faqs={getFaqs()} />
      </section>
      <ContactBand />
    </>
  )
}
