'use client';

import React from 'react';
import { Award } from 'lucide-react';

interface ValueCard {
  number: string;
  title: string;
  highlight: string;
  description: string;
  bulletPoints: string[];
}

const values: ValueCard[] = [
  {
    number: '01',
    title: 'Radical Transparency',
    highlight: 'No hidden agendas or unsaid expectations.',
    description:
      'We believe trust is forged through absolute clarity. We openly disclose salary realities, company stage considerations, role expectations, and candidate career goals from the very first conversation.',
    bulletPoints: [
      'Upfront compensation bandwidths',
      'Timely feedback after every interview round',
      'Zero misleading job descriptions',
    ],
  },
  {
    number: '02',
    title: 'Technological Innovation',
    highlight: 'AI-assisted precision with human judgment.',
    description:
      'We build and adopt smart recruitment systems that eliminate mundane screening drag, freeing our recruitment consultants to spend 100% of their time advising, evaluating, and connecting personally.',
    bulletPoints: [
      'Multi-dimensional skill mapping',
      'Automated candidate status updates',
      'Continuous market intelligence telemetry',
    ],
  },
  {
    number: '03',
    title: 'Collaborative Partnership',
    highlight: 'We act as an extension of your leadership team.',
    description:
      'We don’t treat hiring as transactional ticket-closing. We embed ourselves in your cultural ethos, understand your technical bottlenecks, and advocate for your mission as if it were our own.',
    bulletPoints: [
      'Dedicated domain recruitment partner',
      'Customized assessment rubrics',
      'Long-term post-offer engagement',
    ],
  },
  {
    number: '04',
    title: 'Candidate Centricity',
    highlight: 'Every applicant is a human career journey.',
    description:
      'A job change is one of life’s most pivotal moments. We coach candidates on interview presentation, negotiate respectfully, and provide constructive advice even when a specific role isn’t a fit.',
    bulletPoints: [
      'Zero candidate ghosting guarantee',
      'Constructive evaluation summaries',
      'Career advisory across multiple horizons',
    ],
  },
];

export const CoreValuesSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#05182e] text-white py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-sky-950/70">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-40 w-125 h-125 rounded-full bg-sky-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-150 h-150 rounded-full bg-blue-600/15 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 backdrop-blur-md mb-4">
            {/* <span className="w-1.5 h-1.5 rounded-full bg-sky-400" /> */}
            <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
              Our Core DNA
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Values That Anchor Every Decision We Make
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            These four non-negotiable pillars define how we communicate with candidates, partner with clients,
            and hold ourselves accountable every single day.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((val) => (
            <div
              key={val.number}
              className="card-cut-br bg-white/5 border border-white/10 hover:border-sky-400/50 hover:bg-white/8 p-8 sm:p-10 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-mono font-extrabold text-sky-400/80 group-hover:text-sky-300 transition-colors">
                    {val.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-300 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  {val.title}
                </h3>
                <p className="text-sky-200 text-sm sm:text-base font-medium mb-4">
                  {val.highlight}
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {val.description}
                </p>
              </div>

              <div className="border-t border-white/10 pt-5 space-y-2.5">
                {val.bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    {/* <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                    <span>{point}</span> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
