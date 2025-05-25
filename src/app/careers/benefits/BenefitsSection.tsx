export default function BenefitsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Why Work With Us</h2>
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
  );
}
