import type { Metadata } from "next"

import { ContactBand } from "@/components/contact-band"
import { PageHeader } from "@/components/page-header"
import { TutorCard } from "@/components/tutor-card"
import { site } from "@/content/site"
import { getActiveTutors, getAwayTutors } from "@/content/tutors"

export const metadata: Metadata = {
  title: "Tutors",
  description:
    "Meet the high school students who run Equal Math's drop-in sessions.",
}

export default function TutorsPage() {
  const active = getActiveTutors()
  const away = getAwayTutors()

  return (
    <>
      <PageHeader eyebrow="Say hi" title="Our tutors">
        We take turns at drop-in sessions, so who&apos;s there changes from week
        to week.
        {site.onlineBooking &&
          " You can also book an online session with a specific tutor."}
      </PageHeader>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {active.map((tutor) => (
            <TutorCard key={tutor.slug} tutor={tutor} />
          ))}
        </div>

        {away.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-2xl font-semibold">
              Away this term
            </h2>
            <p className="mt-1 mb-8 text-graphite">
              These tutors are taking a break and will be back soon.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {away.map((tutor) => (
                <TutorCard key={tutor.slug} tutor={tutor} />
              ))}
            </div>
          </div>
        )}
      </section>

      <ContactBand />
    </>
  )
}
