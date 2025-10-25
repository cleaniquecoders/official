"use client"

import { useState } from "react"
import { ExternalLink, Star, GitFork, Package, Code, Sparkles } from "lucide-react"

const featuredPackages = [
  {
    name: "Traitify",
    description: "A Laravel package that streamlines development by providing a collection of reusable traits and contracts for common functionality.",
    category: "Laravel",
    tags: ["PHP", "Laravel", "Traits", "UUID"],
    url: "https://github.com/cleaniquecoders/traitify",
    stars: 18,
    language: "PHP",
    license: "MIT"
  },
  {
    name: "Blueprint Macro",
    description: "Extended Laravel Blueprint macros for enhanced database schema generation and development workflow automation.",
    category: "Laravel",
    tags: ["Laravel", "Blueprint", "Macro", "Database"],
    url: "https://github.com/cleaniquecoders/blueprint-macro",
    stars: 16,
    language: "PHP",
    license: "MIT"
  },
  {
    name: "Shrinkr",
    description: "A comprehensive URL shortening package for Laravel with custom slugs, analytics, branded domains, and seamless API integration.",
    category: "Laravel",
    tags: ["PHP", "Laravel", "URL Shortener", "Analytics"],
    url: "https://github.com/cleaniquecoders/shrinkr",
    stars: 12,
    language: "PHP",
    license: "MIT"
  }
]

const popularPackages = [
  {
    name: "DB Schema Auditor",
    description: "Audit database schema design for Laravel applications",
    category: "Laravel",
    url: "https://github.com/cleaniquecoders/db-schema-auditor",
    stars: 10,
    language: "PHP"
  },
  {
    name: "Laravel Observers",
    description: "A collection of observer classes for Laravel applications",
    category: "Laravel",
    url: "https://github.com/cleaniquecoders/laravel-observers",
    stars: 8,
    language: "PHP"
  },
  {
    name: "Laravel Media Secure",
    description: "Secure media display for Laravel applications",
    category: "Laravel",
    url: "https://github.com/cleaniquecoders/laravel-media-secure",
    stars: 6,
    language: "PHP"
  },
  {
    name: "PHP Env Key Manager",
    description: "Framework-agnostic PHP package for easy .env file key management",
    category: "PHP",
    url: "https://github.com/cleaniquecoders/php-env-key-manager",
    stars: 6,
    language: "PHP"
  },
  {
    name: "Laravel Action",
    description: "Simple actionable pattern implementation for Laravel",
    category: "Laravel",
    url: "https://github.com/cleaniquecoders/laravel-action",
    stars: 5,
    language: "PHP"
  },
  {
    name: "Laravel Organization",
    description: "Create applications with organization tenancy support",
    category: "Laravel",
    url: "https://github.com/cleaniquecoders/laravel-organization",
    stars: 5,
    language: "PHP"
  }
]

const recentPackages = [
  {
    name: "Flowstone",
    description: "Build sophisticated workflow and state machine systems with database-driven configurations",
    category: "Laravel",
    url: "https://github.com/cleaniquecoders/flowstone",
    language: "PHP"
  },
  {
    name: "Kickoff",
    description: "Configure new Laravel projects with all required packages and setup",
    category: "Laravel",
    url: "https://github.com/cleaniquecoders/kickoff",
    stars: 3,
    language: "PHP"
  },
  {
    name: "Placeholdify",
    description: "A powerful placeholder replacement engine for Laravel templates",
    category: "Laravel",
    url: "https://github.com/cleaniquecoders/placeholdify",
    stars: 3,
    language: "PHP"
  },
  {
    name: "UAT",
    description: "Automatically generates comprehensive User Acceptance Testing documentation",
    category: "Laravel",
    url: "https://github.com/cleaniquecoders/uat",
    stars: 3,
    language: "PHP"
  }
]

export default function OpenSource() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="open-source" className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <Package className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Community Driven</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Open Source{" "}
            <span className="text-primary font-bold">
              Packages
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Contributing to the Laravel and PHP community with 96+ open-source packages. Built with love, shared with the world.
          </p>
        </div>

        {/* Featured Packages */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {featuredPackages.map((pkg, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden ${
                hoveredIndex === index
                  ? "border-primary/50 shadow-2xl scale-[1.02]"
                  : "hover:border-border/50 hover:shadow-lg"
              }`}
              onClick={() => window.open(pkg.url, '_blank')}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                {/* Header with category and language */}
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-background/50 backdrop-blur-sm border border-border/50 rounded-full">
                    <span className="text-xs font-medium text-muted-foreground">{pkg.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{pkg.language}</span>
                    <Code className="w-3 h-3 text-muted-foreground" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-foreground transition-colors">
                  {pkg.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-background/50 border border-border/50 rounded-lg text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium text-foreground">{pkg.stars}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{pkg.license}</span>
                </div>

                {/* CTA */}
                <div className={`flex items-center gap-2 text-primary font-medium transition-all duration-300 ${
                  hoveredIndex === index ? "translate-x-2" : ""
                }`}>
                  <span>View on GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Packages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Popular Packages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPackages.map((pkg, index) => (
              <div
                key={index}
                onClick={() => window.open(pkg.url, '_blank')}
                className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    {pkg.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs font-medium text-foreground">{pkg.stars}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{pkg.description}</p>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 text-xs font-medium rounded-lg bg-accent/10 text-accent">
                    {pkg.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{pkg.language}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Packages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Latest Releases
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPackages.map((pkg, index) => (
              <div
                key={index}
                onClick={() => window.open(pkg.url, '_blank')}
                className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    {pkg.name}
                  </h4>
                  {pkg.stars && (
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span className="text-xs font-medium text-foreground">{pkg.stars}</span>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mb-3">{pkg.description}</p>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 text-xs font-medium rounded-lg bg-accent/10 text-accent">
                    {pkg.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{pkg.language}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-background/50 backdrop-blur-sm border border-border rounded-3xl p-12 mb-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">96+</div>
              <div className="text-muted-foreground">Open Source Packages</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">GitHub Stars</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">MIT</div>
              <div className="text-muted-foreground">Licensed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Active</div>
              <div className="text-muted-foreground">Maintenance</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Explore all our packages and contribute to the Laravel community
          </p>
          <button
            onClick={() => window.open('https://github.com/orgs/cleaniquecoders/repositories?q=visibility%3Apublic+archived%3Afalse', '_blank')}
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 mx-auto"
          >
            View All Packages
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
