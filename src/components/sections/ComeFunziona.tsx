"use client";

import { UserPlus, Smartphone, Banknote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { STEPS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  UserPlus: <UserPlus size={24} />,
  Smartphone: <Smartphone size={24} />,
  Banknote: <Banknote size={24} />,
};

export default function ComeFunziona() {
  return (
    <section id="come-funziona" className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Entra nella nuova era"
          subtitle="Tre passi e sei dentro"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px border-t-2 border-dashed border-border" />

          {STEPS.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <div className="bg-surface rounded-lg p-6 text-center relative hover:-translate-y-1 transition-transform duration-200">
                {/* Number */}
                <div className="w-12 h-12 rounded-full bg-primary/15 text-primary font-bold text-lg flex items-center justify-center mx-auto mb-4 relative z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-md bg-surface-variant flex items-center justify-center mx-auto mb-4 text-text-secondary">
                  {iconMap[step.icon]}
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
