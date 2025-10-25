"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Users, Calendar, Award } from "lucide-react"

const stats = [
  {
    icon: Calendar,
    value: "9+",
    label: "Years of Excellence",
    description: "Delivering quality IT solutions since 2016",
    color: "text-blue-600"
  },
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    description: "Businesses transformed across Malaysia",
    color: "text-green-600"
  },
  {
    icon: Award,
    value: "20+",
    label: "Major Projects",
    description: "From startups to government systems",
    color: "text-purple-600"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Client Satisfaction",
    description: "Proven track record of success",
    color: "text-orange-600"
  }
]

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats-section" className="py-32 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            Proven Results,{" "}
            <span className="text-primary font-bold">
              Trusted Partnership
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Numbers that speak to our commitment to excellence and our clients' success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`text-center p-8 bg-background/50 backdrop-blur-sm border border-border rounded-2xl transition-all duration-700 hover:shadow-xl hover:scale-105 [animation-delay:${index * 100}ms] ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-background border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>

                {/* Value */}
                <div className="mb-2">
                  <span className="text-5xl font-bold text-foreground">{stat.value}</span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Performance highlight similar to .NET website */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">
              Faster delivery, better quality, superior results
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven development methodology ensures rapid delivery without compromising on quality or scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">3x</div>
              <div className="text-sm text-muted-foreground font-medium mb-2">FASTER DEVELOPMENT</div>
              <p className="text-xs text-muted-foreground">Using modern frameworks and proven methodologies</p>
            </div>

            <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
              <div className="text-sm text-muted-foreground font-medium mb-2">COST REDUCTION</div>
              <p className="text-xs text-muted-foreground">Through efficient processes and automation</p>
            </div>

            <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground font-medium mb-2">UPTIME GUARANTEE</div>
              <p className="text-xs text-muted-foreground">Reliable, scalable solutions built to last</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
