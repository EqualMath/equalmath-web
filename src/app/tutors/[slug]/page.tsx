import { ArrowLeft, BookOpen, CalendarDays, MapPin, Video } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/button"
import { TutorAvatar } from "@/components/tutor-avatar"
import { dropIns, formatHours, placeName } from "@/content/sessions"
import {
  describeTopics,
  getTutor,
  onlineBookingUrl,
  tutors,
} from "@/content/tutors"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return tutors.map(({ slug }) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tutor = getTutor((await params).slug)
  return tutor ? { title: tutor.name, description: tutor.bio } : {}
}

export default async function TutorPage({ params }: Props) {
  const tutor = getTutor((await params).slug)
  if (!tutor) notFound()

  const away = tutor.status === "away"
  const bookingUrl = onlineBookingUrl(tutor)

  return (
    <section className="flex-1 border-b border-rule graph-paper">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <Link
          href="/tutors"
          className="inline-flex items-center gap-1 text-sm font-medium text-graphite hover:text-ink"
        >
          <ArrowLeft aria-hidden="true" className="size-4" /> All tutors
        </Link>

        <article className="mt-6 paper-card p-8 md:p-10">
          <div className="flex items-center gap-4">
            <TutorAvatar tutor={tutor} size="lg" />
            <div>
              <h1 className="font-serif text-4xl font-semibold tracking-tight">
                {tutor.name}
              </h1>
              <p className="text-graphite">Grade {tutor.grade}</p>
            </div>
          </div>

          <p className="mt-6 text-lg leading-relaxed">{tutor.bio}</p>

          <dl className="mt-8 grid gap-5 border-t border-rule pt-6">
            <Detail icon={BookOpen} term="Can help with">
              {describeTopics(tutor.topics)}.
            </Detail>
            <Detail icon={MapPin} term="Drop-in sessions">
              {dropIns.map((d) => (
                <span key={placeName(d)} className="block">
                  {d.day}s, {formatHours(d)}, at {placeName(d)}
                </span>
              ))}
              <span className="mt-1 block text-sm text-graphite">
                Tutors take turns, so who&apos;s there changes week to week.{" "}
                <Link href="/#drop-in" className="text-teal hover:underline">
                  Drop-in details
                </Link>
              </span>
            </Detail>
            {bookingUrl && (
              <Detail icon={Video} term="Online">
                Google Meet, booked ahead of time
              </Detail>
            )}
          </dl>

          {away && (
            <p className="mt-8 font-hand text-2xl text-graphite">
              {tutor.name} is away this term. Back soon!
            </p>
          )}
          {bookingUrl && (
            <Button href={bookingUrl} className="mt-8">
              <CalendarDays aria-hidden="true" className="size-4" />
              Book an online session with {tutor.name}
            </Button>
          )}
        </article>
      </div>
    </section>
  )
}

function Detail({
  icon: Icon,
  term,
  children,
}: {
  icon: typeof MapPin
  term: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-3">
      <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-teal" />
      <div>
        <dt className="text-xs font-semibold tracking-widest text-graphite uppercase">
          {term}
        </dt>
        <dd className="mt-1">{children}</dd>
      </div>
    </div>
  )
}
