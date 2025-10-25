"use client"

import { Mail, Linkedin, Globe, Github, Twitter, Youtube, MessageCircle } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  services: [
    { name: "System Development", href: "#services" },
    { name: "Solution Architecture", href: "#services" },
    { name: "Code Assessment", href: "#services" },
    { name: "Developer Training", href: "#training" },
    { name: "Project Migration", href: "#services" },
    { name: "Technical Writing", href: "#services" }
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Case Studies", href: "#projects" },
    // { name: "Blog", href: "/blog" },
    // { name: "Careers", href: "/careers" },
    { name: "Contact", href: "#contact" }
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    // { name: "Learning Portal", href: "/learn" },
    // { name: "API Reference", href: "/api" },
    // { name: "Code Samples", href: "/samples" },
    // { name: "Tutorials", href: "/tutorials" },
    // { name: "Community", href: "/community" }
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Support", href: "/support" },
    { name: "System Status", href: "/status" },
    { name: "Feedback", href: "/feedback" }
  ]
}

const socialLinks = [
  { name: "Github", icon: Github, href: "https://github.com/cleaniquecoders" }
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">CC</span>
              </div>
              <span className="font-bold text-xl text-foreground">Cleanique Coders</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The complete platform for modern software development, IT consulting, and developer training.
              Delivering quality solutions since 2016.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:hello@cleaniquecoders.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 bg-muted/50 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                hello@cleaniquecoders.com
              </a>
              <a
                href="https://cleaniquecoders.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 bg-muted/50 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Globe className="w-4 h-4" />
                </div>
                cleaniquecoders.com
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p>&copy; 2025 Cleanique Coders Resources. All rights reserved.</p>
            </div>

            {/* Legal links */}
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
