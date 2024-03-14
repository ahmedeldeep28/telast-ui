import * as React from "react";
import * as DividerPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const dividerStyles = cva("shrink-0 bg-border", {
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

const Divider = React.forwardRef<
  React.ElementRef<typeof DividerPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof DividerPrimitive.Root>
>((props, ref) => {
  const {
    className,
    orientation = "horizontal",
    decorative = true,
    ...restProps
  } = props;
  return (
    <DividerPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(dividerStyles({ orientation }), className)}
      {...restProps}
    />
  );
});

Divider.displayName = DividerPrimitive.Root.displayName;

export { Divider, dividerStyles };
