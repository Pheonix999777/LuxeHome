import { Leaf, Recycle, TreePine, Factory, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function SustainabilityPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-4">
            <Leaf className="h-6 w-6 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Commitment to Sustainability
          </h1>
          <p className="text-neutral-600 mt-4 md:text-xl">
            At LuxeHome, we believe that beautiful furniture shouldn&apos;t come
            at the expense of our planet. We&apos;re committed to sustainable
            practices throughout our entire operation.
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=720&width=1280"
            alt="Sustainable forestry practices"
            className="object-cover w-full h-full"
            fill
          />
        </div>

        {/* Our Approach Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Our Approach to Sustainability
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg border border-neutral-200">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-4">
                <TreePine className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Responsible Sourcing</h3>
              <p className="text-neutral-600">
                We source our wood from FSC-certified forests that are managed
                responsibly. Our leather comes from suppliers who adhere to
                strict animal welfare standards, and we prioritize recycled and
                recyclable materials whenever possible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-neutral-200">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-4">
                <Factory className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">
                Eco-Friendly Manufacturing
              </h3>
              <p className="text-neutral-600">
                Our manufacturing facilities use energy-efficient equipment and
                processes. We&apos;ve reduced our water usage by 40% since 2018
                and are working toward carbon neutrality by 2030. We use
                water-based, low-VOC finishes that are safer for the environment
                and your home.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-neutral-200">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-4">
                <Recycle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Waste Reduction</h3>
              <p className="text-neutral-600">
                We&apos;ve implemented a zero-waste-to-landfill policy in our
                main production facilities. Wood scraps are repurposed or used
                as biomass energy, and we&apos;ve reduced packaging waste by 35%
                through innovative design and materials.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-neutral-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Our Certifications
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white border border-neutral-200 mb-4">
                <Award className="h-8 w-8 text-neutral-700" />
              </div>
              <h3 className="font-bold mb-2">FSC Certified</h3>
              <p className="text-neutral-600 text-sm">
                Forest Stewardship Council certification ensures our wood comes
                from responsibly managed forests.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white border border-neutral-200 mb-4">
                <Shield className="h-8 w-8 text-neutral-700" />
              </div>
              <h3 className="font-bold mb-2">GREENGUARD Gold</h3>
              <p className="text-neutral-600 text-sm">
                Our products meet strict chemical emissions limits, contributing
                to healthier indoor air quality.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white border border-neutral-200 mb-4">
                <Leaf className="h-8 w-8 text-neutral-700" />
              </div>
              <h3 className="font-bold mb-2">
                Sustainable Furnishings Council
              </h3>
              <p className="text-neutral-600 text-sm">
                We&apos;re a proud member of the SFC, committed to promoting
                sustainable practices in the furniture industry.
              </p>
            </div>
          </div>
        </div>

        {/* Environmental Initiatives */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Our Environmental Initiatives
          </h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-bold mb-3">
                  Reforestation Program
                </h3>
                <p className="text-neutral-600 mb-4">
                  For every tree used in our furniture, we plant three more.
                  Since 2015, we&apos;ve planted over 500,000 trees in
                  partnership with reforestation organizations around the world.
                </p>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>500,000+ trees planted since 2015</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Focus on biodiversity and native species</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Community involvement in planting initiatives</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Reforestation efforts"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Solar panels on manufacturing facility"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Renewable Energy</h3>
                <p className="text-neutral-600 mb-4">
                  We&apos;re transitioning all our facilities to renewable
                  energy. Currently, 65% of our energy comes from solar and wind
                  power, with a goal to reach 100% by 2025.
                </p>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Solar panels installed at main manufacturing facilities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Partnership with renewable energy providers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Energy-efficient equipment and lighting throughout
                      operations
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-bold mb-3">Circular Design</h3>
                <p className="text-neutral-600 mb-4">
                  We design our furniture with longevity and end-of-life
                  considerations in mind. Our pieces are built to last
                  generations, and when they do reach the end of their life,
                  they can be easily disassembled for recycling or repurposing.
                </p>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Modular designs that can be easily repaired</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Furniture take-back program for recycling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Upcycled materials used in select collections</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Circular design process"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-green-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Our Sustainability Goals
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg border border-green-100 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-neutral-700">Renewable energy by 2025</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-green-100 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                Carbon Neutral
              </div>
              <p className="text-neutral-700">Operations by 2030</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-green-100 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                Zero Waste
              </div>
              <p className="text-neutral-700">To landfill by 2027</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-green-100 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1M+</div>
              <p className="text-neutral-700">Trees planted by 2030</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-neutral-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            When you choose LuxeHome furniture, you&apos;re not just making a
            choice for your home—you&apos;re making a choice for our planet.
            Learn more about our sustainable collections.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-neutral-900 hover:bg-neutral-200"
          >
            <Link href="/collections">Shop Sustainable Collections</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
