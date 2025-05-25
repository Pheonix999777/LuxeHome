import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroSection from "./hero/hero";
import ValuesSection from "./values/ValuesSection";
import BenefitsSection from "./benefits/BenefitsSection";
import CurrentOpenings from "./current-openings/CurrentOpenings";
import ApplicationProcess from "./application-process/ApplicationProcess";

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-12">
        <HeroSection />
        <ValuesSection />
        <BenefitsSection />
        <CurrentOpenings />
        <ApplicationProcess />

        {/* CTA Section */}
        <div className="bg-neutral-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Don&apos;t See the Right Fit?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals to join our team.
            Send us your resume and we&apos;ll keep you in mind for future
            opportunities.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-neutral-900 hover:bg-neutral-200"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
