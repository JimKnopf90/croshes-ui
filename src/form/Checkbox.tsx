import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

export type CheckboxProps = {
  className?: string
  /** Sichtbarer Beschriftungstext rechts neben der Checkbox. */
  label?: string
  /** Zusätzliche Beschreibung unterhalb des Labels (nur zusammen mit `label`). */
  description?: string
  /** Markiert die Checkbox als fehlerhaft (roter Rahmen, aria-invalid). */
  invalid?: boolean
} & Omit<Headless.CheckboxProps, 'as' | 'className' | 'children'>

const boxClasses = [
  'relative isolate flex size-[1.125rem] shrink-0 items-center justify-center rounded sm:size-4',
  'border bg-white shadow-sm dark:bg-white/5',
  'group-data-[checked]:border-primary group-data-[checked]:bg-primary',
  'group-data-[indeterminate]:border-primary group-data-[indeterminate]:bg-primary',
  'group-data-[focus]:ring-2 group-data-[focus]:ring-primary/30 dark:group-data-[focus]:ring-primary',
  'group-data-[disabled]:opacity-50',
]

const validBorder =
  'border-zinc-950/15 group-data-[hover]:border-zinc-950/30 dark:border-white/15 dark:group-data-[hover]:border-white/30'
const invalidBorder = 'border-red-500 group-data-[hover]:border-red-500 dark:border-red-500'

const CheckboxControl = ({ className, invalid = false, ...props }: Omit<CheckboxProps, 'label' | 'description'>) => (
  <Headless.Checkbox
    data-slot="control"
    aria-invalid={invalid || undefined}
    {...props}
    className={clsx(className, 'group inline-flex rounded focus:outline-none')}
  >
    <span className={clsx(boxClasses, invalid ? invalidBorder : validBorder)}>
      <svg
        className="size-3.5 stroke-white opacity-0 group-data-[checked]:opacity-100 group-data-[indeterminate]:opacity-100 sm:size-3"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="opacity-100 group-data-[indeterminate]:opacity-0"
          d="M3 8L6 11L11 3.5"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="opacity-0 group-data-[indeterminate]:opacity-100"
          d="M3 7H11"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </Headless.Checkbox>
)

/** Checkbox mit optionalem Label und Beschreibung; unterstützt `indeterminate`. */
export const Checkbox = ({ label, description, ...props }: CheckboxProps) => {
  if (!label) return <CheckboxControl {...props} />
  const { disabled, ...rest } = props
  return (
    <CheckboxField disabled={disabled}>
      <CheckboxControl {...rest} />
      <Headless.Label data-slot="label" className="select-none text-sm/6 font-medium text-gray-900 data-[disabled]:opacity-50 dark:text-white">
        {label}
      </Headless.Label>
      {description && (
        <Headless.Description data-slot="description" className="text-sm/6 text-zinc-500 data-[disabled]:opacity-50 dark:text-zinc-400">
          {description}
        </Headless.Description>
      )}
    </CheckboxField>
  )
}

export type CheckboxFieldProps = { className?: string } & Omit<Headless.FieldProps, 'as' | 'className'>

/** Layout-Wrapper für Checkbox mit eigenem `Headless.Label`/`Headless.Description`-Markup (`data-slot`-basiert). */
export const CheckboxField = ({ className, ...props }: CheckboxFieldProps) => (
  <Headless.Field
    data-slot="field"
    {...props}
    className={clsx(
      className,
      'grid grid-cols-[1.125rem_1fr] items-center gap-x-3 gap-y-1 sm:grid-cols-[1rem_1fr]',
      '[&>[data-slot=control]]:col-start-1 [&>[data-slot=control]]:row-start-1 [&>[data-slot=control]]:justify-self-center',
      '[&>[data-slot=label]]:col-start-2 [&>[data-slot=label]]:row-start-1 [&>[data-slot=label]]:justify-self-start',
      '[&>[data-slot=description]]:col-start-2 [&>[data-slot=description]]:row-start-2'
    )}
  />
)

export interface CheckboxGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Überschrift der Gruppe (gestylt wie ein Input-Label). */
  label?: string
  required?: boolean
  optional?: boolean
}

/** Gruppiert mehrere Checkboxen vertikal mit optionaler Überschrift und Pflichtfeld-/Optional-Kennzeichnung. */
export const CheckboxGroup = ({ className, label, required = false, optional = false, children, ...props }: CheckboxGroupProps) => (
  <div data-slot="control" {...props} className={className}>
    {label && (
      <span className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        {label}{' '}
        {optional && <span className="text-gray-400 text-xs">OPTIONAL</span>}
        {required && <span className="text-red-500 pl-0.5 relative -top-0.5">*</span>}
      </span>
    )}
    <div className={clsx('space-y-3', label && 'mt-2')}>{children}</div>
  </div>
)
