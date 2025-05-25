export default function ApplicationProcess() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Our Application Process</h2>
      <div className="grid gap-6 md:grid-cols-4">
        <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center">
          <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 text-white font-bold mb-4">
            1
          </div>
          <h3 className="font-bold mb-2">Application</h3>
          <p className="text-neutral-600 text-sm">
            Submit your application online with your resume and cover letter.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center">
          <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 text-white font-bold mb-4">
            2
          </div>
          <h3 className="font-bold mb-2">Initial Interview</h3>
          <p className="text-neutral-600 text-sm">
            If selected, you&apos;ll have a phone or video interview with our
            recruiting team.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center">
          <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 text-white font-bold mb-4">
            3
          </div>
          <h3 className="font-bold mb-2">Team Interview</h3>
          <p className="text-neutral-600 text-sm">
            Meet with the hiring manager and potential team members to discuss
            the role in detail.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center">
          <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 text-white font-bold mb-4">
            4
          </div>
          <h3 className="font-bold mb-2">Offer</h3>
          <p className="text-neutral-600 text-sm">
            If you&apos;re a good fit, we&apos;ll extend an offer and welcome
            you to the team!
          </p>
        </div>
      </div>
    </div>
  );
}
