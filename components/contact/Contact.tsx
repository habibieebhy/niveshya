import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Get In Touch
        </h2>

        <div className="mt-10 space-y-4">

          <Input placeholder="Your Name" />

          <Input placeholder="Email Address" />

          <Textarea
            placeholder="Tell us about your investment goals..."
          />

          <Button className="w-full">
            Submit
          </Button>

        </div>

      </div>
    </section>
  );
}