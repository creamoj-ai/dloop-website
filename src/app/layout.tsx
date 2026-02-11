import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "dloop | Diventa Rider a Napoli - Guadagna con le Consegne",
  description:
    "Unisciti a dloop, la piattaforma di delivery a Napoli. Guadagna fino a \u20AC18/h, scegli i tuoi orari, zone calde in tempo reale. Registrati ora!",
  keywords: [
    "rider Napoli",
    "consegne Napoli",
    "lavoro rider",
    "delivery Napoli",
    "guadagnare con le consegne",
    "dloop",
    "lavoro flessibile Napoli",
  ],
  openGraph: {
    title: "dloop | Diventa Rider a Napoli",
    description:
      "Guadagna fino a \u20AC18/h consegnando a Napoli. Zone calde live, pagamenti rapidi.",
    url: "https://dloop.it",
    siteName: "dloop",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "dloop | Diventa Rider a Napoli",
    description: "Guadagna fino a \u20AC18/h consegnando a Napoli.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
