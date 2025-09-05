// components/NJMap.tsx
"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

// ---- dynamic imports to disable SSR for react-leaflet ----
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
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), {
  ssr: false,
});

// ---- types ----
type Location = {
  name: string,
  lat: number,
  lng: number,
  blink?: boolean, // default true
};

type Props = {
  locations?: Location[],
  heightClass?: string, // e.g., "h-[520px]"
  zoom?: number,
  center?: [number, number],
};

// ---- defaults (your NJ cities) ----
const DEFAULT_LOCATIONS: Location[] = [
  { name: "Jersey City", lat: 40.7178, lng: -74.0431 },
  { name: "Bayonne", lat: 40.6687, lng: -74.1143 },
  { name: "Union", lat: 40.6976, lng: -74.2632 },
  { name: "Newark", lat: 40.7357, lng: -74.1724 },
  { name: "Fairfield", lat: 40.8837, lng: -74.304 },
  { name: "East Orange", lat: 40.7673, lng: -74.2049 },
  { name: "Linden", lat: 40.622, lng: -74.2446 },
];

export default function NJMap({
  locations = DEFAULT_LOCATIONS,
  heightClass = "h-[500px]",
  zoom = 10,
  center,
}: Props) {
  const mapCenter =
    useMemo < [number, number] > (() => center ?? [40.74, -74.2], [center]);

  return (
    <div
      className={`w-full rounded-2xl shadow-lg overflow-hidden ${heightClass}`}
    >
      <MapContainer
        center={mapCenter}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
        />

        {locations.map((loc, i) => (
          <CircleMarker
            key={`${loc.name}-${i}`}
            center={[loc.lat, loc.lng]}
            radius={8}
            pathOptions={{ color: "#00A6B2", weight: 2, fillOpacity: 0.9 }}
            className={loc.blink ?? true ? "pulse-marker" : ""}
          >
            <Popup>
              <div className="font-semibold">{loc.name}</div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      {/* Pulse animation */}
      <style jsx global>{`
        .pulse-marker {
          animation: pulse 1.6s ease-in-out infinite;
          filter: drop-shadow(0 0 6px rgba(0, 166, 178, 0.55));
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.95;
          }
          50% {
            transform: scale(1.35);
            opacity: 0.6;
          }
          100% {
            transform: scale(1);
            opacity: 0.95;
          }
        }
      `}</style>
    </div>
  );
}
