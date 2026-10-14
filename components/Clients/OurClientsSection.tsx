'use client';

import React from 'react';
import {
  YourLogo,
  CircleLogo,
  TrevaLogo,
  DummyUpperLogo,
  DummyLowerLogo,
  // SikkaLogo,
  // GemstoneLogo,
  // WormifyLogo,
  // MusikalLogo,
  // RedgolaLogo,
} from './ClientLogos';

const clientLogos = [
  { id: 'yourlogo', component: <YourLogo /> },
  { id: 'circle', component: <CircleLogo /> },
  { id: 'treva', component: <TrevaLogo /> },
  { id: 'dummy-upper', component: <DummyUpperLogo /> },
  { id: 'dummy-lower', component: <DummyLowerLogo /> },
  // { id: 'sikka', component: <SikkaLogo /> },
  // { id: 'gemstone', component: <GemstoneLogo /> },
  // { id: 'wormify', component: <WormifyLogo /> },
  // { id: 'musikal', component: <MusikalLogo /> },
  // { id: 'redgola', component: <RedgolaLogo /> },
];

export const OurClientsSection: React.FC = () => {
  return (
    <div className="w-full bg-[#edf6fc] py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 text-center mb-10 sm:mb-14">
          Our Partners
        </h2>

        {/* 10 Logo Cards Grid: 2 rows of 5 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {clientLogos.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-[0_2px_10px_rgba(7,31,61,0.05)] hover:shadow-[0_8px_20px_rgba(7,31,61,0.12)] border border-slate-100/90 h-20 sm:h-24 lg:h-28 flex items-center justify-center p-4 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {client.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
