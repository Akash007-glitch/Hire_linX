'use client';

import React from 'react';

export const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-[#071f3d] bg-[radial-gradient(ellipse_85%_70%_at_50%_45%,rgba(14,48,88,0.55)_0%,rgba(7,31,61,0.95)_70%,rgba(4,18,36,1)_100%)]">
      {/* Soft ambient corner glows */}
      <div className="absolute -top-40 -left-40 w-150 h-150 rounded-full bg-sky-600/10 blur-[140px]" />
      <div className="absolute -bottom-20 right-0 w-175 h-175 rounded-full bg-blue-600/15 blur-[160px]" />

      {/* Restrained subtle glow positioned directly behind the hero heading */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[580px] lg:w-[720px] h-[240px] sm:h-[340px] lg:h-[400px] bg-sky-400/10 rounded-full blur-[110px] pointer-events-none hero-glow-pulse" />

      {/* SVG Geometric Low-Poly & Triangle Mesh */}
      <svg
        className="absolute inset-0 w-full h-full object-cover hero-geo-drift opacity-80 sm:opacity-95 transition-opacity"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients for facets */}
          <linearGradient id="facet-sky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#76bfe9" />
            <stop offset="100%" stopColor="#4da3d9" />
          </linearGradient>

          <linearGradient id="facet-blue-deep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#154271" />
            <stop offset="100%" stopColor="#0d2b4c" />
          </linearGradient>

          <linearGradient id="facet-navy-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a264a" />
            <stop offset="100%" stopColor="#061830" />
          </linearGradient>

          <linearGradient id="facet-cyan-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93ccef" />
            <stop offset="100%" stopColor="#63b3e4" />
          </linearGradient>
        </defs>

        {/* --- Top Center Inverted Triangle (softened) --- */}
        <polygon
          points="540,-20 680,-20 610,150"
          fill="#4ba3e3"
          opacity="0.45"
        />

        {/* Left background low opacity polygonal shades (kept uncluttered) */}
        <polygon
          points="-50,0 350,0 120,400 -50,300"
          fill="#0c2f57"
          opacity="0.25"
        />
        <polygon
          points="-50,600 140,750 0,950 -50,950"
          fill="#0c325c"
          opacity="0.28"
        />
        <polygon
          points="20,700 130,920 -30,920"
          fill="#13477e"
          opacity="0.32"
        />

        {/* --- Center Bottom Upward Pointing Triangle --- */}
        <polygon
          points="460,920 405,735 550,885"
          fill="#3ea5e9"
          opacity="0.55"
        />
        <polygon
          points="405,735 550,885 520,920"
          fill="#2572b8"
          opacity="0.45"
        />

        {/* --- Right Side Multi-Faceted Geometric Polygon Cluster --- */}
        {/* Large top-right facet */}
        <polygon
          points="1100,0 1440,0 1360,260 1150,180"
          fill="#0d3159"
          opacity="0.65"
        />

        {/* Prominent light blue top-right triangle */}
        <polygon
          points="1360,260 1440,0 1440,320"
          fill="url(#facet-sky)"
          opacity="0.75"
        />

        {/* Right middle cyan triangle */}
        <polygon
          points="1150,180 1360,260 1260,490"
          fill="#3b8ec8"
          opacity="0.65"
        />

        {/* Deep navy wedge behind right area */}
        <polygon
          points="1010,260 1150,180 1120,480"
          fill="#0a2a4f"
          opacity="0.7"
        />

        {/* Mid-right large sky-blue triangular facet */}
        <polygon
          points="1260,490 1440,320 1440,540"
          fill="url(#facet-cyan-light)"
          opacity="0.7"
        />

        {/* Dark blue connecting triangle */}
        <polygon
          points="1120,480 1260,490 1210,650"
          fill="#133d6b"
          opacity="0.65"
        />

        {/* Far right mid-lower wedge */}
        <polygon
          points="1260,490 1440,540 1420,740 1380,680"
          fill="#1d5c97"
          opacity="0.6"
        />

        {/* Bottom right cyan triangle pointing left */}
        <polygon
          points="1380,680 1440,740 1440,920 1280,920"
          fill="#3ea5e9"
          opacity="0.7"
        />

        {/* Bottom right dark polygon */}
        <polygon
          points="1210,650 1380,680 1280,920 1110,920"
          fill="#0a2a4e"
          opacity="0.7"
        />

        {/* Bottom right deep navy facet */}
        <polygon
          points="1210,650 1120,480 1010,720"
          fill="#08213e"
          opacity="0.75"
        />

        <polygon
          points="1010,720 1210,650 1110,920"
          fill="#0f3661"
          opacity="0.6"
        />

        {/* Subtle accent line dividers */}
        <line
          x1="1360"
          y1="260"
          x2="1440"
          y2="0"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1.5"
        />
        <line
          x1="1150"
          y1="180"
          x2="1360"
          y2="260"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1.5"
        />
        <line
          x1="1260"
          y1="490"
          x2="1440"
          y2="540"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

