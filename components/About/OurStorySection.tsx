'use client';

import React from 'react';
import Image from 'next/image';
import { Target, Compass, CheckCircle2 } from 'lucide-react';

export const OurStorySection: React.FC = () => {
  return (
    <section id="story" className="relative w-full bg-white text-slate-900 py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-slate-100">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/80 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Our Genesis & Purpose
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Built to Fix What Conventional Recruitment Broke
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            For decades, staffing agencies operated as transactional brokers — pushing keyword-stuffed resumes,
            leaving candidates in the dark with zero feedback, and promising empty timelines to hiring leaders.
            HireLinkx was born from a simple conviction: hiring should be honest, transparent, and profoundly human.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
          {/* Left Column: Overlapping Chamfered Photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-135 mx-auto min-h-90 sm:min-h-110">
              {/* Soft Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />

              {/* Background Secondary Image */}
              <div className="absolute top-0 left-0 w-60 sm:w-75 h-50 sm:h-65 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10 transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team brainstorming session at modern office"
                  fill
                  sizes="(max-width: 640px) 240px, 300px"
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Foreground Chamfered Cut Image */}
              <div className="filter-card-shadow absolute bottom-0 right-0 z-20 transition-transform duration-300 hover:scale-[1.01]">
                <div className="relative img-cut-br w-65 sm:w-85 h-70 sm:h-90 overflow-hidden bg-slate-100 border-4 border-white">
                  <Image
                    src="/why-us-team.jpg"
                    alt="HireLinkx collaborative leadership team"
                    fill
                    sizes="(max-width: 640px) 260px, 340px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Trust Badge */}
              {/* <div className="absolute -bottom-4 left-4 z-30 bg-[#071f3d] text-white px-5 py-3.5 rounded-xl shadow-xl border border-sky-400/30 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-sky-400 animate-pulse" />
                <div>
                  <p className="text-xs font-bold text-sky-300 uppercase tracking-wide">Human-Led Intelligence</p>
                  <p className="text-sm font-semibold text-white">Zero Candidate Ghosting</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Column: Mission Points */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Human Empathy Paired with Data-Driven Precision
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We leverage advanced talent intelligence to uncover genuine cultural and technical fit,
              while our specialized domain advisors nurture direct, high-trust connections with every individual we represent.
            </p>

            <div className="space-y-4 pt-2">
              {[
                {
                  title: 'Deep Domain Immersion',
                  desc: 'Our talent advisors specialize strictly in their domains — engineering, fintech, product, and leadership — ensuring insightful evaluations.',
                },
                {
                  title: 'Unvarnished Market Intelligence',
                  desc: 'We provide clients and candidates real-time salary benchmarks, market headwinds, and transparent talent pool insights.',
                },
                {
                  title: 'Enduring Partnerships, Not One-Off Transactions',
                  desc: 'Over 82% of our enterprise clients return to us for multiple expansions because we respect their culture as our own.',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-sky-50/60 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-sky-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="audience-banner-cut bg-[#edf6fc] border border-sky-100 p-8 sm:p-12 shadow-[0_10px_30px_rgba(7,31,61,0.06)] relative overflow-hidden group hover:border-sky-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center mb-6 text-sky-600 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Our Mission</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
              Empowering Transparent & Confident Career Decisions
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To eliminate opacity and friction in modern hiring by creating a talent platform where
              ambitious organizations and exceptional professionals connect with mutual trust, full clarity, and shared purpose.
            </p>
          </div>

          {/* Vision Card */}
          <div className="audience-banner-cut bg-[#071f3d] text-white border border-sky-900/50 p-8 sm:p-12 shadow-[0_12px_35px_rgba(7,31,61,0.2)] relative overflow-hidden group hover:border-sky-400/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-sky-400/20 border border-sky-300/30 flex items-center justify-center mb-6 text-sky-300 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Our Vision</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2 mb-4">
              The World&apos;s Most Trusted Talent Highway
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To become the global benchmark in human talent curation, where technological intelligence
              unlocks limitless potential and every placement becomes a cornerstone of long-term organizational success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
