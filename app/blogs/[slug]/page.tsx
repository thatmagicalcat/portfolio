import { getPostBySlug, getAllPosts, extractHeadings } from "@/lib/markdown"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import Link from "next/link"
import { TableOfContents } from "@/components/TableOfContents"
import React from "react"

function extractText(children: React.ReactNode): string {
  if (typeof children === "string") return children
  if (Array.isArray(children)) return children.map(extractText).join("")
  if (React.isValidElement(children)) {
    const props = children.props as { children?: React.ReactNode }
    return extractText(props.children)
  }
  return ""
}

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.metadata.title} | THATMAGICALCAT`,
    description: post.metadata.description,
  }
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const headings = extractHeadings(post.content)

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 max-w-6xl mx-auto flex gap-12 items-start">
      <Link href="/blogs" className="hidden xl:flex fixed left-10 top-32 items-center gap-2 text-muted-foreground hover:text-white transition-colors">
        <span>←</span> Back
      </Link>
      
      <article className="flex-1 min-w-0">
        <header className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 text-white">
            {post.metadata.title}
          </h1>
          <div className="flex gap-4 items-center text-muted-foreground font-mono text-sm">
            <time>{post.metadata.date}</time>
            {post.metadata.tags && (
              <>
                <span>•</span>
                <div className="flex gap-2">
                  {post.metadata.tags.map(tag => (
                    <span key={tag} className="text-brand">#{tag}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        <div className="prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              h2: ({ node, children, ...props }) => {
                const text = extractText(children)
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                return <h2 id={id} className="scroll-mt-32" {...props}>{children}</h2>
              },
              h3: ({ node, children, ...props }) => {
                const text = extractText(children)
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                return <h3 id={id} className="scroll-mt-32" {...props}>{children}</h3>
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      <TableOfContents headings={headings} />
    </div>
  )
}