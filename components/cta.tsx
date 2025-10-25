"use client"

import { ArrowRight, Calendar, MessageCircle, Star } from "lucide-react"

export default function CTA() {
  return (
    <section id="cta" className="min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-accent/5 to-transparent rounded-3xl" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 bg-background/50 backdrop-blur-sm border border-border rounded-3xl p-12 lg:p-16 text-center">
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
                <a
                  href="mailto:hello@cleaniquecoders.com?subject=Schedule%20Consultation%20Request&body=Hi%20Cleanique%20Coders%20team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20my%20project%20requirements.%20Please%20let%20me%20know%20your%20available%20times.%0A%0AProject%20details%3A%0A-%20Industry%3A%20%0A-%20Project%20type%3A%20%0A-%20Timeline%3A%20%0A-%20Budget%20range%3A%20%0A%0AThank%20you%21"
                  className="group px-10 py-5 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3"
                >
                  <Calendar className="w-6 h-6" />
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="mailto:hello@cleaniquecoders.com?subject=Let's%20Chat%20-%20General%20Inquiry&body=Hi%20Cleanique%20Coders%20team%2C%0A%0AI'd%20like%20to%20chat%20about%20your%20services%20and%20how%20you%20might%20be%20able%20to%20help%20with%20my%20project.%0A%0APlease%20let%20me%20know%20the%20best%20way%20to%20get%20in%20touch.%0A%0ABest%20regards"
                  className="group px-10 py-5 border-2 border-border bg-background/50 backdrop-blur-sm text-foreground rounded-2xl hover:bg-background/70 hover:border-primary/50 hover:shadow-lg transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Let's Chat
                </a>
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
          <div className="group relative p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:scale-[1.02] text-center">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
              <div className="w-12 h-12 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-foreground transition-colors">Free Consultation</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Discuss your project requirements with our experts
              </p>
              <a
                href="mailto:hello@cleaniquecoders.com?subject=Free%20Consultation%20Request&body=Hi%20Cleanique%20Coders%20team%2C%0A%0AI%20would%20like%20to%20book%20a%20free%20consultation%20to%20discuss%20my%20project%20requirements%20with%20your%20experts.%0A%0AProject%20overview%3A%0A-%20Type%20of%20project%3A%20%0A-%20Current%20challenges%3A%20%0A-%20Goals%3A%20%0A-%20Preferred%20meeting%20time%3A%20%0A%0AThank%20you%21"
                className="text-primary font-medium hover:underline"
              >
                Book now →
              </a>
            </div>
          </div>

          <div className="group relative p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:scale-[1.02] text-center">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
              <div className="w-12 h-12 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-foreground transition-colors">Quick Quote</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Get an estimate for your project in 24 hours
              </p>
              <a
                href="mailto:hello@cleaniquecoders.com?subject=Quick%20Quote%20Request&body=Hi%20Cleanique%20Coders%20team%2C%0A%0AI%20would%20like%20to%20get%20a%20quick%20quote%20for%20my%20project.%20Here%20are%20the%20details%3A%0A%0AProject%20description%3A%0A-%20Type%20of%20application%2Fwebsite%3A%20%0A-%20Key%20features%20needed%3A%20%0A-%20Technology%20preferences%3A%20%0A-%20Timeline%3A%20%0A-%20Approximate%20budget%3A%20%0A%0APlease%20provide%20an%20estimate%20within%2024%20hours.%0A%0AThank%20you%21"
                className="text-primary font-medium hover:underline"
              >
                Get quote →
              </a>
            </div>
          </div>

          <div className="group relative p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:scale-[1.02] text-center">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
              <div className="w-12 h-12 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-foreground transition-colors">Case Studies</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                See how we've helped other businesses succeed
              </p>
              <a
                href="mailto:hello@cleaniquecoders.com?subject=Case%20Studies%20Request&body=Hi%20Cleanique%20Coders%20team%2C%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20case%20studies%20and%20success%20stories.%20Could%20you%20please%20share%20some%20relevant%20examples%20similar%20to%20my%20industry%20or%20project%20type%3F%0A%0AMy%20project%20context%3A%0A-%20Industry%3A%20%0A-%20Project%20type%3A%20%0A-%20Specific%20challenges%3A%20%0A%0AThank%20you%21"
                className="text-primary font-medium hover:underline"
              >
                View stories →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
