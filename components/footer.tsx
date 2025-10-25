import { Mail, Linkedin, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">CC</span>
              </div>
              <span className="font-bold">Cleanique Coders</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">Delivering quality IT solutions since 2016.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  System Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Migration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:hello@cleaniquecoders.com"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition"
              >
                <Mail size={16} />
                hello@cleaniquecoders.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition"
              >
                <Globe size={16} />
                cleaniquecoders.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 Cleanique Coders Resources. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-primary-foreground transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
