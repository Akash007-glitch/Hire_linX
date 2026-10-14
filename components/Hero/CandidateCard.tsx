'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { CandidateReview } from './types';

interface CandidateCardProps {
  review: CandidateReview;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({ review }) => {
  const { name, roleOrStatus, rating, avatar, shapeVariant, cardLayout } = review;

  // Clip path class according to shapeVariant
  const getClipClass = () => {
    switch (shapeVariant) {
      case 'cut-br':
        return 'card-cut-br';
      case 'cut-tl':
        return 'card-cut-tl';
      case 'cut-tr':
        return 'card-cut-tr';
      default:
        return 'rounded-2xl';
    }
  };

  const isVertical = cardLayout === 'vertical';

  return (
    <div
      className={`transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] filter-card-shadow cursor-pointer select-none`}
    >
      <div
        className={`bg-white text-slate-800 ${getClipClass()} p-5 sm:p-6 transition-all duration-200 border border-slate-100/60 ${
          isVertical
            ? 'flex flex-col items-center text-center w-[165px] sm:w-[185px] md:w-[195px] pt-7 pb-8'
            : 'flex items-center gap-4 w-[235px] sm:w-[260px] md:w-[275px] py-4 px-5'
        }`}
      >
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 ring-sky-100 bg-sky-50 shadow-inner flex items-center justify-center">
            {avatar.startsWith('http') || avatar.startsWith('/') ? (
              <Image
                src={avatar}
                alt={name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
                unoptimized
              />
            ) : (
              // Inline SVG avatar representation
              <div
                className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-sky-400 to-blue-500 text-white font-semibold text-lg"
                dangerouslySetInnerHTML={{ __html: avatar }}
              />
            )}
          </div>
        </div>

        {/* Details */}
        <div
          className={`${
            isVertical ? 'flex flex-col items-center mt-3 w-full' : 'flex flex-col items-start min-w-0'
          }`}
        >
          {/* Star ratings */}
          <div className="flex items-center gap-0.5 text-amber-400 mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200 fill-slate-200'
                }`}
              />
            ))}
          </div>

          {/* Name */}
          <h3 className="font-bold text-slate-900 text-base sm:text-lg tracking-tight leading-tight truncate w-full">
            {name}
          </h3>

          {/* Role or Status */}
          <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5 capitalize">
            {roleOrStatus}
          </p>
        </div>
      </div>
    </div>
  );
};
