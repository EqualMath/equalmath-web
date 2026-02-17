import { TutorItem } from "./tutor"
import { fetchTutors } from "./utils"

export default async function Tutors() {
  const tutors = await fetchTutors()

  return (
    <div className="flex min-h-full flex-1 flex-col gap-8 px-8 py-8 sm:px-16 md:px-32 lg:px-48">
      <h1 className="text-4xl font-semibold">Tutors</h1>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        {tutors.map((tutor, i) => (
          <TutorItem tutor={tutor} key={i} variant="outline" />
        ))}
      </div>
    </div>
  )
}
