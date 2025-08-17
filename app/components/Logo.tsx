'use client'

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 100, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left large leaf shape */}
      <path
        d="M15 25C15 25 25 15 35 20C45 25 50 35 48 45C46 55 35 65 25 60C15 55 15 25 15 25Z"
        fill="url(#greenGradient1)"
      />
      
      {/* Top right circle */}
      <circle
        cx="65"
        cy="30"
        r="8"
        fill="url(#greenGradient2)"
      />
      
      {/* Bottom right leaf shape */}
      <path
        d="M55 50C55 50 65 45 75 50C85 55 80 70 70 75C60 80 55 50 55 50Z"
        fill="url(#greenGradient3)"
      />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="greenGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2D5A27" />
          <stop offset="100%" stopColor="#4A7C59" />
        </linearGradient>
        <linearGradient id="greenGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B4332" />
          <stop offset="100%" stopColor="#40916C" />
        </linearGradient>
        <linearGradient id="greenGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2D5A27" />
          <stop offset="100%" stopColor="#6B8E23" />
        </linearGradient>
      </defs>
    </svg>
  );
} 