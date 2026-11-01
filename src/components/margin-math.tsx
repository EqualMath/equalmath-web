/** Equations scribbled in the margins. Purely decorative. */
const scribbles = [
  { text: "a² + b² = c²", className: "top-[12%] right-[6%] -rotate-6" },
  { text: "∫ x dx = x²⁄2", className: "top-[58%] right-[12%] rotate-3" },
  { text: "π ≈ 3.14159", className: "bottom-[10%] left-[48%] -rotate-3" },
  { text: "y = mx + b", className: "top-[30%] right-[28%] rotate-6" },
]

export function MarginMath() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden select-none lg:block"
    >
      {scribbles.map(({ text, className }) => (
        <span
          key={text}
          className={`absolute font-hand text-2xl text-graphite/50 ${className}`}
        >
          {text}
        </span>
      ))}
    </div>
  )
}
