import { Briefcase, Users, Heart, Globe } from "lucide-react";
export default function ValuesSection() {
  return (
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
          We foster a culture of continuous learning and provide opportunities
          for professional development.
        </p>
      </div>
    </div>
  );
}
