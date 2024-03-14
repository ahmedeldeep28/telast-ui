import * as React from "react";
import { cn } from "@/lib/utils";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-row justify-end gap-3 px-6 py-4", className)}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

export { DialogFooter };
