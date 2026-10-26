import React from "react";

interface HeroProceduralBackgroundProps {
  className?: string;
}

export function HeroProceduralBackground({ className = "" }: HeroProceduralBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
    >
      {/* Dynamic atmospheric radial gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-brand-blue-muted/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />

      {/* Procedural SVG logistics mesh & route topology */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          {/* Grid pattern */}
          <pattern id="logistics-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.75"
              strokeDasharray="2, 6"
              strokeOpacity="0.4"
            />
            <circle cx="0" cy="0" r="1.5" fill="#FFEC01" fillOpacity="0.5" />
          </pattern>

          {/* Route pulse gradient */}
          <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFEC01" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFEC01" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Pattern fill */}
        <rect width="100%" height="100%" fill="url(#logistics-grid)" />

        {/* Vector logistics routes (Simulating Mar del Plata urban corridors) */}
        {/* Ruta Friuli Hub -> Centro -> Playa Grande */}
        <path
          d="M -50 220 Q 240 180, 520 280 T 1100 210 T 1600 340"
          fill="none"
          stroke="url(#routeGrad)"
          strokeWidth="1.5"
          strokeDasharray="6, 6"
        />

        {/* Ruta Constitución -> Juan B. Justo -> Puerto */}
        <path
          d="M 120 -40 Q 320 260, 680 320 T 1280 440 T 1800 380"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeDasharray="4, 8"
          strokeOpacity="0.3"
        />

        {/* Waypoints / Hubs */}
        {/* Hub Friuli */}
        <g transform="translate(520, 280)">
          <circle r="6" fill="#FFEC01" fillOpacity="0.9" />
          <circle r="14" fill="none" stroke="#FFEC01" strokeWidth="1" strokeOpacity="0.4" className="animate-ping" />
        </g>
        {/* Nodo Centro */}
        <g transform="translate(680, 320)">
          <circle r="4" fill="#FFFFFF" fillOpacity="0.8" />
          <circle r="9" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" />
        </g>
        {/* Nodo Puerto */}
        <g transform="translate(1100, 210)">
          <circle r="4" fill="#FFEC01" fillOpacity="0.8" />
          <circle r="10" fill="none" stroke="#FFEC01" strokeWidth="1" strokeOpacity="0.3" />
        </g>
      </svg>
    </div>
  );
}
