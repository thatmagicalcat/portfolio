"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type Heading = {
  level: number
  text: string
  id: string
}

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <div className="hidden lg:block w-64 shrink-0 relative">
      <div className="sticky top-32">
        <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
          On this page
        </h4>
        <nav className="flex flex-col gap-2 border-l border-white/10 pl-4">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={cn(
                "text-sm transition-colors hover:text-brand",
                activeId === heading.id 
                  ? "text-brand font-medium" 
                  : "text-muted-foreground",
                heading.level === 3 ? "ml-4" : ""
              )}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}