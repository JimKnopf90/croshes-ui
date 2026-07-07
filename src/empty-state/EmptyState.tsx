import React from 'react';

export interface EmptyStateProps {
  /** Icon-Komponente, z.B. aus @heroicons/react/24/outline */
  icon?: React.ComponentType<{ className?: string }>;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Optionale Aktion (z.B. "Ersten Eintrag erstellen"-Button) */
  action?: React.ReactNode;
}

/** Einheitlicher leerer Zustand für Listen und Tabs (zentriertes Icon + Titel + Beschreibung). */
export const EmptyState = ({ icon: Icon, title, description, action }: EmptyStateProps) => (
  <div className="flex flex-col items-center justify-center py-12 text-center">
    {Icon && (
      <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-gray-400" />
      </div>
    )}
    <h3 className="text-sm font-medium text-gray-900 dark:text-white">{title}</h3>
    {description && (
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 max-w-md">{description}</p>
    )}
    {action && <div className="mt-4">{action}</div>}
  </div>
);
