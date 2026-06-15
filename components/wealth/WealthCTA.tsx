import { ArrowRight } from "lucide-react";

export default function WealthCTA() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-8">
          Let's Build Your Financial Future
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Your Goals Deserve
          <br />
          More Than Guesswork.
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Whether you're planning for retirement, building wealth,
          protecting your family, or investing for future goals,
          we can help you create a clear financial roadmap.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-primary text-primary-foreground font-medium">
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </button>

          <button className="rounded-xl border px-6 py-3 font-medium">
            Contact Us
          </button>
        </div>

        <div className="mt-10 text-sm text-muted-foreground">
          Personalized Advice • Long-Term Planning • Transparent Approach
        </div>
      </div>
    </section>
  );
}