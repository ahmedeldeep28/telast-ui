import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ColorType, RoundedType } from "@/lib/type";

const textareaStyles = cva(
  [
    "flex min-h-[80px] rounded-md border border-input bg-background placeholder:text-muted-foreground",
    "h-10 w-full px-3 py-2 text-sm",
    "ring-offset-background",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
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
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
        none: "rounded-none",
      },

      isInvalid: {
        true: "border-danger focus-visible:ring-danger",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean;
  color?: ColorType;
  rounded?: Exclude<RoundedType, "full">;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, color, rounded, isInvalid, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaStyles({ color, rounded, isInvalid }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea, textareaStyles };
