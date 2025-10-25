"use client"

import { Users, Award, Calendar, MapPin, ArrowRight, Sparkles, BookOpen, Target, Heart, UserCheck } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

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
                className="text-center p-8 bg-background/50 backdrop-blur-sm border border-border rounded-2xl transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02]"
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

        {/* Interactive Sections Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Our Story Modal Trigger */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="group cursor-pointer p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">Our Story</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Discover how Cleanique Coders began its journey in 2016 and evolved into a trusted technology partner.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Our Story
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-6 mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-primary mb-2">2016</div>
                      <div className="text-lg text-muted-foreground">Founded</div>
                    </div>
                  </div>
                  <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
                    <h4 className="text-lg font-semibold text-foreground mb-3">The Beginning</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Founded in 2016, Cleanique Coders began as a vision to bridge the gap between complex technology and practical business solutions.
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Our Evolution</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    What started as a small consultancy has grown into a trusted partner for organizations ranging from government agencies to innovative startups. We believe that great software should not only solve problems but also empower people and organizations to achieve more.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team combines deep technical expertise with a genuine understanding of business needs, ensuring that every solution we deliver creates real value for our clients.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Mission Modal Trigger */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="group cursor-pointer p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Empowering organizations with innovative software solutions that drive growth and digital transformation.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" />
                  Our Mission
                </DialogTitle>
              </DialogHeader>
              <div className="mt-6 p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To empower organizations with innovative software solutions that drive growth, efficiency, and digital transformation. We're committed to delivering excellence in every project while fostering long-term partnerships built on trust and results.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Values Modal Trigger */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="group cursor-pointer p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">Our Values</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The core principles that guide everything we do and shape our culture.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  <Heart className="w-6 h-6 text-primary" />
                  Our Values
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 mt-6">
                {[
                  "Excellence in everything we do",
                  "Transparent communication",
                  "Continuous learning and improvement",
                  "Client success is our success"
                ].map((value, index) => (
                  <div key={index} className="p-4 bg-background/50 backdrop-blur-sm border border-border rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          {/* Team Modal Trigger */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="group cursor-pointer p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <UserCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">Meet the Team</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The passionate individuals behind Cleanique Coders who make it all possible.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  <UserCheck className="w-6 h-6 text-primary" />
                  Meet the Team
                </DialogTitle>
              </DialogHeader>
              <div className="mt-6">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/30 border-2 border-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-primary">NH</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
                        <div className="text-primary font-medium mb-3">{member.role}</div>
                        <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
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
