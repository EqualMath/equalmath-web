import { TutorItem } from "./tutor"
import { fetchTutors } from "./utils"

export default async function Tutors() {
  const tutors = await fetchTutors()

  return (
    <div className="bg-background flex min-h-full flex-1 flex-col gap-8 px-48 py-8">
      <h1 className="text-4xl font-semibold">Tutors</h1>
      <div className="grid grid-cols-2 gap-8">
        {tutors.map((tutor, i) => (
          <TutorItem tutor={tutor} key={i} variant="outline" />
        ))}
      </div>
    </div>
  )
}
