'use client';

import React from 'react';
import Link from 'next/link';

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl text-center mx-auto z-10">
      {/* Eyebrow / Kicker */}
      <div className="inline-flex items-center justify-center mb-5 sm:mb-6 hero-animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 backdrop-blur-xs">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-sky-300 uppercase">
            OUR CULTURE
          </span>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="max-w-187.5 w-full mx-auto text-[34px] sm:text-[48px] md:text-[52px] lg:text-[62px] font-bold text-white tracking-tight leading-[1.14] sm:leading-[1.12] lg:leading-[1.08] mb-8 sm:mb-10">
        <span className="block font-sans font-extrabold text-white hero-animate-fade-up [animation-delay:100ms]">
          Built on Trust.
        </span>
        <span className="block italic font-serif font-medium text-sky-200/95 tracking-normal my-1 sm:my-1.5 lg:my-2 hero-animate-fade-up [animation-delay:200ms]">
          Driven by Innovation.
        </span>
        <span className="block font-sans font-extrabold text-white hero-animate-fade-up [animation-delay:300ms]">
          United by Collaboration.
        </span>
      </h1>

      {/* Call to Action Button */}
      <div className="relative group hero-animate-fade-up [animation-delay:420ms]">
        {/* Glow backdrop on hover */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-sky-400 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-300" />

        <Link
          href="/#contact-us"
          className="relative btn-cut-br bg-[#2373F4] hover:bg-[#1a5ec9] text-white font-medium text-sm sm:text-base px-8 py-3.5 transition-all duration-200 shadow-md hover:shadow-lg active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-300/50 flex items-center justify-center cursor-pointer"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

