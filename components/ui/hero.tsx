import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm text-muted-foreground">
            Trusted Investment Intelligence Platform
          </div>

          <h1 className="mt-8 text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            Make Better
            <span className="block text-emerald-500">
              Investment Decisions
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Evaluate opportunities, understand risk,
            and allocate capital with confidence using
            data-driven investment intelligence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              Learn More
            </Button>

          </div>

          <div className="mt-16 flex flex-wrap gap-10 text-sm text-muted-foreground">

            <div>
              <div className="text-2xl font-bold text-foreground">
                ₹250M+
              </div>

              <div>
                Capital Analysed
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-foreground">
                500+
              </div>

              <div>
                Opportunities Tracked
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-foreground">
                98%
              </div>

              <div>
                Data Accuracy
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}