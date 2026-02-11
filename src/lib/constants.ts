import type { Testimonial, Feature, Step } from "./types";

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Lascia i tuoi dati",
    description:
      "Compila il modulo qui sotto. Ci vogliono 2 minuti, nessun documento richiesto.",
    icon: "UserPlus",
  },
  {
    number: 2,
    title: "Scarica l'app",
    description:
      "Ti mandiamo il link per scaricare dloop. Crei il tuo profilo e sei pronto.",
    icon: "Smartphone",
  },
  {
    number: 3,
    title: "Inizia a guadagnare",
    description:
      "Scegli la tua zona, accetta gli ordini e guadagna. Decidi tu quando e quanto lavorare.",
    icon: "Banknote",
  },
];

export const FEATURES: Feature[] = [
  {
    icon: "MapPin",
    title: "Vedi dove c'e' lavoro",
    description:
      "Una mappa ti mostra in tempo reale dove ci sono piu' ordini. Vai dove serve, senza perdere tempo.",
    colorClass: "text-urgent",
    bgClass: "bg-urgent/15",
  },
  {
    icon: "TrendingUp",
    title: "Sai quanto guadagni prima",
    description:
      "Prima di accettare un ordine, vedi gia' quanto ti porta. Nessuna sorpresa, tutto chiaro.",
    colorClass: "text-earnings",
    bgClass: "bg-earnings/15",
  },
  {
    icon: "Route",
    title: "Percorsi piu' veloci",
    description:
      "L'app ti suggerisce la strada migliore. Meno chilometri, piu' consegne, piu' soldi in tasca.",
    colorClass: "text-route",
    bgClass: "bg-route/15",
  },
  {
    icon: "Trophy",
    title: "Vieni premiato",
    description:
      "Piu' lavori, piu' sali di livello e sblocchi vantaggi. Non sei un numero, sei un professionista.",
    colorClass: "text-bonus",
    bgClass: "bg-bonus/15",
  },
  {
    icon: "Wallet",
    title: "Guadagni anche senza consegnare",
    description:
      "Costruisci la tua rete di clienti e negozianti, apri il tuo negozio. Tre entrate diverse da un'unica app.",
    colorClass: "text-stats",
    bgClass: "bg-stats/15",
  },
  {
    icon: "Shield",
    title: "Assistenza vera + AI",
    description:
      "Hai un problema? Ti risponde una persona vera. E la nostra AI ti aiuta a gestire ordini, clienti e il tuo negozio senza fatica.",
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marco R.",
    role: "Dlooper — Consegne",
    image: "/images/rider-1.jpg",
    quote:
      "Ho lavorato con tre app diverse. dloop e' l'unica dove so quanto guadagno prima di accettare un ordine. Non torno piu' indietro.",
    rating: 5,
    earnings: "\u20AC1.400/mese",
  },
  {
    name: "Sofia L.",
    role: "Dlooper — La mia rete",
    image: "/images/rider-2.jpg",
    quote:
      "Ho portato dentro dloop tre negozi e una decina di clienti. Ogni volta che ordinano, io guadagno una parte. Anche quando non sto consegnando, i soldi arrivano.",
    rating: 5,
    earnings: "\u20AC1.800/mese",
  },
  {
    name: "Antonio P.",
    role: "Dlooper — Il mio negozio",
    image: "/images/rider-3.jpg",
    quote:
      "Ho aperto il mio negozio dentro l'app. I miei clienti ordinano anche su WhatsApp e io gestisco tutto da dloop. Consegne, la mia rete e il mio negozio: tre entrate, un'unica app.",
    rating: 4,
    earnings: "\u20AC1.200/mese",
  },
];

export const KPI_STATS = {
  avgEarningPerHour: 18,
  activeRiders: 500,
  deliveriesCompleted: 25000,
  avgRating: 4.8,
};

export const NAPLES_CENTER = { lat: 40.8518, lng: 14.2681 };

export const ZONE_COLORS: Record<string, string> = {
  alta: "#00C853",
  media: "#FFD54F",
  bassa: "#9E9E9E",
};

export const NAPLES_ZONES = [
  "Centro Storico",
  "Vomero",
  "Chiaia",
  "Fuorigrotta",
  "Posillipo",
];

export const NAV_LINKS = [
  { label: "Come Funziona", href: "#come-funziona" },
  { label: "3 Modi", href: "#tre-modi" },
  { label: "Guadagni", href: "#guadagni" },
  { label: "Zone", href: "#zone" },
  { label: "Testimonianze", href: "#testimonianze" },
];
