import * as React from "react";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ColorType, RoundedType, SizeType } from "@/lib/type";

const inputStyles = cva(
  [
    "flex rounded-md border border-input bg-background placeholder:text-muted-foreground",
    "h-10 w-full px-3 py-2 text-sm ring-offset-background",
    "focus-visible:outline-none focus-visible:ring-1",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
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
    },
  }
);

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color">,
    VariantProps<typeof inputStyles> {
  isInvalid?: boolean;
  color?: ColorType;
  rounded?: RoundedType;
  size?: SizeType;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, color, size, rounded, isInvalid, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputStyles({ isInvalid, rounded, color, size }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputStyles };
