import Link from "next/link"

import { Button } from "./ui/button"

export function NavigationBar() {
  return (
    <nav className="border-accent flex h-20 w-full items-center justify-between border-b-2">
      <div className="mr-auto flex pl-12">
        <Link href="/tutors">
          <Button variant="link" className="text-2xl font-semibold">
            Tutors
          </Button>
        </Link>
      </div>
      <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-5xl">
        <Button variant="link" className="text-5xl font-semibold">
          Equal Math
        </Button>
      </Link>
      <div className="ml-auto flex" />
    </nav>
  )
}
