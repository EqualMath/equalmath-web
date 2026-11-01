import { ArrowUpRight, CalendarDays } from "lucide-react"
import Link from "next/link"

import { onlineBookingUrl, topicTags, type Tutor } from "@/content/tutors"

import { Button } from "./button"
import { TutorAvatar } from "./tutor-avatar"

export function TutorCard({ tutor }: { tutor: Tutor }) {
  const away = tutor.status === "away"
  const bookingUrl = onlineBookingUrl(tutor)

  return (
    <article
      className={`relative flex flex-col paper-card p-6 ${away ? "opacity-60" : ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <TutorAvatar tutor={tutor} />
          <div>
            <h3 className="font-serif text-xl font-semibold">
              <Link
                href={`/tutors/${tutor.slug}`}
                className="after:absolute after:inset-0 hover:text-marker-text"
              >
                {tutor.name}
              </Link>
            </h3>
            <p className="text-sm text-graphite">Grade {tutor.grade}</p>
          </div>
        </div>
        <ArrowUpRight aria-hidden="true" className="size-5 text-graphite" />
      </div>

      <p className="mt-4 flex-1 text-[15px] leading-relaxed">{tutor.bio}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topics">
        {topicTags(tutor.topics).map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-teal-soft px-3 py-1 text-xs font-medium text-teal"
          >
            {tag}
          </li>
        ))}
      </ul>

      {away && (
        <p className="mt-5 font-hand text-xl text-graphite">Back soon!</p>
      )}
      {bookingUrl && (
        <Button href={bookingUrl} className="relative z-10 mt-5 self-start">
          <CalendarDays aria-hidden="true" className="size-4" />
          Book online with {tutor.name}
        </Button>
      )}
    </article>
  )
}
