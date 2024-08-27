import { ComponentProps, useMemo } from "react";
import { cva } from "class-variance-authority";
type ButtonProps = ComponentProps<"button"> & {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary";
};

const buttonVariants = cva(["rounder"], {
  variants: {
    size: {
      small: "rounded-sm",
      medium: "rounded-md",
      large: "rounded-lg",
    },
    variant: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-white",
      tertiary: "bg-green-500 text-white",
    },
  },
  defaultVariants: {
    size: "medium",
    variant: "primary",
  },
});

export default function Button({ size, variant, ...rest }: ButtonProps) {
  const className = useMemo(() => {
    return buttonVariants({ size, variant });
  }, [size, variant]);

  return (
    <button {...rest} className={className}>
      Button
    </button>
  );
}