export default function Stats() {
  return (
    <section className="border-y py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">

        <div>
          <div className="text-4xl font-bold">500+</div>
          <p className="text-muted-foreground">
            Opportunities
          </p>
        </div>

        <div>
          <div className="text-4xl font-bold">₹250M+</div>
          <p className="text-muted-foreground">
            Capital Analyzed
          </p>
        </div>

        <div>
          <div className="text-4xl font-bold">98%</div>
          <p className="text-muted-foreground">
            Accuracy
          </p>
        </div>

        <div>
          <div className="text-4xl font-bold">24/7</div>
          <p className="text-muted-foreground">
            Monitoring
          </p>
        </div>

      </div>
    </section>
  );
}