'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-20 bg-[#071f3d]">
      {/* Dynamic ambient gradients */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-sky-600/15 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[160px] pointer-events-none" />

      {/* SVG Geometric Low-Poly Facet Overlay */}
      <svg
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="540,-20 680,-20 610,150" fill="#4ba3e3" opacity="0.45" />
        <polygon points="-50,0 350,0 120,400 -50,300" fill="#0c2f57" opacity="0.35" />
        <polygon points="-50,600 140,750 0,950 -50,950" fill="#0c325c" opacity="0.4" />
        <polygon points="1200,0 1500,0 1440,380 1150,220" fill="#0a2a50" opacity="0.5" />
        <polygon points="1350,300 1500,300 1500,750 1220,620" fill="#1b4d7e" opacity="0.25" />
        <polygon points="1120,680 1350,880 1020,950" fill="#3c8bc2" opacity="0.2" />
      </svg>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        {/* Breadcrumb & Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 backdrop-blur-md mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-sky-200 uppercase">
            About HireLinkx Solutions
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="max-w-4xl text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6 sm:mb-8">
          Bridging Visionary Companies with{' '}
          <span className="italic font-serif font-medium text-sky-200/95 tracking-normal block sm:inline">
            Exceptional Talent
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal mb-10 sm:mb-12">
          We are a modern recruitment & talent intelligence firm built on radical transparency,
          relentless innovation, and an unwavering commitment to genuine human relationships.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 sm:mb-20">
          <Link
            href="#story"
            className="btn-cut-br bg-[#2373F4] hover:bg-[#1a5ec9] text-white font-medium text-sm sm:text-base px-8 py-3.5 transition-all duration-200 shadow-lg hover:shadow-sky-500/20 active:translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Our Story</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/#contact-us"
            className="btn-cut-br bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm sm:text-base px-8 py-3.5 transition-all duration-200 backdrop-blur-md active:translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Get in Touch</span>
          </Link>
        </div>

        {/* Key Metrics Grid */}
        {/* <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl">
          {[
            {
              icon: <Users className="w-5 h-5 text-sky-400" />,
              stat: '2,500+',
              label: 'Professionals Placed',
              sub: 'Across Global Tech & Growth Teams',
            },
            {
              icon: <Award className="w-5 h-5 text-sky-400" />,
              stat: '98.4%',
              label: '1-Year Retention Rate',
              sub: 'Far Exceeding Industry Average',
            },
            {
              icon: <Building2 className="w-5 h-5 text-sky-400" />,
              stat: '150+',
              label: 'Enterprise Partners',
              sub: 'From Unicorns to Global Leaders',
            },
            {
              icon: <Clock className="w-5 h-5 text-sky-400" />,
              stat: '14 Days',
              label: 'Avg. Time-To-Shortlist',
              sub: 'Fast, Precision-Matched Delivery',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="card-cut-br bg-white/5 border border-white/10 backdrop-blur-md p-5 sm:p-6 text-left hover:border-sky-400/40 hover:bg-white/10 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                {item.stat}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-sky-200 mb-1">
                {item.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 line-clamp-2">
                {item.sub}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
