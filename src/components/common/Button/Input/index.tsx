import { ComponentProps, useMemo } from "react";
import { cva } from "class-variance-authority";
import { FieldError } from "react-hook-form";

type InputProps = ComponentProps<"input"> & {
  size?: "small" | "medium" | "large";
  variant?: "outline" | "filled" | "standard";
  label?: string;
  error?: FieldError | undefined;
  trimOnBlur?: boolean; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
};

const inputVariants = cva(["input-base"], {
  variants: {
    size: {
      small: "p-2 text-sm",
      medium: "p-3 text-md",
      large: "p-4 text-lg",
    },
    variant: {
      outline: "border border-gray-300 rounded",
      filled: "bg-gray-100 border-none rounded",
      standard: "border-b-2 border-gray-300 bg-transparent",
    },
  },
  defaultVariants: {
    size: "medium",
    variant: "outline",
  },
});

export default function Input({
  size,
  variant,
  label,
  error,
  trimOnBlur,
  onChange,
  ...rest
}: InputProps) {
  const inputClassName = useMemo(() => {
    return inputVariants({ size, variant });
  }, [size, variant]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (trimOnBlur) {
      e.target.value = e.target.value.trim();
    }
    
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={rest.id} className="block text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        {...rest}
        className={inputClassName}
        onBlur={handleBlur}
      />
      {error && <span className="error-text text-red-500 mt-1">{error.message}</span>}
    </div>
  );
}
