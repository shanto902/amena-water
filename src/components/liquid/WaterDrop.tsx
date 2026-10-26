import React from "react";

export function WaterDrop({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center border-2 border-stone-800 bg-[#fdfbf7] p-2 shadow-[2px_2px_0px_#1c1917] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.7}
        height={size * 0.7}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1c1917"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        <path d="M12 12a3 3 0 0 0 3-3" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

