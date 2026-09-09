import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "primary" | "accent" | "dark" | "outline" | "white";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-secondary shadow-[0_10px_0_-2px_rgba(9,177,171,.28)] hover:shadow-[0_10px_0_-2px_rgba(47,43,43,.22)]",
  accent:
    "bg-accent text-white hover:bg-secondary shadow-[0_10px_0_-2px_rgba(215,139,205,.32)] hover:shadow-[0_10px_0_-2px_rgba(47,43,43,.22)]",
  dark: "bg-secondary text-white hover:bg-primary",
  outline:
    "bg-transparent text-secondary border-2 border-secondary hover:bg-secondary hover:text-white",
  white: "bg-white text-secondary hover:bg-sun hover:text-secondary",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[14px]",
  md: "px-7 py-3.5 text-[16px]",
  lg: "px-9 py-4.5 text-[17px]",
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

function classes(variant: Variant, size: Size, className = "") {
  return [
    "inline-flex items-center justify-center gap-2 rounded-full font-[var(--font-heading)] font-semibold",
    "transition-all duration-300 ease-out will-change-transform",
    "hover:-translate-y-1 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");
}

export function ButtonLink({
  to,
  children,
  variant = "primary",
  size = "md",
  className,
}: BaseProps & { to: string }) {
  const isExternal = to.startsWith("http") || to.startsWith("mailto:") || to.startsWith("tel:");
  if (isExternal) {
    return (
      <a href={to} className={classes(variant, size, className)}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={classes(variant, size, className)}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
