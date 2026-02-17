"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, type ComponentProps } from "react"

import { type Tutor } from "./utils"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Skeleton } from "@/components/ui/skeleton"

export function TutorItem({
  tutor,
  ...props
}: ComponentProps<typeof Item> & { tutor: Tutor }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <Item {...props}>
      <ItemMedia variant="image" className="relative aspect-square">
        <Image
          src={tutor.img}
          alt={tutor.name}
          fill
          className="select-noneobject-cover"
          draggable={false}
          onLoad={() => setLoaded(true)}
        />
        {!loaded && (
          <Skeleton className="absolute inset-0 animate-none rounded-none" />
        )}
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{tutor.name}</ItemTitle>
        <ItemDescription className="line-clamp-4">{tutor.bio}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Link href={"https://google.com"}>
          <Button variant="outline">Schedule</Button>
        </Link>
      </ItemActions>
    </Item>
  )
}
