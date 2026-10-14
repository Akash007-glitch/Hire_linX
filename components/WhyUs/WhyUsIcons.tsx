import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * 1. Impressive Success Rate:
 * Eye with center dot + ascending bar chart with upward trendline
 */
export const SuccessRateIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Eye / Vision Icon (Top-Left) */}
    <ellipse cx="20" cy="17" rx="8" ry="4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="20" cy="17" r="2.2" fill="currentColor" />
    <circle cx="23.5" cy="15.5" r="0.8" fill="white" />
    
    {/* Ascending Trend Line */}
    <path
      d="M13 28L21 23L29 26L35 18"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="13" cy="28" r="1.5" fill="currentColor" />
    <circle cx="21" cy="23" r="1.5" fill="currentColor" />
    <circle cx="29" cy="26" r="1.5" fill="currentColor" />
    <circle cx="35" cy="18" r="1.8" fill="currentColor" />

    {/* Baseline */}
    <path d="M12 36H36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

    {/* Bar 1 */}
    <rect x="14.5" y="29.5" width="3.5" height="6.5" rx="1" fill="currentColor" />
    {/* Bar 2 */}
    <rect x="22" y="25" width="3.5" height="11" rx="1" fill="currentColor" />
    {/* Bar 3 */}
    <rect x="29.5" y="27" width="3.5" height="9" rx="1" fill="currentColor" />
  </svg>
);

/**
 * 2. Quality-centric Approach:
 * Rosette Ribbon Badge with center checkmark & hanging ribbon tails
 */
export const QualityCentricIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Ribbon tails */}
    <path
      d="M18.5 28L15 38L21 35.5L24 38L24 29"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <path
      d="M29.5 28L33 38L27 35.5L24 38L24 29"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.2"
    />

    {/* Outer Rosette Circle */}
    <circle cx="24" cy="20" r="11" stroke="currentColor" strokeWidth="2.2" />

    {/* Scalloped decorative dots / ring */}
    <circle cx="24" cy="20" r="8.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />

    {/* Central Verified Checkmark */}
    <path
      d="M19.5 20.2L22.5 23.2L28.5 16.8"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * 3. Supportive Partnership:
 * Clasping Hands in Partnership with celebratory sparkle stars
 */
export const SupportivePartnershipIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Top Sparkles */}
    <path d="M24 10V13M24 10L25 11.5M24 10L23 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M17 14L19 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M31 14L29 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

    {/* Clasping Hand Left */}
    <path
      d="M13 32L17.5 24.5C18.5 22.8 20.7 22.2 22.4 23.2L24 24.2C25.5 25.1 27.5 24.8 28.5 23.5L30 21.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Clasping Hand Right */}
    <path
      d="M35 32L30.5 24.5C29.5 22.8 27.3 22.2 25.6 23.2L24 24.2"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Handshake Fingers & Palm Interlock */}
    <path
      d="M20 28.5L24 32.5L28 28.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Cuffs */}
    <path d="M11 31L16 35" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M37 31L32 35" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

/**
 * 4. Tech-Forward Strategy:
 * Tech Monitor / Screen with chip & keyboard base
 */
export const TechForwardIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Monitor Screen Frame */}
    <rect x="12" y="13" width="24" height="16" rx="2.5" stroke="currentColor" strokeWidth="2.2" />

    {/* Screen Content: Tech / Circuit Nodes */}
    <path d="M16 18H20M24 18H32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="22" cy="18" r="1.5" fill="currentColor" />
    
    <path d="M16 22H24M28 22H32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="26" cy="22" r="1.5" fill="currentColor" />

    {/* Keyboard / Computer Base */}
    <path d="M10 33H38L35 30H13L10 33Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" />
    
    {/* Key Grid Texture */}
    <line x1="16" y1="31.5" x2="32" y2="31.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
  </svg>
);
