'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Leader {
  name: string;
  role: string;
  image: string;
  tags: string[];
}

const leaders: Leader[] = [
  {
    name: 'Gobinda Mazumder',
    role: 'CEO and founder/managing director',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    tags: ['Executive Search', 'Org Strategy', 'Fintech'],
  },
  {
    name: 'Sangeeta Roy',
    role: 'Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    tags: ['Candidate Experience', 'Diversity & Inclusion', 'Culture'],
  },
  // {
  //   name: 'Vikram Sengupta',
  //   role: 'Head of Enterprise & GCC Solutions',
  //   image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  //   tags: ['GCC Scaling', 'Enterprise Tech', 'Pod Staffing'],
  // },
  // {
  //   name: 'Neha Kapoor',
  //   role: 'VP of Talent Intelligence & AI',
  //
  //   image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  //   tags: ['Talent Telemetry', 'Skills Mapping', 'Analytics'],
  // },
];

export const LeadershipSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Leadership & Advisors
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            The Minds Driving HireLinkx
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Our leadership team blends decades of deep human talent curation with technological expertise
            to redefine standard staffing into high-impact strategic advisory.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="card-cut-br bg-[#edf6fc]/60 border border-sky-100/90 rounded-2xl overflow-hidden hover:shadow-[0_12px_35px_rgba(7,31,61,0.08)] hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo with Chamfered cut & subtle zoom */}
                <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-slate-200">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071f3d]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {leader.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-sky-600 mt-0.5 mb-3">
                    {leader.role}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="p-6 pt-0 border-t border-sky-100/60 flex flex-wrap gap-1.5 mt-4">
                {leader.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium text-slate-600 bg-white border border-slate-200/80 px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
