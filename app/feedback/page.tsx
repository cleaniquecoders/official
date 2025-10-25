"use client"

import { useState } from "react"
import { MessageSquare, Star, TrendingUp, Users, Send, Heart, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const feedbackCategories = [
  "Website Experience",
  "Service Quality",
  "Documentation",
  "Support Experience",
  "Feature Request",
  "Bug Report",
  "General Feedback",
  "Partnership Inquiry",
  "Other"
]

const feedbackTypes = [
  { value: "compliment", label: "Compliment", icon: Heart, color: "text-red-500" },
  { value: "suggestion", label: "Suggestion", icon: Lightbulb, color: "text-yellow-500" },
  { value: "issue", label: "Issue/Problem", icon: MessageSquare, color: "text-blue-500" },
  { value: "feature", label: "Feature Request", icon: TrendingUp, color: "text-green-500" }
]

const recentFeedback = [
  {
    type: "compliment",
    category: "Service Quality",
    excerpt: "Excellent Laravel training program. The team is knowledgeable and responsive...",
    rating: 5,
    date: "2 days ago"
  },
  {
    type: "suggestion",
    category: "Documentation",
    excerpt: "It would be helpful to have more code examples in the API documentation...",
    rating: 4,
    date: "1 week ago"
  },
  {
    type: "compliment",
    category: "Support Experience",
    excerpt: "Quick response time and very helpful support team. Solved my issue within hours...",
    rating: 5,
    date: "2 weeks ago"
  }
]

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "",
    type: "",
    rating: "",
    subject: "",
    message: "",
    anonymous: false
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const emailBody = `
Feedback Type: ${formData.type}
Category: ${formData.category}
Rating: ${formData.rating ? formData.rating + '/5 stars' : 'Not provided'}
Name: ${formData.anonymous ? 'Anonymous' : formData.name}
Email: ${formData.anonymous ? 'Anonymous' : formData.email}
Company: ${formData.company || 'Not provided'}

Message:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:hello@cleaniquecoders.com?subject=${encodeURIComponent(`Feedback: ${formData.subject}`)}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-linear-to-br from-primary/5 to-primary/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Feedback</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Share Your{" "}
              <span className="text-primary">Feedback</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your feedback helps us improve our services and build better solutions. We value every suggestion, compliment, and constructive criticism.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Feedback Form */}
          <div className="lg:col-span-2">
            <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
              <div className="mb-6">
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
                  <Send className="w-5 h-5 text-primary" />
                  Submit Feedback
                </h3>
                <p className="text-muted-foreground">
                  Help us improve by sharing your thoughts, suggestions, or reporting issues.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Feedback Type */}
                  <div className="space-y-3">
                    <Label>Feedback Type *</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {feedbackTypes.map((type) => {
                        const Icon = type.icon
                        return (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => handleInputChange("type", type.value)}
                            className={`p-4 border rounded-lg text-left transition-all duration-200 ${
                              formData.type === type.value
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-border/70'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className={`w-5 h-5 ${type.color}`} />
                              <span className="font-medium">{type.label}</span>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name {!formData.anonymous && '*'}</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required={!formData.anonymous}
                        disabled={formData.anonymous}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address {!formData.anonymous && '*'}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required={!formData.anonymous}
                        disabled={formData.anonymous}
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
                        disabled={formData.anonymous}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {feedbackCategories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Brief summary of your feedback"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rating">Overall Rating (Optional)</Label>
                      <Select value={formData.rating} onValueChange={(value) => handleInputChange("rating", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Rate your experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent</SelectItem>
                          <SelectItem value="4">⭐⭐⭐⭐ Good</SelectItem>
                          <SelectItem value="3">⭐⭐⭐ Average</SelectItem>
                          <SelectItem value="2">⭐⭐ Poor</SelectItem>
                          <SelectItem value="1">⭐ Very Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Feedback *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please share your detailed feedback, suggestions, or describe any issues you encountered..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={formData.anonymous}
                      onChange={(e) => handleInputChange("anonymous", e.target.checked)}
                      className="rounded border-border"
                      aria-label="Submit feedback anonymously"
                    />
                    <Label htmlFor="anonymous" className="text-sm">
                      Submit anonymously (we won't be able to follow up)
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Feedback
                  </Button>
                </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Why Feedback Matters */}
            <div className="mb-6 p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
              <h3 className="text-lg font-semibold mb-4">Why Your Feedback Matters</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Continuous Improvement</h4>
                    <p className="text-sm text-muted-foreground">Your input helps us enhance our services and processes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Community Driven</h4>
                    <p className="text-sm text-muted-foreground">We build solutions based on real user needs and experiences.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Quality Focus</h4>
                    <p className="text-sm text-muted-foreground">Every feedback helps us maintain high quality standards.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Feedback */}
            <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Recent Feedback</h3>
                <p className="text-muted-foreground text-sm">What others are saying</p>
              </div>
              <div className="space-y-4">
                {recentFeedback.map((feedback, index) => {
                  const typeInfo = feedbackTypes.find(t => t.value === feedback.type)
                  const Icon = typeInfo?.icon || MessageSquare
                  return (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className={`w-4 h-4 ${typeInfo?.color || 'text-gray-500'}`} />
                        <span className="text-sm font-medium">{feedback.category}</span>
                        <span className="text-xs text-muted-foreground">{feedback.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{feedback.excerpt}</p>
                      {renderStars(feedback.rating)}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
