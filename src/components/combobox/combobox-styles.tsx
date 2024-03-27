import { cva } from "class-variance-authority";

export const comboboxOptionStyle = cva(
  [
    "relative flex w-full cursor-default select-none items-center",
    "rounded-sm py-1.5 ps-2 pe-2 text-sm outline-none",
  ],
  {
    variants: {
      isDisabled: {
        true: "pointer-events-none opacity-50",
      },
      isFocused: {
        true: "bg-accent text-accent-foreground",
      },
      isSelected: {
        true: "bg-accent text-accent-foreground",
      },
    },
  }
);

export const comboboxControlStyle = cva(
  [
    "border border-input bg-background",
    "w-full flex items-center justify-between",
    "ring-offset-background",
  ],
  {
    variants: {
      color: {
        primary: "",
        secondary: "",
        success: "",
        danger: "",
        warning: "",
      },
      size: {
        sm: "min-h-9 px-2 py-1 text-xs",
        md: "min-h-10 px-3 py-2 text-sm",
        lg: "min-h-11 px-3.5 py-2 text-base",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      isDisabled: {
        true: "pointer-events-none opacity-50",
      },
      isFocused: {
        true: "ring-1",
      },
      isInvalid: {
        true: "border-danger",
      },
    },
    defaultVariants: {
      size: "md",
      rounded: "md",
      color: "primary",
    },
    compoundVariants: [
      {
        color: "primary",
        isFocused: true,
        class: "border-primary ring-primary",
      },
      {
        color: "secondary",
        isFocused: true,
        class: "border-secondary ring-secondary",
      },
      {
        color: "success",
        isFocused: true,
        class: "border-success ring-success",
      },
      {
        color: "danger",
        isFocused: true,
        class: "border-danger ring-danger",
      },
      {
        color: "warning",
        isFocused: true,
        class: "border-warning ring-warning",
      },
      {
        isFocused: true,
        isInvalid: true,
        class: "border-danger ring-danger",
      },
    ],
  }
);

export const comboboxMenuStyle = cva(
  [
    "relative z-50 max-h-96 min-w-[8rem] overflow-hidden mt-1",
    "rounded-md border border-input bg-popover text-popover-foreground shadow-md",
    "animate-in fade-in-0 zoom-in-95",
  ],
  {
    variants: {
      placement: {
        bottom: "slide-in-from-top-2",
        top: "slide-in-from-bottom-2",
      },
    },
  }
);
