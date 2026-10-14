'use client';

import React from 'react';

const clientFeatures = [
  {
    title: 'Recruitment Solutions',
    description:
      'We help businesses identify and recruit suitable candidates based on their hiring requirements, qualifications, and organizational needs.',
  },
  {
    title: 'Talent Acquisition',
    description:
      'From candidate sourcing to screening and shortlisting, we support businesses throughout the recruitment process.',
  },
  {
    title: 'HR & Payroll Support',
    description:
      'We provide HR administration and payroll management services to help businesses manage essential workforce operations.',
  },
];

export const ForClientsCard: React.FC = () => {
  return (
    <div className="relative bg-[#07284f] text-white p-6 sm:p-10 lg:p-14 pt-12 sm:pt-14 lg:pt-14 pl-6 sm:pl-10 lg:pl-14 flex flex-col justify-between h-full">
      {/* Heading */}
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-8 sm:mb-12">
        For Clients
      </h3>

      {/* Features List */}
      <div className="space-y-8 sm:space-y-10">
        {clientFeatures.map((item, index) => (
          <div key={index} className="space-y-2">
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {item.title}
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
