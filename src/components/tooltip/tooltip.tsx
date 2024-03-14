import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { TooltipContent, TooltipContentProps } from "./tooltip-content";
import { ColorType } from "@/lib/type";

const TooltipTrigger = TooltipPrimitive.Trigger;

interface TooltipProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> {
  className?: string;
  content?: string;
  color?: ColorType;
  popperProps?: TooltipContentProps;
}

const Tooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Root>,
  TooltipProps
>((props, ref) => {
  const { children, className, content, color, popperProps, ...restProps } =
    props;
  return (
    <TooltipPrimitive.Root {...restProps}>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent
        ref={ref}
        className={className}
        color={color}
        {...popperProps}
      >
        {content}
      </TooltipContent>
    </TooltipPrimitive.Root>
  );
});

Tooltip.displayName = TooltipPrimitive.Root.displayName;

export { Tooltip };
