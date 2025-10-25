export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto text-balance">
            Let's discuss how our IT solutions can help you achieve your business goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-semibold">
              Schedule a Consultation
            </button>
            <button className="px-8 py-3 border border-foreground/20 text-foreground rounded-full hover:bg-foreground/5 transition font-semibold">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
