import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <p className="text-sm font-semibold tracking-widest text-emerald-600">
              CONTACT US
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Let's Discuss Your
              Accounting Requirements
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Whether you need bookkeeping, GST compliance,
              payroll support or complete outsourced accounting
              services, we're here to help your business stay
              financially organized and compliant.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-emerald-500/10 p-3">
                  <Phone className="h-5 w-5 text-emerald-600" />
                </div>

                <div>
                  <div className="font-medium">
                    Call Us
                  </div>

                  <div className="text-muted-foreground">
                    +91 8638834593
                  </div>

                  <div className="text-muted-foreground">
                    +91 9022391182
                  </div>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-emerald-500/10 p-3">
                  <Mail className="h-5 w-5 text-emerald-600" />
                </div>

                <div>
                  <div className="font-medium">
                    Email
                  </div>

                  <div className="text-muted-foreground">
                    rashmitasaha2013@gmail.com
                  </div>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-emerald-500/10 p-3">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                </div>

                <div>
                  <div className="font-medium">
                    Location
                  </div>

                  <div className="text-muted-foreground">
                    Guwahati, Assam, India
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="rounded-3xl border bg-card p-8">

            <h3 className="text-2xl font-semibold">
              Request A Consultation
            </h3>

            <p className="mt-2 text-muted-foreground">
              Tell us about your business requirements and we'll get back to you.
            </p>

            <div className="mt-8 space-y-4">

              <Input
                placeholder="Business Name"
              />

              <Input
                placeholder="Contact Person"
              />

              <Input
                placeholder="Phone Number"
              />

              <Input
                placeholder="Email Address"
              />

              <Input
                placeholder="Required Service (GST, Bookkeeping, Payroll, etc.)"
              />

              <Textarea
                className="min-h-[140px]"
                placeholder="Tell us about your accounting or compliance requirements..."
              />

              <Button
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                size="lg"
              >
                Schedule Consultation
              </Button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}