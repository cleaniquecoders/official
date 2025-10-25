"use client"

import { useState } from "react"
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react"

const featuredProjects = [
  {
    name: "National Medical Research Register",
    description: "A comprehensive research management platform for Malaysia's Ministry of Health, enabling researchers to register, track, and manage medical research projects nationwide.",
    category: "Healthcare",
    tags: ["Government", "Research", "Healthcare"],
    image: "/placeholder-project-1.jpg",
    stats: { users: "10K+", projects: "500+" }
  },
  {
    name: "SumberManusia",
    description: "A comprehensive SaaS HR management system featuring employee self-service portals, automated payroll processing, and advanced workforce analytics.",
    category: "SaaS",
    tags: ["HR", "SaaS", "Automation"],
    image: "/placeholder-project-2.jpg",
    stats: { companies: "50+", employees: "5K+" }
  },
  {
    name: "Staff E-Services",
    description: "Universiti Malaya's integrated HR management platform providing seamless employee services, from recruitment to retirement.",
    category: "Education",
    tags: ["University", "HR", "Integration"],
    image: "/placeholder-project-3.jpg",
    stats: { staff: "8K+", services: "20+" }
  }
]

const otherProjects = [
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
    name: "Vulman",
    description: "Vulnerability management system consolidating security findings",
    category: "Security",
  },
  {
    name: "Machine Analytics",
    description: "IoT analytics proof-of-concept",
    category: "Analytics",
  },
  {
    name: "PantangPlus",
    description: "Service booking platform for postpartum care",
    category: "Healthcare",
  },
  {
    name: "Connective Exchange",
    description: "API for WooCommerce performance optimization",
    category: "E-commerce",
  }
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Success Stories</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Who uses{" "}
            <span className="text-primary font-bold">
              CCR?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            From government agencies to universities and startups, organizations trust CCR to build mission-critical software that scales.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden ${
                hoveredIndex === index
                  ? "border-primary/50 shadow-2xl scale-[1.02]"
                  : "hover:border-border/50 hover:shadow-lg"
              }`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                {/* Category badge */}
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-background/50 backdrop-blur-sm border border-border/50 rounded-full mb-4">
                  <span className="text-xs font-medium text-muted-foreground">{project.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-foreground transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-background/50 border border-border/50 rounded-lg text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-6 mb-6 text-sm">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="font-bold text-foreground">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className={`flex items-center gap-2 text-primary font-medium transition-all duration-300 ${
                  hoveredIndex === index ? "translate-x-2" : ""
                }`}>
                  <span>View case study</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    {project.name}
                  </h4>
                  <span className="px-2 py-1 text-xs font-medium rounded-lg bg-accent/10 text-accent">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Ready to build your next successful project with us?
          </p>
          <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 mx-auto">
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
