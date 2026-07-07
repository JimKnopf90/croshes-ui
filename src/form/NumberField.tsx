import clsx from 'clsx'
import React from 'react'
import { Input, InputProps } from './Input'

export type NumberFieldProps = Omit<InputProps, 'type'> & {
  /** @deprecated `description` verwenden. */
  hintText?: string
  min?: number
  max?: number
}

/**
 * Zahleneingabefeld im Input-Look, ohne Spin-Buttons; blockiert die Eingabe
 * von "e", "-" und "+". Alle Input-Props (label, description, error, …) verfügbar.
 */
export const NumberField = ({ hintText, description, className, onKeyDown, ...props }: NumberFieldProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'e' || event.key === '-' || event.key === '+') {
      event.preventDefault()
    }
    onKeyDown?.(event)
  }

  return (
    <Input
      type="number"
      {...props}
      description={description ?? hintText}
      onKeyDown={handleKeyDown}
      className={clsx(
        className,
        '[&_input]:[appearance:textfield] [&_input::-webkit-outer-spin-button]:appearance-none [&_input::-webkit-inner-spin-button]:appearance-none'
      )}
    />
  )
}
