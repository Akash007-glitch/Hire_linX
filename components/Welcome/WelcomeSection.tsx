'use client';

import React from 'react';
import { WelcomeContent } from './WelcomeContent';
import { WelcomeImages } from './WelcomeImages';

export const WelcomeSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-white text-slate-900 py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Welcome Text & CTA */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <WelcomeContent />
          </div>

          {/* Right Column: Overlapping Staggered Images */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <WelcomeImages />
          </div>
        </div>
      </div>
    </section>
  );
};
