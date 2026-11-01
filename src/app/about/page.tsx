import type { Metadata } from "next"

import { ContactBand } from "@/components/contact-band"
import { MarkerUnderline } from "@/components/marker-underline"
import { PageHeader } from "@/components/page-header"
import { site } from "@/content/site"

export const metadata: Metadata = {
  title: "About",
  description: "Why Equal Math exists and how it started.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title={
          <>
            Math help should be <MarkerUnderline>free</MarkerUnderline>.
          </>
        }
      >
        Equal Math is run by Oakland high school students who want anyone,
        anywhere, to be able to get help with math.
      </PageHeader>

      <section className="mx-auto w-full max-w-3xl space-y-14 px-4 py-16 sm:px-6">
        <Block title="Our mission">
          <p>
            Private tutoring is expensive, and not every student has someone at
            home who can sit down and work through problems with them. So we run
            free drop-in sessions at the library, where anyone can stop by for
            help with anything from elementary arithmetic to calculus.
          </p>
        </Block>

        <Block title="How it started">
          <p>
            Equal Math was built by Aiden, Phi, and Sachin, based on the earlier
            &quot;Equal Math Opportunities Oakland&quot; (EMOO) run by Allie
            Ackert. Wheras EMOO focused on virtual tutoring, we decided to do
            in-person sessions because we feel it better enables us to explain
            concepts to tutees and allows access for those without a computer.
          </p>
        </Block>

        <Block title="Want to tutor?">
          <p>
            If you&apos;re a high school student who loves math and wants to
            help others with it, we&apos;d love to hear from you. Email us at{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-teal hover:underline"
            >
              {site.email}
            </a>{" "}
            and tell us a bit about yourself.
          </p>
        </Block>
      </section>

      <ContactBand />
    </>
  )
}

function Block({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2 className="font-serif text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="mt-4 text-lg leading-relaxed text-graphite">
        {children}
      </div>
    </div>
  )
}
