'use client';

import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroCards } from './HeroCards';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 sm:pt-32 lg:pt-24 pb-16 lg:pb-20"
    >
      {/* Geometric Polygonal Facet Background */}
      <HeroBackground />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content: Headline, Kicker & CTA */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <HeroContent />
          </div>

          {/* Right Hero Content: 4 Staggered Candidate Review Cards */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            {/* <HeroCards /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
