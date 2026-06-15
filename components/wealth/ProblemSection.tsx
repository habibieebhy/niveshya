export default function ProblemSection() {
  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16">

          <div>
            <p className="text-green-500 font-medium mb-4">
              THE PROBLEM
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Most investors don't fail because
              they're uninformed.
            </h2>

            <p className="text-zinc-400 text-lg">
              They fail because financial decisions
              become emotional decisions.
            </p>
          </div>

          <div className="space-y-6">

            <div>✕ No clear financial plan</div>

            <div>✕ Chasing market returns</div>

            <div>✕ Emotional investing decisions</div>

            <div>✕ Poor risk management</div>

            <div>✕ Inconsistent investing habits</div>

          </div>

        </div>

      </div>

    </section>
  );
}