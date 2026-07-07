import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

export interface ComboboxProps<T> {
  className?: string
  placeholder?: string
  label?: string
  optional?: boolean
  required?: boolean
  autoFocus?: boolean
  immediate?: boolean
  value?: T | null
  displayValue?: (item: T | null) => string
  onChange?: (value: T | null) => void
  onInputChange?: (value: string) => void
  onClose?: () => void
  'aria-label'?: string
  children?: React.ReactNode
}

/** Autovervollständigungs-Feld (Headless UI Combobox) mit Label und Dropdown-Optionen. */
export function Combobox<T>({
  className,
  placeholder,
  label,
  optional,
  required,
  autoFocus,
  immediate = true,
  'aria-label': ariaLabel,
  children: options,
  value,
  displayValue,
  onChange,
  onInputChange,
  onClose,
}: ComboboxProps<T>) {
  return (
    <div className="flex flex-col gap-2.5">
      {label && (
        <label className="block text-sm/6 font-medium text-gray-900 dark:text-gray-300">
          {label}{' '}
          {optional && <span className="text-gray-400 text-xs">{`OPTIONAL`}</span>}
          {required && <span className="text-red-500 pl-0.5 relative -top-0.5">*</span>}
        </label>
      )}
      <Headless.Combobox value={value} onChange={onChange} onClose={onClose} immediate={immediate}>
        <div className="relative">
          <Headless.ComboboxInput
            autoFocus={autoFocus}
            aria-label={ariaLabel}
            displayValue={displayValue}
            onChange={e => onInputChange?.(e.target.value)}
            placeholder={placeholder}
            className={clsx([
              className,
              // Basic layout
              'relative block w-full appearance-none rounded-lg',
              // Vertical padding
              'py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',
              // Set minimum height
              'min-h-11 sm:min-h-9',
              // Horizontal padding
              'pl-[calc(theme(spacing[3.5])-1px)] pr-[calc(theme(spacing[3.5])-1px)] sm:pl-[calc(theme(spacing.3)-1px)] sm:pr-[calc(theme(spacing.3)-1px)]',
              // Typography
              'text-left text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText]',
              // Border
              'border border-zinc-950/10 hover:border-zinc-950/20 dark:border-white/10 dark:hover:border-white/20',
              // Background color
              'bg-transparent dark:bg-white/5',
              // Focus ring
              'focus:outline-none focus:ring-2 focus:ring-blue-500',
              // Disabled state
              'disabled:border-zinc-950/20 disabled:opacity-100 disabled:dark:border-white/15 disabled:dark:bg-white/[2.5%]',
            ])}
          />
          <Headless.ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <svg
              className="h-5 w-5 stroke-zinc-500 group-hover:stroke-zinc-700 sm:h-4 sm:w-4 dark:stroke-zinc-400 dark:group-hover:stroke-zinc-300 forced-colors:stroke-[CanvasText]"
              viewBox="0 0 16 16"
              aria-hidden="true"
              fill="none"
            >
              <path d="M5.75 10.75L8 13L10.25 10.75" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.25 5.25L8 3L5.75 5.25" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Headless.ComboboxButton>
        </div>
        <Headless.ComboboxOptions
          transition
          anchor="bottom start"
          className={clsx(
            'z-50',
            // Anchor positioning
            '[--anchor-gap:theme(spacing.2)] [--anchor-padding:theme(spacing.4)]',
            // Base styles
            'isolate w-[var(--input-width)] min-w-[calc(var(--button-width)+1.75rem)] select-none scroll-py-1 rounded-xl p-1',
            // Invisible border that is only visible in `forced-colors` mode for accessibility purposes
            'outline outline-1 outline-transparent focus:outline-none',
            // Handle scrolling when menu won't fit in viewport
            'overflow-y-auto overscroll-contain',
            // Popover background
            'bg-white/75 backdrop-blur-xl dark:bg-zinc-800/75',
            // Shadows
            'shadow-lg ring-1 ring-zinc-950/10 dark:ring-inset dark:ring-white/10',
            // Transitions
            'transition-opacity duration-100 ease-in data-[transition]:pointer-events-none data-[closed]:data-[leave]:opacity-0',
            // Max height
            'max-h-60'
          )}
        >
          {options}
        </Headless.ComboboxOptions>
      </Headless.Combobox>
    </div>
  )
}

export type ComboboxOptionProps<T> = { className?: string; children?: React.ReactNode } & Omit<
  Headless.ComboboxOptionProps<'div', T>,
  'as' | 'className'
>

/** Einzelne Option innerhalb der Combobox (mit Häkchen für den ausgewählten Eintrag). */
export function ComboboxOption<T>({
  children,
  className,
  ...props
}: ComboboxOptionProps<T>) {
  return (
    <Headless.ComboboxOption as="div" {...props}>
      {({ focus, selected }) => (
        <div
          className={clsx(
            // Basic layout
            'group/option grid cursor-pointer grid-cols-[theme(spacing.5),1fr] items-baseline gap-x-2 rounded-lg py-2.5 pl-2 pr-3.5 sm:grid-cols-[theme(spacing.4),1fr] sm:py-1.5 sm:pl-1.5 sm:pr-3',
            // Typography
            'text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText]',
            // Focus
            focus && 'bg-blue-500 text-white',
            // Forced colors mode
            'forced-color-adjust-none forced-colors:data-[focus]:bg-[Highlight] forced-colors:data-[focus]:text-[HighlightText]'
          )}
        >
          <svg
            className={clsx(
              'relative w-5 h-5 self-center stroke-current sm:w-5 sm:h-5',
              selected ? 'inline' : 'hidden'
            )}
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path d="M4 8.5l3 3L12 4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className={clsx(className, 'col-start-2 flex min-w-0 items-center')}>{children}</span>
        </div>
      )}
    </Headless.ComboboxOption>
  )
}

/** Beschriftung einer Combobox-Option. */
export function ComboboxLabel({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) {
  return <span {...props} className={clsx(className, 'ml-2.5 truncate first:ml-0 sm:ml-2 sm:first:ml-0')} />
}
