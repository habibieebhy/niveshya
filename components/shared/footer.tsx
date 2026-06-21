import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-background pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background glow to match the hero */}
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="inline-flex items-center rounded-full border bg-card px-3 py-1 text-xs font-medium mb-6">
              Niveshya Advisory
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed pr-4">
              Financial Clarity. Business Growth. Long-Term Wealth. Empowering your financial journey with informed decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/accounting" className="hover:text-primary transition-colors">
                  Accounting & Compliance
                </Link>
              </li>
              <li>
                <Link href="/wealth" className="hover:text-primary transition-colors">
                  Wealth Creation
                </Link>
              </li>
              <li>
                <Link href="/accounting#taxation" className="hover:text-primary transition-colors">
                  Taxation Services
                </Link>
              </li>
              <li>
                <Link href="/wealth#mutual-funds" className="hover:text-primary transition-colors">
                  Mutual Fund Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Company */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>Assam, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@niveshya.co.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Powered By */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/40 text-sm text-muted-foreground gap-6">
          
          {/* UPDATED COPYRIGHT SECTION: Added logo.png inline */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Niveshya Logo" 
              className="h-6 w-auto object-contain grayscale opacity-60"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <p>© {new Date().getFullYear()} COPYRIGHT NIVESHYA x Brixta. All rights reserved.</p>
          </div>
          
          {/* Powered By Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className="font-medium tracking-wide uppercase text-[10px] text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
              Powered by
            </span>
            <div className="h-6 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <img 
                src="/footer.png" 
                alt="Powered by Logo" 
                className="h-full w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallbackText = e.currentTarget.nextElementSibling as HTMLElement | null;
                  if (fallbackText) {
                    fallbackText.style.display = 'block';
                  }
                }}
              />
              <span className="hidden font-bold text-xs tracking-widest">BRIXTA</span>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}