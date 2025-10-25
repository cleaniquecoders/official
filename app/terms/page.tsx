"use client"

import { Scale, FileText, Users, AlertTriangle, Clock, Mail, Shield, CheckCircle } from "lucide-react"

const termsSection = [
  {
    icon: FileText,
    title: "Services",
    content: [
      "Software Development: Custom web applications, mobile apps, and enterprise solutions using modern technologies.",
      "IT Consulting: Technical consultation, system architecture design, and technology strategy planning.",
      "Code Assessment: Code review, quality analysis, security audits, and performance optimization recommendations.",
      "Developer Training: Corporate training programs, workshops, and skill development courses.",
      "Project Migration: Legacy system modernization, platform migrations, and technology upgrades.",
      "Technical Writing: Documentation creation, API documentation, and technical content development."
    ]
  },
  {
    icon: Users,
    title: "User Responsibilities",
    content: [
      "Provide accurate and complete information for project requirements and specifications.",
      "Respond promptly to requests for feedback, approvals, and clarifications during project development.",
      "Ensure proper access credentials and permissions for systems, databases, and third-party services.",
      "Maintain confidentiality of sensitive information shared during the engagement.",
      "Comply with all applicable laws and regulations in your jurisdiction.",
      "Use our services only for lawful purposes and in accordance with these terms."
    ]
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    content: [
      "Client Ownership: Upon full payment, clients own the custom code and applications developed specifically for them.",
      "Open Source: We may use open-source libraries and frameworks, which retain their original licenses.",
      "Company IP: Our methodologies, frameworks, and proprietary tools remain our intellectual property.",
      "Third-Party: Any third-party components or services used retain their respective ownership and licensing terms.",
      "License Grant: We grant clients a non-exclusive license to use our proprietary tools included in deliverables.",
      "Restrictions: Clients may not resell, redistribute, or claim ownership of our proprietary methodologies."
    ]
  },
  {
    icon: AlertTriangle,
    title: "Limitations & Disclaimers",
    content: [
      "Service Availability: While we strive for high availability, we do not guarantee uninterrupted service access.",
      "Performance: We make reasonable efforts to meet performance expectations but cannot guarantee specific results.",
      "Third-Party Services: We are not responsible for failures or issues with third-party services or platforms.",
      "Data Loss: Clients are responsible for maintaining backups of their data and systems.",
      "Compatibility: We cannot guarantee compatibility with all future software or hardware updates.",
      "Limitation of Liability: Our liability is limited to the amount paid for services in the 12 months preceding any claim."
    ]
  }
]

