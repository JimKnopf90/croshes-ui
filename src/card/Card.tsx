import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  /** Optionale Zusatzklassen. */
  className?: string;
}

/** Einfache Inhalts-Karte mit Rahmen, Schatten und Dark-Mode-Hintergrund. */
export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow px-5 py-8 text-light min-h-full dark:bg-zinc-800/10 dark:border-zinc-800 ${className}`.trim()}>
      {children}
    </div>
  );
};
