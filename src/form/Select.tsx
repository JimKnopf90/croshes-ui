import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React, { forwardRef } from 'react'

export type SelectProps = {
  className?: string
  label?: string
  required?: boolean
  optional?: boolean
} & Omit<Headless.SelectProps, 'as' | 'className'>

/** Natives Select mit optionalem Label, Pflichtfeld-/Optional-Kennzeichnung und Mehrfachauswahl. */
export const Select = forwardRef(function Select(
  { className, label, multiple, required = false, optional = false, ...props }: SelectProps,
  ref: React.ForwardedRef<HTMLSelectElement>
) {
  return (
    <div className="select-wrapper ">
      {label && <label className="block text-sm/6 font-medium text-gray-900 dark:text-gray-300">{label} {optional && <span className="text-gray-400 text-xs">{`OPTIONAL`}</span>}{required && <span className="text-red-500 pl-0.5 relative -top-0.5">*</span>}</label>}
      <span
        data-slot="control"
        className={clsx([
          className,
          label ? 'mt-2' : 'mt-0',
          'group relative block w-full',
          'before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow',
          'dark:before:hidden',
          'after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent after:has-[[data-focus]]:ring-2 after:has-[[data-focus]]:ring-blue-500',
          'has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none',
        ])}
      >
        <Headless.Select
          ref={ref}
          multiple={multiple}
          {...props}
          className={clsx([
            'relative block w-full appearance-none rounded-lg py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',
            'bg-white text-zinc-900 dark:bg-zinc-800 dark:text-white',
            '[&>option]:bg-white [&>option]:text-zinc-900',
            'dark:[&>option]:bg-zinc-800 dark:[&>option]:text-white',
            multiple
              ? 'px-[calc(theme(spacing[3.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)]'
              : 'pl-[calc(theme(spacing[3.5])-1px)] pr-[calc(theme(spacing.10)-1px)] sm:pl-[calc(theme(spacing.3)-1px)] sm:pr-[calc(theme(spacing.9)-1px)]',
            '[&_optgroup]:font-semibold',
            'text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white',
            'border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20',
            'bg-transparent dark:bg-white/5 dark:*:bg-zinc-800',
            'focus:outline-none',
            'data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-600 data-[invalid]:data-[hover]:dark:border-red-600',
            'data-[disabled]:border-zinc-950/20 data-[disabled]:opacity-100 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%] disabled:bg-zinc-500/5',
          ])}
        />
        {!multiple && (
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              className="h-5 w-5 stroke-zinc-500 group-has-[[data-disabled]]:stroke-zinc-600 sm:h-4 sm:w-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]"
              viewBox="0 0 16 16"
              aria-hidden="true"
              fill="none"
            >
              <path d="M5.75 10.75L8 13L10.25 10.75" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.25 5.25L8 3L5.75 5.25" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </span>
    </div>
  )
})
