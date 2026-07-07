import type { Locale } from 'date-fns'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'
import React from 'react'
import { DayPicker, type DateRange } from 'react-day-picker'
import { dayPickerClassNames, PickerShell } from './DatePicker'

export type { DateRange } from 'react-day-picker'

export interface DatePickerRangeProps {
  value?: DateRange
  onChange: (range: DateRange | undefined) => void
  label?: string
  required?: boolean
  optional?: boolean
  disabled?: boolean
  placeholder?: string
  /** date-fns-Format für die Anzeige im Feld. Default: dd.MM.yyyy */
  displayFormat?: string
  /** date-fns-Locale für Kalender und Anzeige. Default: de */
  locale?: Locale
  className?: string
}

/** Zeitraum-Auswahl mit Kalender-Popover; schließt, sobald das Enddatum gewählt ist. */
export const DatePickerRange = ({
  value,
  onChange,
  label,
  required = false,
  optional = false,
  disabled = false,
  placeholder,
  displayFormat = 'dd.MM.yyyy',
  locale = de,
  className,
}: DatePickerRangeProps) => {
  const fmt = (date: Date) => format(date, displayFormat, { locale })
  const displayValue = value?.from ? (value.to ? `${fmt(value.from)} – ${fmt(value.to)}` : fmt(value.from)) : ''

  return (
    <PickerShell
      label={label}
      required={required}
      optional={optional}
      disabled={disabled}
      displayValue={displayValue}
      placeholder={placeholder}
      className={className}
    >
      {(close) => (
        <DayPicker
          mode="range"
          classNames={{
            ...dayPickerClassNames(),
            selected: 'font-semibold',
            range_start: 'rounded-l-full bg-primary text-white',
            range_end: 'rounded-r-full bg-primary text-white',
            range_middle: 'bg-primary/15 text-primary',
          }}
          locale={locale}
          captionLayout="dropdown"
          selected={value}
          defaultMonth={value?.from ?? undefined}
          onSelect={(range) => {
            onChange(range)
            if (range?.from && range?.to) close()
          }}
        />
      )}
    </PickerShell>
  )
}
