import React from "react";
import { cn } from "@/lib/utils";

const CheckboxGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("flex flex-col gap-2", className)}
      {...props}
      ref={ref}
    ></div>
  );
});
CheckboxGroup.displayName = "CheckboxGroup";

export { CheckboxGroup };
