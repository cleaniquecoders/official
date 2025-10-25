"use client"

import { Users, Award, Calendar, MapPin, ArrowRight, Sparkles, BookOpen, Target, Heart, UserCheck, Building2 } from "lucide-react"
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
    role: "Founder",
    description: "Full-stack developer with 15+ years of experience in building scalable web applications.",
    avatar: "/nasrul-hazim.jpg"
  }
]

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 bg-background">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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

        {/* Company Info Button */}
        <div className="text-center mb-20">
          <Dialog>
            <DialogTrigger asChild>
              <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 mx-auto">
                <Building2 className="w-5 h-5" />
                Learn More About Our Company
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </DialogTrigger>
            <DialogContent className="w-[90vw]! max-w-6xl! max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold flex items-center gap-3 mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                  About Cleanique Coders
                </DialogTitle>
              </DialogHeader>

              {/* Bento Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

                {/* Our Story - Large Card */}
                <div className="lg:col-span-2 p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Founded in 2016</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Founded in 2016, Cleanique Coders began as a vision to bridge the gap between complex technology and practical business solutions. What started as a small consultancy has grown into a trusted partner for organizations ranging from government agencies to innovative startups.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We believe that great software should not only solve problems but also empower people and organizations to achieve more. This philosophy drives everything we do, from the initial consultation to the final deployment and beyond.
                    </p>
                  </div>
                </div>

                {/* Mission - Medium Card */}
                <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower organizations with innovative software solutions that drive growth, efficiency, and digital transformation. We're committed to delivering excellence in every project.
                  </p>
                </div>

                {/* Values - Medium Card */}
                <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Our Values</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Excellence in everything we do",
                      "Transparent communication",
                      "Continuous learning",
                      "Client success is our success"
                    ].map((value, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team - Large Card */}
                <div className="lg:col-span-2 p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Meet the Team</h3>
                  </div>
                  {team.map((member, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary/20 to-primary/30 border-2 border-primary/20 flex items-center justify-center shrink-0 overflow-hidden">
                        {member.avatar && member.avatar !== "/placeholder-user.jpg" ? (
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-lg font-bold text-primary">NH</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-foreground mb-1">{member.name}</h4>
                        <div className="text-primary font-medium mb-2">{member.role}</div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
