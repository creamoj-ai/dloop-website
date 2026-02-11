"use client";

import { useState } from "react";
import { Check, User, Mail, Phone, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { NAPLES_ZONES } from "@/lib/constants";

export default function Registrati() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city_zone: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email) {
      setError("Nome ed email sono obbligatori");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Errore durante la registrazione");
        return;
      }

      setSuccess(true);
    } catch {
      setError("Errore di connessione. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="registrati" className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Il momento di cambiare e' adesso"
          subtitle="Sii tra i primi. Entra in dloop."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Benefits */}
          <ScrollReveal>
            <div className="space-y-5">
              {[
                "Consegni, costruisci la tua rete e apri il tuo negozio",
                "Guadagni anche quando non stai lavorando",
                "Tu decidi quando, dove e come lavorare",
                "Vedi sulla mappa dove ci sono piu' ordini",
                "I tuoi clienti ordinano anche via WhatsApp",
                "Piu' lavori, piu' sali di livello e vieni premiato",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-earnings/15 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-earnings" />
                  </div>
                  <span className="text-text-secondary text-sm">
                    {benefit}
                  </span>
                </div>
              ))}

              {/* Extra persuasion card */}
              <div className="bg-surface rounded-lg p-5 mt-6 border-l-4 border-l-primary">
                <p className="text-sm text-text-secondary leading-relaxed">
                  <span className="text-white font-semibold">
                    Zero costi, zero vincoli.
                  </span>{" "}
                  Entra gratis, esci quando vuoi. Ma chi entra adesso sara&apos; tra i
                  primi a lavorare in un modo completamente nuovo.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-surface rounded-lg p-6 md:p-8">
              {success ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-earnings/15 flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-earnings" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Registrazione completata!
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Ti contatteremo presto con le istruzioni per scaricare
                    l&apos;app dloop.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-urgent/10 border border-urgent/30 text-urgent text-sm rounded-md px-4 py-3">
                      {error}
                    </div>
                  )}

                  <Input
                    placeholder="Nome completo"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    icon={<User size={18} />}
                    required
                  />

                  <Input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    icon={<Mail size={18} />}
                    required
                  />

                  <Input
                    type="tel"
                    placeholder="Telefono (opzionale)"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    icon={<Phone size={18} />}
                  />

                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted">
                      <MapPin size={18} />
                    </div>
                    <select
                      value={form.city_zone}
                      onChange={(e) =>
                        setForm({ ...form, city_zone: e.target.value })
                      }
                      className="w-full bg-surface-variant border border-border rounded-md pl-11 pr-4 py-3.5 text-[15px] text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200 appearance-none"
                    >
                      <option value="" className="bg-surface-variant">
                        Zona preferita (opzionale)
                      </option>
                      {NAPLES_ZONES.map((zone) => (
                        <option
                          key={zone}
                          value={zone}
                          className="bg-surface-variant"
                        >
                          {zone}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    loading={loading}
                  >
                    Registrati ora
                  </Button>

                  <p className="text-[11px] text-text-muted text-center leading-relaxed">
                    Registrandoti, accetti i nostri{" "}
                    <a href="/terms" className="text-text-secondary hover:text-white underline">
                      Termini di Servizio
                    </a>{" "}
                    e la{" "}
                    <a href="/privacy" className="text-text-secondary hover:text-white underline">
                      Privacy Policy
                    </a>.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
