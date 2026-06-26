import Navbar from "@/components/ui/navbar";
import Footer from "@/components/footer/Footer";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Terms of Service – Niveshya Advisory</h1>
        <p className="mb-10 text-muted-foreground">Effective Date: 20-Jan-2020</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p>Welcome to Niveshya Advisory. These Terms of Service ("Terms") govern your access to and use of our website, services, and any related communications. By engaging with Niveshya Advisory, you agree to be bound by these Terms.</p>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">1. About Niveshya Advisory</h2>
            <p className="mb-2">Niveshya Advisory provides professional services including, but not limited to</p>
            <ul className="mb-4 list-inside list-disc space-y-1">
              <li>Wealth Advisory</li>
              <li>Financial Planning</li>
              <li>Mutual Fund Distribution</li>
              <li>Insurance Advisory and Facilitation</li>
              <li>Accounting Services</li>
              <li>Taxation Services</li>
              <li>Business Advisory and Compliance Support</li>
            </ul>
            <p>The scope of services may vary depending on the engagement agreed upon with each client.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">2. Acceptance of Terms</h2>
            <p className="mb-2">By accessing our website, submitting information, or availing our services, you confirm that:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>You are legally competent to enter into a binding agreement.</li>
              <li>The information provided by you is accurate and complete.</li>
              <li>You agree to comply with these Terms and all applicable laws and regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">3. Nature of Services</h2>
            
            <h3 className="mb-2 font-medium text-foreground">Wealth Advisory Services</h3>
            <p className="mb-4">Niveshya Advisory provides guidance and recommendations based on information provided by the client. Investment decisions remain solely the responsibility of the client.</p>

            <h3 className="mb-2 font-medium text-foreground">Accounting and Taxation Services</h3>
            <p className="mb-4">Services are rendered based on information, records, and documents provided by the client. Clients remain responsible for the accuracy and completeness of all submitted information.</p>

            <h3 className="mb-2 font-medium text-foreground">Insurance Services</h3>
            <p>Insurance products are offered through authorized insurance partners. Policy issuance, claims settlement, and underwriting decisions are subject to the terms and conditions of the respective insurance company.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">4. Client Responsibilities</h2>
            <p className="mb-2">Clients agree to:</p>
            <ul className="mb-4 list-inside list-disc space-y-1">
              <li>Provide accurate, complete, and updated information.</li>
              <li>Submit required documents within agreed timelines.</li>
              <li>Review reports, statements, and recommendations provided.</li>
              <li>Comply with applicable financial, tax, and regulatory requirements.</li>
              <li>Inform Niveshya Advisory of any material changes affecting services.</li>
            </ul>
            <p>Niveshya Advisory shall not be liable for losses arising from inaccurate, incomplete, or delayed information provided by clients.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">5. No Guarantee of Results</h2>
            <p className="mb-2">While Niveshya Advisory strives to provide professional and informed guidance:</p>
            <ul className="mb-4 list-inside list-disc space-y-1">
              <li>Investment returns are subject to market risks.</li>
              <li>Past performance does not guarantee future results.</li>
              <li>Financial and business outcomes cannot be guaranteed.</li>
              <li>Tax outcomes may vary depending on changes in laws and individual circumstances.</li>
            </ul>
            <p>Clients acknowledge that all investment and business decisions involve inherent risks.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">6. Fees and Payments</h2>
            <p className="mb-2">Where applicable:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Fees for services shall be communicated and agreed upon before engagement.</li>
              <li>Clients agree to make payments within the specified timelines.</li>
              <li>Delayed payments may result in suspension or termination of services.</li>
              <li>Fees paid for completed services are generally non-refundable unless otherwise agreed in writing.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">7. Confidentiality</h2>
            <p className="mb-4">Niveshya Advisory will maintain the confidentiality of client information and use reasonable safeguards to protect sensitive data.</p>
            <p className="mb-2">Information may be disclosed only:</p>
            <ul className="mb-4 list-inside list-disc space-y-1">
              <li>With client authorization.</li>
              <li>To service providers involved in service delivery.</li>
              <li>To regulatory or legal authorities when required by law.</li>
            </ul>
            <p>Further details are available in our Privacy Policy.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">8. Intellectual Property</h2>
            <p className="mb-4">All content, materials, reports, presentations, logos, website content, and intellectual property belonging to Niveshya Advisory remain the exclusive property of Niveshya Advisory unless otherwise stated.</p>
            <p>Clients may not reproduce, distribute, modify, or commercially exploit such materials without prior written consent.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">9. Limitation of Liability</h2>
            <p className="mb-2">To the maximum extent permitted by law, Niveshya Advisory shall not be liable for:</p>
            <ul className="mb-4 list-inside list-disc space-y-1">
              <li>Investment losses.</li>
              <li>Market fluctuations.</li>
              <li>Business losses or missed opportunities.</li>
              <li>Delays caused by third parties or regulatory authorities.</li>
              <li>Consequential, indirect, incidental, or special damages.</li>
            </ul>
            <p>The total liability of Niveshya Advisory, if any, shall be limited to the fees paid by the client for the specific service giving rise to the claim.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">10. Third-Party Products and Services</h2>
            <p className="mb-4">Niveshya Advisory may facilitate access to products or services offered by third-party institutions, including mutual fund houses, insurance companies, banks, and technology providers.</p>
            <p>Niveshya Advisory does not control or guarantee the performance, availability, or outcomes of such third-party products or services.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">11. Website Usage</h2>
            <p className="mb-2">Users agree not to:</p>
            <ul className="mb-4 list-inside list-disc space-y-1">
              <li>Use the website for unlawful purposes.</li>
              <li>Attempt unauthorized access to systems or data.</li>
              <li>Upload malicious code or harmful content.</li>
              <li>Interfere with website functionality or security.</li>
            </ul>
            <p>Niveshya Advisory reserves the right to restrict access for violations of these Terms.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">12. Regulatory Compliance</h2>
            <p className="mb-4">Clients acknowledge that services provided by Niveshya Advisory are subject to applicable laws, regulations, and guidelines issued by relevant authorities and regulators in India.</p>
            <p>Any regulatory changes affecting services may be implemented without prior notice where legally required.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">13. Termination of Services</h2>
            <p className="mb-4">Either party may terminate the engagement by providing reasonable notice unless otherwise agreed.</p>
            <p className="mb-2">Niveshya Advisory reserves the right to suspend or terminate services immediately in cases involving:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Fraudulent activity.</li>
              <li>Misrepresentation of information.</li>
              <li>Non-payment of fees.</li>
              <li>Violation of applicable laws or these Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">14. Indemnification</h2>
            <p className="mb-2">Clients agree to indemnify and hold harmless Niveshya Advisory, its directors, employees, associates, and partners from any claims, losses, liabilities, or expenses arising from:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Incorrect information provided by the client.</li>
              <li>Client decisions based on recommendations.</li>
              <li>Violation of applicable laws or regulations by the client.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">15. Governing Law and Jurisdiction</h2>
            <p className="mb-4">These Terms shall be governed by and construed in accordance with the laws of India.</p>
            <p>Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts having jurisdiction over the location of Niveshya Advisory's principal office.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">16. Amendments</h2>
            <p>Niveshya Advisory reserves the right to modify these Terms at any time. Updated Terms will be posted on our website and become effective upon publication.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">17. Contact Information</h2>
            <p className="mb-4">For any questions regarding these Terms of Service, please contact:</p>
            <address className="mb-8 not-italic">
              <strong>Niveshya Advisory</strong><br />
              Email: info@niveshya.co.in<br />
              Website: https://niveshya.co.in/
            </address>
          </section>

          <div className="mt-12 rounded-xl bg-muted p-6 text-sm">
            <p><strong>Disclaimer</strong><br />
            Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Insurance products are subject to the terms and conditions of the respective insurer. Niveshya Advisory acts as a facilitator/advisor/distributor, as applicable, and does not guarantee returns or policy approvals.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}