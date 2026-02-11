"use client";

import { Bike, Users, ShoppingBag, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const modes = [
  {
    icon: <Bike size={28} />,
    label: "CONSEGNA",
    title: "Ritira e consegna",
    description:
      "Ricevi ordini, ritiri e consegni. Sai gia' quanto guadagni prima di accettare. Tu scegli quando, dove e come lavorare.",
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
    borderClass: "border-primary/30",
  },
  {
    icon: <Users size={28} />,
    label: "LA TUA RETE",
    title: "Costruisci il tuo giro",
    description:
      "Porta clienti, negozianti e altri dlooper nella tua rete. Ogni volta che ordinano, guadagni una parte. Anche quando non stai lavorando.",
    colorClass: "text-earnings",
    bgClass: "bg-earnings/15",
    borderClass: "border-earnings/30",
  },
  {
    icon: <ShoppingBag size={28} />,
    label: "IL TUO NEGOZIO",
    title: "Apri il tuo negozio",
    description:
      "Vendi i tuoi prodotti dentro l'app. I clienti ordinano anche via WhatsApp grazie a un assistente intelligente. Tu gestisci tutto da dloop.",
    colorClass: "text-bonus",
    bgClass: "bg-bonus/15",
    borderClass: "border-bonus/30",
  },
];

export default function TreModi() {
  return (
    <section id="tre-modi" className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={<>Non sei un fattorino. Sei un <span className="text-primary">dlooper</span>.</>}
          subtitle="Ti costruisci il tuo giro di clienti e guadagni anche senza consegnare."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {modes.map((mode, i) => (
            <ScrollReveal key={mode.label} delay={i * 0.12}>
              <div
                className={`bg-surface rounded-lg p-6 border ${mode.borderClass} hover:-translate-y-1 transition-transform duration-200 h-full`}
              >
                {/* Label + Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-md ${mode.bgClass} flex items-center justify-center ${mode.colorClass}`}
                  >
                    {mode.icon}
                  </div>
                  <span
                    className={`text-[10px] font-bold tracking-[0.15em] uppercase ${mode.colorClass}`}
                  >
                    {mode.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {mode.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {mode.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* AI highlight card */}
        <ScrollReveal delay={0.4}>
          <div className="mt-8 bg-surface rounded-lg p-6 border border-primary/30 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-5 relative">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                <Sparkles size={28} className="text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-primary mb-1.5">
                  La nostra AI lavora per te
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Grazie alla nostra intelligenza artificiale, i tuoi clienti potranno ordinare via{" "}
                  <span className="text-white font-medium">WhatsApp</span> parlando con un assistente
                  che risponde, prende l&apos;ordine e lo gira direttamente a te.
                  Tu non devi fare niente: l&apos;AI gestisce i messaggi, aggiorna il tuo negozio
                  e ti organizza le consegne.{" "}
                  <span className="text-primary font-semibold">
                    Tu lavori, lei ti fa guadagnare di piu&apos;.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Differentiator strip */}
        <ScrollReveal delay={0.5}>
          <div className="mt-4 bg-surface-variant rounded-lg px-6 py-4 text-center">
            <p className="text-sm text-text-secondary">
              <span className="text-white font-semibold">Con le altre app sei un numero.</span>{" "}
              Con dloop ti costruisci i tuoi clienti, la tua rete e il tuo negozio.{" "}
              <span className="text-primary font-semibold">Tre entrate, una sola app.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