const paymentTerms = [
  {
    title: "Payment Schedule",
    description: "Project-based payments with milestone-driven billing",
    details: [
      "50% deposit required before project commencement",
      "Remaining balance split across project milestones",
      "Training services: Payment due before session start",
      "Consulting: Monthly billing for ongoing engagements"
    ]
  },
  {
    title: "Payment Methods",
    description: "Multiple secure payment options available",
    details: [
      "Bank transfer (preferred method)",
      "Online payment platforms",
      "Company checks (for corporate clients)",
      "Cryptocurrency (upon special arrangement)"
    ]
  },
  {
    title: "Late Payments",
    description: "Policies for overdue payments",
    details: [
      "5% late fee applied after 30 days past due",
      "Project suspension after 45 days past due",
      "Collections action after 60 days past due",
      "All collection costs charged to client"
    ]
  }
]

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-linear-to-br from-primary/5 to-primary/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-full mb-6">
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Terms of Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Terms of{" "}
              <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              These terms govern your use of our services and establish the legal framework for our business relationship.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: October 25, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="mb-16">
          <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">Agreement Overview</h2>
            <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your")
                and Cleanique Coders Resources Sdn Bhd ("Company," "we," "our," or "us") regarding your use of our software
                development, IT consulting, and related services.
              </p>
              <p>
                By engaging our services, submitting a project request, or signing a service agreement, you acknowledge that
                you have read, understood, and agree to be bound by these Terms. These Terms apply to all services provided,
                including but not limited to software development, consulting, training, and support services.
              </p>
              <p>
                If you do not agree with any part of these Terms, please do not use our services. We reserve the right to
                modify these Terms at any time, and continued use of our services after changes constitutes acceptance of
                the updated Terms.
              </p>
            </div>
          </div>
        </div>

        {/* Main Terms Sections */}
        <div className="space-y-8 mb-16">
          {termsSection.map((section, index) => {
            const Icon = section.icon
            return (
              <div key={index} className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    {section.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Payment Terms */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Payment Terms</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {paymentTerms.map((term, index) => (
              <div key={index} className="h-full p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-foreground mb-2">{term.title}</h4>
                  <p className="text-sm text-muted-foreground">{term.description}</p>
                </div>

                <ul className="space-y-2">
                  {term.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Project Terms */}
        <div className="mb-16">
          <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                Project Terms & Delivery
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Project Scope</h4>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Detailed project scope defined in written agreements</li>
                  <li>• Changes require written approval and may affect timeline/cost</li>
                  <li>• Scope creep managed through formal change request process</li>
                  <li>• Clear deliverables and acceptance criteria established</li>
                </ul>

                <h4 className="font-semibold text-foreground mb-3">Timeline & Delivery</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Realistic timelines based on project complexity</li>
                  <li>• Regular progress updates and milestone reviews</li>
                  <li>• Client delays may impact overall project timeline</li>
                  <li>• Force majeure events may affect delivery schedules</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Quality Assurance</h4>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Comprehensive testing before delivery</li>
                  <li>• 30-day warranty for bug fixes on delivered code</li>
                  <li>• Code follows industry best practices and standards</li>
                  <li>• Documentation provided for all custom development</li>
                </ul>

                <h4 className="font-semibold text-foreground mb-3">Support & Maintenance</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Optional ongoing support agreements available</li>
                  <li>• Emergency support for critical issues</li>
                  <li>• Regular maintenance and security updates</li>
                  <li>• Performance monitoring and optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Termination */}
        <div className="mb-16">
          <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Termination & Cancellation</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Client Termination</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Clients may terminate services with 30 days written notice. Payment is required for all work completed
                  up to the termination date, including any costs incurred for the project.
                </p>

                <h4 className="font-semibold text-foreground mb-3">Company Termination</h4>
                <p className="text-sm text-muted-foreground">
                  We may terminate services immediately for non-payment, breach of terms, or if continuing the relationship
                  would be detrimental to either party.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Post-Termination</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• All outstanding payments become immediately due</li>
                  <li>• Client retains ownership of completed deliverables</li>
                  <li>• Confidentiality obligations survive termination</li>
                  <li>• Return or destruction of confidential materials</li>
                  <li>• Access to systems and accounts will be revoked</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Governing Law */}
        <div className="mb-16">
          <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Governing Law & Jurisdiction</h3>

            <div className="space-y-4 text-muted-foreground">
              <p>
                These Terms are governed by and construed in accordance with the laws of Malaysia. Any disputes arising
                from or related to these Terms or our services shall be subject to the exclusive jurisdiction of the
                courts of Malaysia.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Dispute Resolution</h4>
                  <p className="text-sm">
                    We encourage resolving disputes through good faith negotiation. If unsuccessful, disputes will be
                    resolved through binding arbitration under Malaysian Arbitration Act 2005.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Severability</h4>
                  <p className="text-sm">
                    If any provision of these Terms is found unenforceable, the remaining provisions shall remain in
                    full force and effect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="relative overflow-hidden p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl text-center">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 opacity-100" />

            {/* Content */}
            <div className="relative z-10">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Questions About These Terms?
              </h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms of Service, please contact us and we'll be happy to clarify.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@cleaniquecoders.com?subject=Terms%20of%20Service%20Inquiry&body=Hi%20Cleanique%20Coders%20team%2C%0A%0AI%20have%20a%20question%20about%20the%20Terms%20of%20Service%3A%0A%0A%5BPlease%20describe%20your%20question%5D%0A%0AThank%20you%21"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Legal Team
                </a>
              </div>
              <div className="mt-6 text-sm text-muted-foreground">
                <p>Cleanique Coders Resources Sdn Bhd</p>
                <p>Registration No: 201603028084 (002507773-X)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
