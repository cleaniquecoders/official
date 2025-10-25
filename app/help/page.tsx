"use client"

import { useState } from "react"
import { HelpCircle, Search, MessageCircle, Book, Phone, Mail, ChevronRight, ExternalLink, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const helpCategories = [
  {
    title: "Getting Started",
    description: "New to our services? Start here",
    icon: Lightbulb,
    color: "text-green-500",
    articles: [
      "How to get started with your first project",
      "Understanding our development process",
      "Setting up your project requirements",
      "Communication and project management"
    ]
  },
  {
    title: "Services & Pricing",
    description: "Information about our offerings",
    icon: MessageCircle,
    color: "text-blue-500",
    articles: [
      "Service packages and pricing",
      "Custom development quotes",
      "Training program options",
      "Ongoing support and maintenance"
    ]
  },
  {
    title: "Technical Support",
    description: "Technical questions and troubleshooting",
    icon: Book,
    color: "text-purple-500",
    articles: [
      "Laravel package documentation",
      "API integration help",
      "Code review process",
      "Best practices and guidelines"
    ]
  },
  {
    title: "Account & Billing",
    description: "Manage your account and payments",
    icon: Phone,
    color: "text-orange-500",
    articles: [
      "Payment methods and invoicing",
      "Project timeline and milestones",
      "Contract terms and conditions",
      "Refund and cancellation policies"
    ]
  }
]

const faqData = [
  {
    question: "How do I get started with a new project?",
    answer: "Getting started is easy! Simply contact us through our website or email hello@cleaniquecoders.com with your project requirements. We'll schedule a consultation to discuss your needs, timeline, and budget. Our team will then provide you with a detailed proposal and project plan."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in Laravel/PHP development, Vue.js frontend development, API development, system architecture, and DevOps. We also provide training in these technologies and offer code assessment services for existing applications."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and scope. Simple applications can take 2-4 weeks, while complex enterprise solutions may take 3-6 months or more. We provide detailed timelines during the consultation phase and keep you updated throughout the development process."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer various support packages including bug fixes, feature updates, security patches, and technical consultation. We can also provide training to your team to help them maintain and extend the application."
  },
  {
    question: "Can you help with existing applications?",
    answer: "Absolutely! We offer code assessment services, application modernization, performance optimization, and migration services. We can evaluate your existing codebase and provide recommendations for improvements."
  },
  {
    question: "What is your training program like?",
    answer: "Our training programs are designed for developers of all levels. We offer both corporate training and individual courses covering Laravel, Vue.js, API development, testing, and more. Training can be conducted remotely or on-site, depending on your preferences."
  }
]

const contactMethods = [
  {
    title: "Email Support",
    description: "Get help via email",
    icon: Mail,
    action: "Send Email",
    href: "mailto:hello@cleaniquecoders.com?subject=Help%20Center%20Inquiry&body=Hi%20Cleanique%20Coders%20team%2C%0A%0AI%20need%20help%20with%3A%0A%0APlease%20provide%20assistance.%0A%0AThank%20you%21",
    response: "We'll respond within 24 hours"
  },
  {
    title: "Documentation",
    description: "Browse our technical docs",
    icon: Book,
    action: "View Docs",
    href: "/docs",
    response: "Instant access to guides"
  },
  {
    title: "Schedule Consultation",
    description: "Book a call with our team",
    icon: Phone,
    action: "Book Call",
    href: "mailto:hello@cleaniquecoders.com?subject=Consultation%20Request&body=Hi%20Cleanique%20Coders%20team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%3A%0A%0APreferred%20time%3A%20%0A%0AThank%20you%21",
    response: "Available within 2 business days"
  }
]

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-linear-to-br from-primary/5 to-primary/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Help Center</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              How can we{" "}
              <span className="text-primary">help you?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Find answers to common questions, browse our documentation, or get in touch with our support team.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50 backdrop-blur-sm border-border"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Help Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {helpCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="group p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                      <Icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
                <div className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1 cursor-pointer">
                      <ChevronRight className="w-3 h-3" />
                      {article}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to the most common questions about our services and processes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need More Help?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to get in touch with our team for personalized assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <div key={index} className="group p-8 bg-background/50 backdrop-blur-sm border border-border rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <p className="text-sm text-muted-foreground mb-6">{method.response}</p>
                  <Button asChild className="w-full">
                    <a href={method.href}>
                      {method.action}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Still Need Help */}
        <div className="text-center">
          <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 rounded-3xl" />
            <div className="relative">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still can't find what you're looking for?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our team is always ready to help. Send us a message and we'll get back to you as soon as possible.
              </p>
              <Button asChild size="lg">
                <a href="/support">
                  Contact Support
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
