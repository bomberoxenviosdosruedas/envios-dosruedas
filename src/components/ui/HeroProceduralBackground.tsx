import React from 'react';

export interface HeroProceduralBackgroundProps {
  variant?: 'express' | 'lowcost' | 'flex' | '3pl' | 'community' | 'contact' | 'cotizar' | 'default';
  tone?: 'blue' | 'yellow';
  className?: string;
}

export function HeroProceduralBackground({
  variant = 'default',
  tone = 'blue',
  className = '',
}: HeroProceduralBackgroundProps) {
  const isYellow = tone === 'yellow';
  const accent = isYellow ? '#0950F6' : '#FFEC01';
  const softAccent = isYellow ? '#063bb8' : '#3570F8';
  const white = isYellow ? '#0950F6' : '#FFFFFF';
  const gridOpacity = isYellow ? 0.05 : 0.08;
  const artOpacity = isYellow ? 0.16 : 0.22;

  // Gradiente canónico Max: #0950F6 → #0950F6 → #3570F8 (nada más oscuro que #0950F6)
  const canonicalGradient = 'linear-gradient(135deg, #0950F6 0%, #0950F6 55%, #3570F8 100%)';

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
    >
      {isYellow ? (
        <>
          {/* Tono amarillo: base plana, sin gradiente */}
          <div className="absolute inset-0 bg-brand-yellow-500" />
          <div
            className="absolute inset-x-0 top-0 h-[70%]"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 70%)',
            }}
          />
        </>
      ) : (
        <>
          {/* 1. Gradiente base canónico Max */}
          <div className="absolute inset-0" style={{ background: canonicalGradient }} />

          {/* 2. Procedural Dynamic Radial Highlights (CSS Glows) */}
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(9,80,246,0.35) 0%, rgba(9,80,246,0.18) 50%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />

          <div
            className="absolute top-1/4 -right-32 w-110 h-110 rounded-full pointer-events-none"
            style={{
              background:
                variant === 'express' || variant === 'lowcost'
                  ? 'radial-gradient(circle, rgba(255,236,1,0.22) 0%, rgba(255,236,1,0.06) 45%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(255,236,1,0.16) 0%, rgba(9,80,246,0.12) 50%, transparent 70%)',
              filter: 'blur(90px)',
            }}
          />

          <div
            className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(9,80,246,0.4) 0%, transparent 70%)',
              filter: 'blur(100px)',
            }}
          />
        </>
      )}

      {/* 3. Mathematical Vector Grid Topology (Pure SVG) */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: gridOpacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`hero-procedural-grid-${tone}`}
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke={white}
              strokeWidth="0.75"
              strokeDasharray="2,6"
            />
            <circle cx="0" cy="0" r="1.5" fill={accent} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#hero-procedural-grid-${tone})`} />
      </svg>

      {/* 4. Variant-Specific Procedural Vector Graphics */}
      {variant === 'express' && (
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: artOpacity }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 450 Q 400 200 900 380 T 1600 150"
            fill="none"
            stroke={accent}
            strokeWidth="2.5"
            strokeDasharray="12 16"
            className="motion-safe:animate-pulse"
          />
          <path
            d="M -100 300 Q 500 480 1000 250 T 1600 350"
            fill="none"
            stroke={softAccent}
            strokeWidth="1.5"
            strokeDasharray="8 12"
          />
        </svg>
      )}

      {variant === 'flex' && (
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: artOpacity }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 600"
        >
          <circle cx="900" cy="300" r="120" fill="none" stroke={accent} strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="900" cy="300" r="220" fill="none" stroke={white} strokeWidth="0.75" strokeDasharray="6 12" />
          <circle cx="900" cy="300" r="320" fill="none" stroke={accent} strokeWidth="1" strokeDasharray="8 16" />
          <line x1="0" y1="300" x2="1200" y2="300" stroke={white} strokeWidth="0.5" strokeDasharray="4 8" />
        </svg>
      )}

      {variant === 'community' && (
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: artOpacity }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <path d="M 0 150 C 400 150, 800 300, 1136 300" fill="none" stroke={white} strokeWidth="1" strokeDasharray="5 9" />
          <path d="M 0 300 C 400 300, 800 300, 1136 300" fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="6 8" />
          <path d="M 0 450 C 400 450, 800 300, 1136 300" fill="none" stroke={white} strokeWidth="1" strokeDasharray="5 9" />
          <circle cx="1136" cy="300" r="6" fill={accent} />
        </svg>
      )}

      {variant === 'contact' && (
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: artOpacity }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="150" x2="1200" y2="150" stroke={white} strokeWidth="1.5" strokeDasharray="6 10" />
          <circle cx="50" cy="150" r="6" fill="none" stroke={accent} strokeWidth="2" />
          <circle cx="1150" cy="150" r="6" fill={accent} />
        </svg>
      )}

      {variant === 'default' && (
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: artOpacity }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <path
            d="M -50 220 Q 240 180, 520 280 T 1100 210 T 1600 340"
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
            strokeDasharray="6, 6"
          />
          <path
            d="M 120 -40 Q 320 260, 680 320 T 1280 440 T 1800 380"
            fill="none"
            stroke={white}
            strokeWidth="1"
            strokeDasharray="4, 8"
          />
          <circle cx="520" cy="280" r="5" fill={accent} />
          <circle cx="680" cy="320" r="4" fill={white} />
          <circle cx="1100" cy="210" r="5" fill={accent} />
        </svg>
      )}
    </div>
  );
}

export default HeroProceduralBackground;
