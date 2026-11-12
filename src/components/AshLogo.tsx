import React from 'react';

interface AshLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  monochrome?: boolean;
}

export const AshLogo: React.FC<AshLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  monochrome = false,
}) => {
  // Replicating the "ASH" Autoservice Hazenberg emblem seen embroidered on the mechanic's chest:
  // Sleek, bold angular monogram where 'A', 'S', 'H' interlock with dynamic automotive speed lines,
  // accompanied by "AUTOSERVICE HAZENBERG".

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
  };

  const primaryColor = monochrome ? 'currentColor' : '#f59e0b'; // warm amber gold / automotive orange
  const accentColor = monochrome ? 'currentColor' : '#38bdf8'; // precision blue
  const silverColor = monochrome ? 'currentColor' : '#e2e8f0'; // brushed chrome

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} ${className}`}
        aria-label="ASH Logo Icon"
      >
        <defs>
          <linearGradient id="ashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#090d16" />
          </linearGradient>
        </defs>

        {/* Shield background */}
        <polygon
          points="50,4 92,18 92,58 50,96 8,58 8,18"
          fill="url(#shieldGrad)"
          stroke="url(#ashGrad)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Inner border line */}
        <polygon
          points="50,11 86,23 86,55 50,88 14,55 14,23"
          fill="none"
          stroke="#334155"
          strokeWidth="1.5"
        />

        {/* Monogram A S H */}
        <g id="ASH-monogram">
          {/* 'A' */}
          <path
            d="M 22 68 L 32 30 L 40 30 L 49 68 L 41.5 68 L 39 56 L 30 56 L 28 68 Z M 31.8 48 L 37.5 48 L 34.8 36 Z"
            fill="url(#silverGrad)"
          />
          {/* 'S' stylized connected */}
          <path
            d="M 45 42 C 45 34 50 30 57 30 C 64 30 67 34 67 38 L 59.5 39 C 59.5 36.5 58 35 56.5 35 C 55 35 53.5 36 53.5 37.5 C 53.5 40 67 43 67 52 C 67 61 61 68 53 68 C 45 68 42 62 42 56 L 49.5 55 C 49.5 58 51 61.5 53.5 61.5 C 55.5 61.5 58 60 58 58 C 58 55 45 52 45 42 Z"
            fill="url(#ashGrad)"
          />
          {/* 'H' */}
          <path
            d="M 64 30 L 71 30 L 71 45 L 78 45 L 78 30 L 85 30 L 85 68 L 78 68 L 78 52 L 71 52 L 71 68 L 64 68 Z"
            fill="url(#silverGrad)"
          />
        </g>

        {/* Dynamic Speed Slash */}
        <path
          d="M 16 74 L 84 74"
          stroke="url(#ashGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="50" cy="74" r="3" fill="#38bdf8" />
      </svg>
    );
  }

  const textClasses = {
    sm: {
      title: 'text-sm sm:text-base font-black',
      sub: 'text-[9px] font-semibold',
    },
    md: {
      title: 'text-base sm:text-lg font-black',
      sub: 'text-[10px] font-semibold',
    },
    lg: {
      title: 'text-lg sm:text-xl font-black',
      sub: 'text-xs font-semibold',
    },
    xl: {
      title: 'text-2xl sm:text-3xl font-black',
      sub: 'text-sm font-semibold',
    },
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Emblem Icon */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} w-auto aspect-square shrink-0`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ashGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="silverGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        {/* Automotive Hexagonal Shield */}
        <polygon
          points="50,3 93,18 93,60 50,97 7,60 7,18"
          fill="url(#bgGrad)"
          stroke="url(#ashGrad2)"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Carbon style subtle inner hex */}
        <polygon
          points="50,11 86,23 86,56 50,89 14,56 14,23"
          fill="none"
          stroke="#334155"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />

        {/* Styled Monogram A S H */}
        <g>
          {/* A */}
          <path
            d="M 20 66 L 31 28 L 39 28 L 50 66 L 42 66 L 39.5 54 L 30 54 L 28 66 Z M 31.8 46 L 37.8 46 L 34.8 35 Z"
            fill="url(#silverGrad2)"
          />
          {/* S */}
          <path
            d="M 44 42 C 44 33 50 28 58 28 C 65 28 69 33 69 38 L 61.5 39 C 61.5 36 59.8 34.5 57.8 34.5 C 55.5 34.5 54 36 54 38 C 54 41 68 43.5 68 53 C 68 62 62 68 53.5 68 C 44.5 68 41 62 41 55 L 48.5 54 C 48.5 58 50.8 61.5 53.8 61.5 C 56.5 61.5 59.5 59.8 59.5 57 C 59.5 53.5 44 51 44 42 Z"
            fill="url(#ashGrad2)"
          />
          {/* H */}
          <path
            d="M 66 28 L 73 28 L 73 44 L 80 44 L 80 28 L 87 28 L 87 66 L 80 66 L 80 51 L 73 51 L 73 66 L 66 66 Z"
            fill="url(#silverGrad2)"
          />
        </g>

        {/* Speed underline */}
        <path
          d="M 18 73 L 82 73"
          stroke="url(#ashGrad2)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="50" cy="73" r="3" fill="#38bdf8" />
      </svg>

      {/* Brand Text */}
      <div className="flex flex-col whitespace-nowrap">
        <div className="flex items-center gap-1.5">
          <span className={`${textClasses[size].title} tracking-tight text-white uppercase font-sans`}>
            Autoservice
          </span>
          <span className={`${textClasses[size].title} tracking-tight text-amber-500 uppercase font-sans`}>
            Hazenberg
          </span>
        </div>
        <div className={`flex items-center gap-1.5 ${textClasses[size].sub} tracking-wider text-slate-400 uppercase`}>
          <span className="text-slate-300 font-bold">ASH</span>
          <span className="w-1 h-1 rounded-full bg-amber-500"></span>
          <span>Grootegast</span>
        </div>
      </div>
    </div>
  );
};
