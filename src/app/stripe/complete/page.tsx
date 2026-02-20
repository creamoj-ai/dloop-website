import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Onboarding completato | dloop",
  description: "Il tuo account Stripe e' stato configurato con successo",
};

export default function StripeCompletePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-earnings/15 flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-earnings">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Onboarding completato!
          </h1>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Il tuo account pagamenti e&apos; stato configurato con successo.
            Ora puoi ricevere pagamenti direttamente tramite dloop.
          </p>
          <p className="text-sm text-text-muted">
            Puoi chiudere questa pagina.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
