import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ColorType, RoundedType } from "@/lib/type";

const radioCardStyles = cva(
  [
    "px-3 py-2 w-fit h-fit border border-border shadow-sm transition-all",
    "data-[state=checked]:ring-1",
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

interface RadioProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  color?: ColorType;
  rounded?: RoundedType;
  children: React.ReactNode;
  className?: string;
}

const RadioCard = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioProps
>((props, ref) => {
  const { color, rounded, className, value, children, ...restProps } = props;
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      value={value}
      className={cn(radioCardStyles({ color, rounded }), className)}
      {...restProps}
    >
      {children}
    </RadioGroupPrimitive.Item>
  );
});
RadioCard.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioCard, radioCardStyles };
