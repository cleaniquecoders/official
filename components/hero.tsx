"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background/50">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <span className="text-accent text-sm font-medium">Welcome to Cleanique Coders</span>
        </div>

        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          Transform Your Business with{" "}
          <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Cutting-Edge Technology
          </span>
        </h1>

        <p
          className={`text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed text-balance transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          Since 2016, we've been delivering exceptional IT consulting, software development, and training solutions to
          help businesses achieve their goals.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 hover:shadow-lg hover:scale-105 transition-all font-semibold duration-300">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-primary text-foreground rounded-full hover:bg-primary/10 hover:shadow-lg hover:scale-105 transition-all font-semibold duration-300">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-20 max-w-5xl mx-auto">
        <div className="h-96 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent rounded-3xl border border-border/50 backdrop-blur-sm shadow-lg"></div>
      </div>
    </section>
  )
}
