import { site } from "./site"

/**
 * The tutor roster. Every page on the site reads from this list.
 *
 * To add a tutor, copy an entry below and fill it in:
 * - `slug` becomes their page URL (/tutors/<slug>), so keep it lowercase with no spaces.
 * - `photo` (optional) is a square-ish image in public/tutors/, e.g. put
 *   phi.jpg there and set `photo: "/tutors/phi.jpg"`. Without one, the
 *   site shows the first letter of their name.
 * - `bookingUrl` (optional) is their Google Appointments page for online
 *   sessions. It only shows on the site while `onlineBooking` is on in site.ts.
 *
 * To hide someone for a term, set `status: "away"`. They move to the
 * "Away this term" section and the FAQ explains where they went.
 */

export type Level =
  | "elementary school math"
  | "middle school math"
  | "high school math"
  | "first-year calculus"
  | "second-year calculus"

export type Tutor = {
  slug: string
  name: string
  grade: number
  bio: string
  photo?: string
  topics: { from: Level; to: Level; extra?: string[] }
  bookingUrl?: string
  status: "active" | "away"
}

export const tutors: Tutor[] = [
  {
    slug: "aiden",
    name: "Aiden",
    grade: 12,
    bio: "I love math, programming, and piano!",
    topics: {
      from: "middle school math",
      to: "second-year calculus",
      extra: ["linear algebra"],
    },
    status: "active",
  },
  {
    slug: "phi",
    name: "Phi",
    grade: 12,
    bio: "I love math, music, and making! I have a big shark stuffie.",
    topics: { from: "elementary school math", to: "second-year calculus" },
    status: "active",
  },
]

export function getActiveTutors() {
  return tutors.filter((t) => t.status === "active")
}

export function getAwayTutors() {
  return tutors.filter((t) => t.status === "away")
}

export function getTutor(slug: string) {
  return tutors.find((t) => t.slug === slug)
}

/** The tutor's booking link, if online booking is on and they take bookings. */
export function onlineBookingUrl(tutor: Tutor) {
  return site.onlineBooking && tutor.status === "active" ?
      tutor.bookingUrl
    : undefined
}

export function describeTopics({ from, to, extra }: Tutor["topics"]) {
  const range = `${capitalize(from)} through ${to}`
  return extra?.length ? `${range}, plus ${listFormat.format(extra)}` : range
}

export function topicTags({ from, to, extra = [] }: Tutor["topics"]) {
  return [`${shortLevel[from]} → ${shortLevel[to]}`, ...extra.map(title)]
}

const shortLevel: Record<Level, string> = {
  "elementary school math": "Elementary",
  "middle school math": "Middle School",
  "high school math": "High School",
  "first-year calculus": "Calc I",
  "second-year calculus": "Calc II",
}

const listFormat = new Intl.ListFormat("en", { type: "conjunction" })

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}

function title(s: string) {
  return s.split(" ").map(capitalize).join(" ")
}
