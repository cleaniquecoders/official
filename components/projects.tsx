"use client"

import { useState } from "react"

const projects = [
  {
    name: "Hal Ehwal Pelajar",
    description: "Student activity and approval system for institutions",
    category: "Education",
  },
  {
    name: "ePerak",
    description: "Maintenance and support for state-level system",
    category: "Government",
  },
  {
    name: "Service Export Funds",
    description: "Fund application management system",
    category: "Finance",
  },
  {
    name: "Slot Media",
    description: "Media slot booking system for TV, radio, and digital marketing",
    category: "Media",
  },
  {
    name: "Staff E-Services",
    description: "One-stop HR system for Universiti Malaya",
    category: "HR",
  },
  {
    name: "Career Portal",
    description: "Career portal integrated with HR services",
    category: "HR",
  },
  {
    name: "Machine Analytics",
    description: "IoT analytics proof-of-concept",
    category: "Analytics",
  },
  {
    name: "Vulman",
    description: "Vulnerability management system consolidating security findings",
    category: "Security",
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Explore some of our most impactful projects across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`p-6 bg-card border border-border rounded-2xl transition-all duration-300 group cursor-pointer ${
                hoveredIndex === index
                  ? "border-primary/50 shadow-lg scale-102 bg-gradient-to-br from-card to-primary/5"
                  : "hover:border-primary/30"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3
                  className={`text-xl font-semibold transition-colors duration-300 ${
                    hoveredIndex === index ? "text-primary" : "text-foreground"
                  }`}
                >
                  {project.name}
                </h3>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                    hoveredIndex === index ? "bg-primary/20 text-primary" : "bg-accent/10 text-accent"
                  }`}
                >
                  {project.category}
                </span>
              </div>
              <p className="text-foreground/70">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
