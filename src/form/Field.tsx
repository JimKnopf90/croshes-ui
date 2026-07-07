import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

export type FieldProps = { className?: string } & Omit<Headless.FieldProps, 'as' | 'className'>

/**
 * Wrapper für frei komponierte Formularfelder: verdrahtet `Label`, `Description`,
 * `ErrorMessage` und das Control automatisch (ids, aria-describedby) und regelt
 * die Abstände. Das Control sollte OHNE eigene `label`-Prop verwendet werden.
 */
export const Field = ({ className, ...props }: FieldProps) => (
  <Headless.Field
    data-slot="field"
    {...props}
    className={clsx(
      className,
      '[&>[data-slot=label]+[data-slot=control]]:mt-2',
      '[&>[data-slot=label]+[data-slot=description]]:mt-1',
      '[&>[data-slot=description]+[data-slot=control]]:mt-2',
      '[&>[data-slot=control]+[data-slot=description]]:mt-2',
      '[&>[data-slot=control]+[data-slot=error]]:mt-2'
    )}
  />
)

export type LabelProps = {
  className?: string
  required?: boolean
  optional?: boolean
  children: React.ReactNode
} & Omit<Headless.LabelProps, 'as' | 'className' | 'children'>

/** Feld-Beschriftung mit Pflichtfeld-/Optional-Kennzeichnung (Stil wie beim Input). */
export const Label = ({ className, required = false, optional = false, children, ...props }: LabelProps) => (
  <Headless.Label
    data-slot="label"
    {...props}
    className={clsx(className, 'block text-sm/6 font-medium text-gray-900 data-[disabled]:opacity-50 dark:text-white')}
  >
    {children}{' '}
    {optional && <span className="text-gray-400 text-xs">OPTIONAL</span>}
    {required && <span className="text-red-500 pl-0.5 relative -top-0.5">*</span>}
  </Headless.Label>
)

export type DescriptionProps = { className?: string } & Omit<Headless.DescriptionProps, 'as' | 'className'>

/** Erläuternder Hilfetext zu einem Feld. */
export const Description = ({ className, ...props }: DescriptionProps) => (
  <Headless.Description
    data-slot="description"
    {...props}
    className={clsx(className, 'text-sm/6 text-zinc-500 data-[disabled]:opacity-50 dark:text-zinc-400')}
  />
)

export type ErrorMessageProps = { className?: string } & Omit<Headless.DescriptionProps, 'as' | 'className'>

/** Fehlermeldung zu einem Feld (rot, wird via aria-describedby mit dem Control verknüpft). */
export const ErrorMessage = ({ className, ...props }: ErrorMessageProps) => (
  <Headless.Description
    data-slot="error"
    {...props}
    className={clsx(className, 'text-sm/6 text-red-600 data-[disabled]:opacity-50 dark:text-red-500')}
  />
)
