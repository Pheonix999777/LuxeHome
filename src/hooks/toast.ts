// hooks/use-toast.ts

import { toast as sonnerToast } from "sonner";

// toast.ts
export function toast({
  title,
  description,
  variant,
}: {
  title: string;
  description?: string;
  variant?: "default" | "destructive" | string;
}) {
  sonnerToast(title, {
    description,
    className: variant === "destructive" ? "bg-red-500 text-white" : "",
  });
}
