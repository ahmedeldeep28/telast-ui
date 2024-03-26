import React from "react";
import Select, { Props } from "react-select";
import {
  comboboxControlStyle,
  comboboxMenuStyle,
  comboboxOptionStyle,
} from "./combobox-styles";
import { cn } from "@/lib/utils";
import { ColorType, RoundedType, SizeType } from "@/lib/type";

interface ComboboxProps extends Props {
  isInvalid?: boolean;
  color?: ColorType;
  size?: SizeType;
  rounded?: RoundedType;
}

const Combobox = React.forwardRef<
  React.ElementRef<typeof Select>,
  ComboboxProps
>((props, ref) => {
  const { color, size, rounded, isInvalid } = props;
  return (
    <Select
      classNames={{
        control: ({ isDisabled, isFocused }) => {
          return cn(
            comboboxControlStyle({
              isDisabled,
              isFocused,
              color,
              size,
              rounded,
              isInvalid,
            })
          );
        },
        menu: ({ placement }) => {
          return cn(comboboxMenuStyle({ placement }));
        },
        option: ({ isDisabled, isFocused, isSelected }) => {
          return cn(comboboxOptionStyle({ isDisabled, isFocused, isSelected }));
        },
        valueContainer: () => "flex gap-1",
        noOptionsMessage: () => "py-2 text-center text-sm",
        placeholder: () => "text-muted-foreground",
        menuList: () => "p-1",
        dropdownIndicator: () => "w-4 opacity-50",
        multiValue: () =>
          "h-6 flex items-center bg-primary/10 text-primary rounded-sm",
        multiValueRemove: () => "p-1 hover:bg-danger/20 hover:text-danger",
        multiValueLabel: () => "px-1.5 text-sm",
      }}
      unstyled
      ref={ref}
      {...props}
    />
  );
});
Combobox.displayName = "Combobox";

export { Combobox };
