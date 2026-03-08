import fs from "fs"
import path from "path"
import matter from "gray-matter"

export type PostMetadata = {
  title: string
  date: string
  description: string
  tags?: string[]
}

export type Post = {
  slug: string
  metadata: PostMetadata
  content: string
}

const blogsDirectory = path.join(process.cwd(), "blogs")

export function getPostSlugs() {
  if (!fs.existsSync(blogsDirectory)) return []
  return fs.readdirSync(blogsDirectory).filter((file) => file.endsWith(".md"))
}

export function getPostBySlug(slug: string): Post | null {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = path.join(blogsDirectory, `${realSlug}.md`)
  
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    metadata: data as PostMetadata,
    content,
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => (a.metadata.date > b.metadata.date ? -1 : 1))
  
  return posts
}

export function extractHeadings(content: string) {
  const headings: { level: number; text: string; id: string }[] = []
  const lines = content.split('\n')
  
  lines.forEach(line => {
    const match = line.match(/^(#{2,3})\s+(.+)$/)
    if (match) {
      const level = match[1].length
      const text = match[2]
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      headings.push({ level, text, id })
    }
  })
  
  return headings
}