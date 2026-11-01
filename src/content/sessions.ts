/**
 * Weekly drop-in sessions. The home page, FAQ and tutor pages all read from
 * this list, so adding a library is one more entry here.
 *
 * Times are 24-hour "HH:MM" strings in local (Pacific) time.
 */

export type DropIn = {
  library: string
  branch?: string
  address: string
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
  start: string
  end: string
  /** Anything extra worth knowing, e.g. which room or floor to find us on. */
  note?: string
}

export const dropIns: DropIn[] = [
  {
    library: "Berkeley Public Library",
    branch: "Central Branch",
    address: "2090 Kittredge St, Berkeley, CA 94704",
    day: "Thursday",
    start: "16:00",
    end: "17:30",
  },
]

/** "4:00–5:30pm", or "11:00am–12:30pm" when the range crosses noon. */
export function formatHours({ start, end }: DropIn) {
  const a = parseTime(start)
  const b = parseTime(end)
  return a.period === b.period ?
      `${a.clock}–${b.clock}${b.period}`
    : `${a.clock}${a.period}–${b.clock}${b.period}`
}

export function placeName({ library, branch }: DropIn) {
  return branch ? `${library}, ${branch}` : library
}

export function directionsUrl(dropIn: DropIn) {
  const query = `${dropIn.library} ${dropIn.branch ?? ""}, ${dropIn.address}`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

/** One line for the hero and metadata, e.g. "every Thursday, 4:00–5:30pm, at Berkeley Public Library". */
export function summarizeDropIns() {
  if (dropIns.length === 1) {
    const [d] = dropIns
    return `every ${d.day}, ${formatHours(d)}, at ${d.library}`
  }
  return "every week at public libraries near you"
}

function parseTime(time: string) {
  const [h, m] = time.split(":").map(Number)
  return {
    clock: `${h % 12 || 12}:${String(m).padStart(2, "0")}`,
    period: h < 12 ? "am" : "pm",
  }
}
