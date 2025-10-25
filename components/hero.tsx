"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl [animation-delay:2s] animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full py-20">
        {/* Announcement banner */}
        <div
          className={`flex justify-center mb-8 transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Trusted by 50+ companies since 2016</span>
          </div>
        </div>

        {/* Main hero content */}
        <div className="text-center max-w-5xl mx-auto">
          <h1
            className={`text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-[0.9] text-balance transition-all duration-700 [animation-delay:0.1s] ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            Build. Train.{" "}
            <span className="text-primary font-bold">
              Deploy.
            </span>
          </h1>

          <p
            className={`text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 [animation-delay:0.2s] ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            The complete platform for modern software development, IT consulting, and developer training.
            Trusted by businesses to build scalable solutions that drive growth.
          </p>

          {/* Support text */}
          <div
            className={`text-sm text-muted-foreground transition-all duration-700 [animation-delay:0.4s] ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            Serving clients across Malaysia • Available for global projects
          </div>
        </div>
      </div>
    </section>
  )
}
