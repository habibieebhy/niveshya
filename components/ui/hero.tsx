export default function Hero() {
  return (
    <section id="home" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium mb-8 text-emerald-600 dark:text-emerald-400">
          8+ Years of Accounting & Compliance Experience
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-foreground">
          Accounting,
          <br />
          <span className="text-emerald-500">Taxation &</span>
          <br />
          Compliance Services
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Professional bookkeeping, GST compliance, taxation and 
          outsourced accounting services for SMEs, traders,
          partnerships and growing businesses.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <div className="rounded-full border px-4 py-2 text-sm text-muted-foreground">
            GST Compliance & Return Filing
          </div>
          <div className="rounded-full border px-4 py-2 text-sm text-muted-foreground">
            Accounting & Bookkeeping
          </div>
          <div className="rounded-full border px-4 py-2 text-sm text-muted-foreground">
            Taxation & Statutory Compliance
          </div>
          <div className="rounded-full border px-4 py-2 text-sm text-muted-foreground">
            MIS & Financial Reporting
          </div>
        </div>
      </div>
    </section>
  );
}