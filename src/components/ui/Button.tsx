import { type ComponentProps } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface ButtonProps extends ComponentProps<"a"> {
  variant?: Variant;
  size?: Size;
  href?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 shadow-sm",
  secondary:
    "bg-white text-primary-600 border border-primary-200 hover:bg-primary-50",
  ghost:
    "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100",
};

const sizeStyles: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const baseClassName = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={baseClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={baseClassName}
      {...props}
    >
      {children}
    </a>
  );
}
