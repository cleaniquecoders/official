"use client"

import { Code2, Zap, Shield, BookOpen, GitBranch, FileText } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Code2,
    title: "System Development",
    description: "Bring your ideas to life with our expert system development expertise and modern tech stack.",
  },
  {
    icon: Zap,
    title: "Solution Architecture",
    description: "Design scalable and efficient IT ecosystems tailored to your business needs.",
  },
  {
    icon: Shield,
    title: "Code Assessment & QA",
    description: "Ensure code quality and detect issues early with comprehensive quality assurance.",
  },
  {
    icon: BookOpen,
    title: "Web & Mobile Training",
    description: "Develop your in-house tech teams with tailored training programs.",
  },
  {
    icon: GitBranch,
    title: "Project Migration",
    description: "Smoothly migrate data and applications to new platforms or systems.",
  },
  {
    icon: FileText,
    title: "Technical Writing",
    description: "Professional documentation and writing services for your development processes.",
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Comprehensive IT solutions designed to transform your business and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-6 bg-card border border-border rounded-2xl transition-all duration-300 group cursor-pointer ${
                  hoveredIndex === index
                    ? "border-primary/50 shadow-lg scale-105 bg-gradient-to-br from-card to-primary/5"
                    : "hover:border-primary/30"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    hoveredIndex === index ? "bg-primary/20 scale-110" : "bg-accent/10"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 transition-all duration-300 ${
                      hoveredIndex === index ? "text-primary scale-110" : "text-accent"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
