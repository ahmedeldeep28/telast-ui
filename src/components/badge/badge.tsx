import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ColorType, RoundedType, SizeType, VariantType } from "@/lib/type";
import { cn } from "@/lib/utils";
import { BADGE_OUTLINE, BADGE_SOFT, BADGE_SOLID } from "./badge-variants";

const badgeStyles = cva(
  [
    "inline-flex gap-2 items-center",
    "rounded-full font-semibold transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outline: "border",
      },
      color: {
        primary: "",
        secondary: "",
        warning: "",
        success: "",
        danger: "",
      },
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
        none: "rounded-none",
      },
      size: {
        sm: "h-5 px-1.5 text-xs",
        md: "h-6 px-2 text-sm",
        lg: "h-7 px-2.5 text-base",
      },
    },
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "md",
    },
    compoundVariants: [
      // compound variant and color
      { variant: "solid", color: "primary", class: BADGE_SOLID.primary },
      { variant: "solid", color: "secondary", class: BADGE_SOLID.secondary },
      { variant: "solid", color: "warning", class: BADGE_SOLID.warning },
      { variant: "solid", color: "success", class: BADGE_SOLID.success },
      { variant: "solid", color: "danger", class: BADGE_SOLID.danger },
      { variant: "soft", color: "primary", class: BADGE_SOFT.primary },
      { variant: "soft", color: "secondary", class: BADGE_SOFT.secondary },
      { variant: "soft", color: "warning", class: BADGE_SOFT.warning },
      { variant: "soft", color: "success", class: BADGE_SOFT.success },
      { variant: "soft", color: "danger", class: BADGE_SOFT.danger },
      { variant: "outline", color: "primary", class: BADGE_OUTLINE.primary },
      {
        variant: "outline",
        color: "secondary",
        class: BADGE_OUTLINE.secondary,
      },
      { variant: "outline", color: "warning", class: BADGE_OUTLINE.warning },
      { variant: "outline", color: "success", class: BADGE_OUTLINE.success },
      { variant: "outline", color: "danger", class: BADGE_OUTLINE.danger },
    ],
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeStyles> {
  variant?: VariantType;
  color?: ColorType;
  size?: SizeType;
  rounded?: RoundedType;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const { className, variant, color, size, rounded, children, ...restProps } =
    props;

  return (
    <div
      ref={ref}
      className={cn(badgeStyles({ variant, color, size, rounded }), className)}
      {...restProps}
    >
      {children}
    </div>
  );
});

export { Badge, badgeStyles };
