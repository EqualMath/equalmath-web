import { MapPin, Navigation } from "lucide-react"

import {
  directionsUrl,
  formatHours,
  placeName,
  type DropIn,
} from "@/content/sessions"

import { Button } from "./button"

export function DropInCard({ dropIn }: { dropIn: DropIn }) {
  return (
    <article className="paper-card p-6 md:p-8">
      <p className="font-hand text-3xl text-marker">Every {dropIn.day}</p>
      <p className="font-serif text-4xl font-semibold tracking-tight md:text-5xl">
        {formatHours(dropIn)}
      </p>
      <div className="mt-6 flex gap-3">
        <MapPin
          aria-hidden="true"
          className="mt-0.5 size-5 shrink-0 text-teal"
        />
        <div>
          <h3 className="font-semibold">{placeName(dropIn)}</h3>
          <p className="text-graphite">{dropIn.address}</p>
          {dropIn.note && <p className="mt-2 text-graphite">{dropIn.note}</p>}
        </div>
      </div>
      <Button href={directionsUrl(dropIn)} variant="secondary" className="mt-6">
        <Navigation aria-hidden="true" className="size-4" />
        Get directions
      </Button>
    </article>
  )
}
