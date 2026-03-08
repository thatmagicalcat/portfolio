"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background massive text */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none px-4 mix-blend-screen bg-background">
        <h1 className="text-[7vw] md:text-[8vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#E04006] to-[#1a1a1a] opacity-80 text-center leading-none animate-gradient">
          THATMAGICALCAT
        </h1>
      </div>

      <div className="z-10 w-full max-w-7xl px-6 relative h-screen flex flex-col justify-between">
        <div className="flex-1" />

        {/* Footer/Tagline info */}
        <div className="flex justify-between items-end text-sm text-foreground/50 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-xl font-medium text-foreground mb-1">Low-level Systems & Graphics</h2>
            <p>Passionate about Rust, C, and pushing hardware limits.</p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            href="/contact" 
            className="group flex items-center gap-2 hover:text-foreground transition-colors pb-1"
          >
            Get in touch 
            <span className="group-hover:translate-x-1 group-hover:text-brand transition-all">→</span>
          </motion.a>
        </div>
      </div>
    </main>
  )
}