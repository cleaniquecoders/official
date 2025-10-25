"use client"

import { useState } from "react"
import { Headphones, Mail, MessageCircle, Phone, Clock, User, FileText, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const supportOptions = [
  {
    title: "Email Support",
    description: "Get detailed help via email",
    icon: Mail,
    color: "text-blue-500",
    response: "Within 24 hours",
    best: "Technical questions, detailed issues"
  },
  {
    title: "General Inquiry",
    description: "Ask questions about our services",
    icon: MessageCircle,
    color: "text-green-500",
    response: "Within 12 hours",
    best: "Service questions, project discussions"
  },
  {
    title: "Consultation",
    description: "Schedule a call with our team",
    icon: Phone,
    color: "text-purple-500",
    response: "Within 2 business days",
    best: "Project planning, complex requirements"
  }
]

const supportCategories = [
  "General Inquiry",
  "Technical Support",
  "Project Discussion",
  "Training Information",
  "Billing & Payments",
  "Partnership Opportunity",
  "Bug Report",
  "Feature Request",
  "Other"
]

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "",
    subject: "",
    message: "",
    priority: "normal"
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Category: ${formData.category}
Priority: ${formData.priority}

Message:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:hello@cleaniquecoders.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-linear-to-br from-primary/5 to-primary/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-full mb-6">
              <Headphones className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Support</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in{" "}
              <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Need help with your project or have questions about our services? Our expert team is here to assist you.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Support Options */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-foreground mb-6">Support Options</h2>
            <div className="space-y-4">
              {supportOptions.map((option, index) => {
                const Icon = option.icon
                return (
                  <div key={index} className="group p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                        <Icon className={`w-6 h-6 ${option.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-1">{option.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>Response: {option.response}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Best for: {option.best}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Quick Links */}
            <div className="mt-8">
              <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/help" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </a>
                <a href="/docs" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </a>
                <a href="/status" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  System Status
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
              <div className="mb-6">
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Contact Support
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {supportCategories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your issue or question in detail..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - General inquiry</SelectItem>
                        <SelectItem value="normal">Normal - Standard support</SelectItem>
                        <SelectItem value="high">High - Urgent issue</SelectItem>
                        <SelectItem value="critical">Critical - System down</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
            </div>

            {/* Direct Contact */}
            <div className="mt-6 p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Direct Email</h3>
                  <p className="text-sm text-muted-foreground">
                    Prefer email? Send us a message directly at{" "}
                    <a href="mailto:hello@cleaniquecoders.com" className="text-primary hover:underline">
                      hello@cleaniquecoders.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
