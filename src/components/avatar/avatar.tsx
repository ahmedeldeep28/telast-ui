import * as React from "react";
import { Root, Fallback, Image } from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ColorType, RoundedType, SizeType } from "@/lib/type";

const AvatarStyles = cva(
  "relative inline-flex shrink-0 overflow-hidden bg-muted",
  {
    variants: {
      color: {
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-success text-success-foreground",
        danger: "bg-danger text-danger-foreground",
        warning: "bg-warning text-warning-foreground",
      },
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
        none: "rounded-none",
      },
      size: {
        sm: "size-8 text-sm",
        md: "size-10 text-base",
        lg: "size-14 text-xl",
      },
    },
    defaultVariants: {
      rounded: "full",
      size: "md",
      color: "primary",
    },
  }
);

interface AvatarProps extends React.ComponentPropsWithoutRef<typeof Root> {
  src?: string;
  alt?: string;
  size?: SizeType;
  rounded?: RoundedType;
  color?: ColorType;
  fallback?: React.ReactNode;
  classNames?: {
    base?: string;
    image?: string;
    fallback?: string;
  };
}

const Avatar = React.forwardRef<React.ElementRef<typeof Root>, AvatarProps>(
  (props, ref) => {
    const {
      className,
      classNames = {},
      src,
      color,
      size,
      rounded,
      fallback,
      alt,
      ...restProps
    } = props;
    return (
      <Root
        ref={ref}
        className={cn(AvatarStyles({ size, rounded, color }), className)}
        {...restProps}
      >
        <Image className={cn("size-full")} src={src} alt={alt} />
        <Fallback
          className={cn(
            "size-full flex items-center justify-center",
            classNames.fallback
          )}
        >
          {fallback}
        </Fallback>
      </Root>
    );
  }
);

Avatar.displayName = Root.displayName;

export { Avatar, AvatarStyles };
