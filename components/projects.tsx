"use client"

import { useState } from "react"
import { ExternalLink, ArrowRight, Sparkles, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const featuredProjects = [
  {
    name: "API Management System (APIM)",
    description: "APIM is a web-based platform for registering, managing, securing, monitoring, and publishing APIs. It streamlines integration across systems while enforcing access control, audit trails, and user roles in line with OpenAPI standards.",
    category: "API Platform",
    tags: ["APIs", "Security", "OpenAPI"],
    image: "/placeholder-project-1.jpg",
    stats: { api: "500+", integrations: "100+" }
  },
  {
    name: "Identity Access Management (IAM)",
    description: "Identity and Access Management (IAM) is a framework of policies and technologies that ensures the right individuals access the right resources at the right times for the right reasons. It manages user identities, authentication, authorisation, and access control within an organisation.",
    category: "Security",
    tags: ["Identity", "Security", "Access Control"],
    image: "/placeholder-project-2.jpg",
    stats: { users: "30K+", policies: "200+" }
  },
  {
    name: "Staff E-Services",
    description: "Staff e-Services is one stop centre for Human Resources related modules such as Leave application, Recruitment, Retirement and few other HR related modules for Universiti Malaya (UM). The system is already live in production in 2022 and has more modules and features undergoing development.",
    category: "Education",
    tags: ["University", "HR", "Production"],
    image: "/placeholder-project-3.jpg",
    stats: { staff: "8K+", modules: "15+" }
  }
]

const otherProjects = [
  {
    name: "National Medical Research Register",
    description: "The NMRR is the web based tool designed to support the implementation of the National Institute of Health NIH guideline on the conduct of research in the Ministry of Health Malaysia (MOH).",
    category: "Healthcare",
  },
  {
    name: "Hal Ehwal Pelajar",
    description: "Comprehensive student affairs management system providing streamlined activity registration, approval workflows, and administrative oversight for educational institutions.",
    category: "Education",
  },
  {
    name: "Career Portal",
    description: "It's an official Universiti Malaya career portal for employees and the public to apply for available vacancies. The system is integrated with Universiti Malaya Staff E-Services system. The Career Portal is already in production in 2022.",
    category: "Education",
  },
  {
    name: "Land Document Management System",
    description: "The system enables the Pejabat Daerah dan Tanah to manage and monitor land-related documents by generating QR codes for tracking. It facilitates document movement tracking, ensuring quick and accurate identification of the current holder and location of each document.",
    category: "Government",
  },
  {
    name: "Vulman",
    description: "Advanced vulnerability management platform that consolidates security findings, prioritizes threats, and provides actionable remediation guidance for enterprise environments.",
    category: "Security",
  },
  {
    name: "Connective Exchange",
    description: "High-performance API solution designed to optimize WooCommerce operations, reduce load times, and enhance e-commerce platform scalability for enterprise clients.",
    category: "E-commerce",
  }
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Show only first 3 featured projects initially
  const visibleFeaturedProjects = featuredProjects.slice(0, 3)
  const remainingFeaturedProjects = featuredProjects.slice(3)

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 bg-card/30">
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
          {visibleFeaturedProjects.map((project, index) => (
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
                <div className="flex gap-6 text-sm">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="font-bold text-foreground">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        <div>

          {/* More Projects Button */}
          <div className="text-center">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <button className="group px-6 py-3 bg-accent/10 border border-accent/20 text-accent rounded-xl hover:bg-accent/20 hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center gap-2 mx-auto">
                  View More Projects ({otherProjects.length})
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </DialogTrigger>
              <DialogContent
                className="w-[90vw]! max-w-6xl! max-h-[85vh] overflow-y-auto sm:max-w-6xl! md:max-w-6xl! lg:max-w-6xl!"
                style={{ width: '90vw', maxWidth: '72rem' }}
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-6">
                    Additional Projects
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-3">
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
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Ready to build your next successful project with us?
          </p>
          <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 mx-auto">
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div> */}
      </div>
    </section>
  )
}
