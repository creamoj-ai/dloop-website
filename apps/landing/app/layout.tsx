import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dloop - Piattaforma Delivery per Dealer',
  description: 'Aumenta i tuoi ordini con Dloop. Piattaforma di consegna locale per dealer di Napoli.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <meta name="theme-color" content="#0066ff" />
      </head>
      <body className="bg-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
