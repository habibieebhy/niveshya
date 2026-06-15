export default function TrustStrip() {
  const items = [
    "Goal-Based Planning",
    "Mutual Fund Advisory",
    "Insurance Solutions",
    "Retirement Planning",
    "Long-Term Wealth Creation",
  ];

  return (
    <section className="border-y bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid md:grid-cols-5 gap-6 text-center">

          {items.map((item) => (
            <div
              key={item}
              className="font-medium"
            >
              ✓ {item}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}