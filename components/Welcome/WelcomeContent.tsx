'use client';

import React from 'react';
import Link from 'next/link';

export const WelcomeContent: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center max-w-lg">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
        Welcome to
        <br />
        HireLinkx Solutions !
      </h2>

      {/* Description */}
      <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
        your trusted partner in recruitment, talent acquisition, and HR solutions. We help businesses connect with the right talent while providing reliable staffing, payroll management, and HR administration services. Our goal is to simplify hiring, strengthen teams, and build lasting connections between employers and professionals.
      </p>

      {/* Find a Job CTA Button */}
      <div className="relative group">
        <Link
          href="#careers"
          className="btn-cut-br bg-[#2373F4] hover:bg-[#6298ee] text-white font-medium text-sm sm:text-base px-8 py-3.5 transition-all duration-200 shadow-md hover:shadow-lg active:translate-y-0.5 inline-flex items-center justify-center cursor-pointer"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};
