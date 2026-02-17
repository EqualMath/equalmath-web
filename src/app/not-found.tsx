import type { JSX } from "react"

export default function NotFound(): JSX.Element {
  return (
    <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-3xl font-bold">Page Not Found</p>
      </div>
    </div>
  )
}
