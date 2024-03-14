import * as React from "react";
import { cn } from "@/lib/utils";

const DialogBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-6 py-2", className)} {...props} />
);
DialogBody.displayName = "DialogBody";

export { DialogBody };
