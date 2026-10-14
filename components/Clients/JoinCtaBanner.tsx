'use client';

import React from 'react';
import Link from 'next/link';

interface JoinCtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const JoinCtaBanner: React.FC<JoinCtaBannerProps> = ({
  title = 'Join HireLinkx',
  subtitle = "Today and let's redefine recruitment together. Whether you're a business seeking the right talent or a professional ready for your next career move, we're here to help you succeed.",
  buttonText = 'Get In Touch',
  buttonHref = '#contact-us',
}) => {
  return (
    <div className="relative w-full bg-[#041528] overflow-hidden py-16 sm:py-20 lg:py-24 px-6 sm:px-12 flex items-center justify-center">
      {/* --- Left Geometric Low-Poly Triangles --- */}
      <div className="absolute left-0 top-0 bottom-0 w-[240px] sm:w-[320px] lg:w-[400px] pointer-events-none select-none">
        <svg
          viewBox="0 0 400 300"
          preserveAspectRatio="xMinYMid meet"
          className="w-full h-full opacity-90 sm:opacity-100"
        >
          {/* Top-Left Crisp White Triangle */}
          <polygon points="0,0 150,0 95,100" fill="#FFFFFF" opacity="0.95" />

          {/* Top-Right Sky Blue Triangle */}
          <polygon points="150,0 260,95 95,100" fill="#72C4F2" />

          {/* Left Upper Navy Triangle */}
          <polygon points="0,0 95,100 0,185" fill="#0C3460" />

          {/* Center Dark Deep Navy Triangle */}
          <polygon points="95,100 260,95 180,220" fill="#072343" />

          {/* Small Cyan Triangle Accent */}
          <polygon points="260,95 320,155 260,185" fill="#64B4E8" />

          {/* Bottom-Left Sky Blue Triangle */}
          <polygon points="0,185 95,100 100,265" fill="#4B9FD7" />
          <polygon points="0,185 100,265 0,300" fill="#2E7EBE" />

          {/* Bottom Center Deep Blue Triangle */}
          <polygon points="100,265 180,220 250,300" fill="#0E3D6F" />
        </svg>
      </div>

      {/* --- Right Geometric Low-Poly Triangles --- */}
      <div className="absolute right-0 top-0 bottom-0 w-[220px] sm:w-[300px] lg:w-[380px] pointer-events-none select-none">
        <svg
          viewBox="0 0 380 300"
          preserveAspectRatio="xMaxYMid meet"
          className="w-full h-full opacity-90 sm:opacity-100"
        >
          {/* Top Sky Blue Triangle pointing down */}
          <polygon points="190,0 380,0 280,165" fill="#6EC1F0" />

          {/* Center Large Dark Teal-Navy Triangle */}
          <polygon points="60,170 380,170 210,340" fill="#084A74" />

          {/* Bottom-Right Bright Sky Blue Triangle */}
          <polygon points="270,300 380,300 330,175" fill="#62B5E7" />
        </svg>
      </div>

      {/* --- Center Banner Content --- */}
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-xs sm:text-sm md:text-[15px] leading-relaxed mt-3 sm:mt-4 max-w-xl">
          {subtitle}
        </p>

        {/* Chamfer-Cut CTA Button */}
        <div className="mt-8">
          <Link
            href={buttonHref}
            className="btn-cut-br bg-[#2373F4] hover:bg-[#6298ee] text-white font-medium text-xs sm:text-sm px-7 py-3 transition-all duration-200 shadow-md hover:shadow-lg active:translate-y-0.5 inline-flex items-center justify-center cursor-pointer"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};
