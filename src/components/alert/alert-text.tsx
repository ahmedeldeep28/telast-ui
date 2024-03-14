import * as React from "react";

import { cn } from "@/lib/utils";

const AlertText = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertText.displayName = "AlertText";

export { AlertText };
