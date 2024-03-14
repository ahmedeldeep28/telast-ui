import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ColorType } from "@/lib/type";

const tabsTriggerStyles = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap",
    "rounded-md px-3 py-1 text-sm font-medium",
    "ring-offset-background transition-all",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-[state=active]:shadow",
  ],
  {
    variants: {
      color: {
        default:
          "data-[state=active]:bg-background data-[state=active]:text-foreground",
        primary:
          "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
        secondary:
          "data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground",
        warning:
          "data-[state=active]:bg-warning data-[state=active]:text-warning-foreground",
        success:
          "data-[state=active]:bg-success data-[state=active]:text-success-foreground",
        danger:
          "data-[state=active]:bg-danger data-[state=active]:text-danger-foreground",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  color?: ColorType;
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, color, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerStyles({ color }), className)}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export { TabsTrigger, tabsTriggerStyles };
