import Link from "next/link"

const styles = {
  primary:
    "bg-marker text-on-marker shadow-[3px_3px_0_0_var(--button-shadow)] hover:-translate-y-0.5 hover:shadow-[4px_5px_0_0_var(--button-shadow)]",
  secondary:
    "border border-ink/20 bg-paper-raised text-ink hover:border-ink/40 hover:bg-paper",
}

type Props = {
  href: string
  variant?: keyof typeof styles
  children: React.ReactNode
  className?: string
}

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: Props) {
  const classes = `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${styles[variant]} ${className}`
  // In-page anchors use a plain <a>: next/link ignores a repeat click on the
  // hash already in the URL, so the button would only scroll once.
  const native =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("#")

  return native ?
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {children}
      </a>
    : <Link href={href} className={classes}>
        {children}
      </Link>
}
