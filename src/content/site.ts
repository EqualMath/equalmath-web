export const site = {
  name: "Equal Math",
  url: "https://equalmath.org",
  tagline: "Free math tutoring for all",
  description:
    "Free drop-in math tutoring from high school students, every week at the public library. No sign-up, all ages welcome.",
  email: "contact@equalmath.org",
  /**
   * Online sessions over Google Meet, booked through each tutor's
   * `bookingUrl`. Set to true to show "Book" buttons, the online FAQ entry
   * and the online note on the home page again.
   */
  onlineBooking: false,
  cta: { href: "/#drop-in", label: "Drop-in hours" },
  nav: [
    { href: "/tutors", label: "Tutors" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
  ],
} as const
