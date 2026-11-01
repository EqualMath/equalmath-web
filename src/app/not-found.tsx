import { Button } from "@/components/button"

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center border-b border-rule graph-paper px-4">
      <div className="text-center">
        <p className="font-hand text-3xl text-marker">404 ≠ found</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-3 text-graphite">
          Let&apos;s get you back to something that adds up.
        </p>
        <Button href="/" className="mt-8">
          Back home
        </Button>
      </div>
    </section>
  )
}
