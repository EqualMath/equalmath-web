import Link from "next/link"

/** Two hand-drawn marker strokes of slightly different length: the "=" in Equal Math. */
export function EqualsGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
    >
      <path d="M6 11.5c6.5-.9 13.5-1.2 20-.4" />
      <path d="M8 21.2c5.5-.6 11-.7 17.5.3" />
    </svg>
  )
}

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2 font-serif text-xl font-semibold tracking-tight"
    >
      <EqualsGlyph className="size-7 text-marker transition-transform group-hover:-rotate-6 motion-reduce:transition-none" />
      <span>
        equal<span className="text-graphite">math</span>
      </span>
    </Link>
  )
}
