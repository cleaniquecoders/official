"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    const html = document.documentElement
    const newIsDark = !isDark
    if (newIsDark) {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
    setIsDark(newIsDark)
  }

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Cleanique Coders" width={40} height={40} className="w-10 h-10" />
          <span className="font-bold text-lg text-foreground hidden sm:inline">Cleanique Coders</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground/70 hover:text-foreground transition">
            Services
          </a>
          <a href="#projects" className="text-foreground/70 hover:text-foreground transition">
            Projects
          </a>
          <a href="#training" className="text-foreground/70 hover:text-foreground transition">
            Training
          </a>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-medium">
            Contact Us
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-foreground/10 transition"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-foreground/10 transition"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <a href="#services" className="text-foreground/70 hover:text-foreground transition">
                Services
              </a>
              <a href="#projects" className="text-foreground/70 hover:text-foreground transition">
                Projects
              </a>
              <a href="#training" className="text-foreground/70 hover:text-foreground transition">
                Training
              </a>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-medium w-full">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
