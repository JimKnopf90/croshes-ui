import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import React, { useId } from 'react'

export interface SearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  /** Unsichtbares Label für Screenreader. Default: „Suche". */
  label?: string
  disabled?: boolean
  autoFocus?: boolean
  className?: string
}

/** Suchfeld (rounded-full) mit Lupe und Clear-Button, sobald ein Wert eingegeben ist. */
export const Search = ({
  value,
  onChange,
  placeholder,
  label = 'Suche',
  disabled = false,
  autoFocus = false,
  className,
}: SearchProps) => {
  const id = useId()
  return (
    <div className={clsx(className, 'relative text-gray-600 dark:text-white')}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400 dark:text-white/50" />
      <input
        type="search"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        className={clsx(
          'w-full rounded-full border py-2 pl-10 pr-10 text-sm shadow-sm transition',
          'border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-white/40',
          'focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary',
          'disabled:cursor-not-allowed disabled:opacity-50',
          '[&::-webkit-search-cancel-button]:hidden'
        )}
      />
      {value && !disabled && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none dark:text-white/50 dark:hover:text-white"
        >
          <span className="sr-only">Suche zurücksetzen</span>
          <XMarkIcon className="size-4" />
        </button>
      )}
    </div>
  )
}
