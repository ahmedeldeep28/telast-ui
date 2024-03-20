import * as React from "react";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const DrawerTitle = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Title
        ref={ref}
        className={cn(
            "text-xl font-semibold leading-none tracking-tight",
            className
        )}
        {...props}
    />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

export { DrawerTitle };
