import { Users, Lightbulb, Target } from "lucide-react"

const programs = [
  {
    icon: Target,
    title: "Bootcamp",
    description: "Comprehensive training from the ground up for aspiring developers.",
  },
  {
    icon: Lightbulb,
    title: "Coaching",
    description: "Tailored coaching to help developers solve real-world problems.",
  },
  {
    icon: Users,
    title: "Mentoring",
    description: "Long-term mentorship for gradual, steady improvement in software development.",
  },
]

export default function Training() {
  return (
    <section id="training" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Training Programs</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Empower developers at all levels with our comprehensive training and mentorship programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{program.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{program.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
