"use client";

import { createLead } from "@/actions/create-lead";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import Link from "next/link";

export default function Contact() {
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 1. Save the form reference IMMEDIATELY before any async/await happens
    const form = e.currentTarget; 
    const formData = new FormData(form);
    
    const businessName = formData.get("businessName") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    // 2. Client-side length validation to prevent the Zod server error
    if (phone.length < 10 || phone.length > 10) {
      alert("Please enter a valid phone number with 10 digits.");
      return;
    }

    // 3. Format and properly encode the WhatsApp text to handle special characters
    const rawText = `*New Consultation Request*\n\n*Name:* ${businessName}\n*Phone:* ${phone}\n*Email:* ${email}\n*Service Required:* ${service}\n*Message:* ${message}`;
    const text = encodeURIComponent(rawText);
    const whatsappURL = `https://wa.me/919022391182?text=${text}`;

    // 4. Mobile Detection
    // We check if the user is on a mobile device so we don't break the deep link
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    let whatsappTab: Window | null = null;

    // Only open a blank tab on desktop to bypass strict popup blockers.
    // On mobile, doing this breaks the OS-level prompt to open the native app.
    if (!isMobile) {
      whatsappTab = window.open("about:blank", "_blank");
    }

    try {
      // 5. Trigger the server action
      await createLead(formData);

      // Success: Redirect to WhatsApp
      if (isMobile) {
        window.location.href = whatsappURL;
      } else if (whatsappTab) {
        whatsappTab.location.href = whatsappURL;
      }
      
      form.reset(); 
    } catch (error) {
      console.error("Failed to save lead to database:", error);
      
      // FAILSAFE FALLBACK
      if (isMobile) {
        window.location.href = whatsappURL;
      } else if (whatsappTab) {
        whatsappTab.location.href = whatsappURL;
      }
      
      form.reset(); 
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-emerald-600">
              CONTACT US
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Let's Connect...
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Whether you're building personal wealth or managing business finances, Niveshya Advisory provides expert Wealth Advisory and Accounting Services to help you make informed decisions and achieve your financial goals with confidence.
            </p>

          </div>

          {/* Right Side */}
          <div className="rounded-3xl border bg-card p-8">
            <h3 className="text-2xl font-semibold">
              Request A Consultation
            </h3>
            <p className="mt-2 text-muted-foreground">
              Tell us about your business requirements and we'll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">

              {/* Styled Dropdown for Service Selection */}
              <div className="relative">
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="flex h-10 w-full min-w-0 appearance-none rounded-lg border border-input bg-transparent px-3 py-2 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30"
                >
                  <option value="" disabled className="bg-background text-muted-foreground">
                    Required Service
                  </option>
                  <option value="Insurance Advice" className="bg-background text-foreground">
                    Insurance & Investment Advice
                  </option>
                  <option value="GST and Taxation Advice" className="bg-background text-foreground">
                    Accounting and Taxation Advice
                  </option>
                  <option value="Other" className="bg-background text-foreground">
                    Other (Mention in message...)
                  </option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>

              <Input
                name="businessName"
                placeholder="Name"
                required
              />

              <Input
                name="phone"
                placeholder="Phone Number"
                required
                minLength={10}
              />

              <Input
                type="email"
                name="email"
                placeholder="Email Address"
              />

              <Textarea
                name="message"
                className="min-h-35"
                placeholder="Tell us about your requirements & we'll get back to you..."
              />

              {/* Mandatory Consent Checkbox */}
              <div className="flex items-start gap-3 py-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded border-input bg-transparent text-emerald-600 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
                />
                <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                  I hereby authorize to send notifications via SMS, Email, RCS and others as per{" "}
                  <Link href="/landing/termsPage" className="underline underline-offset-2 hover:text-emerald-500 transition-colors" target="_blank">
                    Terms of Service
                  </Link>
                  {" "}and{" "}
                  <Link href="/landing/privacyPage" className="underline underline-offset-2 hover:text-emerald-500 transition-colors" target="_blank">
                    Privacy Policy
                  </Link>.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                size="lg"
              >
                Schedule Consultation
              </Button>
              
              <p className="text-center text-xs text-muted-foreground mt-3">
                * Submitting this form will redirect you to WhatsApp to send your query directly to our team.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}