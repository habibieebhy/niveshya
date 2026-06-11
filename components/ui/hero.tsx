import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CircleCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background"
    >
      {/* Subtle Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-600 dark:text-emerald-400">
              8+ Years of Accounting & Compliance Experience
            </div>

            <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl text-foreground">

              Accounting,

              <span className="block text-emerald-500">
                Taxation &
              </span>

              Compliance Services

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Professional bookkeeping, GST compliance,
              payroll support, taxation and outsourced
              accounting services for SMEs, traders,
              partnerships and growing businesses.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button
                size="lg"
                className="gap-2 bg-emerald-600 text-white hover:bg-emerald-700"
              >
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a href="tel:+918638834593">
                  Call Now
                </a>
              </Button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="hidden lg:flex items-center justify-center">

            <Card className="w-[460px] border-border/50 bg-card/40 shadow-none backdrop-blur-xl">

              <CardContent className="p-12">

                <div className="flex flex-col items-center text-center">

                  <Image
                    src="/logo.png"
                    alt="Niveshya Advisory"
                    width={140}
                    height={140}
                    priority
                    className="h-36 w-36 object-contain"
                  />

                  <div className="mt-8">

                    <h3 className="text-4xl font-semibold tracking-tight text-foreground">
                      Niveshya Advisory
                    </h3>

                    <p className="mt-3 text-muted-foreground">
                      Accounting • Taxation • Compliance
                    </p>

                  </div>

                </div>

                <div className="my-10 h-px bg-border" />

                <div className="space-y-5">

                  {[
                    "GST Compliance & Return Filing",
                    "Accounting & Bookkeeping",
                    "Payroll Support Services",
                    "Taxation & Statutory Compliance",
                    "MIS & Financial Reporting",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CircleCheck className="h-5 w-5 text-emerald-500" />

                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </CardContent>

            </Card>

          </div>

        </div>

      </div>
    </section>
  );
}