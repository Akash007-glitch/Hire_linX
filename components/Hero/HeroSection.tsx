'use client';

import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 sm:pt-32 lg:pt-24 pb-16 sm:pb-20 lg:pb-24"
    >
      {/* Geometric Polygonal Facet Background */}
      <HeroBackground />

      {/* Main Container - perfectly centered horizontally and vertically */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-6 sm:py-10 flex flex-col items-center justify-center text-center">
        <HeroContent />
      </div>
    </section>
  );
};

