import type { MetadataRoute } from "next"

import { site } from "@/content/site"
import { tutors } from "@/content/tutors"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/tutors",
    "/about",
    "/faq",
    ...tutors.map(({ slug }) => `/tutors/${slug}`),
  ]
  return paths.map((path) => ({ url: `${site.url}${path}` }))
}
