import React from 'react';

export interface CardTitleProps {
  children: React.ReactNode;
  title: string;
}

/** Karte mit abgesetzter Titelzeile und darunterliegendem Inhaltsbereich. */
export function CardTitle({ children, title }: CardTitleProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow border dark:border-white/5 dark:bg-zinc-900">
      <div className="px-4 py-5 sm:px-6 bg-gray-50  dark:bg-zinc-800/10 text-base font-semibold leading-6 text-gray-900 dark:text-white">
        {title}
      </div>
      <div className="border-t dark:border-t-white/5 px-4 py-5 sm:p-6">
        {children}
      </div>
    </div>
  )
}
