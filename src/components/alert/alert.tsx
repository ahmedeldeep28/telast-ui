import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ALERT_OUTLINE, ALERT_SOFT, ALERT_SOLID } from "./alert-variants";
import { ColorType, VariantType } from "@/lib/type";

const alertStyles = cva("relative w-full  p-4", {
  variants: {
    color: {
      primary: "",
      secondary: "",
      warning: "",
      success: "",
      danger: "",
    },
    variant: {
      solid: "",
      soft: "",
      outline: "border",
    },
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
      none: "rounded-none",
    },
  },
  defaultVariants: {
    color: "primary",
    variant: "outline",
    rounded: "md",
  },
  compoundVariants: [
    // compound variant and color
    { variant: "solid", color: "primary", class: ALERT_SOLID.primary },
    { variant: "solid", color: "secondary", class: ALERT_SOLID.secondary },
    { variant: "solid", color: "warning", class: ALERT_SOLID.warning },
    { variant: "solid", color: "success", class: ALERT_SOLID.success },
    { variant: "solid", color: "danger", class: ALERT_SOLID.danger },
    { variant: "soft", color: "primary", class: ALERT_SOFT.primary },
    { variant: "soft", color: "secondary", class: ALERT_SOFT.secondary },
    { variant: "soft", color: "warning", class: ALERT_SOFT.warning },
    { variant: "soft", color: "success", class: ALERT_SOFT.success },
    { variant: "soft", color: "danger", class: ALERT_SOFT.danger },
    { variant: "outline", color: "primary", class: ALERT_OUTLINE.primary },
    {
      variant: "outline",
      color: "secondary",
      class: ALERT_OUTLINE.secondary,
    },
    { variant: "outline", color: "warning", class: ALERT_OUTLINE.warning },
    { variant: "outline", color: "success", class: ALERT_OUTLINE.success },
    { variant: "outline", color: "danger", class: ALERT_OUTLINE.danger },
  ],
});

interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof alertStyles> {
  color?: ColorType;
  variant?: VariantType;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, color, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertStyles({ color, variant }), className)}
      {...props}
    />
  )
);
Alert.displayName = "Alert";

export { Alert, alertStyles };
