import React from 'react';

export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /** "between" (Listen-Standard) oder "center" (z.B. Bewertungen). */
  align?: 'between' | 'center';
  /** Beschriftung des Zurück-Buttons. */
  previousLabel?: string;
  /** Beschriftung des Weiter-Buttons. */
  nextLabel?: string;
}

/** Einheitliche Zurück/Weiter-Pagination für Listen (0-basierte Seiten). */
export const Pagination = ({
  page,
  totalPages,
  onPageChange,
  align = 'between',
  previousLabel = 'Zurück',
  nextLabel = 'Weiter',
}: PaginationProps) => {
  if (totalPages <= 1) return null;
  const buttonClass =
    'px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-600 disabled:opacity-50 disabled:cursor-not-allowed';
  return (
    <div className={`mt-4 flex items-center ${align === 'center' ? 'justify-center gap-2' : 'justify-between'}`}>
      <button onClick={() => onPageChange(Math.max(0, page - 1))} disabled={page === 0} className={buttonClass}>
        {previousLabel}
      </button>
      <span className="text-sm text-gray-700 dark:text-gray-300">
        {page + 1} / {totalPages}
      </span>
      <button
        onClick={() => onPageChange(Math.min(totalPages - 1, page + 1))}
        disabled={page >= totalPages - 1}
        className={buttonClass}
      >
        {nextLabel}
      </button>
    </div>
  );
};
