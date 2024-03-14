import React from "react";

import { cn } from "@/lib/utils";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 px-4 py-3", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

export { CardHeader };
