import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { AboutHero } from '@/components/About/AboutHero';
import { OurStorySection } from '@/components/About/OurStorySection';
import { CoreValuesSection } from '@/components/About/CoreValuesSection';
import { LeadershipSection } from '@/components/About/LeadershipSection';
import { AboutCtaBanner } from '@/components/About/AboutCtaBanner';
import { Footer } from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'About Us | HireLinkx Solutions - Culture, Transparency & Top Talent',
  description:
    'Discover the story, mission, and core values of HireLinkx Solutions. We are revolutionizing talent acquisition through radical transparency, collaborative partnership, and intelligence-driven matching.',
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-[#071f3d]">
      {/* Glassmorphism Navigation Bar */}
      <Navbar />

      {/* Hero Section with Geometric Low-Poly Facets & Stats */}
      <AboutHero />

      {/* The Origin Story, Mission & Vision */}
      <OurStorySection />

      {/* The 4 Core Culture & Operational Pillars */}
      <CoreValuesSection />

      {/* Leadership & Advisory Team */}
      <LeadershipSection />

      {/* High-Impact Chamfered CTA Banner */}
      <AboutCtaBanner />

      {/* Brand Footer */}
      <Footer />
    </main>
  );
}
