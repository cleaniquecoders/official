"use client"

import { useState } from "react"
import { Cookie, Settings, Shield, Eye, ToggleLeft, ToggleRight, Info, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const cookieCategories = [
  {
    id: "essential",
    name: "Essential Cookies",
    description: "Required for basic website functionality",
    required: true,
    icon: Shield,
    cookies: [
      {
        name: "session_id",
        purpose: "Maintains user session across pages",
        duration: "Session",
        provider: "Cleanique Coders"
      },
      {
        name: "csrf_token",
        purpose: "Protects against cross-site request forgery attacks",
        duration: "Session",
        provider: "Cleanique Coders"
      },
      {
        name: "cookie_consent",
        purpose: "Remembers your cookie preferences",
        duration: "1 year",
        provider: "Cleanique Coders"
      }
    ]
  },
  {
    id: "analytics",
    name: "Analytics Cookies",
    description: "Help us understand how visitors use our website",
    required: false,
    icon: Eye,
    cookies: [
      {
        name: "_ga",
        purpose: "Distinguishes unique users and sessions",
        duration: "2 years",
        provider: "Google Analytics"
      },
      {
        name: "_ga_*",
        purpose: "Tracks user interactions and page views",
        duration: "2 years",
        provider: "Google Analytics"
      },
      {
        name: "_gid",
        purpose: "Distinguishes unique users for 24 hours",
        duration: "24 hours",
        provider: "Google Analytics"
      }
    ]
  },
  {
    id: "functional",
    name: "Functional Cookies",
    description: "Enable enhanced functionality and personalization",
    required: false,
    icon: Settings,
    cookies: [
      {
        name: "theme_preference",
        purpose: "Remembers your dark/light mode preference",
        duration: "1 year",
        provider: "Cleanique Coders"
      },
      {
        name: "language_preference",
        purpose: "Stores your preferred language setting",
        duration: "1 year",
        provider: "Cleanique Coders"
      },
      {
        name: "form_data",
        purpose: "Temporarily stores form inputs to prevent data loss",
        duration: "1 hour",
        provider: "Cleanique Coders"
      }
    ]
  },
  {
    id: "marketing",
    name: "Marketing Cookies",
    description: "Used to track visitors across websites for marketing purposes",
    required: false,
    icon: Info,
    cookies: [
      {
        name: "marketing_consent",
        purpose: "Tracks marketing communication preferences",
        duration: "2 years",
        provider: "Cleanique Coders"
      },
      {
        name: "utm_source",
        purpose: "Tracks the source of website visits for marketing analysis",
        duration: "30 days",
        provider: "Cleanique Coders"
      }
    ]
  }
]

export default function CookiePolicy() {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: false,
    functional: false,
    marketing: false
  })

  const handleToggleChange = (categoryId: string, enabled: boolean) => {
    setCookieSettings(prev => ({
      ...prev,
      [categoryId]: enabled
    }))
  }

  const handleSavePreferences = () => {
    // In a real implementation, this would save to localStorage and set actual cookies
    console.log("Saving cookie preferences:", cookieSettings)

    // Show a confirmation (in real app, you might use a toast notification)
    alert("Cookie preferences saved successfully!")
  }

  const acceptAllCookies = () => {
    setCookieSettings({
      essential: true,
      analytics: true,
      functional: true,
      marketing: true
    })
  }

  const rejectAllCookies = () => {
    setCookieSettings({
      essential: true, // Essential cookies cannot be disabled
      analytics: false,
      functional: false,
      marketing: false
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-linear-to-br from-primary/5 to-primary/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-full mb-6">
              <Cookie className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Cookie Policy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Cookie{" "}
              <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Learn about how we use cookies and similar technologies to improve your browsing experience.
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
            <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
            <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
              <p>
                Cookies are small text files that are stored on your device when you visit our website. They help us
                provide you with a better browsing experience by remembering your preferences, analyzing how you use
                our site, and enabling certain functionality.
              </p>
              <p>
                We use both session cookies (which expire when you close your browser) and persistent cookies (which
                remain on your device for a set period). Some cookies are essential for our website to function properly,
                while others help us improve our services or provide you with relevant content.
              </p>
              <p>
                You have control over which cookies you accept. Essential cookies cannot be disabled as they are necessary
                for the website to function, but you can choose to accept or reject other types of cookies.
              </p>
            </div>
          </div>
        </div>

        {/* Cookie Preferences */}
        <div className="mb-16">
          <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
                <Settings className="w-6 h-6 text-primary" />
                Manage Your Cookie Preferences
              </h3>
              <p className="text-muted-foreground">
                Control which types of cookies you want to allow on our website
              </p>
            </div>

            <div className="space-y-6">
              {cookieCategories.map((category) => {
                const Icon = category.icon
                const isEnabled = cookieSettings[category.id as keyof typeof cookieSettings]

                return (
                  <div key={category.id} className="border border-border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{category.name}</h3>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {category.required ? (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Required
                          </span>
                        ) : (
                          <Switch
                            checked={isEnabled}
                            onCheckedChange={(checked) => handleToggleChange(category.id, checked)}
                          />
                        )}
                      </div>
                    </div>

                    {/* Cookie Details */}
                    <div className="space-y-3">
                      {category.cookies.map((cookie, index) => (
                        <div key={index} className="bg-muted/30 rounded-md p-4">
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
                            <div>
                              <span className="font-medium text-foreground">Name:</span>
                              <p className="text-muted-foreground font-mono">{cookie.name}</p>
                            </div>
                            <div>
                              <span className="font-medium text-foreground">Purpose:</span>
                              <p className="text-muted-foreground">{cookie.purpose}</p>
                            </div>
                            <div>
                              <span className="font-medium text-foreground">Duration:</span>
                              <p className="text-muted-foreground">{cookie.duration}</p>
                            </div>
                            <div>
                              <span className="font-medium text-foreground">Provider:</span>
                              <p className="text-muted-foreground">{cookie.provider}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button onClick={handleSavePreferences} className="flex-1">
                <Save className="w-4 h-4 mr-2" />
                Save Preferences
              </Button>
              <Button onClick={acceptAllCookies} variant="outline" className="flex-1">
                Accept All Cookies
              </Button>
              <Button onClick={rejectAllCookies} variant="outline" className="flex-1">
                Reject All (Except Essential)
              </Button>
            </div>
          </div>
        </div>

        {/* Managing Cookies */}
        <div className="mb-16">
          <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Managing Cookies in Your Browser</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Browser Settings</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  You can manage cookies directly in your browser settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• View and delete existing cookies</li>
                  <li>• Block cookies from specific websites</li>
                  <li>• Block third-party cookies</li>
                  <li>• Clear all cookies when you close the browser</li>
                  <li>• Set exceptions for trusted websites</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Browser-Specific Instructions</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-foreground">Chrome:</span>
                    <p className="text-muted-foreground">Settings → Privacy and Security → Site Settings → Cookies</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Firefox:</span>
                    <p className="text-muted-foreground">Options → Privacy & Security → Cookies and Site Data</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Safari:</span>
                    <p className="text-muted-foreground">Preferences → Privacy → Manage Website Data</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Edge:</span>
                    <p className="text-muted-foreground">Settings → Cookies and Site Permissions → Cookies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="mb-16">
          <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Third-Party Services</h3>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                Our website may use third-party services that set their own cookies. These services have their own
                privacy policies and cookie practices:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Google Analytics</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Helps us understand website usage and improve user experience.
                  </p>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    Google Privacy Policy →
                  </a>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Contact Forms</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Forms may use temporary cookies to prevent spam and improve functionality.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    These cookies are essential for form operation and cannot be disabled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Updates */}
        <div className="mb-16">
          <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
            <h3 className="text-xl font-bold text-foreground mb-4">Changes to This Policy</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices,
                technology, or legal requirements. When we make significant changes, we will notify you by:
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Updating the "Last updated" date at the top of this policy</li>
                <li>• Displaying a notification on our website</li>
                <li>• Sending an email notification for major changes (if you've provided your email)</li>
              </ul>
              <p>
                We encourage you to review this policy periodically to stay informed about how we use cookies.
              </p>
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
              <Cookie className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Questions About Cookies?
              </h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions about our use of cookies or this policy, please don't hesitate to contact us.
              </p>
              <Button asChild>
                <a href="mailto:hello@cleaniquecoders.com?subject=Cookie%20Policy%20Inquiry&body=Hi%20Cleanique%20Coders%20team%2C%0A%0AI%20have%20a%20question%20about%20your%20Cookie%20Policy%3A%0A%0A%5BPlease%20describe%20your%20question%5D%0A%0AThank%20you%21">
                  Contact Us About Cookies
                </a>
              </Button>
              <div className="mt-6 text-sm text-muted-foreground">
                <p>Email: hello@cleaniquecoders.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
