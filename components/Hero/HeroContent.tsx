'use client';

import React from 'react';

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-3xl text-center mx-auto z-10">
      {/* Subtitle / Kicker */}
      <div className="inline-flex items-center justify-center gap-2 mb-4 sm:mb-6">
        <span className="text-slate-300 text-sm sm:text-base font-normal tracking-wide">
          We&apos;re proud of the culture we&apos;ve built
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.15] sm:leading-[1.12] mb-6 sm:mb-10">
        <span className="block font-sans font-extrabold text-white">
          One That Values
        </span>
        <span className="block italic font-serif font-medium text-sky-200/95 tracking-normal my-0.5">
          Transparency,
        </span>
        <span className="block italic font-serif font-medium text-sky-200/95 tracking-normal my-0.5">
          Innovation and
        </span>
        <span className="block font-sans font-extrabold text-white">
          Collaboration
        </span>
      </h1>

      {/* Call to action button with chamfered cut corner matching the design */}
      <div className="relative group">
        {/* Glow backdrop on hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-300" />
        
        <button
          type="button"
          className="relative btn-cut-br bg-[#5fa8d3] hover:bg-[#4d97c3] text-white font-medium text-sm sm:text-base px-8 py-3.5 transition-all duration-200 shadow-md hover:shadow-lg active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-300/50 flex items-center justify-center cursor-pointer"
        >
          Find a Job
        </button>
      </div>
    </div>
  );
};
