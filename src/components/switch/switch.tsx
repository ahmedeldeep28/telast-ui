import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ColorType, SizeType } from "@/lib/type";

const switchStyles = cva(
  [
    "peer cursor-pointer transition-colors data-[state=unchecked]:bg-input",
    "inline-flex items-center shrink-0",
    "rounded-full border-2 border-transparent",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      color: {
        primary: "data-[state=checked]:bg-primary",
        secondary: "data-[state=checked]:bg-secondary",
        danger: "data-[state=checked]:bg-danger",
        warning: "data-[state=checked]:bg-warning",
        success: "data-[state=checked]:bg-success",
      },
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-[52px]",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
    },
  }
);

const switchThumbStyles = cva(
  [
    "pointer-events-none block rounded-full",
    "bg-background shadow-lg ring-0 transition-transform",
    "data-[state=checked]:translate-x-full data-[state=unchecked]:translate-x-0",
  ],
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  color?: ColorType;
  size?: SizeType;
  classNames?: {
    base?: string;
    thumb?: string;
  };
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>((props, ref) => {
  const { className, classNames = {}, color, size, ...restProps } = props;
  return (
    <SwitchPrimitives.Root
      className={cn(switchStyles({ color, size }), className, classNames.base)}
      {...restProps}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(switchThumbStyles({ size }), classNames.thumb)}
      />
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch, switchStyles };
