import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { SelectTrigger } from "./select-trigger";
import { SelectContent } from "./select-content";
import { ColorType, RoundedType, SizeType } from "@/lib/type";

const SelectValue = SelectPrimitive.Value;

interface SelectProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  placeholder?: string;
  isInvalid?: boolean;
  color?: ColorType;
  size?: SizeType;
  rounded?: RoundedType;
  popperProps?: SelectPrimitive.PopperContentProps;
  className?: string;
}

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  SelectProps
>((props, ref) => {
  const {
    children,
    className,
    color,
    size,
    rounded,
    isInvalid,
    placeholder,
    popperProps,
    ...restProps
  } = props;
  return (
    <SelectPrimitive.Root {...restProps}>
      <SelectTrigger
        ref={ref}
        color={color}
        size={size}
        rounded={rounded}
        isInvalid={isInvalid}
        className={className}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent {...popperProps}>{children}</SelectContent>
    </SelectPrimitive.Root>
  );
});
Select.displayName = SelectPrimitive.Root.displayName;

export { Select };
