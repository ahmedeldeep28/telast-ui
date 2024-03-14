import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ColorType, RoundedType } from "@/lib/type";

const advancedCheckboxStyles = cva(
  [
    "px-3 py-2 w-fit h-fit border shadow-sm transition-all",
    "focus:ring-2 data-[state=checked]:ring-1",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      color: {
        primary:
          "data-[state=checked]:border-primary hover:border-primary ring-primary",
        secondary:
          "data-[state=checked]:border-secondary hover:border-secondary ring-secondary",
        danger:
          "data-[state=checked]:border-danger hover:border-danger ring-danger",
        warning:
          "data-[state=checked]:border-warning hover:border-warning ring-warning",
        success:
          "data-[state=checked]:border-success hover:border-success ring-success",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-lg",
      },
    },
    defaultVariants: {
      color: "primary",
      rounded: "md",
    },
  }
);

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  color?: ColorType;
  rounded?: RoundedType;
  children?: React.ReactNode;
  className?: string;
}

const AdvancedCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>((props, ref) => {
  const { color, rounded, className, children, ...restProps } = props;
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(advancedCheckboxStyles({ color, rounded }), className)}
      {...restProps}
    >
      {children}
    </CheckboxPrimitive.Root>
  );
});
AdvancedCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export { AdvancedCheckbox, advancedCheckboxStyles };
