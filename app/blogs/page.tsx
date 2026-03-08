import Link from "next/link"
import { getAllPosts } from "@/lib/markdown"

export const metadata = {
  title: "Blogs | THATMAGICALCAT",
  description: "Technical writings, thoughts, and tutorials.",
}

export default function BlogsPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 max-w-4xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl font-black tracking-tighter mb-4 text-white">Writings</h1>
        <p className="text-lg text-muted-foreground">Thoughts on systems, graphics, and computer science.</p>
      </header>

      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blogs/${post.slug}`} className="group block">
            <article className="p-6 rounded-2xl border border-white/5 bg-card hover:border-brand/50 transition-colors">
              <div className="flex justify-between items-baseline mb-4">
                <h2 className="text-2xl font-bold text-white group-hover:text-brand transition-colors">
                  {post.metadata.title}
                </h2>
                <time className="text-sm text-muted-foreground font-mono">
                  {post.metadata.date}
                </time>
              </div>
              <p className="text-foreground/80 mb-4">
                {post.metadata.description}
              </p>
              {post.metadata.tags && (
                <div className="flex gap-2">
                  {post.metadata.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-white/5 text-muted-foreground rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </Link>
        ))}

        {posts.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No posts found. Create a markdown file in the /blogs directory!
          </div>
        )}
      </div>
    </div>
  )
}