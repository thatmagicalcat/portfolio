import Image from "next/image"

export const metadata = {
  title: "About | THATMAGICALCAT",
  description: "About the developer behind thatmagicalcat.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 max-w-4xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl font-black tracking-tighter mb-4 text-white">About Me</h1>
        <div className="h-1 w-20 bg-brand mb-8" />
      </header>

      <div className="prose prose-lg">
        <p className="text-xl text-foreground/90 leading-relaxed mb-8">
          I'm an average highschool kid with a deep fascination for programming, physics, and low-level systems. I spend most of my time exploring the boundaries of what software can do, usually armed with Rust and C.
        </p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-2">What I do</h2>
        <ul className="space-y-4 text-foreground/80 list-disc ml-6 marker:text-brand">
          <li><strong>Systems Programming:</strong> Writing efficient, memory-safe code. I love delving into operating system concepts, interpreters, and memory management.</li>
          <li><strong>Graphics Programming:</strong> Rendering pipelines, shaders, and making pixels do cool things on the screen.</li>
          <li><strong>Language Design:</strong> Building custom esoteric programming languages like <a href="https://github.com/ShortLang/ShortLang" target="_blank" rel="noreferrer" className="text-brand hover:text-brand-hover underline">ShortLang</a> for code golfing.</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-2">The Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {["Rust", "C / C++", "Zig", "OpenGL / WebGL", "TypeScript", "React / Next.js", "Linux / Bash", "Git"].map((tech) => (
            <div key={tech} className="p-4 bg-card border border-white/5 rounded-lg text-center font-mono text-sm hover:border-brand/50 transition-colors">
              {tech}
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-2">Philosophy</h2>
        <blockquote className="border-l-4 border-brand pl-6 italic text-foreground/70 my-8 bg-white/5 py-4 pr-4 rounded-r-lg">
          "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra
        </blockquote>
      </div>
    </div>
  )
}
