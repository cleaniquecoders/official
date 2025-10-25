"use client"

import { Shield, Eye, Lock, Users, Database, Globe, Mail, FileText } from "lucide-react"

const privacySections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "Personal Information: Name, email address, phone number, and company details when you contact us or request our services.",
      "Project Information: Details about your development requirements, technical specifications, and project goals.",
      "Communication Records: Records of our interactions including emails, calls, and meeting notes for service delivery purposes.",
      "Technical Information: Server logs, IP addresses, browser type, and device information for website functionality and security.",
      "Cookies and Analytics: Website usage data to improve user experience and analyze site performance."
    ]
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    content: [
      "Service Delivery: To provide development services, training, consulting, and technical support.",
      "Communication: To respond to inquiries, provide project updates, and deliver requested information.",
      "Service Improvement: To enhance our services, develop new offerings, and improve user experience.",
      "Legal Compliance: To comply with applicable laws, regulations, and legal processes.",
      "Marketing: To send relevant information about our services (with your consent and opt-out options)."
    ]
  },
  {
    icon: Lock,
    title: "Data Protection & Security",
    content: [
      "Encryption: We use industry-standard encryption for data transmission and storage.",
      "Access Controls: Strict access controls ensure only authorized personnel can access your information.",
      "Regular Audits: We conduct regular security audits and assessments of our systems and processes.",
      "Secure Infrastructure: Our servers and databases are hosted on secure, monitored infrastructure.",
      "Data Minimization: We collect and retain only the information necessary for service delivery."
    ]
  },
  {
    icon: Users,
    title: "Information Sharing",
    content: [
      "Service Providers: We may share information with trusted third-party service providers who assist in our operations.",
      "Legal Requirements: We may disclose information when required by law or to protect our rights and safety.",
      "Business Transfers: In the event of a merger or acquisition, user information may be transferred to the new entity.",
      "With Your Consent: We may share information with your explicit consent for specific purposes.",
      "No Selling: We never sell, rent, or trade your personal information to third parties for marketing purposes."
    ]
  }
]

const contactInfo = {
  email: "hello@cleaniquecoders.com",
  address: "Cleanique Coders Resources Sdn Bhd",
  registration: "Registration No: 201603028084 (002507773-X)"
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-linear-to-br from-primary/5 to-primary/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-full mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Privacy Policy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Privacy{" "}
              <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
            <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
              <p>
                Cleanique Coders Resources Sdn Bhd ("we," "our," or "us") is committed to protecting your privacy and personal information.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website,
                use our services, or interact with us.
              </p>
              <p>
                As a software development and IT consulting company, we understand the importance of data privacy and security.
                We are committed to maintaining the highest standards of data protection in accordance with applicable privacy laws
                and regulations.
              </p>
              <p>
                By using our services or website, you agree to the collection and use of information in accordance with this policy.
                If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8 mb-16">
          {privacySections.map((section, index) => {
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

        {/* Your Rights */}
        <div className="mb-16">
          <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                Your Rights
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Access & Correction</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  You have the right to access, update, or correct your personal information at any time.
                </p>

                <h4 className="font-semibold text-foreground mb-3">Data Portability</h4>
                <p className="text-sm text-muted-foreground">
                  You can request a copy of your personal data in a structured, machine-readable format.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Deletion</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  You can request deletion of your personal information, subject to legal and contractual obligations.
                </p>

                <h4 className="font-semibold text-foreground mb-3">Opt-out</h4>
                <p className="text-sm text-muted-foreground">
                  You can opt-out of marketing communications at any time through unsubscribe links or by contacting us.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Retention */}
        <div className="mb-16">
          <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Data Retention</h3>

            <div className="space-y-4 text-muted-foreground">
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Active Projects</h4>
                  <p className="text-sm">Information retained throughout project duration and 7 years after completion for legal and tax purposes.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Marketing Data</h4>
                  <p className="text-sm">Marketing communications data retained until you opt-out or request deletion.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Website Analytics</h4>
                  <p className="text-sm">Anonymous analytics data retained for 26 months to improve our services.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Support Records</h4>
                  <p className="text-sm">Support and communication records retained for 3 years for quality assurance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <div className="relative overflow-hidden p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 opacity-100" />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Contact Us About Privacy</h3>
                  <p className="text-muted-foreground">Questions about this privacy policy or your data?</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Email</h4>
                  <a
                    href={`mailto:${contactInfo.email}?subject=Privacy%20Policy%20Inquiry`}
                    className="text-primary hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Company</h4>
                  <p className="text-muted-foreground text-sm">
                    {contactInfo.address}<br />
                    {contactInfo.registration}
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-background/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Response Time:</strong> We will respond to privacy-related inquiries within 30 days of receipt.
                  For urgent privacy concerns, please include "URGENT" in your email subject line.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Updates */}
        <div>
          <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl text-center">
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-4">Policy Updates</h3>
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational,
              legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date.
            </p>
            <p className="text-sm text-muted-foreground">
              We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
