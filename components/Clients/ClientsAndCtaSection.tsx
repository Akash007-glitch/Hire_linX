'use client';

import React from 'react';
import { OurClientsSection } from './OurClientsSection';
import { JoinCtaBanner } from './JoinCtaBanner';

export const ClientsAndCtaSection: React.FC = () => {
  return (
    <section id="careers" className="relative w-full overflow-hidden">
      {/* 1. Our Clients Grid Section */}
      <div id="clients">
        <OurClientsSection />
      </div>

      {/* 2. Join Kawadercom / HireLinkx Geometric CTA Banner */}
      <JoinCtaBanner />
    </section>
  );
};
