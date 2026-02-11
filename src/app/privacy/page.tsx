import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | dloop",
  description: "Informativa sulla privacy di dloop ai sensi del GDPR e D.Lgs. 196/2003",
};

// ============================================================
// ISTRUZIONI: Sostituisci INSERISCI_POLICY_ID con il tuo
// Policy ID di Iubenda (lo trovi nella dashboard Iubenda)
// ============================================================
const IUBENDA_POLICY_ID = "INSERISCI_POLICY_ID";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="bg-surface rounded-lg p-6 md:p-8">
            <iframe
              src={`https://www.iubenda.com/privacy-policy/${IUBENDA_POLICY_ID}`}
              className="w-full min-h-[600px] border-0"
              title="Privacy Policy"
            />
            <p className="text-xs text-text-muted mt-4">
              Documento generato e aggiornato automaticamente da{" "}
              <a
                href="https://www.iubenda.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Iubenda
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
