"use client"

import { Book, Code, Download, ExternalLink, FileText, Lightbulb, Search, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const documentationSections = [
  {
    title: "Getting Started",
    description: "Quick start guides and setup instructions",
    icon: Zap,
    color: "text-green-500",
    links: [
      { name: "Installation Guide", href: "#installation" },
      { name: "Configuration", href: "#configuration" },
      { name: "First Steps", href: "#first-steps" },
      { name: "Best Practices", href: "#best-practices" }
    ]
  },
  {
    title: "API Documentation",
    description: "Complete API reference and examples",
    icon: Code,
    color: "text-blue-500",
    links: [
      { name: "Authentication", href: "#auth" },
      { name: "Endpoints", href: "#endpoints" },
      { name: "Rate Limiting", href: "#rate-limiting" },
      { name: "Error Handling", href: "#errors" }
    ]
  },
  {
    title: "Tutorials",
    description: "Step-by-step tutorials and examples",
    icon: Book,
    color: "text-purple-500",
    links: [
      { name: "Laravel Development", href: "#laravel" },
      { name: "Vue.js Integration", href: "#vuejs" },
      { name: "API Development", href: "#api-dev" },
      { name: "Testing Strategies", href: "#testing" }
    ]
  },
  {
    title: "Resources",
    description: "Downloads, tools, and additional resources",
    icon: Download,
    color: "text-orange-500",
    links: [
      { name: "Code Templates", href: "#templates" },
      { name: "Development Tools", href: "#tools" },
      { name: "Style Guides", href: "#style-guides" },
      { name: "Checklists", href: "#checklists" }
    ]
  }
]

const popularDocs = [
  {
    title: "Laravel Package Development",
    description: "Complete guide to building Laravel packages",
    category: "Tutorial",
    readTime: "15 min read"
  },
  {
    title: "API Best Practices",
    description: "Industry standards for RESTful API design",
    category: "Guide",
    readTime: "10 min read"
  },
  {
    title: "Code Review Guidelines",
    description: "How to conduct effective code reviews",
    category: "Best Practice",
    readTime: "8 min read"
  },
  {
    title: "Testing Strategies",
    description: "Comprehensive testing approaches for web applications",
    category: "Tutorial",
    readTime: "20 min read"
  }
]

export default function Documentation() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-full mb-6">
              <Book className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Documentation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Developer{" "}
              <span className="text-primary">Documentation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Everything you need to build amazing applications with our tools, packages, and best practices.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search documentation..."
                className="pl-10 bg-background/50 backdrop-blur-sm border-border"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Documentation Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {documentationSections.map((section, index) => {
            const Icon = section.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors`}>
                      <Icon className={`w-5 h-5 ${section.color}`} />
                    </div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                  </div>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Popular Documentation */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Popular Documentation</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {popularDocs.map((doc, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                        {doc.title}
                      </CardTitle>
                      <CardDescription className="mb-3">
                        {doc.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="px-2 py-1 bg-muted/50 rounded-full">{doc.category}</span>
                        <span>{doc.readTime}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need Help Getting Started?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is here to help you get up and running quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="mailto:hello@cleaniquecoders.com?subject=Documentation%20Help%20Request&body=Hi%20Cleanique%20Coders%20team%2C%0A%0AI%20need%20help%20with%20documentation%20or%20getting%20started.%20Could%20you%20please%20assist%3F%0A%0ASpecific%20area%3A%20%0A%0AThank%20you%21">
                    Contact Support
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/help">
                    Visit Help Center
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
