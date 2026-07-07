import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React, { forwardRef } from 'react'

/** Wrapper für ein Input mit vorangestelltem/nachgestelltem Icon (`data-slot="icon"`). */
export function InputGroup({ children }: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      data-slot="control"
      className={clsx(
        'relative isolate block',
        '[&_input]:has-[[data-slot=icon]:first-child]:pl-10 [&_input]:has-[[data-slot=icon]:last-child]:pr-10 sm:[&_input]:has-[[data-slot=icon]:first-child]:pl-8 sm:[&_input]:has-[[data-slot=icon]:last-child]:pr-8',
        '[&>[data-slot=icon]]:pointer-events-none [&>[data-slot=icon]]:absolute [&>[data-slot=icon]]:top-3 [&>[data-slot=icon]]:z-10 [&>[data-slot=icon]]:size-5 sm:[&>[data-slot=icon]]:top-2.5 sm:[&>[data-slot=icon]]:size-4',
        '[&>[data-slot=icon]:first-child]:left-3 sm:[&>[data-slot=icon]:first-child]:left-2.5 [&>[data-slot=icon]:last-child]:right-3 sm:[&>[data-slot=icon]:last-child]:right-2.5',
        '[&>[data-slot=icon]]:text-zinc-500 dark:[&>[data-slot=icon]]:text-zinc-400'
      )}
    >
      {children}
    </span>
  )
}

const dateTypes = ['date', 'datetime-local', 'month', 'time', 'week']
type DateType = (typeof dateTypes)[number]

export type InputProps = {
  className?: string
  label?: string
  required?: boolean
  optional?: boolean
  readonly?: boolean
  type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | DateType
} & Omit<Headless.InputProps, 'as' | 'className'>

/** Standard-Textfeld mit optionalem Label, Pflichtfeld-/Optional-Kennzeichnung und Readonly-Zustand. */
export const Input = forwardRef(function Input(
  {
    className,
    label,
    required = false,
    optional = false,
    readonly = false,
    ...props
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const { value, defaultValue, ...rest } = props
  return (
    <div data-slot="control" className="input-wrapper">
      {label && (
        <label className="block text-sm/6 font-medium text-gray-900 dark:text-white">
          {label}{' '}
          {optional && <span className="text-gray-400 text-xs">OPTIONAL</span>}
          {required && (
            <span className="text-red-500 pl-0.5 relative -top-0.5">*</span>
          )}
        </label>
      )}
      <span
        data-slot="control"
        className={clsx(
          className,
          'relative block w-full',
          label && 'mt-2',
          'before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow',
          'dark:before:hidden',
          'after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500',
          'has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none',
          'before:has-[[data-invalid]]:shadow-red-500/10'
        )}
      >
        <Headless.Input
          ref={ref}
          {...rest}
          readOnly={readonly}
          {...(value !== undefined ? { value } : { defaultValue: defaultValue ?? '' })}
          className={clsx([
            props.type &&
              dateTypes.includes(props.type) && [
              '[&::-webkit-datetime-edit-fields-wrapper]:p-0',
              '[&::-webkit-date-and-time-value]:min-h-[1.5em]',
              '[&::-webkit-datetime-edit]:inline-flex',
              '[&::-webkit-datetime-edit]:p-0',
              '[&::-webkit-datetime-edit-year-field]:p-0',
              '[&::-webkit-datetime-edit-month-field]:p-0',
              '[&::-webkit-datetime-edit-day-field]:p-0',
              '[&::-webkit-datetime-edit-hour-field]:p-0',
              '[&::-webkit-datetime-edit-minute-field]:p-0',
              '[&::-webkit-datetime-edit-second-field]:p-0',
              '[&::-webkit-datetime-edit-millisecond-field]:p-0',
              '[&::-webkit-datetime-edit-meridiem-field]:p-0',
            ],
            'relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',
            'text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white',
            'border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20',
            readonly
              ? 'bg-gray-100 dark:bg-zinc-800/50 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              : 'bg-transparent dark:bg-white/5',
            'focus:outline-none',
            'data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500',
            'data-[disabled]:bg-gray-100 data-[disabled]:text-gray-500 data-[disabled]:cursor-not-allowed data-[disabled]:border-gray-300',
            'data-[disabled]:dark:bg-zinc-900 data-[disabled]:dark:text-gray-500 data-[disabled]:dark:border-zinc-700',
            'dark:[color-scheme:dark]',
          ])}
        />
      </span>
    </div>
  )
})
