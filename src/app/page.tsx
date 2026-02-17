import Link from "next/link"
import type { JSX } from "react"

import { Button } from "@/components/ui/button"

export default function Home(): JSX.Element {
  return (
    <div className="flex min-h-full w-full flex-1 flex-col items-center justify-center gap-8 px-4 py-8">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-center text-6xl font-black">Free Math Tutoring!</h1>
        <p className="text-center text-lg font-bold">
          Equal Math provides free math tutoring sessions for middle and high
          school students!
        </p>
      </div>
      <Link href="/tutors">
        <Button variant="outline" size="lg" className="text-lg font-semibold">
          Sign up!
        </Button>
      </Link>
    </div>
  )
}
