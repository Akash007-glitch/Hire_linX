'use client';

import React from 'react';
import { Target, BadgeCheck, Handshake, Briefcase } from 'lucide-react';

interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const whyUsItems: WhyUsItem[] = [
  {
    id: 'tailored-solutions',
    title: 'Tailored Recruitment Solutions',
    description:
      'We understand that every business has unique hiring needs. We help identify suitable candidates based on your requirements.',
    icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-2" />,
  },
  {
    id: 'quality-focused',
    title: 'Quality-Focused Hiring',
    description:
      'We focus on candidate qualifications, skills, and suitability to help businesses find the right talent.',
    icon: <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-2" />,
  },
  {
    id: 'client-support',
    title: 'Dedicated Client Support',
    description:
      'We work closely with employers to understand their requirements and provide support throughout the recruitment process.',
    icon: <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-2" />,
  },
  {
    id: 'hr-services',
    title: 'Comprehensive HR Services',
    description:
      'From talent acquisition to payroll management and HR administration, we support businesses with their workforce needs.',
    icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-2" />,
  },
];

export const WhyUsFeatures: React.FC = () => {
  return (
    <div className="flex flex-col justify-center">
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827] mb-8 sm:mb-10">
        Why Choose Us?
      </h2>

      {/* Feature Items List */}
      <div className="space-y-6 sm:space-y-8">
        {whyUsItems.map((item) => (
          <div
            key={item.id}
            className="group flex items-start gap-4 sm:gap-5 transition-transform duration-200 hover:translate-x-1"
          >
            {/* Navy Circular Icon Container */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0B2545] flex items-center justify-center shrink-0 shadow-md shadow-[#0B2545]/20 group-hover:bg-[#0e2f57] transition-colors duration-200">
              {item.icon}
            </div>

            {/* Feature Content */}
            <div className="pt-0.5">
              <h3 className="text-lg sm:text-[19px] font-bold text-[#111827] tracking-tight leading-snug group-hover:text-[#18A999] transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-[#475569] text-sm sm:text-[14.5px] leading-relaxed mt-1 max-w-lg">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
