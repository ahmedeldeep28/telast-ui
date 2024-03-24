import * as React from "react";
import { cn } from "@/lib/utils";

const FormControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, children, ...restProps } = props;
  return (
    <div ref={ref} className={cn("grid gap-1 mb-3", className)} {...restProps}>
      {children}
    </div>
  );
});
FormControl.displayName = "FormGroup";

export { FormControl };
