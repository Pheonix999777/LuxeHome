import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-8 max-w-3xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Terms of Service
          </h1>
          <p className="text-neutral-600 mt-2">Last Updated: April 18, 2023</p>
        </div>

        <div className="prose max-w-none">
          <p>
            Welcome to LuxeHome Furniture. These Terms of Service
            (&quot;Terms&quot;) govern your access to and use of the LuxeHome
            website, mobile application, and services (collectively, the
            &quot;Services&quot;). Please read these Terms carefully before
            using our Services.
          </p>
          <p>
            By accessing or using our Services, you agree to be bound by these
            Terms. If you do not agree to these Terms, you may not access or use
            the Services.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By creating an account, making a purchase, or otherwise using our
            Services, you acknowledge that you have read, understood, and agree
            to be bound by these Terms. If you are using the Services on behalf
            of an organization, you represent and warrant that you have the
            authority to bind that organization to these Terms.
          </p>

          <h2>2. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will
            provide notice of any material changes by posting the updated Terms
            on our website or through other communications. Your continued use
            of the Services after such notice constitutes your acceptance of the
            modified Terms.
          </p>

          <h2>3. Account Registration</h2>
          <p>
            To access certain features of our Services, you may need to create
            an account. You agree to provide accurate, current, and complete
            information during the registration process and to update such
            information to keep it accurate, current, and complete.
          </p>
          <p>
            You are responsible for safeguarding your account credentials and
            for all activities that occur under your account. You agree to
            notify us immediately of any unauthorized use of your account or any
            other breach of security.
          </p>

          <h2>4. Products and Purchases</h2>
          <p>
            All product descriptions, including pricing and availability, are
            subject to change without notice. We reserve the right to limit
            quantities, refuse service, and cancel orders at our discretion.
          </p>
          <p>
            When you place an order, you represent that all information you
            provide is accurate and complete. We reserve the right to verify
            payment information and decline or cancel orders in cases of
            suspected fraud, illegal activity, or violation of these Terms.
          </p>

          <h2>5. Shipping and Delivery</h2>
          <p>
            Shipping and delivery times are estimates only and are not
            guaranteed. We are not responsible for delays caused by carriers,
            customs, or other factors outside our control.
          </p>
          <p>
            Risk of loss and title for items purchased pass to you upon delivery
            of the items to the carrier. It is your responsibility to inspect
            items upon receipt and report any damage or discrepancies promptly.
          </p>

          <h2>6. Returns and Refunds</h2>
          <p>
            Our return and refund policies are outlined in our{" "}
            <Link href="/returns" className="text-neutral-900 hover:underline">
              Returns & Exchanges
            </Link>{" "}
            page. By making a purchase, you agree to these policies.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content, features, and functionality of our Services, including
            but not limited to text, graphics, logos, images, and software, are
            owned by LuxeHome, its licensors, or other providers and are
            protected by copyright, trademark, and other intellectual property
            laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works
            of, publicly display, publicly perform, republish, download, store,
            or transmit any of the material on our Services without our prior
            written consent.
          </p>

          <h2>8. User Content</h2>
          <p>
            By submitting content to our Services (such as product reviews or
            comments), you grant LuxeHome a non-exclusive, royalty-free,
            perpetual, irrevocable, and fully sublicensable right to use,
            reproduce, modify, adapt, publish, translate, create derivative
            works from, distribute, and display such content throughout the
            world in any media.
          </p>
          <p>
            You represent and warrant that you own or control all rights in and
            to the content you submit, that the content is accurate, and that
            use of the content does not violate these Terms or any law.
          </p>

          <h2>9. Prohibited Uses</h2>
          <p>You agree not to use our Services:</p>
          <ul>
            <li>In any way that violates any applicable law or regulation</li>
            <li>
              To transmit or procure the sending of any advertising or
              promotional material without our consent
            </li>
            <li>
              To impersonate or attempt to impersonate LuxeHome, an employee, or
              any other person
            </li>
            <li>
              To engage in any conduct that restricts or inhibits anyone&apos;s
              use or enjoyment of the Services
            </li>
            <li>
              To attempt to gain unauthorized access to, interfere with, damage,
              or disrupt any parts of the Services
            </li>
          </ul>

          <h2>10. Disclaimer of Warranties</h2>
          <p>
            THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot; WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS
            OR IMPLIED. LUXEHOME DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>

          <h2>11. Limitation of Liability</h2>
          <p>
            IN NO EVENT WILL LUXEHOME, ITS AFFILIATES, OR THEIR LICENSORS,
            SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE
            LIABLE FOR DAMAGES OF ANY KIND ARISING FROM THE USE OF THE SERVICES,
            INCLUDING DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES.
          </p>

          <h2>12. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless LuxeHome, its
            affiliates, and their respective officers, directors, employees, and
            agents from and against any claims, liabilities, damages, judgments,
            awards, losses, costs, expenses, or fees arising out of or relating
            to your violation of these Terms or your use of the Services.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms and any dispute or claim arising out of or related to
            them shall be governed by and construed in accordance with the laws
            of the State of New York, without giving effect to any choice or
            conflict of law provision or rule.
          </p>

          <h2>14. Dispute Resolution</h2>
          <p>
            Any legal action or proceeding relating to your access to or use of
            the Services shall be instituted exclusively in the federal or state
            courts located in New York County, New York. You agree to submit to
            the jurisdiction of, and venue in, such courts.
          </p>

          <h2>15. Severability</h2>
          <p>
            If any provision of these Terms is held to be invalid, illegal, or
            unenforceable, the remaining provisions will continue in full force
            and effect.
          </p>

          <h2>16. Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy and any other
            agreements expressly incorporated by reference, constitute the
            entire agreement between you and LuxeHome regarding your use of the
            Services.
          </p>

          <h2>17. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
            legal@luxehome.com or by mail at:
          </p>
          <address>
            LuxeHome Furniture
            <br />
            Attn: Legal Department
            <br />
            123 Furniture Lane
            <br />
            Design District
            <br />
            New York, NY 10001
          </address>
        </div>

        <div className="border-t pt-6">
          <p className="text-sm text-neutral-600">
            By using our Services, you acknowledge that you have read and
            understand these Terms. If you have any questions, please{" "}
            <Link href="/contact" className="text-neutral-900 hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
