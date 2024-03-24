import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Label } from "../label";
import { ColorType, SizeType } from "@/lib/type";

const radioStyles = cva(
  [
    "rounded-full p-0.5 border border-input aspect-square",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      color: {
        primary:
          "text-primary data-[state=checked]:border-primary",
        secondary:
          "text-secondary data-[state=checked]:border-secondary",
        danger:
          "text-danger data-[state=checked]:border-danger",
        warning:
          "text-warning data-[state=checked]:border-warning",
        success:
          "text-success data-[state=checked]:border-success",
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

interface RadioProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  color?: ColorType;
  size?: SizeType;
  children: React.ReactNode;
  classNames?: {
    base?: string;
    label?: string;
    wrapper?: string;
  };
}

const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioProps
>((props, ref) => {
  const {
    color,
    size,
    className,
    value,
    id = `id-${Math.random()}`,
    classNames = {},
    children,
    ...restProps
  } = props;
  return (
    <div className={cn("flex items-center space-x-2", classNames.wrapper)}>
      <RadioGroupPrimitive.Item
        ref={ref}
        value={value}
        id={id}
        className={cn(radioStyles({ color, size }), className, classNames.base)}
        {...restProps}
      >
        <RadioGroupPrimitive.Indicator>
          <Circle className="size-full fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <Label size={size} className={classNames.label} htmlFor={id}>
        {children}
      </Label>
    </div>
  );
});
Radio.displayName = RadioGroupPrimitive.Item.displayName;

export { Radio, radioStyles };
