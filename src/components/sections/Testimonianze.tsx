"use client";

import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonianze() {
  return (
    <section
      id="testimonianze"
      className="py-16 md:py-24 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Chi ha provato non torna indietro"
          subtitle="Voci reali da chi ha gia' scelto dloop"
        />

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal
              key={t.name}
              delay={i * 0.1}
              className="min-w-[300px] md:min-w-0 snap-center"
            >
              <div className="bg-surface rounded-lg p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-bonus/20 flex items-center justify-center text-bonus font-bold text-sm shrink-0">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {t.role.startsWith("Dlooper") ? (
                        <>
                          <span className="text-primary font-semibold">Dlooper</span>
                          {t.role.slice(7)}
                        </>
                      ) : (
                        t.role
                      )}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1 mb-4">
                  <span className="text-primary text-2xl font-bold leading-none">
                    &ldquo;
                  </span>
                  <p className="text-sm text-text-secondary leading-relaxed italic inline">
                    {t.quote}
                  </p>
                </div>

                {/* Bottom: Rating + Earnings */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        size={14}
                        className={
                          si < t.rating
                            ? "fill-stats text-stats"
                            : "text-text-muted"
                        }
                      />
                    ))}
                  </div>
                  <span className="bg-earnings/15 text-earnings text-xs font-semibold px-3 py-1 rounded-full">
                    {t.earnings}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
