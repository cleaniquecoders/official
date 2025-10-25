import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Stats from "@/components/stats"
import Projects from "@/components/projects"
import OpenSource from "@/components/open-source"
import Training from "@/components/training"
import About from "@/components/about"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Projects />
      <OpenSource />
      <Training />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
