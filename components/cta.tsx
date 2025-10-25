"use client"

import { ArrowRight, Calendar, MessageCircle, Star } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-accent/5 to-transparent rounded-3xl" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-12 lg:p-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 text-balance leading-tight">
                Ready to get{" "}
                <span className="text-primary font-bold">
                  started?
                </span>
              </h2>

              <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
                Transform your business with our comprehensive IT solutions. Let's build something amazing together.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="group px-10 py-5 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3">
                  <Calendar className="w-6 h-6" />
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group px-10 py-5 border-2 border-border bg-background/50 backdrop-blur-sm text-foreground rounded-2xl hover:bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Let's Chat
                </button>
              </div>

              {/* Contact info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-medium">Trusted by 50+ companies</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
                <div>
                  <span className="font-medium">hello@cleaniquecoders.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTAs */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-8 bg-card/30 backdrop-blur-sm border border-border rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Free Consultation</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Discuss your project requirements with our experts
            </p>
            <button className="text-primary font-medium hover:underline">
              Book now →
            </button>
          </div>

          <div className="text-center p-8 bg-card/30 backdrop-blur-sm border border-border rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Quick Quote</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get an estimate for your project in 24 hours
            </p>
            <button className="text-primary font-medium hover:underline">
              Get quote →
            </button>
          </div>

          <div className="text-center p-8 bg-card/30 backdrop-blur-sm border border-border rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Case Studies</h3>
            <p className="text-muted-foreground text-sm mb-4">
              See how we've helped other businesses succeed
            </p>
            <button className="text-primary font-medium hover:underline">
              View stories →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
