import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

type InputProps = ComponentProps<"input"> & {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary";
  trimOnBlur?: boolean;
};

const inputVariants = cva(["rounder"], {
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

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    size,
    variant,
    trimOnBlur,
    onChange: onChangeProp,
    onBlur: onBlurProp,
    ...rest
  },
  forwardedRef
) {
  const className = inputVariants({
    size: size,
    variant: variant,
  });

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    if (trimOnBlur) {
      const trimmedValue = event.target.value.trim();

      onChangeProp?.({
        ...event,
        target: {
          ...event.target,
          value: trimmedValue,
        },
      });
    }

    onBlurProp?.(event);
  };

  return (
    <input
      ref={forwardedRef}
      className={className}
      {...rest}
      onBlur={handleBlur}
    />
  );
});

export default Input;
