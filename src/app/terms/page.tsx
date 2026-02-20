import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Termini di Servizio | dloop",
  description:
    "Termini e condizioni d'uso della piattaforma dloop — CAV S.R.L.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">
            Termini e Condizioni di Servizio
          </h1>
          <div className="bg-surface rounded-lg p-6 md:p-8 space-y-8 text-sm text-text-secondary leading-relaxed">
            <p className="text-xs text-text-muted">
              Ultimo aggiornamento: 20 febbraio 2026
            </p>

            {/* Titolare */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                1. Identificazione del Titolare
              </h2>
              <p>
                <strong className="text-white">CAV S.R.L.</strong> (di seguito
                &quot;DLOOP&quot;, &quot;Piattaforma&quot;, &quot;noi&quot;)
                <br />
                Piazza Giuseppe Garibaldi 101, 80142 Napoli (NA), Italia
                <br />
                P.IVA / C.F.: 09532291219 | REA: NA - 1038859
                <br />
                PEC: legal@pec.mydely.it | Email: info@dloop.it
                <br />
                Sito web: https://dloop.it
              </p>
            </section>

            {/* 2. Definizioni */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                2. Definizioni
              </h2>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>
                  <strong className="text-white">Piattaforma:</strong>{" "}
                  l&apos;applicazione mobile DLOOP e il sito web dloop.it
                </li>
                <li>
                  <strong className="text-white">Rider (DLOOPer):</strong>{" "}
                  persona fisica registrata per effettuare servizi di consegna
                </li>
                <li>
                  <strong className="text-white">Dealer (Esercente):</strong>{" "}
                  attivit&agrave; commerciale che riceve ordini tramite la
                  Piattaforma
                </li>
                <li>
                  <strong className="text-white">Cliente:</strong> persona fisica
                  che effettua un ordine tramite la Piattaforma
                </li>
                <li>
                  <strong className="text-white">Order Relay:</strong> processo
                  di inoltro dell&apos;ordine dal Rider al Dealer per conto del
                  Cliente
                </li>
                <li>
                  <strong className="text-white">Smart Dispatch:</strong> sistema
                  automatizzato di assegnazione degli ordini ai Rider
                </li>
              </ul>
            </section>

            {/* 3. Oggetto */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                3. Oggetto e Accettazione
              </h2>
              <p className="mb-3">
                I presenti Termini regolano l&apos;accesso e l&apos;utilizzo
                della Piattaforma DLOOP da parte dei Rider, dei Dealer e dei
                Clienti. DLOOP opera come piattaforma tecnologica che mette in
                contatto Clienti, Rider e Dealer, facilitando il servizio di
                consegna dell&apos;ultimo miglio.{" "}
                <strong className="text-white">
                  DLOOP non &egrave; un servizio di trasporto n&eacute; un
                  servizio di ristorazione.
                </strong>
              </p>
              <p>
                L&apos;utilizzo della Piattaforma comporta l&apos;accettazione
                integrale dei presenti Termini e della{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </section>

            {/* 4. Registrazione */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                4. Registrazione e Account
              </h2>
              <p className="mb-2">
                Per registrarsi come Rider, l&apos;utente deve:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Avere almeno 18 anni</li>
                <li>Essere in possesso di un documento d&apos;identit&agrave; valido</li>
                <li>
                  Disporre di un mezzo di trasporto idoneo (bicicletta, scooter,
                  auto)
                </li>
                <li>Fornire dati veritieri e aggiornati</li>
              </ul>
              <p className="mt-3">
                L&apos;utente &egrave; responsabile della riservatezza delle
                proprie credenziali. Ogni attivit&agrave; svolta tramite
                l&apos;account &egrave; imputata al titolare dello stesso.
              </p>
            </section>

            {/* 5. Servizio */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                5. Servizio di Consegna
              </h2>
              <h3 className="text-base font-medium text-white mt-4 mb-2">
                5.1 Ruolo della Piattaforma
              </h3>
              <p>
                DLOOP non &egrave; parte del contratto di vendita tra Cliente e
                Dealer, n&eacute; del contratto di trasporto tra Cliente e
                Rider.
              </p>

              <h3 className="text-base font-medium text-white mt-4 mb-2">
                5.2 Smart Dispatch
              </h3>
              <p>
                Gli ordini vengono assegnati automaticamente ai Rider
                considerando prossimit&agrave;, valutazione, tasso di
                accettazione e altri fattori. Il Rider ha diritto di accettare o
                rifiutare ogni ordine entro 60 secondi.
              </p>

              <h3 className="text-base font-medium text-white mt-4 mb-2">
                5.3 Obblighi del Rider
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Mantenere attiva la geolocalizzazione durante le sessioni</li>
                <li>Accettare o rifiutare gli ordini entro i tempi previsti</li>
                <li>Consegnare i prodotti in modo sicuro e tempestivo</li>
                <li>Rispettare il Codice della Strada</li>
              </ul>

              <h3 className="text-base font-medium text-white mt-4 mb-2">
                5.4 Obblighi del Dealer
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Confermare o rifiutare gli ordini tempestivamente</li>
                <li>Preparare i prodotti secondo gli standard dichiarati</li>
                <li>Mantenere aggiornato il proprio catalogo/menu</li>
              </ul>
            </section>

            {/* 6. Piani e Tariffe */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                6. Piani e Tariffe
              </h2>

              <h3 className="text-base font-medium text-white mt-4 mb-2">
                6.1 Piani Rider
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left text-white py-2 pr-3">Piano</th>
                      <th className="text-left text-white py-2 pr-3">Costo</th>
                      <th className="text-left text-white py-2">Include</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-3 font-medium text-white">Free</td>
                      <td className="py-2 pr-3">Gratuito</td>
                      <td className="py-2">
                        Accesso base. Deposito cauzionale &euro;250 obbligatorio.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 font-medium text-primary">
                        Pro
                      </td>
                      <td className="py-2 pr-3">&euro;29/mese</td>
                      <td className="py-2">
                        Assicurazione Qover inclusa, esenzione deposito, Partner
                        Benefits, zone prioritarie.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-medium text-white mt-4 mb-2">
                6.2 Piani Dealer
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left text-white py-2 pr-3">Piano</th>
                      <th className="text-left text-white py-2 pr-3">Costo</th>
                      <th className="text-left text-white py-2">Include</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-3 font-medium text-white">
                        Starter
                      </td>
                      <td className="py-2 pr-3">&euro;0,50/ordine</td>
                      <td className="py-2">
                        Accesso base, paghi solo quando vendi.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 font-medium text-primary">
                        Pro
                      </td>
                      <td className="py-2 pr-3">&euro;49/mese</td>
                      <td className="py-2">
                        0% commissione, Partner Benefits, analytics, supporto
                        prioritario.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 font-medium text-white">
                        Business
                      </td>
                      <td className="py-2 pr-3">&euro;79/mese</td>
                      <td className="py-2">
                        Tutto Pro + multi-location, analytics avanzato.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 font-medium text-white">
                        Enterprise
                      </td>
                      <td className="py-2 pr-3">&euro;149/mese</td>
                      <td className="py-2">
                        Tutto Business + API, account manager dedicato.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-medium text-white mt-4 mb-2">
                6.3 Deposito Cauzionale Rider
              </h3>
              <p>
                I Rider con piano Free sono tenuti al versamento di un deposito
                cauzionale di &euro;250 a garanzia delle attrezzature e dei
                prodotti affidati. Il deposito &egrave; restituito integralmente
                alla cessazione del rapporto. I Rider con piano Pro sono esenti.
              </p>
            </section>

            {/* 7. Pagamenti */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                7. Pagamenti
              </h2>
              <p className="mb-2">
                I pagamenti sono elaborati tramite{" "}
                <strong className="text-white">Stripe Inc.</strong>, fornitore
                certificato PCI-DSS. DLOOP non memorizza mai i dati delle carte.
              </p>
              <p className="mb-2">
                I pagamenti dei Clienti vengono elaborati come{" "}
                <strong className="text-white">Destination Charges</strong>{" "}
                tramite Stripe Connect: l&apos;importo viene trasferito al
                Dealer (al netto delle commissioni), la commissione DLOOP viene
                trattenuta dalla Piattaforma, le commissioni Stripe sono a
                carico del Dealer.
              </p>
              <p className="mb-2">
                I Rider ricevono il compenso direttamente dal Cliente, in
                contanti al momento della consegna. DLOOP non trattiene alcuna
                commissione sul compenso del Rider.
              </p>
              <p>
                Ogni transazione &egrave; registrata in un registro immutabile
                (fee_audit) che documenta importi, commissioni e ripartizioni.
              </p>
            </section>

            {/* 8. Assicurazione */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                8. Assicurazione
              </h2>
              <p className="mb-2">
                I Rider con abbonamento{" "}
                <strong className="text-primary">Pro</strong> beneficiano di
                copertura assicurativa Qover: infortuni durante la consegna,
                responsabilit&agrave; civile verso terzi, copertura malattia.
              </p>
              <p>
                I Rider con piano Free sono tenuti a dotarsi autonomamente di
                adeguata copertura assicurativa.
              </p>
            </section>

            {/* 9. Proprieta' intellettuale */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                9. Propriet&agrave; Intellettuale
              </h2>
              <p>
                Il marchio DLOOP, il logo, il design dell&apos;App, il codice
                sorgente, gli algoritmi (incluso Smart Dispatch) e tutti i
                contenuti della Piattaforma sono di propriet&agrave; esclusiva di
                CAV S.R.L. &Egrave; vietato copiare, modificare, decompilare o
                effettuare reverse engineering dell&apos;App.
              </p>
            </section>

            {/* 10. Limitazione */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                10. Limitazione di Responsabilit&agrave;
              </h2>
              <p className="mb-2">
                DLOOP opera come intermediario tecnologico. Non siamo
                responsabili per: qualit&agrave; dei prodotti dei Dealer, ritardi
                imputabili al Rider o a cause di forza maggiore,
                malfunzionamenti di servizi terzi.
              </p>
              <p>
                La responsabilit&agrave; complessiva di DLOOP non potr&agrave;
                superare l&apos;importo corrisposto dall&apos;utente nei 12 mesi
                precedenti.
              </p>
            </section>

            {/* 11. Sospensione */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                11. Sospensione e Risoluzione
              </h2>
              <p className="mb-2">
                DLOOP pu&ograve; sospendere l&apos;account in caso di:
                violazione dei Termini, comportamento fraudolento, valutazione
                sotto la soglia minima, tasso di accettazione insufficiente.
              </p>
              <p>
                L&apos;utente pu&ograve; cancellare il proprio account in
                qualsiasi momento tramite le Impostazioni dell&apos;App o
                scrivendo a info@dloop.it. Il deposito cauzionale (Rider Free)
                viene restituito entro 30 giorni lavorativi.
              </p>
            </section>

            {/* 12. Comunicazioni */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                12. Comunicazioni
              </h2>
              <p>
                Le comunicazioni operative avvengono tramite notifiche push,
                WhatsApp ed email. L&apos;utente acconsente a ricevere
                comunicazioni operative necessarie per l&apos;erogazione del
                Servizio.
              </p>
            </section>

            {/* 13. Controversie */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                13. Reclami e Risoluzione delle Controversie
              </h2>
              <p className="mb-2">
                Per reclami: info@dloop.it. Rispondiamo entro 30 giorni.
              </p>
              <p className="mb-2">
                Per i consumatori UE &egrave; disponibile la piattaforma ODR:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  ec.europa.eu/consumers/odr
                </a>
              </p>
              <p>
                Foro competente:{" "}
                <strong className="text-white">Foro di Napoli</strong>, salvo il
                foro inderogabile del consumatore (Art. 33 D.Lgs. 206/2005).
              </p>
            </section>

            {/* 14. Recesso */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                14. Diritto di Recesso (Consumatori)
              </h2>
              <p className="mb-2">
                Ai sensi degli Artt. 52-59 del D.Lgs. 206/2005, il consumatore
                ha diritto di recedere entro 14 giorni dalla sottoscrizione di
                un abbonamento. Il rimborso avverr&agrave; entro 14 giorni con
                lo stesso mezzo di pagamento.
              </p>
              <p>
                <strong className="text-white">Eccezione:</strong> il diritto di
                recesso non si applica ai servizi di consegna gi&agrave;
                completati (Art. 59, lett. a, D.Lgs. 206/2005).
              </p>
            </section>

            {/* 15. Legge */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                15. Legge Applicabile
              </h2>
              <p>
                I presenti Termini sono regolati dalla legge italiana. Si
                applicano le disposizioni del Codice Civile, del D.Lgs. 206/2005
                (Codice del Consumo) e del GDPR.
              </p>
            </section>

            {/* 16. Modifiche */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                16. Modifiche ai Termini
              </h2>
              <p>
                Le modifiche saranno comunicate con almeno 30 giorni di
                preavviso. L&apos;utente avr&agrave; diritto di recedere senza
                penali entro 30 giorni dalla comunicazione di modifiche
                sostanziali sfavorevoli.
              </p>
            </section>

            {/* 17. Disposizioni Finali */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                17. Disposizioni Finali
              </h2>
              <p>
                Se una disposizione dei presenti Termini &egrave; dichiarata
                nulla, le restanti rimangono valide. La mancata applicazione di
                una disposizione non costituisce rinuncia. L&apos;utente non
                pu&ograve; cedere i propri diritti senza consenso scritto di
                DLOOP.
              </p>
            </section>

            {/* 18. Contatti */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                18. Contatti
              </h2>
              <p>
                <strong className="text-white">CAV S.R.L.</strong>
                <br />
                Piazza Giuseppe Garibaldi 101, 80142 Napoli (NA)
                <br />
                Email: info@dloop.it | PEC: legal@pec.mydely.it
                <br />
                Sito: https://dloop.it
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
