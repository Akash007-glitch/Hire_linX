'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { ArrowUp } from 'lucide-react';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

interface SmoothScrollProps {
  children?: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const pathname = usePathname();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    // Track scroll progress and back-to-top visibility
    lenis.on('scroll', (e: { progress: number; scroll: number }) => {
      setScrollProgress(e.progress);
      setShowScrollTop(e.scroll > 350);
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Enhanced smooth section navigation with navbar offset
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      const currentPath = window.location.pathname;

      // Clicked Home while already on Home page -> smooth scroll to top
      if (
        (href === '/' || href === '/#home' || href === '#home') &&
        (currentPath === '/' || currentPath === '')
      ) {
        e.preventDefault();
        lenis.scrollTo(0, { offset: 0, duration: 1.2 });
        if (window.history.pushState) {
          window.history.pushState(null, '', '/');
        }
        return;
      }

      // Resolve section anchor targets on current page
      let targetSelector: string | null = null;

      if (href.startsWith('#') && href.length > 1) {
        targetSelector = href;
      } else if (
        href.startsWith('/#') &&
        href.length > 2 &&
        (currentPath === '/' || currentPath === '')
      ) {
        targetSelector = href.substring(1);
      } else if (href.includes('#')) {
        const [path, hash] = href.split('#');
        if ((path === currentPath || (path === '/' && currentPath === '')) && hash) {
          targetSelector = `#${hash}`;
        }
      }

      if (targetSelector) {
        try {
          const targetElement = document.querySelector(targetSelector);
          if (targetElement) {
            e.preventDefault();
            lenis.scrollTo(targetElement as HTMLElement, {
              offset: -85,
              duration: 1.25,
            });

            if (window.history.pushState) {
              window.history.pushState(null, '', targetSelector);
            }
          }
        } catch {
          // Fallback if querySelector fails on complex selector
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Smooth scroll on initial load or hash change
    if (window.location.hash) {
      const initialTarget = document.querySelector(window.location.hash);
      if (initialTarget) {
        setTimeout(() => {
          lenis.scrollTo(initialTarget as HTMLElement, {
            offset: -85,
            duration: 1.2,
          });
        }, 350);
      }
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  // When route switches, reset scroll to top smoothly if no hash
  useEffect(() => {
    if (typeof window !== 'undefined' && window.__lenis) {
      if (!window.location.hash) {
        window.__lenis.scrollTo(0, { immediate: true });
      } else {
        const target = document.querySelector(window.location.hash);
        if (target) {
          setTimeout(() => {
            window.__lenis?.scrollTo(target as HTMLElement, {
              offset: -85,
              duration: 1.2,
            });
          }, 200);
        }
      }
    }
  }, [pathname]);

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sleek Top Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-0.75 bg-transparent z-9999 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-linear-to-r from-sky-400 via-[#2373F4] to-cyan-400 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(35,115,244,0.7)]"
          style={{ width: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }}
        />
      </div>

      {/* Smooth Page Content Transition */}
      <div key={pathname} className="flex-1 flex flex-col w-full animate-page-enter">
        {children}
      </div>

      {/* Floating Smooth Scroll to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#071f3d]/90 hover:bg-[#2373F4] text-white backdrop-blur-md border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 flex items-center justify-center cursor-pointer group hover:scale-110 active:scale-95 ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5 text-sky-400 group-hover:text-white" />
      </button>
    </>
  );
};
