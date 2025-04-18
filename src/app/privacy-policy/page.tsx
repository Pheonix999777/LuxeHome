import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-8 max-w-3xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-neutral-600 mt-2">Last Updated: April 18, 2023</p>
        </div>

        <div className="prose max-w-none">
          <p>
            At LuxeHome Furniture (&quot;LuxeHome,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;), we respect your privacy and are
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website, use our mobile application,
            or make a purchase from us.
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing or using our
            Services, you acknowledge that you have read, understood, and agree
            to be bound by all the terms of this Privacy Policy. If you do not
            agree with our policies and practices, please do not use our
            Services.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect several types of information from and about users of our
            Services, including:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> This includes information
              that can be used to identify you, such as your name, email
              address, postal address, phone number, and payment information.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> This includes
              information that does not directly identify you, such as browser
              type, device information, and usage data.
            </li>
          </ul>

          <h3>How We Collect Information</h3>
          <p>We collect information in the following ways:</p>
          <ul>
            <li>
              <strong>Direct Collection:</strong> Information you provide to us
              when you create an account, make a purchase, sign up for our
              newsletter, or contact our customer service.
            </li>
            <li>
              <strong>Automated Collection:</strong> Information collected
              automatically through cookies, web beacons, and other tracking
              technologies when you use our Services.
            </li>
            <li>
              <strong>Third-Party Sources:</strong> Information we may receive
              from business partners, marketing agencies, and other third
              parties to enhance our services and improve your shopping
              experience.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We may use the information we collect for various purposes,
            including:
          </p>
          <ul>
            <li>To provide, maintain, and improve our Services</li>
            <li>To process transactions and send related information</li>
            <li>
              To send administrative information, such as order confirmations
              and updates
            </li>
            <li>
              To personalize your experience and deliver content relevant to
              your interests
            </li>
            <li>To respond to your comments, questions, and requests</li>
            <li>
              To send promotional communications, such as special offers or
              newsletters
            </li>
            <li>To monitor and analyze trends, usage, and activities</li>
            <li>
              To protect against, identify, and prevent fraud and other illegal
              activities
            </li>
          </ul>

          <h2>Disclosure of Your Information</h2>
          <p>
            We may disclose your personal information in the following
            circumstances:
          </p>
          <ul>
            <li>To our subsidiaries and affiliates</li>
            <li>
              To contractors, service providers, and other third parties we use
              to support our business
            </li>
            <li>
              To a buyer or other successor in the event of a merger,
              divestiture, restructuring, or other sale
            </li>
            <li>To comply with any court order, law, or legal process</li>
            <li>To enforce our Terms of Service or other agreements</li>
            <li>
              To protect the rights, property, or safety of LuxeHome, our
              customers, or others
            </li>
          </ul>

          <h2>Your Choices</h2>
          <p>
            We strive to provide you with choices regarding the personal
            information you provide to us:
          </p>
          <ul>
            <li>
              <strong>Tracking Technologies:</strong> You can set your browser
              to refuse all or some browser cookies or to alert you when cookies
              are being sent.
            </li>
            <li>
              <strong>Promotional Communications:</strong> You can opt out of
              receiving promotional emails by following the unsubscribe
              instructions in each email.
            </li>
            <li>
              <strong>Account Information:</strong> You can review and change
              your personal information by logging into your account and
              visiting your account profile page.
            </li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We have implemented measures designed to secure your personal
            information from accidental loss and from unauthorized access, use,
            alteration, and disclosure. All information you provide to us is
            stored on secure servers behind firewalls. Any payment transactions
            will be encrypted using SSL technology.
          </p>
          <p>
            Unfortunately, the transmission of information via the internet is
            not completely secure. Although we do our best to protect your
            personal information, we cannot guarantee the security of your
            personal information transmitted to our Services. Any transmission
            of personal information is at your own risk.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our Services are not intended for children under 13 years of age. We
            do not knowingly collect personal information from children under
            13. If you are under 13, do not use or provide any information on
            our Services. If we learn we have collected or received personal
            information from a child under 13 without verification of parental
            consent, we will delete that information.
          </p>

          <h2>Changes to Our Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. If we make
            material changes to how we treat our users&apos; personal
            information, we will post the new Privacy Policy on this page and
            notify you through a notice on our website home page or via email.
          </p>
          <p>
            The date the Privacy Policy was last revised is identified at the
            top of the page. You are responsible for periodically visiting our
            website and this Privacy Policy to check for any changes.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at: privacy@luxehome.com or by mail at:
          </p>
          <address>
            LuxeHome Furniture
            <br />
            Attn: Privacy Officer
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
            By using our Services, you consent to our Privacy Policy. If you
            have any questions, please{" "}
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
