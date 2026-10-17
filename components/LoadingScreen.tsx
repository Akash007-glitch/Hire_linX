'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const LoadingScreen: React.FC = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  const pathname = usePathname();
  const [routeTransitioning, setRouteTransitioning] = useState(false);

  // Initial page refresh / load screen
  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Smoothly advance progress with non-linear easing
      const step = Math.max(2, Math.floor((100 - currentProgress) / 5));
      currentProgress = Math.min(100, currentProgress + step);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setInitialLoading(false);
          }, 650);
        }, 150);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);

  // Smooth route transition when switching between pages
  useEffect(() => {
    if (!initialLoading) {
      setRouteTransitioning(true);
      const timer = setTimeout(() => {
        setRouteTransitioning(false);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [pathname, initialLoading]);

  return (
    <>
      {/* --- Fullscreen Initial Refresh Loading Screen --- */}
      {initialLoading && (
        <div
          id="hirelinkx-loader"
          aria-hidden={!initialLoading}
          className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#071f3d] transition-all duration-700 ease-out select-none ${isFadingOut
              ? 'opacity-0 pointer-events-none scale-105'
              : 'opacity-100 pointer-events-auto scale-100'
            }`}
        >
          {/* Ambient Glowing Blobs */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-sky-500/15 blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute w-[350px] h-[350px] rounded-full bg-blue-600/20 blur-[130px] pointer-events-none" />

          {/* Low-Poly Facet SVG Backdrop */}
          <svg
            className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-20"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <polygon points="540,-20 680,-20 610,150" fill="#4ba3e3" />
            <polygon points="-50,0 350,0 120,400 -50,300" fill="#0c2f57" />
            <polygon points="1200,0 1500,0 1440,380 1150,220" fill="#0a2a50" />
            <polygon points="1120,680 1350,880 1020,950" fill="#3c8bc2" />
          </svg>

          {/* Center Brand Container */}
          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {/* Logo with rotating ambient gradient ring */}
            <div className="relative mb-6">
              {/* Outer Glowing Gradient Ring */}
              <div className="absolute -inset-3 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-sky-400 via-[#2373F4] to-cyan-300 opacity-70 blur-md animate-spin [animation-duration:4s]" />

              {/* Logo Frame */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-[#041528] border-2 border-white/20 p-2 shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex items-center justify-center">
                <Image
                  src="/HireLinkx_Logo.png"
                  alt="HireLinkx Logo"
                  width={80}
                  height={80}
                  priority
                  unoptimized
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Brand Title */}
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-1">
              HireLinkx Solutions
            </h1>
            <p className="text-xs sm:text-sm text-sky-200/80 font-medium tracking-wide mb-8">
              Transparency · Innovation · Collaboration
            </p>

            {/* Sleek Progress Bar */}
            {/* <div className="w-64 sm:w-72 h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 backdrop-blur-md border border-white/10 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-sky-400 via-[#2373F4] to-cyan-300 rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(35,115,244,0.9)]"
                style={{ width: `${progress}%` }}
              />
            </div> */}

            {/* Progress Percentage Counter */}
            {/* <div className="mt-3 flex items-center justify-between w-64 sm:w-72 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                Loading Experience
              </span>
              <span className="text-sky-300 font-semibold">{progress}%</span>
            </div> */}
          </div>
        </div>
      )}

      {/* --- High-Velocity Top Bar for Route Switching --- */}
      {routeTransitioning && (
        <div
          className="fixed top-0 left-0 right-0 h-[3px] z-[99998] pointer-events-none"
          aria-hidden="true"
        >
          <div className="h-full bg-gradient-to-r from-sky-400 via-[#2373F4] to-cyan-300 shadow-[0_0_16px_rgba(56,189,248,0.9)] animate-pulse" />
        </div>
      )}
    </>
  );
};
