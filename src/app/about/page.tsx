import { Button } from "@/components/ui/button";
import { Newsletter } from "@/components/newsletter/newsletter";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import workshop from "../../../public/img/Our workshop with craftsmen at work.jpg";
import VisitOurShowroom from "../../../public/img/Visit Our Showroom.png";
import EmmaThompson from "../../../public/img/Emma Thompson.jpg";
import DavidChen from "../../../public/img/David Chen.jpg";
import SarahJohnson from "../../../public/img/Sarah Johnson.png";
import MichaelRodriguez from "../../../public/img/Michael Rodriguez.png";

export const metadata: Metadata = {
  title: "About Us | Our Story and Mission",
  description:
    "Learn about LuxeHome's journey, our commitment to quality craftsmanship, sustainable practices, and our vision for the future of furniture.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative bg-neutral-100">
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Story
                </h1>
                <p className="text-neutral-600 md:text-xl max-w-[600px]">
                  Founded in 2010, LuxeHome was born from a passion for
                  exceptional craftsmanship and timeless design. Our journey
                  began with a simple mission: to create furniture that
                  transforms houses into homes.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={workshop}
                  alt="Our workshop with craftsmen at work"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Our Values
              </h2>
              <p className="text-neutral-600 md:text-xl max-w-3xl">
                The principles that guide everything we do, from design to
                delivery.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Exceptional Quality</h3>
                <p className="text-neutral-600">
                  We believe furniture should be built to last generations, not
                  just seasons. Every piece we create undergoes rigorous quality
                  testing.
                </p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">
                  Sustainable Practices
                </h3>
                <p className="text-neutral-600">
                  From responsibly sourced materials to eco-friendly
                  manufacturing processes, sustainability is at the heart of our
                  business.
                </p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Timeless Design</h3>
                <p className="text-neutral-600">
                  We create pieces that transcend trends, combining classic
                  principles with contemporary aesthetics for furniture that
                  remains relevant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Meet Our Team
              </h2>
              <p className="text-neutral-600 md:text-xl max-w-3xl">
                The talented individuals who bring our vision to life.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Emma Thompson",
                  role: "Founder & Creative Director",
                  image: EmmaThompson,
                },
                {
                  name: "David Chen",
                  role: "Head of Design",
                  image: DavidChen,
                },
                {
                  name: "Sarah Johnson",
                  role: "Master Craftsperson",
                  image: SarahJohnson,
                },
                {
                  name: "Michael Rodriguez",
                  role: "Sustainability Officer",
                  image: MichaelRodriguez,
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-neutral-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Our Process
              </h2>
              <p className="text-neutral-600 md:text-xl max-w-3xl">
                From concept to creation, every step is handled with care and
                precision.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Design",
                  description:
                    "Our designers sketch concepts, considering both aesthetics and functionality.",
                },
                {
                  step: "2",
                  title: "Material Selection",
                  description:
                    "We source the finest sustainable materials from trusted partners.",
                },
                {
                  step: "3",
                  title: "Crafting",
                  description:
                    "Skilled artisans bring designs to life with meticulous attention to detail.",
                },
                {
                  step: "4",
                  title: "Quality Assurance",
                  description:
                    "Every piece undergoes rigorous testing to ensure it meets our standards.",
                },
              ].map((process, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center text-xl font-bold">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold">{process.title}</h3>
                    <p className="text-neutral-600">{process.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-neutral-200 -translate-y-1/2 -translate-x-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-neutral-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Visit Our Showroom
                </h2>
                <p className="text-neutral-300 md:text-xl">
                  Experience our furniture in person. Our showroom specialists
                  are ready to help you find the perfect pieces for your home.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-neutral-900 hover:bg-neutral-200"
                >
                  <Link href="/contact">Book a Visit</Link>
                </Button>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src={VisitOurShowroom}
                  alt="Our showroom"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />
      </main>
    </div>
  );
}
