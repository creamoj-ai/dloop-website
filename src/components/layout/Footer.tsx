import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold mb-3">
              <span className="text-primary">d</span>
              <span className="text-white">loop</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              L&apos;app per le consegne fatta dai rider, per i rider.
              Un nuovo modo di lavorare. Una nuova era.
            </p>
          </div>

          {/* Link Utili */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.1em] text-text-secondary uppercase mb-4">
              Link Utili
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legale */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.1em] text-text-secondary uppercase mb-4">
              Legale
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="/privacy" className="text-sm text-text-secondary hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-text-secondary hover:text-white transition-colors">
                  Termini di Servizio
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-sm text-text-secondary hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.1em] text-text-secondary uppercase mb-4">
              Contatti
            </h3>
            <ul className="space-y-2.5">
              <li className="text-sm text-text-secondary">
                info@dloop.it
              </li>
              <li className="text-sm text-text-secondary">
                Napoli, Italia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-text-muted">
            &copy; 2026 dloop. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-text-muted">
            Made with &hearts; in Napoli
          </p>
        </div>
      </div>
    </footer>
  );
}
