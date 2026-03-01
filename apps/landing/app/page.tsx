export default function Home() {
  return (
    <main className="bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-3xl font-bold text-blue-600">🚀 Dloop</div>
          <div className="hidden md:flex gap-8 text-gray-700">
            <a href="#benefits" className="hover:text-blue-600">Vantaggi</a>
            <a href="#come-funziona" className="hover:text-blue-600">Come funziona</a>
            <a href="#pricing" className="hover:text-blue-600">Pricing</a>
            <a href="#faq" className="hover:text-blue-600">FAQ</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold">
            Contattaci
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Aumenta i Tuoi Ordini con Dloop
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            La piattaforma di consegna locale che connette i tuoi clienti con i tuoi prodotti.
            Zero costi di setup, commissioni trasparenti, risultati immediati.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <a
              href="/dealer/signup"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-lg"
            >
              📝 Registra Negozio Ora
            </a>
            <a
              href="https://wa.me/39328?text=Salve%2C%20sono%20interessato%20a%20Dloop"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition"
            >
              💬 Richiedi Demo
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">+150%</div>
              <p className="text-gray-600 mt-2">Aumento medio ordini</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">€0</div>
              <p className="text-gray-600 mt-2">Costi di setup</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">3%</div>
              <p className="text-gray-600 mt-2">Commissione base</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">48h</div>
              <p className="text-gray-600 mt-2">Primo pagamento</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Perché i Dealer Scelgono Dloop
            </h2>
            <p className="text-xl text-gray-600">
              Semplice, veloce, trasparente. Niente di più.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefit 1 */}
            <div className="space-y-4">
              <div className="text-5xl">📱</div>
              <h3 className="text-2xl font-bold text-gray-900">Visibilità Online</h3>
              <p className="text-gray-600 leading-relaxed">
                I tuoi prodotti in mano a migliaia di clienti. App + WhatsApp Bot +
                Catalogo online. Totalmente gratis per te.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✅ App installabile (PWA)</li>
                <li>✅ Integrazione WhatsApp</li>
                <li>✅ Tracking real-time ordini</li>
              </ul>
            </div>

            {/* Benefit 2 */}
            <div className="space-y-4">
              <div className="text-5xl">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900">Ordini Veloci</h3>
              <p className="text-gray-600 leading-relaxed">
                30-45 minuti da ordine a consegna. I tuoi clienti ricevono subito,
                tu guadagni subito. Niente attese.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Consegna rapida garantita</li>
                <li>✅ Sistema di assegnazione automatico</li>
                <li>✅ Tracking GPS rider</li>
              </ul>
            </div>

            {/* Benefit 3 */}
            <div className="space-y-4">
              <div className="text-5xl">💰</div>
              <h3 className="text-2xl font-bold text-gray-900">Commissioni Basse</h3>
              <p className="text-gray-600 leading-relaxed">
                3% per ordine + delivery. Niente costi nascosti. Pagamenti ogni 48h
                sul tuo conto.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✅ 3% commissione base</li>
                <li>✅ Pagamenti giornalieri</li>
                <li>✅ Trasparenza totale</li>
              </ul>
            </div>

            {/* Benefit 4 */}
            <div className="space-y-4">
              <div className="text-5xl">📊</div>
              <h3 className="text-2xl font-bold text-gray-900">Dashboard Completo</h3>
              <p className="text-gray-600 leading-relaxed">
                Vedi tutti i tuoi ordini, i guadagni, le statistiche. Gestisci i tuoi
                prodotti da un'unica app.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Analytics ordini</li>
                <li>✅ Gestione prodotti</li>
                <li>✅ Reportistica vendite</li>
              </ul>
            </div>

            {/* Benefit 5 */}
            <div className="space-y-4">
              <div className="text-5xl">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900">Support Dedicato</h3>
              <p className="text-gray-600 leading-relaxed">
                Il nostro team è sempre a tua disposizione. Problemi? Li risolviamo
                in 24h. Garantito.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✅ WhatsApp 24/7</li>
                <li>✅ Onboarding gratuito</li>
                <li>✅ Training prodotto</li>
              </ul>
            </div>

            {/* Benefit 6 */}
            <div className="space-y-4">
              <div className="text-5xl">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900">Scalabilità</h3>
              <p className="text-gray-600 leading-relaxed">
                Da 10 a 1000 ordini al giorno. La piattaforma cresce con te.
                Zero limiti.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Zero limiti ordini</li>
                <li>✅ Multi-prodotto</li>
                <li>✅ Espansione facile</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="come-funziona" className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Come Funziona (Per i Dealer)
            </h2>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1️⃣
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Signup Gratuito</h3>
                <p className="text-gray-600">
                  Registrati in 5 minuti. Niente documenti, niente documenti, niente complicazioni.
                  Solo email e numero WhatsApp.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2️⃣
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Carica Prodotti</h3>
                <p className="text-gray-600">
                  Aggiungi i tuoi prodotti con foto, prezzi, descrizioni. Puoi modificarli
                  in qualsiasi momento dal dashboard.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3️⃣
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ricevi Ordini</h3>
                <p className="text-gray-600">
                  Non fare nulla! I tuoi prodotti appariranno automaticamente nell'app
                  Dloop e nel bot WhatsApp. Gli ordini arriveranno da soli.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  4️⃣
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Consegna Rapida</h3>
                <p className="text-gray-600">
                  Gli ordini vengono assegnati ai rider automaticamente. Tu prepari i
                  prodotti, il rider consegna. Semplice.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  5️⃣
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Guadagna</h3>
                <p className="text-gray-600">
                  3% per ordine. Basta. Niente costi nascosti. Pagamento automatico
                  ogni 48h sul tuo conto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Pricing Semplice e Trasparente
            </h2>
            <p className="text-xl text-gray-600">
              Niente costi di setup, niente sorprese. Paghi solo quando guadagni.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Commissione Base</h3>
              <div className="text-5xl font-bold text-blue-600">3%</div>
              <p className="text-gray-600 text-lg">
                Su ogni ordine completato. Non di più, non di meno.
              </p>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Cosa Include</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✅</span>
                  <span className="text-gray-700">Listing nei catalogo illimitato</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✅</span>
                  <span className="text-gray-700">Dashboard analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✅</span>
                  <span className="text-gray-700">Integrazione WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✅</span>
                  <span className="text-gray-700">Support 24/7</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✅</span>
                  <span className="text-gray-700">Pagamenti ogni 48h</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Esempio Guadagno</h3>
              <div className="bg-white rounded p-4 space-y-2 text-gray-700">
                <p>100 ordini al giorno = €7,500 ricavi mensili</p>
                <p>3% commissione = €225 costo</p>
                <p><span className="font-bold">€7,275 guadagno netto</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Domande Frequenti</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Quanto costa per iniziare?",
                a: "Zero. Niente costi di setup, niente costi di abbonamento. Paghi solo il 3% quando ricevi un ordine."
              },
              {
                q: "Come ricevo i pagamenti?",
                a: "Automaticamente ogni 48h sul tuo conto bancario. Facciamo noi tutti i calcoli e i trasferimenti."
              },
              {
                q: "Posso cancellare quando voglio?",
                a: "Sì, senza penali. Ma una volta che inizi a guadagnare, non vorrai cancellare 😉"
              },
              {
                q: "E se un ordine non arriva?",
                a: "Te lo rimborsiamo noi. Il cliente è sempre protetto, e di conseguenza anche te."
              },
              {
                q: "Devo avere un numero di partita IVA?",
                a: "Non obbligatorio per iniziare. Ma ti consigliamo una partita IVA per tracciare i guadagni correttamente."
              },
              {
                q: "Quanto tempo per avere il primo ordine?",
                a: "Dipende da te. Se i tuoi prodotti sono buoni, il primo ordine può arrivare il primo giorno."
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Pronto a Iniziare?
          </h2>
          <p className="text-xl text-blue-100">
            Unisciti a decine di dealer che stanno già guadagnando con Dloop.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/39328?text=Salve%2C%20voglio%20diventare%20dealer%20Dloop"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition"
            >
              💬 Contattaci su WhatsApp
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
              📧 Ricevi Email Info
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Dloop</h3>
            <p className="text-sm">Piattaforma delivery per dealer di Napoli</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Link</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="#benefits" className="hover:text-white">Vantaggi</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Termini</a></li>
              <li><a href="#" className="hover:text-white">Cookie</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contatti</h3>
            <p className="text-sm">💬 WhatsApp: +39 328 1854639</p>
            <p className="text-sm">📧 support@dloop.it</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2026 Dloop. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </main>
  );
}
