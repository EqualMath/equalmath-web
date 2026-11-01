import { ArrowRight, Video } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/button"
import { ContactBand } from "@/components/contact-band"
import { DropInCard } from "@/components/drop-in-card"
import { FaqList } from "@/components/faq-list"
import { MarginMath } from "@/components/margin-math"
import { MarkerUnderline } from "@/components/marker-underline"
import { TutorCard } from "@/components/tutor-card"
import { getFaqs } from "@/content/faq"
import { dropIns, placeName, summarizeDropIns } from "@/content/sessions"
import { site } from "@/content/site"
import { getActiveTutors } from "@/content/tutors"

const howItWorks = [
  {
    title: "Come by",
    body: "Drop in any time during session hours. No sign-up needed; it's first come, first served.",
  },
  {
    title: "Bring your questions",
    body: "Homework, test prep, or something you're curious about. All ages are welcome.",
  },
  {
    title: "Work through it together",
    body: "A tutor sits down with you and helps you make sense of it.",
  },
]

export default function Home() {
  const tutors = getActiveTutors()

  return (
    <>
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center border-b border-rule graph-paper">
        <MarginMath />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="font-hand text-2xl text-marker">100% free, always</p>
          <h1 className="mt-2 max-w-3xl font-serif text-5xl leading-[1.05] font-semibold tracking-tight text-balance md:text-7xl">
            Math help from <MarkerUnderline>real students</MarkerUnderline>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-graphite md:text-xl">
            Free drop-in tutoring from high schoolers, {summarizeDropIns()}. No
            sign-up, all ages welcome.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#drop-in">
              When &amp; where{" "}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            <Button href="/tutors" variant="secondary">
              Meet the tutors
            </Button>
          </div>
        </div>
      </section>

      <section id="drop-in" className="scroll-mt-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Come say hi" title="Drop-in hours" />
            <div className="space-y-6">
              {dropIns.map((dropIn) => (
                <DropInCard key={placeName(dropIn)} dropIn={dropIn} />
              ))}
            </div>
            {site.onlineBooking && (
              <p className="mt-6 flex gap-2 text-graphite">
                <Video
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-teal"
                />
                <span>
                  Can&apos;t make it? Some tutors also offer online sessions.{" "}
                  <Link href="/tutors" className="text-teal hover:underline">
                    Book one here
                  </Link>
                  .
                </span>
              </p>
            )}
          </div>
          <div>
            <SectionHeading eyebrow="Easy as 1, 2, 3" title="How it works" />
            <ol className="space-y-8">
              {howItWorks.map(({ title, body }, i) => (
                <li key={title} className="flex gap-5">
                  <span
                    aria-hidden="true"
                    className="w-8 shrink-0 font-hand text-4xl leading-none text-marker"
                  >
                    {i + 1}.
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold">
                      {title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-graphite">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-y border-rule bg-paper-raised">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Say hi"
              title="Who you might meet"
              description="Tutors take turns at drop-in sessions, so who's there changes week to week."
            />
            <Link
              href="/tutors"
              className="mb-10 inline-flex items-center gap-1 text-sm font-semibold text-teal hover:underline"
            >
              See all tutors{" "}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tutors.slice(0, 3).map((tutor) => (
              <TutorCard key={tutor.slug} tutor={tutor} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading eyebrow="Good questions" title="FAQ" />
            <p className="-mt-6 text-graphite">
              More answers on the{" "}
              <Link href="/faq" className="text-teal hover:underline">
                FAQ page
              </Link>
              .
            </p>
          </div>
          <FaqList faqs={getFaqs().slice(0, 4)} />
        </div>
      </section>

      <ContactBand />
    </>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-10">
      <p className="font-hand text-2xl text-marker">{eyebrow}</p>
      <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-2 text-graphite">{description}</p>}
    </div>
  )
}
