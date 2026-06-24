import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WealthCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-background border-t">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium mb-8 text-emerald-600 dark:text-emerald-400">
          Let's Build Your Financial Future
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
          Your Goals Deserve
          <br />
          More Than Guesswork.
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're planning for retirement, building wealth,
          protecting your family, or investing for future goals,
          we can help you create a clear financial roadmap.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors">
            Book a Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a href="tel:+918638834593" className="inline-flex items-center gap-2 rounded-xl border border-input px-8 py-4 font-semibold bg-background hover:bg-muted transition-colors">
            Contact Us
          </a>
        </div>
        
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground uppercase tracking-wider">
          <span className="flex items-center gap-2"><span className="text-emerald-500">•</span> Personalized Advice</span>
          <span className="flex items-center gap-2"><span className="text-emerald-500">•</span> Long-Term Planning</span>
          <span className="flex items-center gap-2"><span className="text-emerald-500">•</span> Transparent Approach</span>
        </div>
      </div>
    </section>
  );
}