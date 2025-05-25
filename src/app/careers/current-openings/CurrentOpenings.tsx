import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JobOpenings } from "../data/data";
export default function CurrentOpenings() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
      <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
        <div className="grid grid-cols-1 divide-y">
          {JobOpenings.map((job) => (
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
  );
}
