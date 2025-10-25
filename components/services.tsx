"use client"

import { Code2, Zap, Shield, BookOpen, GitBranch, FileText, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Code2,
    title: "System Development",
    description: "Build modern, scalable applications with cutting-edge technologies and best practices.",
    features: ["Web Applications", "Mobile Apps", "Cloud Solutions", "API Development"],
    color: "from-blue-500/10 to-blue-600/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Zap,
    title: "Solution Architecture",
    description: "Design robust, scalable IT ecosystems that grow with your business.",
    features: ["System Design", "Cloud Architecture", "Performance Optimization", "Security Planning"],
    color: "from-yellow-500/10 to-orange-600/10",
    iconColor: "text-orange-600"
  },
  {
    icon: Shield,
    title: "Code Assessment & QA",
    description: "Comprehensive code review and quality assurance to ensure reliability.",
    features: ["Code Reviews", "Security Audits", "Performance Testing", "Best Practices"],
    color: "from-green-500/10 to-emerald-600/10",
    iconColor: "text-emerald-600"
  },
  {
    icon: BookOpen,
    title: "Developer Training",
    description: "Empower your team with hands-on training and mentorship programs.",
    features: ["Bootcamp Programs", "One-on-One Coaching", "Team Workshops", "Skill Assessment"],
    color: "from-purple-500/10 to-violet-600/10",
    iconColor: "text-violet-600"
  },
  {
    icon: GitBranch,
    title: "Project Migration",
    description: "Seamlessly migrate your applications to modern platforms and technologies.",
    features: ["Legacy Modernization", "Cloud Migration", "Data Transfer", "Zero Downtime"],
    color: "from-pink-500/10 to-rose-600/10",
    iconColor: "text-rose-600"
  },
  {
    icon: FileText,
    title: "Technical Writing",
    description: "Professional documentation and content creation for your technical projects.",
    features: ["API Documentation", "User Guides", "Technical Blogs", "Process Documentation"],
    color: "from-indigo-500/10 to-blue-600/10",
    iconColor: "text-blue-600"
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Build it with CCR</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Complete IT Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            From consultation to deployment, we provide end-to-end services to transform your business with modern technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-8 bg-card border border-border rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
                  hoveredIndex === index
                    ? "border-primary/50 shadow-2xl scale-[1.02] bg-card/80 backdrop-blur-sm"
                    : "hover:border-border/50 hover:shadow-lg"
                }`}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 bg-background/50 backdrop-blur-sm border border-border/50 ${
                    hoveredIndex === index ? "scale-110 shadow-lg" : ""
                  }`}>
                    <Icon className={`w-8 h-8 transition-all duration-500 ${service.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-foreground transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className={`flex items-center gap-2 text-primary font-medium transition-all duration-300 ${
                    hoveredIndex === index ? "translate-x-2" : ""
                  }`}>
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-muted-foreground mb-6">
            Ready to transform your business with our comprehensive IT solutions?
          </p>
          <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 mx-auto">
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
