import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
