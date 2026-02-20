"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { NAPLES_CENTER, ZONE_COLORS } from "@/lib/constants";
import type { ZoneData } from "@/lib/types";

// Dynamic import to avoid SSR crash (Leaflet needs window)
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);
const CircleMarker = dynamic(
  () => import("react-leaflet").then((m) => m.CircleMarker),
  { ssr: false }
);
const Tooltip = dynamic(
  () => import("react-leaflet").then((m) => m.Tooltip),
  { ssr: false }
);

// Fallback data if API fails
const FALLBACK_ZONES: ZoneData[] = [
  { id: "1", name: "Centro Storico", demand: "alta", orders_per_hour: 12, distance_km: 2.5, earning_min: 14, earning_max: 22, latitude: 40.8518, longitude: 14.2581, updated_at: "" },
  { id: "2", name: "Vomero", demand: "alta", orders_per_hour: 10, distance_km: 3.0, earning_min: 12, earning_max: 20, latitude: 40.8451, longitude: 14.2328, updated_at: "" },
  { id: "3", name: "Chiaia", demand: "media", orders_per_hour: 8, distance_km: 2.0, earning_min: 10, earning_max: 18, latitude: 40.8369, longitude: 14.2293, updated_at: "" },
  { id: "4", name: "Fuorigrotta", demand: "media", orders_per_hour: 6, distance_km: 3.5, earning_min: 8, earning_max: 16, latitude: 40.8261, longitude: 14.1878, updated_at: "" },
  { id: "5", name: "Posillipo", demand: "bassa", orders_per_hour: 4, distance_km: 4.0, earning_min: 10, earning_max: 15, latitude: 40.8145, longitude: 14.1981, updated_at: "" },
];

function DemandBadge({ demand }: { demand: string }) {
  const colors: Record<string, string> = {
    alta: "bg-earnings/15 text-earnings",
    media: "bg-stats/15 text-stats",
    bassa: "bg-text-secondary/15 text-text-secondary",
  };
  return (
    <span
      className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${colors[demand] || colors.bassa}`}
    >
      {demand}
    </span>
  );
}

export default function ZoneAttive() {
  const [zones, setZones] = useState<ZoneData[]>(FALLBACK_ZONES);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="zone" className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="La mappa che nessuno ti ha mai dato"
          subtitle="Domanda in tempo reale. Tu scegli dove andare."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Map */}
          <div className="lg:col-span-3 relative">
            {/* LIVE badge */}
            <div className="absolute top-3 left-3 z-[1000] flex items-center gap-1.5 bg-urgent/20 text-urgent text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-urgent animate-pulse" />
              LIVE
            </div>

            <div className="h-[350px] md:h-[500px] rounded-lg overflow-hidden border border-border">
              {mounted && (
                <MapContainer
                  center={[NAPLES_CENTER.lat, NAPLES_CENTER.lng]}
                  zoom={12}
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%" }}
                  attributionControl={true}
                >
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  />
                  {zones.map((zone) => (
                    <CircleMarker
                      key={zone.id}
                      center={[zone.latitude, zone.longitude]}
                      radius={zone.demand === "alta" ? 30 : zone.demand === "media" ? 24 : 18}
                      pathOptions={{
                        color: ZONE_COLORS[zone.demand],
                        fillColor: ZONE_COLORS[zone.demand],
                        fillOpacity: selectedId === zone.id ? 0.35 : 0.15,
                        weight: selectedId === zone.id ? 3 : 1.5,
                      }}
                      eventHandlers={{
                        click: () => setSelectedId(zone.id),
                      }}
                    >
                      <Tooltip permanent direction="center" className="!bg-transparent !border-0 !shadow-none">
                        <span className="text-white text-[10px] font-bold drop-shadow-lg">
                          {zone.name.split(" ")[0]}
                        </span>
                      </Tooltip>
                    </CircleMarker>
                  ))}
                </MapContainer>
              )}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 mt-3">
              {Object.entries(ZONE_COLORS).map(([demand, color]) => (
                <div key={demand} className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-[11px] text-text-secondary capitalize">
                    {demand}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Zone Cards */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {zones.map((zone, i) => (
              <ScrollReveal key={zone.id} delay={i * 0.08}>
                <div
                  onClick={() => setSelectedId(zone.id)}
                  className={`
                    bg-surface rounded-lg p-4 cursor-pointer transition-all duration-200
                    border-l-[3px]
                    ${selectedId === zone.id ? "ring-1 ring-white/10" : ""}
                  `}
                  style={{
                    borderLeftColor: ZONE_COLORS[zone.demand],
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[13px] font-semibold text-white">
                      {zone.name}
                    </h4>
                    <DemandBadge demand={zone.demand} />
                  </div>
                  <p className="text-xs text-text-secondary mb-1">
                    ~{zone.orders_per_hour} ordini/h &middot; {zone.distance_km} km
                  </p>
                  <p className="text-sm font-bold text-white">
                    {"\u20AC"}{zone.earning_min}-{zone.earning_max}/h{" "}
                    <span className="text-text-secondary font-normal text-xs">
                      stima
                    </span>
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
