import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | dloop",
  description:
    "Informativa sulla privacy di dloop ai sensi del GDPR e D.Lgs. 196/2003",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">
            Informativa sulla Privacy
          </h1>
          <div className="bg-surface rounded-lg p-6 md:p-8 space-y-8 text-sm text-text-secondary leading-relaxed">
            <p className="text-xs text-text-muted">
              Ultimo aggiornamento: 20 febbraio 2026
            </p>

            {/* Titolare */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                Titolare del Trattamento
              </h2>
              <p>
                <strong className="text-white">CAV S.R.L.</strong> (di seguito
                &quot;DLOOP&quot;, &quot;noi&quot;, &quot;nostro&quot;)
                <br />
                Piazza Giuseppe Garibaldi 101, 80142 Napoli (NA), Italia
                <br />
                P.IVA / C.F.: 09532291219
                <br />
                PEC: legal@pec.mydely.it
                <br />
                Email: privacy@dloop.it
                <br />
                Sito web: https://dloop.it
              </p>
            </section>

            {/* 1. Introduzione */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                1. Introduzione
              </h2>
              <p>
                La presente Informativa sulla Privacy descrive come CAV S.R.L.,
                titolare della piattaforma DLOOP, raccoglie, utilizza, conserva e
                protegge i dati personali degli utenti dell&apos;applicazione
                mobile DLOOP (&quot;App&quot;) e del sito web dloop.it
                (&quot;Sito&quot;), in conformit&agrave; al Regolamento (UE)
                2016/679 (GDPR), al D.Lgs. 196/2003 (Codice Privacy) come
                modificato dal D.Lgs. 101/2018, e alle linee guida del Garante
                per la Protezione dei Dati Personali.
              </p>
            </section>

            {/* 2. Categorie di dati */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                2. Categorie di Dati Personali Raccolti
              </h2>

              <h3 className="text-base font-medium text-white mt-4 mb-2">
                2.1 Dati forniti direttamente dall&apos;utente
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  <strong className="text-white">Dati identificativi:</strong>{" "}
                  nome, cognome, indirizzo email, numero di telefono
                </li>
                <li>
                  <strong className="text-white">Credenziali di accesso:</strong>{" "}
                  email e password (hash crittografico), autenticazione tramite
                  Google Sign-In
                </li>
                <li>
                  <strong className="text-white">Dati di profilo:</strong> foto
                  profilo (opzionale), preferenze di consegna
                </li>
                <li>
                  <strong className="text-white">Dati di pagamento:</strong> i
                  dati della carta di credito/debito sono gestiti esclusivamente
                  da Stripe Inc. e non vengono mai memorizzati sui nostri server
                </li>
                <li>
                  <strong className="text-white">Comunicazioni:</strong> messaggi
                  inviati tramite la chat in-app, conversazioni WhatsApp,
                  richieste di supporto
                </li>
              </ul>

              <h3 className="text-base font-medium text-white mt-4 mb-2">
                2.2 Dati raccolti automaticamente
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  <strong className="text-white">
                    Dati di geolocalizzazione:
                  </strong>{" "}
                  posizione GPS in tempo reale durante le sessioni di lavoro
                  attive (rider), con soglia minima di 50 metri e intervallo di
                  30 secondi
                </li>
                <li>
                  <strong className="text-white">Dati del dispositivo:</strong>{" "}
                  modello del dispositivo, sistema operativo, versione
                  dell&apos;app, identificativo Firebase (FCM token)
                </li>
                <li>
                  <strong className="text-white">Dati di utilizzo:</strong>{" "}
                  schermate visitate, azioni effettuate nell&apos;app, timestamp
                  delle sessioni
                </li>
                <li>
                  <strong className="text-white">Dati di consegna:</strong>{" "}
                  ordini effettuati, stato delle consegne, tempi di
                  completamento, valutazioni e feedback
                </li>
              </ul>

              <h3 className="text-base font-medium text-white mt-4 mb-2">
                2.3 Dati generati dal sistema
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  <strong className="text-white">Punteggio di dispatch:</strong>{" "}
                  calcolato automaticamente sulla base di prossimit&agrave;,
                  valutazione, tasso di accettazione, specializzazione e
                  disponibilit&agrave;
                </li>
                <li>
                  <strong className="text-white">Statistiche rider:</strong>{" "}
                  guadagni, ordini completati, tasso di accettazione, valutazione
                  media
                </li>
                <li>
                  <strong className="text-white">Audit dei compensi:</strong>{" "}
                  registro immutabile delle transazioni con dettaglio importi,
                  commissioni e ripartizioni
                </li>
              </ul>
            </section>

            {/* 3. Finalita' */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                3. Finalit&agrave; e Base Giuridica del Trattamento
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left text-white py-2 pr-3">
                        Finalit&agrave;
                      </th>
                      <th className="text-left text-white py-2 pr-3">
                        Base giuridica
                      </th>
                      <th className="text-left text-white py-2">
                        Dati trattati
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-3">
                        Registrazione e gestione account
                      </td>
                      <td className="py-2 pr-3">Esecuzione contratto (b)</td>
                      <td className="py-2">Dati identificativi, credenziali</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">
                        Erogazione del servizio di consegna
                      </td>
                      <td className="py-2 pr-3">Esecuzione contratto (b)</td>
                      <td className="py-2">Geolocalizzazione, ordini</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">
                        Elaborazione pagamenti e fatturazione
                      </td>
                      <td className="py-2 pr-3">
                        Contratto (b) + Obbligo legale (c)
                      </td>
                      <td className="py-2">Dati pagamento (via Stripe)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">
                        Assegnazione ordini (Smart Dispatch)
                      </td>
                      <td className="py-2 pr-3">Legittimo interesse (f)</td>
                      <td className="py-2">
                        Geolocalizzazione, statistiche rider
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">
                        Comunicazioni operative (WhatsApp/chat)
                      </td>
                      <td className="py-2 pr-3">Esecuzione contratto (b)</td>
                      <td className="py-2">Messaggi, numero di telefono</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">
                        Assistenza clienti tramite chatbot AI
                      </td>
                      <td className="py-2 pr-3">Legittimo interesse (f)</td>
                      <td className="py-2">Messaggi, contesto conversazione</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">Notifiche push</td>
                      <td className="py-2 pr-3">Consenso (a)</td>
                      <td className="py-2">FCM token, preferenze</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">
                        Sicurezza e prevenzione frodi
                      </td>
                      <td className="py-2 pr-3">Legittimo interesse (f)</td>
                      <td className="py-2">Log di accesso, dati dispositivo</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">
                        Adempimenti fiscali e contabili
                      </td>
                      <td className="py-2 pr-3">Obbligo legale (c)</td>
                      <td className="py-2">
                        Dati identificativi, transazioni
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">Miglioramento del servizio</td>
                      <td className="py-2 pr-3">Legittimo interesse (f)</td>
                      <td className="py-2">Dati di utilizzo anonimizzati</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4. Profilazione */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                4. Profilazione e Processo Decisionale Automatizzato
              </h2>
              <h3 className="text-base font-medium text-white mt-4 mb-2">
                4.1 Smart Dispatch
              </h3>
              <p className="mb-2">
                L&apos;algoritmo di Smart Dispatch assegna automaticamente gli
                ordini ai rider sulla base di un punteggio calcolato come segue:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 mb-3">
                <li>Prossimit&agrave; geografica (40%)</li>
                <li>Valutazione media (30%)</li>
                <li>Tasso di accettazione (15%)</li>
                <li>Specializzazione per esercizio (10%)</li>
                <li>Disponibilit&agrave; residua nel turno (5%)</li>
              </ul>
              <p>
                Questo processo costituisce una decisione automatizzata ai sensi
                dell&apos;Art. 22 GDPR. L&apos;utente ha diritto di ottenere
                l&apos;intervento umano, esprimere la propria opinione e
                contestare la decisione.
              </p>

              <h3 className="text-base font-medium text-white mt-4 mb-2">
                4.2 Chatbot AI
              </h3>
              <p>
                Le conversazioni con il chatbot sono elaborate da modelli di
                intelligenza artificiale (OpenAI GPT-4o Mini) per fornire
                risposte contestualizzate. I messaggi vengono utilizzati
                esclusivamente per generare la risposta e non vengono usati per
                addestrare modelli AI.
              </p>
            </section>

            {/* 5. Sub-processori */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                5. Responsabili del Trattamento (Sub-processori)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left text-white py-2 pr-3">
                        Fornitore
                      </th>
                      <th className="text-left text-white py-2 pr-3">Sede</th>
                      <th className="text-left text-white py-2 pr-3">
                        Finalit&agrave;
                      </th>
                      <th className="text-left text-white py-2">Garanzie</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-3 font-medium text-white">
                        Supabase Inc.
                      </td>
                      <td className="py-2 pr-3">USA (AWS EU West, Irlanda)</td>
                      <td className="py-2 pr-3">Database, autenticazione</td>
                      <td className="py-2">SCC</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 font-medium text-white">
                        Google (Firebase)
                      </td>
                      <td className="py-2 pr-3">USA</td>
                      <td className="py-2 pr-3">Notifiche push, analytics</td>
                      <td className="py-2">SCC + DPA Google</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 font-medium text-white">
                        Stripe Inc.
                      </td>
                      <td className="py-2 pr-3">USA / Irlanda</td>
                      <td className="py-2 pr-3">Pagamenti, Connect</td>
                      <td className="py-2">SCC + Stripe DPA</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 font-medium text-white">
                        OpenAI
                      </td>
                      <td className="py-2 pr-3">USA (Ireland Ltd per EEA)</td>
                      <td className="py-2 pr-3">Chatbot AI, NLP</td>
                      <td className="py-2">SCC + OpenAI DPA</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 font-medium text-white">
                        Meta Platforms
                      </td>
                      <td className="py-2 pr-3">
                        USA (Ireland Ltd per EEA)
                      </td>
                      <td className="py-2 pr-3">WhatsApp comunicazioni</td>
                      <td className="py-2">SCC + Meta DPA</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 font-medium text-white">
                        Google (Maps)
                      </td>
                      <td className="py-2 pr-3">USA</td>
                      <td className="py-2 pr-3">Geocodifica, mappe</td>
                      <td className="py-2">SCC + DPA Google</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. Trasferimento Extra-UE */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                6. Trasferimento di Dati Extra-UE
              </h2>
              <p>
                Alcuni dei nostri sub-processori hanno sede negli Stati Uniti. Il
                trasferimento dei dati &egrave; garantito da Standard Contractual
                Clauses (SCC) approvate dalla Commissione Europea (Decisione
                2021/914), Data Processing Agreements con ciascun fornitore, e
                misure tecniche supplementari: crittografia in transito (TLS 1.3)
                e a riposo (AES-256).
              </p>
              <p className="mt-2">
                L&apos;infrastruttura database principale (Supabase) &egrave;
                ospitata nella regione{" "}
                <strong className="text-white">AWS EU West (Irlanda)</strong>,
                all&apos;interno dello Spazio Economico Europeo.
              </p>
            </section>

            {/* 7. Conservazione */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                7. Periodo di Conservazione dei Dati
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left text-white py-2 pr-3">
                        Tipo di dato
                      </th>
                      <th className="text-left text-white py-2">
                        Periodo di conservazione
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-3">Account utente</td>
                      <td className="py-2">
                        Durata dell&apos;account + 30 giorni
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">Geolocalizzazione</td>
                      <td className="py-2 font-medium text-white">
                        30 giorni, poi cancellati automaticamente
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">Ordini e transazioni</td>
                      <td className="py-2">10 anni (obbligo fiscale)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">Messaggi chat e WhatsApp</td>
                      <td className="py-2">12 mesi</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">Log di accesso e sicurezza</td>
                      <td className="py-2">6 mesi</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">Audit dei compensi</td>
                      <td className="py-2">10 anni (obbligo fiscale)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">Statistiche rider</td>
                      <td className="py-2">Durata dell&apos;account</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3">Log di dispatch</td>
                      <td className="py-2">12 mesi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 8. Diritti */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                8. Diritti dell&apos;Interessato
              </h2>
              <p className="mb-3">
                Ai sensi degli Artt. 15-22 del GDPR, l&apos;utente ha diritto
                di:
              </p>
              <ol className="list-decimal list-inside space-y-1.5 ml-2">
                <li>
                  <strong className="text-white">Accesso</strong> (Art. 15):
                  ottenere conferma del trattamento e copia dei dati
                </li>
                <li>
                  <strong className="text-white">Rettifica</strong> (Art. 16):
                  correggere dati inesatti o incompleti
                </li>
                <li>
                  <strong className="text-white">Cancellazione</strong> (Art.
                  17): richiedere la cancellazione (&quot;diritto
                  all&apos;oblio&quot;)
                </li>
                <li>
                  <strong className="text-white">Limitazione</strong> (Art. 18):
                  limitare il trattamento in determinati casi
                </li>
                <li>
                  <strong className="text-white">Portabilit&agrave;</strong>{" "}
                  (Art. 20): ricevere i dati in formato strutturato e leggibile
                </li>
                <li>
                  <strong className="text-white">Opposizione</strong> (Art. 21):
                  opporsi al trattamento basato su legittimo interesse
                </li>
                <li>
                  <strong className="text-white">Revoca del consenso</strong>{" "}
                  (Art. 7): revocare il consenso in qualsiasi momento
                </li>
                <li>
                  <strong className="text-white">
                    Decisioni automatizzate
                  </strong>{" "}
                  (Art. 22): contestare le decisioni dello Smart Dispatch
                </li>
              </ol>
              <p className="mt-3">
                Per esercitare i propri diritti: <strong className="text-white">privacy@dloop.it</strong> oppure
                CAV S.R.L., Piazza Giuseppe Garibaldi 101, 80142 Napoli.
                Rispondiamo entro 30 giorni.
              </p>
            </section>

            {/* 9. Sicurezza */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                9. Sicurezza dei Dati
              </h2>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Crittografia in transito: TLS 1.3</li>
                <li>Crittografia a riposo: AES-256</li>
                <li>Hash delle password con bcrypt</li>
                <li>
                  Row Level Security (RLS): ogni utente accede solo ai propri
                  dati
                </li>
                <li>
                  Separazione degli ambienti: chiavi API distinte per test e
                  produzione
                </li>
                <li>Backup giornalieri con ripristino entro 24 ore</li>
                <li>Monitoraggio degli accessi e delle anomalie</li>
              </ul>
            </section>

            {/* 10. Geolocalizzazione */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                10. Geolocalizzazione
              </h2>
              <p className="mb-2">
                L&apos;App raccoglie la posizione GPS del rider{" "}
                <strong className="text-white">
                  esclusivamente durante le sessioni di lavoro attive
                </strong>
                . Parametri: distanza minima 50m, intervallo 30s, dati obsoleti
                dopo 120s. Il rider pu&ograve; disattivare la geolocalizzazione
                terminando la sessione. I dati vengono cancellati
                automaticamente dopo 30 giorni.
              </p>
            </section>

            {/* 11. Cookie */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                11. Cookie
              </h2>
              <p>
                Il sito web dloop.it utilizza cookie tecnici necessari al
                funzionamento e, previo consenso, cookie di terze parti per
                analytics. Per maggiori informazioni, consultare la nostra{" "}
                <a
                  href="/cookie-policy"
                  className="text-primary hover:underline"
                >
                  Cookie Policy
                </a>
                .
              </p>
            </section>

            {/* 12. Minori */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                12. Minori
              </h2>
              <p>
                Il servizio DLOOP &egrave; riservato a persone che abbiano
                compiuto 18 anni. Non raccogliamo consapevolmente dati personali
                di minori.
              </p>
            </section>

            {/* 13. Modifiche */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                13. Modifiche alla presente Informativa
              </h2>
              <p>
                Ci riserviamo il diritto di aggiornare la presente Informativa.
                In caso di modifiche sostanziali, informeremo gli utenti tramite
                notifica in-app o email almeno 30 giorni prima dell&apos;entrata
                in vigore.
              </p>
            </section>

            {/* 14. Reclamo */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                14. Reclamo all&apos;Autorit&agrave; di Controllo
              </h2>
              <p>
                <strong className="text-white">
                  Garante per la Protezione dei Dati Personali
                </strong>
                <br />
                Piazza Venezia 11, 00187 Roma
                <br />
                Tel. +39 06 696771
                <br />
                Email: protocollo@gpdp.it | PEC: protocollo@pec.gpdp.it
                <br />
                Sito: garanteprivacy.it
              </p>
            </section>

            {/* 15. Contatti */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                15. Contatti
              </h2>
              <p>
                <strong className="text-white">CAV S.R.L.</strong>
                <br />
                Piazza Giuseppe Garibaldi 101, 80142 Napoli (NA)
                <br />
                Email: privacy@dloop.it
                <br />
                PEC: legal@pec.mydely.it
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
