import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Link scaduto | dloop",
  description: "Il link di onboarding e' scaduto, richiedine uno nuovo",
};

export default function StripeRefreshPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-stats/15 flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-stats">
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M16 16h5v5" />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Link scaduto
          </h1>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Il link di onboarding e&apos; scaduto o non e&apos; piu&apos; valido.
            Contatta l&apos;operatore dloop per ricevere un nuovo link.
          </p>
          <a
            href="https://wa.me/393281854639"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Contattaci su WhatsApp
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
