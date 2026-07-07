import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import type { Locale } from 'date-fns'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'
import React from 'react'
import { DayPicker, getDefaultClassNames } from 'react-day-picker'

/**
 * Gemeinsame Hülle für DatePicker/DatePickerRange: Label + Popover-Trigger im Input-Look.
 * Konsumenten müssen global `react-day-picker/style.css` importieren.
 */
export const PickerShell = ({
  label,
  required = false,
  optional = false,
  disabled = false,
  displayValue,
  placeholder,
  className,
  children,
}: {
  label?: string
  required?: boolean
  optional?: boolean
  disabled?: boolean
  displayValue: string
  placeholder?: string
  className?: string
  children: (close: () => void) => React.ReactNode
}) => (
  <div className={className}>
    {label && (
      <label className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        {label}{' '}
        {optional && <span className="text-gray-400 text-xs">OPTIONAL</span>}
        {required && <span className="text-red-500 pl-0.5 relative -top-0.5">*</span>}
      </label>
    )}
    <Popover className={clsx('relative', label && 'mt-2')}>
      {({ close }) => (
        <>
          <PopoverButton disabled={disabled} className="w-full focus:outline-none group">
            <span
              data-slot="control"
              className={clsx(
                'relative block w-full',
                'before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow',
                'dark:before:hidden',
                'after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:group-data-[focus]:after:ring-2 sm:group-data-[focus]:after:ring-blue-500',
                disabled && 'opacity-50 before:bg-zinc-950/5 before:shadow-none'
              )}
            >
              <input
                value={displayValue}
                placeholder={placeholder}
                readOnly
                tabIndex={-1}
                disabled={disabled}
                className={clsx(
                  'relative block w-full appearance-none rounded-lg pr-10 pl-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:pl-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',
                  'text-left text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white',
                  'border border-zinc-950/10 hover:border-zinc-950/20 dark:border-white/10 dark:hover:border-white/20',
                  'bg-transparent dark:bg-white/5 focus:outline-none',
                  disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                )}
              />
              <CalendarDaysIcon className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            </span>
          </PopoverButton>
          <PopoverPanel
            anchor="bottom start"
            className={clsx(
              'z-50 mt-1 rounded-md border bg-white p-2 text-zinc-950 antialiased shadow-lg',
              'dark:border-zinc-800 dark:bg-zinc-900 dark:text-white',
              '[--rdp-accent-color:#7366F0]'
            )}
          >
            {children(close)}
          </PopoverPanel>
        </>
      )}
    </Popover>
  </div>
)

export const dayPickerClassNames = () => {
  const defaults = getDefaultClassNames()
  return {
    root: `${defaults.root} p-2`,
    today: 'font-bold text-primary',
    selected: 'bg-primary/20 rounded-full text-primary font-semibold',
    chevron: 'fill-primary dark:fill-white/60',
  }
}

export interface DatePickerProps {
  value: Date | null
  onChange: (date: Date) => void
  label?: string
  required?: boolean
  optional?: boolean
  disabled?: boolean
  placeholder?: string
  /** date-fns-Format für die Anzeige im Feld. Default: dd.MM.yyyy */
  displayFormat?: string
  /** date-fns-Locale für Kalender und Anzeige. Default: de */
  locale?: Locale
  /** Spätester wählbarer Monat. Default: Dezember in drei Jahren. */
  endMonth?: Date
  className?: string
}

/** Datumsauswahl mit Kalender-Popover (react-day-picker); schließt nach Auswahl. */
export const DatePicker = ({
  value,
  onChange,
  label,
  required = false,
  optional = false,
  disabled = false,
  placeholder,
  displayFormat = 'dd.MM.yyyy',
  locale = de,
  endMonth,
  className,
}: DatePickerProps) => (
  <PickerShell
    label={label}
    required={required}
    optional={optional}
    disabled={disabled}
    displayValue={value ? format(value, displayFormat, { locale }) : ''}
    placeholder={placeholder}
    className={className}
  >
    {(close) => (
      <DayPicker
        mode="single"
        classNames={dayPickerClassNames()}
        locale={locale}
        captionLayout="dropdown"
        endMonth={endMonth ?? new Date(new Date().getFullYear() + 3, 11)}
        selected={value ?? undefined}
        defaultMonth={value ?? undefined}
        onDayClick={(day) => {
          onChange(day)
          close()
        }}
      />
    )}
  </PickerShell>
)
