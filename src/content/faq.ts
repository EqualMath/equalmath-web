import { dropIns, formatHours, placeName } from "./sessions"
import { site } from "./site"
import { getAwayTutors } from "./tutors"

export type Faq = { question: string; answer: string }

const listFormat = new Intl.ListFormat("en", { type: "conjunction" })

export function getFaqs(): Faq[] {
  const away = getAwayTutors()
  const schedule = dropIns
    .map(
      (d) =>
        `every ${d.day}, ${formatHours(d)}, at ${placeName(d)} (${d.address})`,
    )
    .join("; ")

  return [
    {
      question: "How much does it cost?",
      answer:
        "Nothing! Equal Math is 100% free for all students and that will never change.",
    },
    {
      question: "Do I need to sign up?",
      answer:
        "Nope! Simply drop in any time during session hours. Tutoring is first come, first served.",
    },
    {
      question: "When and where are sessions?",
      answer: `We have sessions ${schedule}. We're hoping to add more libraries sometime soon.`,
    },
    {
      question: "Who can come?",
      answer: "Anyone! Students of all ages and grades are welcome.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bringing your homework or something you're working on in class is helpful, but not required. You're welcome to come with even just a question.",
    },
    {
      question: "Which math topics can tutors help with?",
      answer: `Equal Math can generally cover topics ranging from elementary school math to second-year calculus and beyond, though this varies with the availibility of different tutors. If you need help with a specific topic, feel free to email us at ${site.email} and we'll do our best to connect you with a tutor or other resources.`,
    },
    ...(site.onlineBooking ?
      [
        {
          question: "Can I meet with a tutor online?",
          answer:
            "Yes. Some tutors also offer online sessions over Google Meet, which you can book from their profile. Online sessions last 30 minutes. You can book two back-to-back for an hour, but please don't book more than two in one day.",
        },
      ]
    : []),
    ...(away.length ?
      [
        {
          question: "Where did the other tutors go?",
          answer: `Some of our tutors are taking a break this term. ${listFormat.format(away.map((t) => t.name))} will be back soon!`,
        },
      ]
    : []),
    {
      question: "Who founded Equal Math, and why?",
      answer:
        'Equal Math was built by Aiden, Phi, and Sachin, based on the earlier "Equal Math Opportunities Oakland" (EMOO) run by Allie Ackert. Wheras EMOO focused on virtual tutoring, we decided to do in-person sessions because we feel it better enables us to explain concepts to tutees and allows access for those without a computer.',
    },
  ]
}
