import * as React from "react";
import { cn } from "@/lib/utils";

const Form = React.forwardRef<
  HTMLFormElement,
  React.HTMLAttributes<HTMLFormElement>
>((props, ref) => {
  const { className, children, ...restProps } = props;

  return (
    <form ref={ref} className={cn(className)} {...restProps}>
      {children}
    </form>
  );
});
Form.displayName = "Form";

export { Form };
