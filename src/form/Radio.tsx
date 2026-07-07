import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

export type RadioProps = {
  className?: string
  /** Sichtbarer Beschriftungstext rechts neben dem Radio-Button. */
  label?: string
  /** Zusätzliche Beschreibung unterhalb des Labels (nur zusammen mit `label`). */
  description?: string
  /** Markiert den Radio-Button als fehlerhaft (roter Rahmen, aria-invalid). */
  invalid?: boolean
} & Omit<Headless.RadioProps, 'as' | 'className' | 'children'>

const circleClasses = [
  'relative isolate flex size-[1.125rem] shrink-0 items-center justify-center rounded-full sm:size-4',
  'border bg-white shadow-sm dark:bg-white/5',
  'group-data-[checked]:border-primary group-data-[checked]:bg-primary',
  'group-data-[focus]:ring-2 group-data-[focus]:ring-primary/30 dark:group-data-[focus]:ring-primary',
  'group-data-[disabled]:opacity-50',
]

const validBorder =
  'border-zinc-950/15 group-data-[hover]:border-zinc-950/30 dark:border-white/15 dark:group-data-[hover]:border-white/30'
const invalidBorder = 'border-red-500 group-data-[hover]:border-red-500 dark:border-red-500'

const RadioControl = ({ className, invalid = false, ...props }: Omit<RadioProps, 'label' | 'description'>) => (
  <Headless.Radio
    data-slot="control"
    aria-invalid={invalid || undefined}
    {...props}
    className={clsx(className, 'group inline-flex rounded-full focus:outline-none')}
  >
    <span className={clsx(circleClasses, invalid ? invalidBorder : validBorder)}>
      <span className="size-[0.4375rem] rounded-full bg-white opacity-0 group-data-[checked]:opacity-100 sm:size-1.5" />
    </span>
  </Headless.Radio>
)

/** Radio-Button mit optionalem Label und Beschreibung; muss innerhalb einer `RadioGroup` verwendet werden. */
export const Radio = ({ label, description, ...props }: RadioProps) => {
  if (!label) return <RadioControl {...props} />
  const { disabled, ...rest } = props
  return (
    <RadioField disabled={disabled}>
      <RadioControl {...rest} />
      <Headless.Label data-slot="label" className="select-none text-sm/6 font-medium text-gray-900 data-[disabled]:opacity-50 dark:text-white">
        {label}
      </Headless.Label>
      {description && (
        <Headless.Description data-slot="description" className="text-sm/6 text-zinc-500 data-[disabled]:opacity-50 dark:text-zinc-400">
          {description}
        </Headless.Description>
      )}
    </RadioField>
  )
}

export type RadioFieldProps = { className?: string } & Omit<Headless.FieldProps, 'as' | 'className'>

/** Layout-Wrapper für Radio mit eigenem `Headless.Label`/`Headless.Description`-Markup (`data-slot`-basiert). */
export const RadioField = ({ className, ...props }: RadioFieldProps) => (
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

export type RadioGroupProps = {
  className?: string
  /** Überschrift der Gruppe (gestylt wie ein Input-Label). */
  label?: string
  required?: boolean
  optional?: boolean
  children?: React.ReactNode
} & Omit<Headless.RadioGroupProps, 'as' | 'className' | 'children'>

/** Gruppe von Radio-Buttons mit gemeinsamem `value`/`onChange`, optionaler Überschrift und Keyboard-Navigation. */
export const RadioGroup = ({ className, label, required = false, optional = false, children, ...props }: RadioGroupProps) => (
  <Headless.RadioGroup data-slot="control" {...props} className={className}>
    {label && (
      <Headless.Label className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        {label}{' '}
        {optional && <span className="text-gray-400 text-xs">OPTIONAL</span>}
        {required && <span className="text-red-500 pl-0.5 relative -top-0.5">*</span>}
      </Headless.Label>
    )}
    <div className={clsx('space-y-3', label && 'mt-2')}>{children}</div>
  </Headless.RadioGroup>
)
