'use client';

import React from 'react';
import { CandidateCard } from './CandidateCard';
import { CandidateReview } from './types';

const candidateReviews: CandidateReview[] = [
  {
    id: 'john-deo',
    name: 'John Deo',
    roleOrStatus: 'Applied',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
    shapeVariant: 'cut-br',
    cardLayout: 'vertical',
    positionClass: 'lg:top-0 lg:left-8',
    animationDelay: '0s',
  },
  {
    id: 'devid-smith',
    name: 'Devid Smith',
    roleOrStatus: 'Review',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
    shapeVariant: 'cut-br',
    cardLayout: 'horizontal',
    positionClass: 'lg:top-14 lg:left-64',
    animationDelay: '0.6s',
  },
  {
    id: 'sunny-roy',
    name: 'Sunny Roy',
    roleOrStatus: 'Review',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80',
    shapeVariant: 'cut-tl',
    cardLayout: 'horizontal',
    positionClass: 'lg:top-72 lg:left-0',
    animationDelay: '1.2s',
  },
  {
    id: 'mony-roy',
    name: 'Mony Roy',
    roleOrStatus: 'Hired',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80',
    shapeVariant: 'cut-br',
    cardLayout: 'vertical',
    positionClass: 'lg:top-56 lg:left-72',
    animationDelay: '1.8s',
  },
];

export const HeroCards: React.FC = () => {
  return (
    <div className="relative w-full max-w-[580px] mx-auto lg:mx-0 min-h-[360px] h-auto lg:h-[500px]">
      {/* Subtle background glow behind cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Desktop / Large screen staggered positioning */}
      <div className="hidden lg:block relative w-full h-full">
        {candidateReviews.map((review, index) => {
          const animClass =
            index % 2 === 0 ? 'animate-float-slow' : 'animate-float-delayed';
          return (
            <div
              key={review.id}
              className={`absolute ${review.positionClass} ${animClass}`}
              style={{ animationDelay: review.animationDelay }}
            >
              <CandidateCard review={review} />
            </div>
          );
        })}
      </div>

      {/* Mobile & Tablet responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden place-items-center py-4 w-full">
        {candidateReviews.map((review) => (
          <div key={review.id} className="w-full flex justify-center">
            <CandidateCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};
