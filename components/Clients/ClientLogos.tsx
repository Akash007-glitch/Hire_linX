import React from 'react';
import Image from 'next/image';

// 1. Paytm Logo
export const YourLogo: React.FC = () => (
  <div className="flex items-center justify-center select-none w-full h-full">
    <Image
      src="/paytm.png"
      alt="Paytm Logo"
      width={96}
      height={64}
      className="w-20 sm:w-24 h-auto max-h-14 sm:max-h-16 object-contain"
    />
  </div>
);

// 2. Zepto Logo
export const CircleLogo: React.FC = () => (
  <div className="flex items-center justify-center select-none w-full h-full">
    <Image
      src="/Zepto.png"
      alt="Zepto Logo"
      width={112}
      height={52}
      className="w-24 sm:w-28 h-auto max-h-11 sm:max-h-13 object-contain"
    />
  </div>
);

// 3. Swiggy Logo
export const TrevaLogo: React.FC = () => (
  <div className="flex items-center justify-center select-none w-full h-full">
    <Image
      src="/Swiggy.png"
      alt="Swiggy Logo"
      width={112}
      height={52}
      className="w-24 sm:w-28 h-auto max-h-11 sm:max-h-13 object-contain"
    />
  </div>
);

// 4. Blinkit Logo
export const DummyUpperLogo: React.FC = () => (
  <div className="flex items-center justify-center select-none w-full h-full">
    <Image
      src="/Blinkit.png"
      alt="Blinkit Logo"
      width={112}
      height={52}
      className="w-24 sm:w-28 h-auto max-h-11 sm:max-h-13 object-contain"
    />
  </div>
);

// 5. HDB Logo
export const DummyLowerLogo: React.FC = () => (
  <div className="flex items-center justify-center select-none w-full h-full">
    <Image
      src="/HDB.png"
      alt="HDB Logo"
      width={128}
      height={80}
      className="w-24 sm:w-28 lg:w-32 h-auto max-h-16 sm:max-h-20 object-contain scale-110 sm:scale-115"
    />
  </div>
);

// // 6. SIKKA (Cyan circle cross mark + uppercase bold)
// export const SikkaLogo: React.FC = () => (
//   <div className="flex items-center gap-2 select-none">
//     <div className="w-5 h-5 rounded-full bg-[#00bcd4] flex items-center justify-center text-white">
//       <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
//         <line x1="12" y1="5" x2="12" y2="19" />
//         <line x1="5" y1="12" x2="19" y2="12" />
//       </svg>
//     </div>
//     <span className="text-base sm:text-lg font-extrabold tracking-widest text-slate-900">
//       SIKKA
//     </span>
//   </div>
// );

// // 7. gemstone (Wireframe diamond + lowercase text)
// export const GemstoneLogo: React.FC = () => (
//   <div className="flex items-center gap-2 select-none">
//     <svg className="w-5 h-5 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M6 3h12l4 6-10 12L2 9z" />
//       <path d="M2 9h20" />
//       <path d="M12 21l-4-12" />
//       <path d="M12 21l4-12" />
//       <path d="M6 3l2 6" />
//       <path d="M18 3l-2 6" />
//     </svg>
//     <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
//       gemstone
//     </span>
//   </div>
// );

// // 8. WORMIFY (Wavy orange-red gradient 'W' / 'N' logo + bold text)
// export const WormifyLogo: React.FC = () => (
//   <div className="flex items-center gap-2 select-none">
//     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
//       <path
//         d="M5 19V7C5 5 7 5 8 7V17C8 19 10 19 11 17V7C11 5 13 5 14 7V17C14 19 16 19 17 17V5"
//         stroke="#E63946"
//         strokeWidth="3.2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//     <span className="text-base sm:text-lg font-black tracking-wide text-slate-900">
//       WORMIFY
//     </span>
//   </div>
// );

// // 9. MUSIKAL (Music notes + modern sans-serif)
// export const MusikalLogo: React.FC = () => (
//   <div className="flex items-center gap-2 select-none">
//     <svg className="w-5 h-5 text-[#4361EE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M9 18V5l12-2v13" />
//       <circle cx="6" cy="18" r="3" />
//       <circle cx="18" cy="16" r="3" />
//     </svg>
//     <span className="text-base sm:text-lg font-extrabold tracking-wider text-slate-900">
//       MUSIKAL
//     </span>
//   </div>
// );

// // 10. REDGOLA (Red sunburst / dot + bold dual-tone text)
// export const RedgolaLogo: React.FC = () => (
//   <div className="flex items-center gap-2 select-none">
//     <div className="relative w-4 h-4 rounded-full bg-[#E63946] flex items-center justify-center">
//       <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#E63946]/40 animate-ping" />
//     </div>
//     <span className="text-base sm:text-lg font-bold tracking-tight">
//       <span className="text-slate-400 font-semibold">RED</span>
//       <span className="text-slate-900 font-extrabold">GOLA</span>
//     </span>
//   </div>
// );
