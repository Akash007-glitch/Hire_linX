'use client';

import React from 'react';
import { ForClientsCard } from './ForClientsCard';
import { ForCandidatesCard } from './ForCandidatesCard';

export const AudienceSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto audience-shadow">
        {/* Border edge container matching the authentic cut corners */}
        <div className="audience-banner-cut grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column: For Clients (Deep Navy with Top-Left Cut) */}
          <ForClientsCard />

          {/* Right Column: For Candidates (Sky Blue with Bottom-Right Cut) */}
          <ForCandidatesCard />
        </div>
      </div>
    </section>
  );
};
