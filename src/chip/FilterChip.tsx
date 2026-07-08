import * as Headless from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import React from 'react'

export type FilterChipSize = 'sm' | 'md'

const sizeClasses: Record<FilterChipSize, string> = {
  sm: 'gap-1.5 px-3 py-1 text-xs [&>[data-slot=icon]]:size-3.5',
  md: 'min-h-9 gap-2 px-4 py-1.5 text-sm [&>[data-slot=icon]]:size-4',
}

export interface FilterChipProps {
  selected: boolean
  onChange: (selected: boolean) => void
  /** Sichtbares Label des Chips. */
  children: React.ReactNode
  /** Eigenes führendes Icon (mit `data-slot="icon"`); ohne `icon` erscheint bei Auswahl ein Häkchen. */
  icon?: React.ReactNode
  /** Blendet das automatische Häkchen bei Auswahl aus (nur ohne `icon` relevant). */
  showCheck?: boolean
  size?: FilterChipSize
  disabled?: boolean
  className?: string
}

/** Toggle-Pill für Filterzustände (z.B. „Externe Tiere", Altersgruppen-Schnellauswahl). */
export const FilterChip = ({
  selected,
  onChange,
  children,
  icon,
  showCheck = true,
  size = 'md',
  disabled = false,
  className,
}: FilterChipProps) => (
  <Headless.Button
    type="button"
    disabled={disabled}
    aria-pressed={selected}
    onClick={() => onChange(!selected)}
    className={clsx(
      className,
      'inline-flex items-center rounded-full border font-medium transition-all',
      'focus:outline-none data-[focus]:ring-2 data-[focus]:ring-primary data-[focus]:ring-offset-2 dark:data-[focus]:ring-offset-zinc-900',
      'data-[disabled]:opacity-50',
      sizeClasses[size],
      selected
        ? 'border-primary/40 bg-primary/5 text-gray-900 dark:bg-primary/10 dark:text-white'
        : 'border-gray-300 bg-white text-gray-600 data-[hover]:border-primary dark:border-zinc-600 dark:bg-zinc-800 dark:text-gray-300 dark:data-[hover]:border-primary'
    )}
  >
    {icon ?? (selected && showCheck && <CheckIcon data-slot="icon" className="text-primary" aria-hidden="true" />)}
    {children}
  </Headless.Button>
)
