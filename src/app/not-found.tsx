import type { JSX } from "react"

export default function NotFound(): JSX.Element {
  return (
    <div className="flex min-h-full flex-1 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-3xl font-bold">Page Not Found</p>
      </div>
    </div>
  )
}
