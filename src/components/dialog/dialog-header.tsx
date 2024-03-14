import * as React from "react";
import { cn } from "@/lib/utils";

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-1.5 px-6 py-4", className)}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

export { DialogHeader };
