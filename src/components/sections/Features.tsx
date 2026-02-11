"use client";

import {
  MapPin,
  TrendingUp,
  Route,
  Trophy,
  Wallet,
  Shield,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Route: <Route size={24} />,
  Trophy: <Trophy size={24} />,
  Wallet: <Wallet size={24} />,
  Shield: <Shield size={24} />,
};

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Perche' non esiste niente come dloop"
          subtitle="Tutto quello che le altre piattaforme non ti danno"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08}>
              <div className="bg-surface rounded-lg p-6 hover:-translate-y-1 transition-transform duration-200 h-full">
                <div
                  className={`w-12 h-12 rounded-md ${feature.bgClass} flex items-center justify-center ${feature.colorClass} mb-4`}
                >
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
