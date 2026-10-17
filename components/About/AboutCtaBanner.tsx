'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Users } from 'lucide-react';

export const AboutCtaBanner: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-16 sm:py-24 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="audience-banner-cut bg-gradient-to-br from-[#071f3d] via-[#092a54] to-[#041528] text-white p-8 sm:p-14 lg:p-16 shadow-[0_20px_50px_rgba(7,31,61,0.25)] relative overflow-hidden">
          {/* Background Facet Geometry */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-20">
            <svg viewBox="0 0 400 400" className="w-full h-full object-cover">
              <polygon points="100,0 400,0 400,300" fill="#6EC2F0" />
              <polygon points="200,200 400,100 400,400" fill="#2A7CBA" />
              <polygon points="50,400 250,400 150,250" fill="#0A325C" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-400/20 px-3.5 py-1 rounded-full inline-block mb-4">
              Join Our Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Ready to Experience Recruitment Done Right?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
              Whether you are an ambitious enterprise looking to build a high-performing engineering or executive team, 
              or a talented professional searching for your next career milestone — we are here to partner with you.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact-us"
                className="btn-cut-br bg-[#2373F4] hover:bg-[#1b5ec9] text-white text-sm sm:text-base font-semibold px-8 py-3.5 transition-all shadow-lg hover:shadow-sky-500/30 flex items-center gap-2 active:translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Talk to Our Team</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </Link>
              <Link
                href="/#careers"
                className="btn-cut-br bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm sm:text-base font-semibold px-8 py-3.5 transition-all backdrop-blur-md flex items-center gap-2 active:translate-y-0.5"
              >
                <Users className="w-4 h-4" />
                <span>Explore Careers</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
