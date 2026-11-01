import Image from "next/image"

import type { Tutor } from "@/content/tutors"

const sizes = {
  md: { box: "size-12 text-xl", px: 48 },
  lg: { box: "size-16 text-3xl", px: 64 },
}

/** The tutor's photo, or the first letter of their name if they don't have one. */
export function TutorAvatar({
  tutor,
  size = "md",
}: {
  tutor: Tutor
  size?: keyof typeof sizes
}) {
  const { box, px } = sizes[size]

  return tutor.photo ?
      <Image
        src={tutor.photo}
        alt=""
        width={px}
        height={px}
        className={`${box} shrink-0 rounded-full border border-rule object-cover`}
      />
    : <span
        aria-hidden="true"
        className={`${box} grid shrink-0 place-items-center rounded-full bg-marker-soft font-serif font-semibold text-marker`}
      >
        {tutor.name.charAt(0)}
      </span>
}
