import React from 'react';

export interface BadgeConfig {
  /** Tailwind-Hintergrundklassen inkl. Dark-Variante, z.B. "bg-green-100 dark:bg-green-900/30" */
  bg: string;
  /** Tailwind-Textklassen inkl. Dark-Variante, z.B. "text-green-800 dark:text-green-300" */
  text: string;
  label: string;
}

export type BadgeSize = 'sm' | 'md';

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-sm',
};

export interface BadgeProps {
  config: BadgeConfig;
  size?: BadgeSize;
}

/**
 * Generisches Status-/Label-Badge (farbige Pill).
 * Domänen-Badges definieren ihre Farb-/Label-Maps selbst und rendern dieses Primitive.
 */
export const Badge = ({ config, size = 'sm' }: BadgeProps) => (
  <span
    className={`${sizeClasses[size]} font-medium rounded-full whitespace-nowrap ${config.bg} ${config.text}`}
  >
    {config.label}
  </span>
);
