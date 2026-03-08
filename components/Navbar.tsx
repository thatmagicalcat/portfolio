"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 mix-blend-difference">
      <div className="flex justify-between items-center max-w-7xl mx-auto text-white">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          TħΔTΣ∀GiCΛLCΔT
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            
            return (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "relative px-1 py-1 transition-colors hover:text-white",
                  isActive ? "text-white" : "text-white/60"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}