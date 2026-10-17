'use client';

import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 sm:pt-32 lg:pt-24 pb-16 lg:pb-20"
    >
      {/* Geometric Polygonal Facet Background */}
      <HeroBackground />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12 flex flex-col items-center justify-center">
        <HeroContent />
      </div>
    </section>
  );
};
