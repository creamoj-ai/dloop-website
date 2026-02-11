import type { Testimonial, Feature, Step } from "./types";

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Registrati in 2 minuti",
    description:
      "Compila il form con i tuoi dati. Nessun documento richiesto subito.",
    icon: "UserPlus",
  },
  {
    number: 2,
    title: "Scarica l'app dloop",
    description:
      "Ricevi il link per scaricare l'app e configura il tuo profilo rider.",
    icon: "Smartphone",
  },
  {
    number: 3,
    title: "Inizia a guadagnare",
    description:
      "Scegli la tua zona, accetta ordini e guadagna subito. Tu decidi quando.",
    icon: "Banknote",
  },
];

export const FEATURES: Feature[] = [
  {
    icon: "MapPin",
    title: "Zone Calde Live",
    description:
      "Nessun'altra app lo fa. Mappa in tempo reale della domanda: vai dove servono rider, non dove ti mandano altri.",
    colorClass: "text-urgent",
    bgClass: "bg-urgent/15",
  },
  {
    icon: "TrendingUp",
    title: "Zero Sorprese",
    description:
      "Sai esattamente quanto guadagni prima di accettare. Ogni centesimo visibile, ogni commissione chiara.",
    colorClass: "text-earnings",
    bgClass: "bg-earnings/15",
  },
  {
    icon: "Route",
    title: "Percorso Smart",
    description:
      "L'algoritmo lavora per te, non contro di te. Piu' ordini, meno km, massimo guadagno orario.",
    colorClass: "text-route",
    bgClass: "bg-route/15",
  },
  {
    icon: "Trophy",
    title: "Cresci con Noi",
    description:
      "Streak, livelli, badge: non sei un numero, sei un professionista che viene premiato. Piu' dai, piu' ricevi.",
    colorClass: "text-bonus",
    bgClass: "bg-bonus/15",
  },
  {
    icon: "Wallet",
    title: "Tre Fonti di Guadagno",
    description:
      "Non solo consegne. Guadagna anche dalla rete referral e dal marketplace. Un modello che non esiste altrove.",
    colorClass: "text-stats",
    bgClass: "bg-stats/15",
  },
  {
    icon: "Shield",
    title: "Supporto Reale",
    description:
      "Niente bot. Chat diretta con persone vere, dall'app, in tempo reale. Quando serve, ci siamo.",
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marco R.",
    role: "Rider dal 2025",
    image: "/images/rider-1.jpg",
    quote:
      "Ho lavorato con tre piattaforme diverse. dloop e' l'unica dove so esattamente quanto guadagno prima di accettare. Non torno indietro.",
    rating: 5,
    earnings: "\u20AC1.400/mese",
  },
  {
    name: "Sofia L.",
    role: "Rider dal 2025",
    image: "/images/rider-2.jpg",
    quote:
      "Per la prima volta mi sento trattata come una professionista, non come un numero. La mappa delle zone calde ha cambiato il mio modo di lavorare.",
    rating: 5,
    earnings: "\u20AC1.100/mese",
  },
  {
    name: "Antonio P.",
    role: "Rider dal 2026",
    image: "/images/rider-3.jpg",
    quote:
      "Guadagno dalle consegne, dai referral e dal marketplace. Tre fonti di reddito da un'unica app. Questo prima non esisteva.",
    rating: 4,
    earnings: "\u20AC900/mese",
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
  { label: "Guadagni", href: "#guadagni" },
  { label: "Zone", href: "#zone" },
  { label: "Features", href: "#features" },
  { label: "Testimonianze", href: "#testimonianze" },
];
