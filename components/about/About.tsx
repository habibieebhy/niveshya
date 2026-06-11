export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <p className="text-sm font-medium text-emerald-500">
              ABOUT NIVESHYA
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Better investment decisions start with better information.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Niveshya is designed to help investors evaluate opportunities,
              understand risk, and make capital allocation decisions with
              clarity. Instead of noise, speculation, and endless dashboards,
              we focus on actionable intelligence.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}