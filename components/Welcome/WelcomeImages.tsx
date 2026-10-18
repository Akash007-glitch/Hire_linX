'use client';

import React from 'react';
import Image from 'next/image';

export const WelcomeImages: React.FC = () => {
  return (
    <div className="relative w-full max-w-140 mx-auto lg:mx-0 min-h-90 sm:min-h-110 md:min-h-120">
      {/* Background Soft Accent Shadow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 sm:w-95 h-75 sm:h-95 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Top-Left Offset Image: Business Handshake */}
      <div className="absolute top-0 left-0 sm:left-4 w-45 sm:w-60 md:w-65 h-40 sm:h-52.5 md:h-57.5 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10 transition-transform duration-300 hover:scale-[1.02]">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
          alt="Partnership handshake over office desk"
          fill
          sizes="(max-width: 640px) 180px, 260px"
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Bottom-Right Main Foreground Image: Smiling Colleagues with Laptop & Chamfered Cut-Corner */}
      <div className="filter-card-shadow absolute bottom-0 right-0 sm:right-4 z-20 transition-transform duration-300 hover:scale-[1.01]">
        <div className="relative img-cut-br w-55 sm:w-75 md:w-85 h-67.5 sm:h-90 md:h-97.5 overflow-hidden bg-slate-100 border-4 border-white">
          <Image
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
            alt="Colleagues collaborating with laptop in modern office"
            fill
            sizes="(max-width: 640px) 220px, 340px"
            className="object-cover object-top"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};
