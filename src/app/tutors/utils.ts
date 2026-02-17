import { createClient } from "@/lib/supabase/client"

export type Tutor = {
  name: string
  img: string
  bio: string
}

export async function fetchTutors(): Promise<Tutor[]> {
  const supabase = createClient()

  const { data, error } = await supabase
    .from("users")
    .select("name, roles!inner(is_tutor), tutors!inner(img, bio)")
    .eq("roles.is_tutor", true)

  if (error) throw error

  return data.map((tutor) => ({
    name: tutor.name,
    img: tutor.tutors.img,
    bio: tutor.tutors.bio,
  }))
}
