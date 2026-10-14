'use client';

import React from 'react';

const candidateFeatures = [
  {
    title: 'Explore Career Opportunities',
    description:
      'Discover employment opportunities and connect with potential employers through our recruitment services.',
  },
  {
    title: 'Career Support',
    description:
      'We help candidates navigate the recruitment process, from submitting their profiles to preparing for interviews when applicable.',
  },
  {
    title: 'A Professional Hiring Experience',
    description:
      'We aim to make the recruitment process clear, professional, and respectful while handling candidate information responsibly.',
  },
];

export const ForCandidatesCard: React.FC = () => {
  return (
    <div className="relative bg-[#5eafe6] text-white p-6 sm:p-10 lg:p-14 pb-12 sm:pt-14 lg:pb-14 pr-6 sm:pr-10 lg:pr-14 flex flex-col justify-between h-full text-right">
      {/* Heading */}
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-8 sm:mb-12">
        For Candidates
      </h3>

      {/* Features List */}
      <div className="space-y-8 sm:space-y-10">
        {candidateFeatures.map((item, index) => (
          <div key={index} className="space-y-2">
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {item.title}
            </h4>
            <p className="text-white/95 text-sm sm:text-base leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
