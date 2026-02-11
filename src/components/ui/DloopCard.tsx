import { ReactNode } from "react";

interface DloopCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  accentColor?: string;
  onClick?: () => void;
}

export default function DloopCard({
  children,
  className = "",
  hoverable = false,
  accentColor,
  onClick,
}: DloopCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-surface rounded-lg p-5
        ${accentColor ? `border-l-4 border-l-[${accentColor}]` : ""}
        ${hoverable ? "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.4)] cursor-pointer" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
