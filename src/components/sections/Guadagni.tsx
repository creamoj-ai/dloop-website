"use client";

import { Package, Wallet, Users, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const kpis = [
  {
    label: "CONSEGNE MEDIE",
    value: "8-12",
    detail: "/giorno",
    icon: <Package size={20} />,
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    label: "GUADAGNO SETTIMANALE",
    value: "\u20AC350-500",
    detail: "/settimana",
    icon: <Wallet size={20} />,
    colorClass: "text-earnings",
    bgClass: "bg-earnings/15",
  },
  {
    label: "BONUS REFERRAL",
    value: "\u20AC50",
    detail: "/amico invitato",
    icon: <Users size={20} />,
    colorClass: "text-bonus",
    bgClass: "bg-bonus/15",
  },
  {
    label: "PROSSIMO PAYOUT",
    value: "3 giorni",
    detail: "ciclo di pagamento",
    icon: <Clock size={20} />,
    colorClass: "text-route",
    bgClass: "bg-route/15",
  },
];

export default function Guadagni() {
  return (
    <section id="guadagni" className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Guadagni reali, non promesse"
          subtitle="Numeri veri dai rider dloop a Napoli"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Large earnings display */}
          <ScrollReveal>
            <div className="bg-surface rounded-lg p-8 text-center lg:text-left">
              <p className="text-[10px] font-semibold tracking-[0.1em] text-text-secondary uppercase mb-2">
                Guadagno Medio Orario
              </p>
              <div className="flex items-baseline justify-center lg:justify-start gap-1 mb-4">
                <span className="text-6xl md:text-7xl font-bold text-white">
                  <AnimatedCounter target={18} prefix={"\u20AC"} />
                </span>
                <span className="text-xl text-text-secondary">/ora</span>
              </div>
              <span className="inline-block bg-earnings/15 text-earnings text-sm font-semibold px-4 py-1.5 rounded-full">
                Fino a \u20AC25/h nelle ore di punta
              </span>
            </div>
          </ScrollReveal>

          {/* KPI Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {kpis.map((kpi, i) => (
              <ScrollReveal key={kpi.label} delay={i * 0.1}>
                <div className="bg-surface rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-md ${kpi.bgClass} flex items-center justify-center ${kpi.colorClass}`}
                    >
                      {kpi.icon}
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.1em] text-text-secondary uppercase">
                      {kpi.label}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-white mb-0.5">
                    {kpi.value}
                  </p>
                  <p className="text-xs text-text-secondary">{kpi.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
