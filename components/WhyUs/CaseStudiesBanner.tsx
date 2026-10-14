'use client';

import React from 'react';

interface CaseStudyStat {
  value: string;
  label: string;
}

const stats: CaseStudyStat[] = [
  {
    value: '25+',
    label: 'Category',
  },
  {
    value: '50K+',
    label: 'Recruitment Job',
  },
  {
    value: '10M+',
    label: 'Delivered Job',
  },
];

export const CaseStudiesBanner: React.FC = () => {
  return (
    <div className="w-full bg-[#edf6fc] py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 border-t border-sky-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 text-center mb-12 sm:mb-16">
          Case Studies
        </h2>

        {/* 3 Metric Columns with desktop vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-sky-200/80">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="py-6 md:py-2 px-4 sm:px-8 text-center flex flex-col items-center justify-center transition-transform duration-200 hover:scale-[1.03]"
            >
              <span className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-slate-900 leading-none">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base font-semibold text-slate-800 mt-3 tracking-normal">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
