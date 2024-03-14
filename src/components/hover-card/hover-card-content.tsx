import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const hoverCardContentStyles = cva(
  [
    "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
    "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  ],
  {
    variants: {
      side: {
        bottom: "data-[side=bottom]:slide-in-from-top-2",
        left: "data-[side=left]:slide-in-from-right-2",
        right: "data-[side=right]:slide-in-from-left-2",
        top: "data-[side=top]:slide-in-from-bottom-2",
      },
    },
    defaultVariants: {
      side: "bottom",
    },
  }
);

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", side, sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    side={side}
    className={cn(hoverCardContentStyles({ side }), className)}
    {...props}
  />
));

HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCardContent, hoverCardContentStyles };
