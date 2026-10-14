'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NavLink } from './Hero/types';

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact Us', href: '#contact-us' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-12 pt-2.5 sm:pt-4 transition-all duration-300">
      {/* White Blur Glassmorphism Navbar Container */}
      <nav
        aria-label="Main Navigation"
        className={`mx-auto max-w-7xl rounded-2xl sm:rounded-full transition-all duration-300 ${isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.12)] border border-white/70 py-2 px-3.5 sm:px-8'
          : 'bg-white/80 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/60 py-2.5 sm:py-3.5 px-4 sm:px-8'
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none min-w-0"
            aria-label="HireLinkx Solutions"
          >
            {/* HireLinkx Logo Icon */}
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl overflow-hidden bg-black shadow-md border border-slate-800/80 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/HireLinkx_Logo.png"
                alt="HireLinkx Solutions Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain p-0.5"
                priority
                unoptimized
              />
            </div>
            <span className="text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors truncate max-w-[155px] sm:max-w-none">
              HireLinkx Solutions
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-slate-100/70 transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Action: Find a Job button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="#careers"
              className="btn-cut-br bg-[#2373F4] hover:bg-[#6298ee] text-white text-xs sm:text-sm font-medium px-5 py-2.5 transition-all duration-200 shadow-sm hover:shadow-md active:translate-y-0.5 inline-flex items-center gap-1.5"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100/80 transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with white blur glassmorphism */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-2 border-t border-slate-200/50 flex flex-col gap-1.5 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-1">
              <Link
                href="#careers"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-cut-br bg-[#2373F4] hover:bg-[#2373F4] text-white text-sm font-medium py-3 text-center justify-center flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
