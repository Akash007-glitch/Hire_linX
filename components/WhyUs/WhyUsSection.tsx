'use client';

import React from 'react';
import Image from 'next/image';
import { WhyUsFeatures } from './WhyUsFeatures';

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="relative w-full bg-white text-[#111827] overflow-hidden">
      {/* Why Choose Us Section Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Professional Business Meeting Image with Brand Chamfer */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="why-us-shadow w-full max-w-120">
              <div className="relative why-us-img-cut w-full h-95 sm:h-115 md:h-125 lg:h-130 overflow-hidden bg-slate-100 border-4 border-white">
                <Image
                  src="/why-us-team.jpg"
                  alt="Professional recruitment and business meeting at HireLinkx"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 500px"
                  className="object-cover object-[65%_35%] transition-transform duration-500 hover:scale-105"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Right Column: Heading and 4 Feature Items */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <WhyUsFeatures />
          </div>
        </div>
      </div>
    </section>
  );
};
