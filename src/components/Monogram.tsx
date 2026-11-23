import React from "react";

interface MonogramProps {
  className?: string;
}

// Personal "SB" mark used as the site's brand icon.
export default function Monogram({ className = "w-5 h-5" }: MonogramProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="currentColor" />
      <text
        x="32"
        y="43"
        textAnchor="middle"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize="30"
        fontWeight="700"
        letterSpacing="-1.5"
        fill="#ffffff"
      >
        SB
      </text>
    </svg>
  );
}
