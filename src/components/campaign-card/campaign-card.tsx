import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CampaignCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

export function CampaignCard({
  title,
  description,
  icon,
  color,
}: CampaignCardProps) {
  return (
    <div
      className={`p-6 rounded-xl ${color} border border-slate-100 shadow-sm`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-700 mb-4">{description}</p>
      <Link
        href="#"
        className="inline-flex items-center text-sm font-medium text-rose-600 hover:text-rose-700"
      >
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
}
