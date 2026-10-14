import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/Hero/HeroSection';
import { WelcomeSection } from '@/components/Welcome/WelcomeSection';
import { AudienceSection } from '@/components/Audience/AudienceSection';
import { WhyUsSection } from '@/components/WhyUs/WhyUsSection';
import { ClientsAndCtaSection } from '@/components/Clients/ClientsAndCtaSection';
import { Footer } from '@/components/Footer/Footer';
import { Mail, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-[#071f3d]">
      {/* White Blur Glassmorphism Navigation Bar */}
      <Navbar />

      {/* Main Hero Section divided into modular components */}
      <HeroSection />

      {/* Welcome Section (Immediately After Hero) */}
      <WelcomeSection />

      {/* For Clients & For Candidates Section */}
      <AudienceSection />

      {/* Why Us & Case Studies Section */}
      <WhyUsSection />

      {/* Our Clients & Join CTA Banner Section */}
      <ClientsAndCtaSection />

      {/* Careers Section */}


      {/* About Us Section */}
      <section id="about-us" className="relative z-10 w-full bg-white py-20 sm:py-28 px-6 sm:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="audience-banner-cut bg-[#edf6fc] border border-sky-100 rounded-3xl p-8 sm:p-14 lg:p-16 shadow-[0_10px_30px_rgba(7,31,61,0.06)]">
            <div className="max-w-3xl">
              <span className="text-sky-600 text-sm font-bold tracking-wider uppercase">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-6">
                Building a Culture of Innovation & Growth
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10">
                We empower leaders and candidates to thrive together. Our culture revolves around openness, relentless innovation, and collaborative impact.
              </p>
              <div className="flex flex-wrap gap-8 sm:gap-14">
                <div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">98%</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wide">Candidate Satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">2.5k+</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wide">Talents Placed</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">150+</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wide">Partner Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="relative z-10 w-full bg-[#f8fafc] py-20 sm:py-28 px-6 sm:px-12 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mx-auto text-center mb-10 sm:mb-12">
            <span className="text-sky-600 text-sm font-bold tracking-wider uppercase">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
              Connect With Our Team
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Have questions about roles, culture, or partnerships? We would love to hear from you.
            </p>
          </div>

          <form className="max-w-xl mx-auto bg-white shadow-[0_12px_40px_rgba(7,31,61,0.08)] border border-slate-200/80 p-8 sm:p-10 rounded-3xl space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none transition-all text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none transition-all text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help?"
                className="w-full bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none resize-none transition-all text-sm sm:text-base"
              />
            </div>
            <button
              type="button"
              className="w-full btn-cut-br bg-[#5fa8d3] hover:bg-[#4a97c4] text-white font-medium py-3.5 transition-all shadow-md hover:shadow-lg active:translate-y-0.5 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <Mail className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
