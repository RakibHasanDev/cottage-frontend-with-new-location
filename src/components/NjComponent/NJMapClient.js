// components/NjComponent/NJMapClient.jsx
"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import React, { useEffect, useMemo, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MapPin } from "lucide-react";

/** optional: share the same default list from the parent or pass via props */
const DEFAULT_LOCATIONS = [
  {
    name: "97 Newkirk St STE 337, Jersey City, NJ 07306",
    lat: 40.7336,
    lng: -74.0657,
  },
  { name: "Bayonne", lat: 40.6687, lng: -74.1143 },
  { name: "Union", lat: 40.6976, lng: -74.2632 },
  { name: "Newark", lat: 40.7357, lng: -74.1724 },
  { name: "Fairfield", lat: 40.8837, lng: -74.304 },
  { name: "East Orange", lat: 40.7673, lng: -74.2049 },
  { name: "Linden", lat: 40.622, lng: -74.2446 },
];

function createReactIconDivIcon({ size = 28 } = {}) {
  const svg = renderToStaticMarkup(
    <MapPin fill="#1c3461" color="#ffffff" size={32} />
  );
  return L.divIcon({
    className: "react-leaflet-pin",
    html: `
      <div class="pin-wrap">
        <span class="pin-icon">${svg}</span>
        <span class="pin-halo"></span>
      </div>
    `,
    iconSize: [size + 8, size + 8],
    iconAnchor: [Math.round((size + 8) / 2), size + 4],
    popupAnchor: [0, -size],
  });
}

/** imperatively move the map when selection changes */
function FlyTo({ target, zoom = 12 }) {
  const map = useMap();
  useEffect(() => {
    if (target) {
      map.flyTo([target.lat, target.lng], zoom, { duration: 1.2 });
    }
  }, [target, zoom, map]);
  return null;
}

export default function NJMapClient({
  locations = DEFAULT_LOCATIONS,
  heightClass = "h-[500px]",
  zoom = 10,
  center,
  selected, // <- {name, lat, lng}
  pinColor = "#A020F0",
  halo = "rgba(160, 32, 240,0.35)",
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const mapCenter = useMemo(() => center ?? [40.74, -74.2], [center]);
  const pinIcon = useMemo(
    () => createReactIconDivIcon({ color: pinColor }),
    [pinColor]
  );

  return (
    <div className={`w-full shadow-lg overflow-hidden ${heightClass}`}>
      {mounted ? (
        <MapContainer
          center={mapCenter}
          zoom={zoom}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
            zIndex={-1} // 👈 put tiles below everything
          />

          {/* fly when user selects from the list */}
          <FlyTo target={selected} zoom={13} />

          {locations.map((loc, i) => (
            <Marker
              key={`${loc.name}-${i}`}
              position={[loc.lat, loc.lng]}
              icon={pinIcon}
            >
              <Popup>
                <div className="font-semibold">{loc.name}</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : (
        <div className="w-full h-full bg-gray-100" />
      )}

      <style jsx global>{`
        .react-leaflet-pin {
          background: transparent !important;
          border: none !important;
        }
        .react-leaflet-pin .pin-wrap {
          position: relative;
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
        }
        .react-leaflet-pin .pin-icon {
          position: relative;

          pointer-events: none;
        }
        .react-leaflet-pin .pin-halo {
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: ${halo};

          animation: pinPulse 2s ease-in-out infinite;
        }
        @keyframes pinPulse {
          0% {
            transform: scale(1);
            opacity: 0.85;
          }
          50% {
            transform: scale(3);
            opacity: 0;
          }
          100% {
            transform: scale(1.5);
            opacity: 0.85;
          }
        }
      `}</style>
    </div>
  );
}
