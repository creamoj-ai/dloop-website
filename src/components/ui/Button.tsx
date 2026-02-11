"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const sizeClasses = {
    sm: "py-2 px-5 text-sm",
    md: "py-3 px-7 text-[15px]",
    lg: "py-3.5 px-8 text-base",
  };

  const variantClasses = {
    primary:
      "bg-primary hover:bg-primary-hover text-white font-bold tracking-wider uppercase animate-glow-pulse hover:shadow-[0_0_30px_rgba(255,107,0,0.4)]",
    secondary:
      "border border-border-light text-white font-semibold hover:bg-surface hover:border-primary",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`
        rounded-md transition-all duration-200 inline-flex items-center justify-center gap-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : null}
      {children}
    </button>
  );
}
