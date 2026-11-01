/** Wraps a few words with a hand-drawn marker stroke underneath. */
export function MarkerUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute -bottom-1 left-0 h-[0.3em] w-full text-marker"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      >
        <path d="M3 8.5C45 4 105 2.5 197 5.5" />
      </svg>
    </span>
  )
}
