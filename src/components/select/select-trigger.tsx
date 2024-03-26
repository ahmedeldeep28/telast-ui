import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ColorType, RoundedType, SizeType } from "@/lib/type";
import { SelectValue } from ".";

const selectTriggerStyles = cva(
  [
    "border border-input bg-background placeholder:text-muted-foreground",
    "h-10 w-full flex items-center justify-between",
    "ring-offset-background [&>span]:line-clamp-1",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      color: {
        primary: "focus-visible:border-primary focus-visible:ring-primary",
        secondary:
          "focus-visible:border-secondary focus-visible:ring-secondary",
        success: "focus-visible:border-success focus-visible:ring-success",
        danger: "focus-visible:border-danger focus-visible:ring-danger",
        warning: "focus-visible:border-warning focus-visible:ring-warning",
      },
      size: {
        sm: "h-9 px-2 py-1 text-xs",
        md: "h-10 px-3 py-2 text-sm",
        lg: "h-11 px-3.5 py-2 text-base",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      isInvalid: {
        true: "border-danger focus-visible:border-danger focus-visible:ring-danger",
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
  placeholder?: string;
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>((props, ref) => {
  const {
    className,
    color,
    size,
    rounded,
    isInvalid,
    placeholder,
    children,
    ...resetProps
  } = props;
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        selectTriggerStyles({ color, size, rounded, isInvalid }),
        className
      )}
      {...resetProps}
    >
      {children ? children : <SelectValue placeholder={placeholder} />}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export { SelectTrigger, selectTriggerStyles };
