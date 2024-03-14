import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Label } from "../label";
import { ColorType, SizeType } from "@/lib/type";

const checkboxStyles = cva(
  [
    "peer rounded-sm border shadow shrink-0",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      color: {
        primary:
          "data-[state=checked]:bg-primary text-primary-foreground border-primary",
        secondary:
          "data-[state=checked]:bg-secondary text-secondary-foreground border-secondary",
        danger:
          "data-[state=checked]:bg-danger text-danger-foreground border-danger",
        warning:
          "data-[state=checked]:bg-warning text-warning-foreground border-warning",
        success:
          "data-[state=checked]:bg-success text-success-foreground border-success",
      },
      size: {
        sm: "size-3.5",
        md: "size-4",
        lg: "size-5",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
    },
  }
);

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  color?: ColorType;
  size?: SizeType;
  children?: React.ReactNode;
  className?: string;
  classNames?: {
    base?: string;
    label?: string;
    wrapper?: string;
  };
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>((props, ref) => {
  const {
    color,
    size,
    className,
    classNames = {},
    id = `id-${Math.random()}`,
    children,
    ...restProps
  } = props;
  return (
    <div className={cn("flex items-center space-x-1.5", classNames.wrapper)}>
      <CheckboxPrimitive.Root
        ref={ref}
        id={id}
        className={cn(
          checkboxStyles({ color, size }),
          className,
          classNames.base
        )}
        {...restProps}
      >
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center")}
        >
          <Check className="size-full" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <Label size={size} className={classNames.label} htmlFor={id}>
        {children}
      </Label>
    </div>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxStyles };
