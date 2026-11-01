/** Graph-paper title band at the top of inner pages. */
export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <section className="border-b border-rule graph-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <p className="font-hand text-2xl text-marker">{eyebrow}</p>
        <h1 className="mt-1 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          {title}
        </h1>
        {children && (
          <div className="mt-4 max-w-2xl text-lg text-graphite">{children}</div>
        )}
      </div>
    </section>
  )
}
