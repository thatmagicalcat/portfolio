import { Github, Star, GitFork } from "lucide-react"

export const metadata = {
  title: "Projects | THATMAGICALCAT",
  description: "Open source projects and experiments.",
}

const PROJECTS = [
  {
    name: "Descord",
    repo: "DescordLib/descord",
    description: "A minimal and easy to use discord api wrapper built in Rust. Focused on speed and low overhead.",
    language: "Rust",
    stars: 20,
    forks: 3,
  },
  {
    name: "ShortLang",
    repo: "ShortLang/ShortLang",
    description: "A programming language designed specifically for code golfing. Minimal syntax, maximum expression.",
    language: "Rust",
    stars: 15,
    forks: 3,
  },
  {
    name: "dotfiles",
    repo: "thatmagicalcat/dotfiles",
    description: "My personal dotfiles for Linux. A highly customized, minimal terminal environment.",
    language: "C / Shell",
    stars: 18,
    forks: 0,
  },
  {
    name: "tcrts",
    repo: "thatmagicalcat/tcrts",
    description: "Turing Complete Rust Type System. Proving that the Rust compiler's type resolution can compute anything.",
    language: "Rust",
    stars: 6,
    forks: 0,
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 max-w-6xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl font-black tracking-tighter mb-4 text-white">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A collection of open source tools, libraries, and experiments. Most of my work lives on GitHub.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <a
            key={project.name}
            href={`https://github.com/${project.repo}`}
            target="_blank"
            rel="noreferrer"
            className="group p-6 rounded-2xl border border-white/5 bg-card hover:border-brand/50 transition-all hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-white group-hover:text-brand transition-colors flex items-center gap-3">
                  <Github className="w-6 h-6" />
                  {project.name}
                </h2>
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground font-mono mt-auto pt-4 border-t border-white/5">
              <span className="flex items-center gap-2 text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-brand" />
                {project.language}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4" /> {project.stars}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="w-4 h-4" /> {project.forks}
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a 
          href="https://github.com/thatmagicalcat" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-brand hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
          View all on GitHub
        </a>
      </div>
    </div>
  )
}