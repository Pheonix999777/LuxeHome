import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Briefcase, Users, Heart, Globe, ArrowRight } from "lucide-react";

const jobOpenings = [
  {
    id: "1",
    title: "Furniture Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    id: "2",
    title: "Sales Associate",
    department: "Retail",
    location: "Chicago, IL",
    type: "Full-time",
  },
  {
    id: "3",
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "4",
    title: "Customer Service Representative",
    department: "Customer Support",
    location: "Miami, FL",
    type: "Full-time",
  },
  {
    id: "5",
    title: "Warehouse Associate",
    department: "Operations",
    location: "Los Angeles, CA",
    type: "Full-time",
  },
  {
    id: "6",
    title: "E-commerce Manager",
    department: "Digital",
    location: "Remote",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Join Our Team
          </h1>
          <p className="text-neutral-600 mt-4 md:text-xl">
            At LuxeHome, we&apos;re passionate about creating beautiful,
            functional furniture and delivering exceptional customer
            experiences. Join us in our mission to transform houses into homes.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 mb-4">
              <Heart className="h-6 w-6 text-neutral-700" />
            </div>
            <h3 className="text-lg font-bold mb-2">Passion</h3>
            <p className="text-neutral-600">
              We&apos;re passionate about design, quality craftsmanship, and
              creating furniture that enhances people&apos;s lives.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 mb-4">
              <Users className="h-6 w-6 text-neutral-700" />
            </div>
            <h3 className="text-lg font-bold mb-2">Collaboration</h3>
            <p className="text-neutral-600">
              We believe in the power of teamwork and bringing together diverse
              perspectives to create better solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 mb-4">
              <Globe className="h-6 w-6 text-neutral-700" />
            </div>
            <h3 className="text-lg font-bold mb-2">Sustainability</h3>
            <p className="text-neutral-600">
              We&apos;re committed to sustainable practices that minimize our
              environmental impact and preserve resources.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 mb-4">
              <Briefcase className="h-6 w-6 text-neutral-700" />
            </div>
            <h3 className="text-lg font-bold mb-2">Growth</h3>
            <p className="text-neutral-600">
              We foster a culture of continuous learning and provide
              opportunities for professional development.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Why Work With Us
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Comprehensive Benefits</h3>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Competitive salary and performance bonuses</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Health, dental, and vision insurance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>401(k) retirement plan with company match</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Generous paid time off and holidays</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Parental leave for new parents</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Growth & Development</h3>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Professional development stipend</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mentorship programs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cross-functional training opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clear career advancement paths</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Tuition reimbursement for relevant education</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Current Openings */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
          <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
            <div className="grid grid-cols-1 divide-y">
              {jobOpenings.map((job) => (
                <div key={job.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-800">
                          {job.department}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-800">
                          {job.location}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-800">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0" asChild>
                      <Link href={`/careers/${job.id}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Our Application Process</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center">
              <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 text-white font-bold mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">Application</h3>
              <p className="text-neutral-600 text-sm">
                Submit your application online with your resume and cover
                letter.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center">
              <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 text-white font-bold mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">Initial Interview</h3>
              <p className="text-neutral-600 text-sm">
                If selected, you&apos;ll have a phone or video interview with
                our recruiting team.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center">
              <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 text-white font-bold mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">Team Interview</h3>
              <p className="text-neutral-600 text-sm">
                Meet with the hiring manager and potential team members to
                discuss the role in detail.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center">
              <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 text-white font-bold mb-4">
                4
              </div>
              <h3 className="font-bold mb-2">Offer</h3>
              <p className="text-neutral-600 text-sm">
                If you&apos;re a good fit, we&apos;ll extend an offer and
                welcome you to the team!
              </p>
            </div>
          </div>
        </div>

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
