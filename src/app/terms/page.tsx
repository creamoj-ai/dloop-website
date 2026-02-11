import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Termini di Servizio | dloop",
  description: "Termini e condizioni d'uso del sito web dloop",
};

// ============================================================
// ISTRUZIONI: Sostituisci INSERISCI_TERMS_ID con il tuo
// Terms ID di Iubenda, oppure lascia il testo statico sotto
// ============================================================

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">
            Termini di Servizio
          </h1>
          <div className="bg-surface rounded-lg p-6 md:p-8 space-y-6 text-sm text-text-secondary leading-relaxed">
            <p className="text-xs text-text-muted">
              Ultimo aggiornamento: Febbraio 2026
            </p>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                1. Oggetto
              </h2>
              <p>
                I presenti Termini di Servizio (&quot;Termini&quot;) regolano
                l&apos;utilizzo del sito web dloop.it (&quot;Sito&quot;) e del
                servizio di pre-registrazione alla piattaforma dloop, gestito da
                dloop (&quot;Titolare&quot;), con sede a Napoli, Italia.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                2. Servizio offerto
              </h2>
              <p>
                Il Sito consente agli utenti di pre-registrarsi come rider sulla
                piattaforma dloop, attualmente in fase di lancio. La
                pre-registrazione non costituisce un contratto di lavoro ne&apos;
                un impegno vincolante per nessuna delle parti.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                3. Requisiti
              </h2>
              <p>
                Per utilizzare il Sito e pre-registrarsi, l&apos;utente deve
                avere almeno 18 anni di eta&apos; e fornire informazioni veritiere
                e accurate.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                4. Dati personali
              </h2>
              <p>
                Il trattamento dei dati personali e&apos; disciplinato dalla
                nostra{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                , che l&apos;utente e&apos; invitato a leggere prima della
                registrazione.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                5. Proprieta&apos; intellettuale
              </h2>
              <p>
                Tutti i contenuti del Sito (testi, grafica, loghi, icone, codice
                sorgente) sono di proprieta&apos; esclusiva del Titolare e sono
                protetti dalle leggi italiane e internazionali sul diritto
                d&apos;autore.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                6. Limitazione di responsabilita&apos;
              </h2>
              <p>
                Il Titolare non garantisce la disponibilita&apos; continua del
                Sito ne&apos; l&apos;assenza di errori. Il Sito e&apos; fornito
                &quot;cosi&apos; com&apos;e&apos;&quot; senza garanzie di alcun
                tipo.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                7. Modifiche ai Termini
              </h2>
              <p>
                Il Titolare si riserva il diritto di modificare i presenti
                Termini in qualsiasi momento. Le modifiche saranno efficaci dal
                momento della pubblicazione sul Sito.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                8. Legge applicabile e foro competente
              </h2>
              <p>
                I presenti Termini sono regolati dalla legge italiana. Per
                qualsiasi controversia e&apos; competente il Foro di Napoli.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                9. Contatti
              </h2>
              <p>
                Per qualsiasi domanda relativa ai presenti Termini, contattaci
                all&apos;indirizzo: info@dloop.it
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
