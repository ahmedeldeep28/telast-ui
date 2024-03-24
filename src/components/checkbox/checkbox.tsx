import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Label } from "../label";
import { ColorType, SizeType } from "@/lib/type";

const checkboxStyles = cva(
  [
    "peer rounded-sm border border-input shadow shrink-0",
    "ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      color: {
        primary:
          "text-primary-foreground data-[state=checked]:border-primary data-[state=checked]:bg-primary",
        secondary:
          "text-secondary-foreground data-[state=checked]:border-secondary data-[state=checked]:bg-secondary ",
        danger:
          "text-danger-foreground data-[state=checked]:border-danger data-[state=checked]:bg-danger ",
        warning:
          "text-warning-foreground data-[state=checked]:border-warning data-[state=checked]:bg-warning ",
        success:
          "data-[state=checked]:border-success data-[state=checked]:bg-success text-success-foreground ",
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
    <div className={cn("flex items-center space-x-2", classNames.wrapper)}>
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
