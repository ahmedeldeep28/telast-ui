import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const checkboxGroupStyles = cva("flex gap-2", {
  variants: {
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-row",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

interface CheckboxGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation: "vertical" | "horizontal";
}
const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ className, orientation, ...props }, ref) => {
    return (
      <div
        className={cn(checkboxGroupStyles({ orientation }), className)}
        {...props}
        ref={ref}
      ></div>
    );
  }
);
CheckboxGroup.displayName = "CheckboxGroup";

export { CheckboxGroup };
