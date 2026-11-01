import { Plus } from "lucide-react"

import type { Faq } from "@/content/faq"

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-rule border-y border-rule">
      {faqs.map(({ question, answer }) => (
        <details key={question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-medium [&::-webkit-details-marker]:hidden">
            {question}
            <Plus
              aria-hidden="true"
              className="size-5 shrink-0 text-marker transition-transform group-open:rotate-45 motion-reduce:transition-none"
            />
          </summary>
          <p className="mt-3 max-w-prose leading-relaxed text-graphite">
            {answer}
          </p>
        </details>
      ))}
    </div>
  )
}
