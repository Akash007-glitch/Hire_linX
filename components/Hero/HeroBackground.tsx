'use client';

import React from 'react';

export const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-[#071f3d]">
      {/* Dynamic ambient gradients */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-sky-600/10 blur-[130px]" />
      <div className="absolute -bottom-20 right-0 w-[700px] h-[700px] rounded-full bg-blue-600/15 blur-[150px]" />

      {/* SVG Geometric Low-Poly & Triangle Mesh */}
      <svg
        className="absolute inset-0 w-full h-full object-cover"
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

        {/* --- Top Center Inverted Triangle (from screenshot) --- */}
        <polygon
          points="540,-20 680,-20 610,150"
          fill="#4ba3e3"
          opacity="0.85"
        />

        {/* Left background low opacity polygonal shades */}
        <polygon
          points="-50,0 350,0 120,400 -50,300"
          fill="#0c2f57"
          opacity="0.4"
        />
        <polygon
          points="-50,600 140,750 0,950 -50,950"
          fill="#0c325c"
          opacity="0.5"
        />
        <polygon
          points="20,700 130,920 -30,920"
          fill="#13477e"
          opacity="0.6"
        />

        {/* --- Center Bottom Upward Pointing Triangle (from screenshot) --- */}
        <polygon
          points="460,920 405,735 550,885"
          fill="#3ea5e9"
          opacity="0.9"
        />
        <polygon
          points="405,735 550,885 520,920"
          fill="#2572b8"
          opacity="0.75"
        />

        {/* --- Right Side Multi-Faceted Geometric Polygon Cluster --- */}
        {/* Large top-right facet */}
        <polygon
          points="1100,0 1440,0 1360,260 1150,180"
          fill="#0d3159"
          opacity="0.8"
        />

        {/* Prominent light blue top-right triangle */}
        <polygon
          points="1360,260 1440,0 1440,320"
          fill="url(#facet-sky)"
          opacity="0.95"
        />

        {/* Right middle cyan triangle */}
        <polygon
          points="1150,180 1360,260 1260,490"
          fill="#3b8ec8"
          opacity="0.85"
        />

        {/* Deep navy wedge behind right cards */}
        <polygon
          points="1010,260 1150,180 1120,480"
          fill="#0a2a4f"
          opacity="0.9"
        />

        {/* Mid-right large sky-blue triangular facet */}
        <polygon
          points="1260,490 1440,320 1440,540"
          fill="url(#facet-cyan-light)"
          opacity="0.9"
        />

        {/* Dark blue connecting triangle */}
        <polygon
          points="1120,480 1260,490 1210,650"
          fill="#133d6b"
          opacity="0.85"
        />

        {/* Far right mid-lower wedge */}
        <polygon
          points="1260,490 1440,540 1420,740 1380,680"
          fill="#1d5c97"
          opacity="0.8"
        />

        {/* Bottom right cyan triangle pointing left */}
        <polygon
          points="1380,680 1440,740 1440,920 1280,920"
          fill="#3ea5e9"
          opacity="0.9"
        />

        {/* Bottom right dark polygon */}
        <polygon
          points="1210,650 1380,680 1280,920 1110,920"
          fill="#0a2a4e"
          opacity="0.9"
        />

        {/* Bottom right deep navy facet */}
        <polygon
          points="1210,650 1120,480 1010,720"
          fill="#08213e"
          opacity="0.95"
        />

        <polygon
          points="1010,720 1210,650 1110,920"
          fill="#0f3661"
          opacity="0.8"
        />

        {/* Subtle accent line dividers */}
        <line
          x1="1360"
          y1="260"
          x2="1440"
          y2="0"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
        <line
          x1="1150"
          y1="180"
          x2="1360"
          y2="260"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1.5"
        />
        <line
          x1="1260"
          y1="490"
          x2="1440"
          y2="540"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};
