"use client"

import { Users, Lightbulb, Target, ArrowRight, BookOpen, Award, Clock } from "lucide-react"
import { useState } from "react"

const programs = [
  {
    icon: Target,
    title: "Bootcamp",
    description: "Intensive, comprehensive training programs designed to take you from beginner to industry-ready developer.",
    duration: "8-12 weeks",
    level: "Beginner to Intermediate",
    features: ["Full-stack development", "Project-based learning", "Industry mentorship", "Job placement support"],
    color: "from-blue-500/10 to-blue-600/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Lightbulb,
    title: "Coaching",
    description: "Personalized one-on-one coaching sessions to help developers overcome specific challenges and accelerate growth.",
    duration: "Flexible",
    level: "All levels",
    features: ["Personalized curriculum", "Real-world projects", "Code review sessions", "Career guidance"],
    color: "from-green-500/10 to-emerald-600/10",
    iconColor: "text-emerald-600"
  },
  {
    icon: Users,
    title: "Mentoring",
    description: "Long-term mentorship programs for steady improvement and professional development in software engineering.",
    duration: "3-6 months",
    level: "Intermediate to Advanced",
    features: ["Senior developer mentors", "Weekly progress reviews", "Industry best practices", "Leadership development"],
    color: "from-purple-500/10 to-violet-600/10",
    iconColor: "text-violet-600"
  },
]

const learningPaths = [
  {
    title: "Web Development",
    description: "Master modern web technologies including React, Node.js, and cloud deployment.",
    icon: "🌐",
    students: "200+"
  },
  {
    title: "Mobile Development",
    description: "Build native and cross-platform mobile applications with React Native and Flutter.",
    icon: "📱",
    students: "150+"
  },
  {
    title: "Cloud & DevOps",
    description: "Learn cloud infrastructure, CI/CD pipelines, and modern deployment strategies.",
    icon: "☁️",
    students: "100+"
  },
  {
    title: "Data Science",
    description: "Dive into data analysis, machine learning, and AI with Python and modern tools.",
    icon: "📊",
    students: "80+"
  }
]

export default function Training() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="training" className="py-32 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Everything you need to start your learning journey</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Developer{" "}
            <span className="text-primary font-bold">
              Training
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            CCR offers a comprehensive library of learning resources. Access hands-on training, mentorship, and content designed to help you build better software.
          </p>
        </div>

        {/* Main Training Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden ${
                  hoveredIndex === index
                    ? "border-primary/50 shadow-2xl scale-[1.02]"
                    : "hover:border-border/50 hover:shadow-lg"
                }`}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-linear-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 bg-background/50 backdrop-blur-sm border border-border/50 ${
                    hoveredIndex === index ? "scale-110 shadow-lg" : ""
                  }`}>
                    <Icon className={`w-8 h-8 transition-all duration-500 ${program.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {program.level}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className={`flex items-center gap-2 text-primary font-medium transition-all duration-300 ${
                    hoveredIndex === index ? "translate-x-2" : ""
                  }`}>
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Learning Paths */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">
              Popular Learning Paths
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover your path to build amazing software with our specialized training tracks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02] cursor-pointer text-center"
              >
                <div className="text-4xl mb-4">{path.icon}</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {path.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {path.description}
                </p>
                <div className="text-xs text-primary font-medium">
                  {path.students} students enrolled
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Ready to accelerate your development career?
          </p>
          <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 mx-auto">
            Start Learning Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
