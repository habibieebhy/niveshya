import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-5xl font-bold">
          Start Investing Smarter
        </h2>

        <p className="mt-6 text-muted-foreground">
          Join a platform designed to help investors make
          informed decisions with confidence.
        </p>

        <Button
          size="lg"
          className="mt-8"
        >
          Get Started
        </Button>

      </div>
    </section>
  );
}