import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import {
  BUTTON_OUTLINE,
  BUTTON_SOFT,
  BUTTON_SOLID,
  BUTTON_TEXT,
} from "./button-variants";
import { ColorType, RoundedType, SizeType, VariantType } from "@/lib/type";

const buttonVariants = cva(
  [
    "whitespace-nowrap text-sm font-medium rounded-md",
    "inline-flex items-center justify-center",
    "transition-all active:scale-95",
    "ring-offset-background cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outline: "border",
        text: "",
      },
      color: {
        primary: "",
        secondary: "",
        warning: "",
        success: "",
        danger: "",
      },
      size: {
        sm: "h-8 px-3 gap-1.5",
        md: "h-9 px-4 gap-2",
        lg: "h-11 px-6 gap-4",
      },
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
        none: "rounded-none",
      },
      isIconOnly: {
        true: "p-0",
      },
    },
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "md",
    },
    compoundVariants: [
      // compound isIcon and size
      { isIconOnly: true, size: "sm", class: "size-8" },
      { isIconOnly: true, size: "md", class: "size-9" },
      { isIconOnly: true, size: "lg", class: "size-11" },

      // compound variant and color
      { variant: "solid", color: "primary", class: BUTTON_SOLID.primary },
      { variant: "solid", color: "secondary", class: BUTTON_SOLID.secondary },
      { variant: "solid", color: "warning", class: BUTTON_SOLID.warning },
      { variant: "solid", color: "success", class: BUTTON_SOLID.success },
      { variant: "solid", color: "danger", class: BUTTON_SOLID.danger },
      { variant: "soft", color: "primary", class: BUTTON_SOFT.primary },
      { variant: "soft", color: "secondary", class: BUTTON_SOFT.secondary },
      { variant: "soft", color: "warning", class: BUTTON_SOFT.warning },
      { variant: "soft", color: "success", class: BUTTON_SOFT.success },
      { variant: "soft", color: "danger", class: BUTTON_SOFT.danger },
      { variant: "outline", color: "primary", class: BUTTON_OUTLINE.primary },
      {
        variant: "outline",
        color: "secondary",
        class: BUTTON_OUTLINE.secondary,
      },
      { variant: "outline", color: "warning", class: BUTTON_OUTLINE.warning },
      { variant: "outline", color: "success", class: BUTTON_OUTLINE.success },
      { variant: "outline", color: "danger", class: BUTTON_OUTLINE.danger },
      { variant: "text", color: "primary", class: BUTTON_OUTLINE.primary },
      {
        variant: "text",
        color: "secondary",
        class: BUTTON_TEXT.secondary,
      },
      { variant: "text", color: "warning", class: BUTTON_TEXT.warning },
      { variant: "text", color: "success", class: BUTTON_TEXT.success },
      { variant: "text", color: "danger", class: BUTTON_TEXT.danger },
    ],
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isIconOnly?: boolean;
  isLoading?: boolean;
  variant?: VariantType | "text";
  color?: ColorType;
  size?: SizeType;
  rounded?: RoundedType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant,
      color = "primary",
      size,
      rounded,
      isIconOnly,
      isLoading,
      asChild = false,
      children,
      ...restProps
    } = props;
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            color,
            rounded,
            isIconOnly,
            className,
          })
        )}
        disabled={isLoading}
        {...restProps}
      >
        {isLoading ? (
          <Loader2 className="size-4 p-0 m-0 animate-spin" />
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
