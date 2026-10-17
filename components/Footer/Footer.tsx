'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3V2.5h-3.333C10.638 2.5 9.198 4.04 9.198 6.57v2.94H6v3.98h3.198v8.01z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v14h5v-14zm7.982 0h-4.968v14h4.969v-7.399c0-4.088 5.271-4.422 5.271 0v7.399h4.967v-8.878c0-6.911-7.465-6.666-10.239-3.254v-1.868z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

interface FooterProps {
  brandName?: string;
  copyrightYear?: number;
}

export const Footer: React.FC<FooterProps> = ({
  brandName = 'HireLinkx',
  copyrightYear = 2026,
}) => {
  return (
    <footer className="relative w-full bg-[#041528] text-white overflow-hidden pt-16 sm:pt-20 pb-10 border-t border-sky-950/60">
      {/* --- Left Geometric Low-Poly Triangles --- */}
      <div className="absolute left-0 bottom-0 top-0 w-[260px] sm:w-[340px] pointer-events-none select-none overflow-hidden">
        <svg
          viewBox="0 0 340 320"
          preserveAspectRatio="xMinYMax meet"
          className="w-full h-full opacity-85 sm:opacity-95"
        >
          <polygon points="0,60 120,180 0,260" fill="#0A325C" />
          <polygon points="0,200 120,180 0,320" fill="#062242" />
          <polygon points="150,320 270,320 210,190" fill="#6EC2F0" />
          <polygon points="80,320 150,320 120,240" fill="#2A7CBA" />
        </svg>
      </div>

      {/* --- Right Geometric Low-Poly Triangles --- */}
      <div className="absolute right-0 bottom-0 top-0 w-[260px] sm:w-[360px] pointer-events-none select-none overflow-hidden">
        <svg
          viewBox="0 0 360 320"
          preserveAspectRatio="xMaxYMax meet"
          className="w-full h-full opacity-85 sm:opacity-95"
        >
          <polygon points="260,0 360,0 310,130" fill="#70C5F3" />
          <polygon points="150,170 360,170 280,320" fill="#084972" />
          <polygon points="260,320 360,320 310,220" fill="#5FB1E6" />
        </svg>
      </div>

      {/* --- Main Content Grid --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-white/10">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Brand Logo */}
              <Link href="#home" className="inline-flex items-center gap-3 group focus:outline-none">
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden bg-black border border-slate-700/80 flex items-center justify-center shrink-0">
                  <Image
                    src="/HireLinkx_Logo.png"
                    alt={`${brandName} Logo`}
                    width={36}
                    height={36}
                    className="w-full h-full object-contain p-0.5"
                    unoptimized
                  />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-sky-400 transition-colors">
                  {brandName}
                </span>
              </Link>

              {/* Tagline */}
              <p className="text-slate-400 text-xs sm:text-sm mt-3.5 leading-relaxed max-w-xs">
                Your trusted partner in talent acquisition, recruitment, and comprehensive HR workforce solutions.
              </p>

              {/* Social Media Outlined Buttons */}
              <div className="flex items-center gap-3 mt-6 sm:mt-7">
                {[
                  { icon: <FacebookIcon className="w-4 h-4" />, label: 'Facebook', href: '#' },
                  { icon: <LinkedinIcon className="w-4 h-4" />, label: 'LinkedIn', href: '#' },
                  { icon: <InstagramIcon className="w-4 h-4" />, label: 'Instagram', href: '#' },
                ].map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/15 text-slate-300 hover:text-white hover:border-sky-400 hover:bg-sky-500/20 flex items-center justify-center transition-all duration-200 hover:scale-105"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: HR Services */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
              HR Services
            </h3>
            <div className="w-8 h-0.5 bg-sky-400/80 rounded-full mb-4" />
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                'Professionals',
                'Staffing',
                'Inhouse',
                'Global Businesses',
                'Digital Services',
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="#about"
                    className="group flex items-center gap-2.5 text-xs sm:text-sm text-slate-300/80 hover:text-white transition-all duration-200 py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400/50 group-hover:bg-sky-400 group-hover:scale-125 transition-all duration-200 shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Employer Brand Research */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
              Employer Brand Research
            </h3>
            <div className="w-8 h-0.5 bg-sky-400/80 rounded-full mb-4" />
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                'What is Employer Branding',
                'Employer Branding Reports',
                'Market Intelligence',
                'Industry Insights',
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="#about"
                    className="group flex items-center gap-2.5 text-xs sm:text-sm text-slate-300/80 hover:text-white transition-all duration-200 py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400/50 group-hover:bg-sky-400 group-hover:scale-125 transition-all duration-200 shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: About HireLinkx */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
              About {brandName}
            </h3>
            <div className="w-8 h-0.5 bg-sky-400/80 rounded-full mb-4" />
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                'Company Profile',
                'Sustainability',
                'Corporate Governance',
                `${brandName} Innovation Fund`,
                'Our Vision & Values',
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="/about"
                    className="group flex items-center gap-2.5 text-xs sm:text-sm text-slate-300/80 hover:text-white transition-all duration-200 py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400/50 group-hover:bg-sky-400 group-hover:scale-125 transition-all duration-200 shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Bottom Copyright Bar --- */}
        <div className="pt-8 text-center text-xs sm:text-sm text-slate-400">
          <p>
            © {copyrightYear}{' '}
            <span className="text-white font-semibold">{brandName}</span>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
