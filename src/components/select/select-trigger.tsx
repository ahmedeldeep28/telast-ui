import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ColorType, RoundedType, SizeType } from "@/lib/type";

const selectTriggerStyles = cva(
  [
    "border border-input bg-background placeholder:text-muted-foreground",
    "h-10 w-full flex items-center justify-between",
    "ring-offset-background [&>span]:line-clamp-1",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      color: {
        primary: "border-primary focus-visible:ring-primary",
        secondary: "border-secondary focus-visible:ring-secondary",
        success: "border-success focus-visible:ring-success",
        danger: "border-danger focus-visible:ring-danger",
        warning: "border-warning focus-visible:ring-warning",
      },
      size: {
        sm: "h-8 px-2 py-1 text-xs",
        md: "h-10 px-3 py-2 text-sm",
        lg: "h-12 px-3.5 py-2 text-base",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      isInvalid: {
        true: "border-danger focus-visible:ring-danger",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
      rounded: "md",
    },
  }
);

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  isInvalid?: boolean;
  color?: ColorType;
  size?: SizeType;
  rounded?: RoundedType;
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, color, size, rounded, isInvalid, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      selectTriggerStyles({ color, size, rounded, isInvalid }),
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export { SelectTrigger, selectTriggerStyles };
