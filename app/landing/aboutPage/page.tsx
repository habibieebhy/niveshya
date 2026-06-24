import Navbar from "@/components/ui/navbar";
import Footer from "@/components/footer/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold tracking-widest text-emerald-600">ABOUT US</p>
        <h1 className="mb-10 text-4xl font-bold tracking-tight md:text-5xl">
          Managing Today. Growing Tomorrow.
        </h1>

        <div className="space-y-10 text-lg text-muted-foreground leading-relaxed">
          <section>
            <p className="mb-4">
              At Niveshya Advisory, we are a dedicated team of financial professionals and compliance experts based in Assam, India. Our mission is to empower individuals, families, and businesses to make informed financial decisions with confidence.
            </p>
            <p>
              Whether you are a growing SME looking to streamline your accounting processes, or an individual aiming to build a robust retirement corpus, we provide the strategic guidance and hands-on support required to turn your financial goals into reality.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Our Core Divisions</h2>
            
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border bg-card p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Wealth Creation</h3>
                <p className="text-base">
                  We offer personalized investment planning, mutual fund advisory, and insurance solutions. Our goal-based approach ensures that every recommendation is directly aligned with your long-term ambitions, risk profile, and life milestones.
                </p>
              </div>
              
              <div className="rounded-2xl border bg-card p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Accounting & Compliance</h3>
                <p className="text-base">
                  We provide scalable accounting, taxation, GST compliance, and outsourced bookkeeping services. We help MSMEs, proprietorships, and partnership firms stay compliant, financially organized, and focused on growth.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Why Choose Niveshya?</h2>
            <ul className="list-inside list-disc space-y-3 text-base">
              <li>
                <strong className="text-foreground">Transparency:</strong> Clear communication, straightforward recommendations, and no unnecessary complexity.
              </li>
              <li>
                <strong className="text-foreground">Objective Guidance:</strong> Advice focused entirely on your financial goals, risk profile, and long-term success.
              </li>
              <li>
                <strong className="text-foreground">Client-First Approach:</strong> Every recommendation starts with a deep understanding of your unique needs and priorities.
              </li>
              <li>
                <strong className="text-foreground">Long-Term Focus:</strong> We believe in building sustainable financial outcomes rather than chasing short-term market trends.
              </li>
            </ul>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}