"use client";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

export default function Input({ icon, error, className = "", ...props }: InputProps) {
  return (
    <div className="w-full">
      <div className="relative">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted">
            {icon}
          </div>
        )}
        <input
          {...props}
          className={`
            w-full bg-surface-variant border border-border rounded-md
            px-4 py-3.5 text-[15px] text-white placeholder:text-text-muted
            focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
            transition-colors duration-200
            ${icon ? "pl-11" : ""}
            ${error ? "border-urgent focus:border-urgent focus:ring-urgent" : ""}
            ${className}
          `}
        />
      </div>
      {error && <p className="mt-1.5 text-xs text-urgent">{error}</p>}
    </div>
  );
}
