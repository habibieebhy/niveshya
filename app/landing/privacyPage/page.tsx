import Navbar from "@/components/ui/navbar";
import Footer from "@/components/footer/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Privacy Policy - Niveshya Advisory</h1>
        <p className="mb-10 text-muted-foreground">Effective Date: 22-Jun-2020</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p>At Niveshya Advisory, we value your trust and are committed to protecting your personal and financial information. This Privacy Policy explains how we collect, use, store, and safeguard the information you provide when using our services, website, or communicating with us.</p>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">1. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            
            <h3 className="mb-2 font-medium text-foreground">Personal Information</h3>
            <ul className="mb-4 list-inside list-disc space-y-1">
              <li>Name</li>
              <li>Address</li>
              <li>Email address</li>
              <li>Mobile number</li>
              <li>Date of birth</li>
              <li>PAN, Aadhaar, and other identification details (where required)</li>
              <li>Bank account details and financial information</li>
              <li>Business and tax-related information</li>
            </ul>

            <h3 className="mb-2 font-medium text-foreground">Investment & Financial Information</h3>
            <ul className="mb-4 list-inside list-disc space-y-1">
              <li>Investment objectives</li>
              <li>Risk profile</li>
              <li>Income and asset details</li>
              <li>Insurance information</li>
              <li>Financial planning requirements</li>
            </ul>

            <h3 className="mb-2 font-medium text-foreground">Business Information</h3>
            <ul className="mb-4 list-inside list-disc space-y-1">
              <li>Accounting records</li>
              <li>Taxation and compliance data</li>
              <li>Financial statements</li>
              <li>GST and regulatory information</li>
            </ul>

            <h3 className="mb-2 font-medium text-foreground">Website Information</h3>
            <p className="mb-2">When you visit our website, we may collect:</p>
            <ul className="mb-4 list-inside list-disc space-y-1">
              <li>IP address</li>
              <li>Browser type and device information</li>
              <li>Pages visited</li>
              <li>Cookies and usage data</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p className="mb-2">We use the information collected to:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Provide wealth advisory, financial planning, accounting, taxation, and related services.</li>
              <li>Process investment and insurance-related transactions.</li>
              <li>Maintain client records and comply with regulatory requirements.</li>
              <li>Communicate important updates, reports, and service-related information.</li>
              <li>Improve our services and website experience.</li>
              <li>Respond to inquiries and customer support requests.</li>
              <li>Meet legal, regulatory, and compliance obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">3. Information Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell, rent, or trade your personal information to third parties.</p>
            <p className="mb-2">Information may be shared only with:</p>
            <ul className="mb-4 list-inside list-disc space-y-1">
              <li>Regulatory authorities when required by law.</li>
              <li>Financial product providers, mutual fund platforms, insurance companies, custodians, and service partners for service execution.</li>
              <li>Professional advisors, auditors, or legal consultants under confidentiality obligations.</li>
              <li>Technology and service providers supporting our operations.</li>
            </ul>
            <p>All such disclosures are made only to the extent necessary for providing services or complying with legal requirements.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">4. Data Security</h2>
            <p className="mb-4">We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, disclosure, alteration, or destruction.</p>
            <p>While we strive to protect your data, no electronic transmission or storage system can guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">5. Data Retention</h2>
            <p className="mb-2">We retain client information for as long as necessary to:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Provide our services.</li>
              <li>Comply with applicable laws and regulations.</li>
              <li>Resolve disputes and enforce agreements.</li>
              <li>Maintain records required by regulatory authorities.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">6. Cookies and Website Tracking</h2>
            <p className="mb-4">Our website may use cookies and similar technologies to enhance user experience, analyze website traffic, and improve website functionality.</p>
            <p>Users may modify browser settings to decline cookies; however, some website features may not function properly.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">7. Your Rights</h2>
            <p className="mb-2">Subject to applicable laws, you may have the right to:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Access your personal information.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of information where legally permissible.</li>
              <li>Withdraw consent for specific communications.</li>
              <li>Raise concerns regarding the processing of your personal data.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">8. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. Niveshya Advisory is not responsible for the privacy practices or content of such external websites. Users are encouraged to review their respective privacy policies.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">9. Compliance with Laws</h2>
            <p>Niveshya Advisory complies with applicable laws and regulations governing financial advisory, accounting, taxation, and data protection practices in India.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">10. Changes to This Privacy Policy</h2>
            <p>We reserve the right to modify or update this Privacy Policy at any time. Any changes will be posted on our website with the revised effective date.</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">11. Contact Us</h2>
            <p className="mb-4">For any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact:</p>
            <address className="not-italic">
              <strong>Niveshya Advisory</strong><br />
              Email: complaints@niveshya.co.in<br />
              Website: https://niveshya.co.in/
            </address>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}