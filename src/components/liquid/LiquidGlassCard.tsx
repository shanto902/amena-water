import React from "react";

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hoverEffect?: boolean;
  as?: React.ElementType;
}

export function LiquidGlassCard({
  children,
  className = "",
  hoverEffect = true,
  as: Component = "div",
}: LiquidGlassCardProps) {
  return (
    <Component
      className={`
        relative p-6 sm:p-8
        ${hoverEffect ? "newspaper-card" : "newspaper-card-flat"}
        ${className}
      `}
    >
      {children}
    </Component>
  );
}

export const NewspaperCard = LiquidGlassCard;

