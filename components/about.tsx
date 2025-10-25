"use client"

import { Users, Award, Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react"

const stats = [
  { icon: Calendar, label: "Years of Experience", value: "8+" },
  { icon: Users, label: "Happy Clients", value: "50+" },
  { icon: Award, label: "Projects Delivered", value: "100+" },
  { icon: MapPin, label: "Countries Served", value: "5+" }
]

const team = [
  {
    name: "Nasrul Hazim",
    role: "Founder & Lead Developer",
    description: "Full-stack developer with 8+ years of experience in building scalable web applications.",
    avatar: "/placeholder-user.jpg"
  }
]

export default function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About CCR</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Building{" "}
            <span className="text-primary font-bold">
              Tomorrow's
            </span>{" "}
            Software Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Since 2016, Cleanique Coders has been at the forefront of software development, helping organizations transform their digital presence with cutting-edge technology solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02]"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2016, Cleanique Coders began as a vision to bridge the gap between complex technology and practical business solutions. What started as a small consultancy has grown into a trusted partner for organizations ranging from government agencies to innovative startups.
              </p>
              <p>
                We believe that great software should not only solve problems but also empower people and organizations to achieve more. This philosophy drives everything we do, from the initial consultation to the final deployment and beyond.
              </p>
              <p>
                Our team combines deep technical expertise with a genuine understanding of business needs, ensuring that every solution we deliver creates real value for our clients.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-linear-to-br from-primary/10 to-primary/20 rounded-3xl border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">2016</div>
                <div className="text-xl text-muted-foreground">Founded</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="p-8 bg-card/50 backdrop-blur-sm border border-border rounded-3xl">
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower organizations with innovative software solutions that drive growth, efficiency, and digital transformation. We're committed to delivering excellence in every project while fostering long-term partnerships built on trust and results.
            </p>
          </div>
          <div className="p-8 bg-card/50 backdrop-blur-sm border border-border rounded-3xl">
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Values</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Excellence in everything we do
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Transparent communication
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Continuous learning and improvement
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Client success is our success
              </li>
            </ul>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-foreground mb-4">
            Meet the Team
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind Cleanique Coders who make it all possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center p-8 bg-card/50 backdrop-blur-sm border border-border rounded-3xl transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="w-24 h-24 rounded-full bg-linear-to-br from-primary/20 to-primary/30 border-2 border-primary/20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">NH</span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
              <div className="text-primary font-medium mb-4">{member.role}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Ready to work with a team that cares about your success?
          </p>
          <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 mx-auto">
            Let's Work Together
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
