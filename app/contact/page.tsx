import { Github, Twitter, Mail, MapPin } from "lucide-react"

export const metadata = {
  title: "Contact | THATMAGICALCAT",
  description: "Get in touch with thatmagicalcat.",
}

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/thatmagicalcat",
    icon: <Github className="w-6 h-6" />,
    handle: "@thatmagicalcat"
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/thatmagicalcat_",
    icon: <Twitter className="w-6 h-6" />,
    handle: "@thatmagicalcat_"
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/thatmagicalcat",
    icon: <span className="w-6 h-6 font-bold text-xl leading-none flex items-center justify-center">r/</span>,
    handle: "u/thatmagicalcat"
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 max-w-4xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl font-black tracking-tighter mb-4 text-white">Contact</h1>
        <p className="text-lg text-muted-foreground">
          Let's talk about systems, graphics, or your next big idea.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-2">Connect</h2>
          <div className="flex flex-col gap-4">
            {SOCIALS.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-card hover:bg-white/5 hover:border-brand/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-brand transition-colors">
                  {social.icon}
                </div>
                <div>
                  <h3 className="font-medium text-white group-hover:text-brand transition-colors">{social.name}</h3>
                  <p className="text-sm text-muted-foreground">{social.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-2">Status</h2>
          <div className="p-6 rounded-2xl border border-white/5 bg-card space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">Earth (UTC +05:30)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Availability</h3>
                <p className="text-sm text-muted-foreground">Open to interesting open source collaborations and conversations about low-level programming.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}