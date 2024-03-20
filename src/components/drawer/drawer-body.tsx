import * as React from "react";
import { cn } from "@/lib/utils";

const DrawerBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-6 py-2", className)} {...props} />
);
DrawerBody.displayName = "DrawerBody";

export { DrawerBody };
