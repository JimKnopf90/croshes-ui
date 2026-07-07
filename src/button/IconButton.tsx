import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { TouchTarget } from './Button'

export type IconButtonVariant = 'ghost' | 'secondary' | 'primary' | 'danger'
export type IconButtonSize = 'sm' | 'md'

const variantClasses: Record<IconButtonVariant, string> = {
  ghost:
    'text-zinc-500 data-[hover]:bg-zinc-950/5 data-[hover]:text-zinc-700 dark:text-zinc-400 dark:data-[hover]:bg-white/10 dark:data-[hover]:text-zinc-200',
  secondary:
    'border border-zinc-950/10 bg-white text-zinc-700 shadow-sm data-[hover]:bg-zinc-950/[2.5%] dark:border-white/15 dark:bg-transparent dark:text-zinc-300 dark:data-[hover]:bg-white/5',
  primary: 'bg-primary text-white shadow-sm data-[hover]:bg-primary-hover',
  danger: 'text-red-600 data-[hover]:bg-red-50 dark:text-red-400 dark:data-[hover]:bg-red-500/10',
}

const sizeClasses: Record<IconButtonSize, string> = {
  sm: 'p-1.5 [&>[data-slot=icon]]:size-4',
  md: 'p-2 [&>[data-slot=icon]]:size-5',
}

export type IconButtonProps = {
  /** Pflicht: zugängliche Beschriftung, da der Button nur ein Icon zeigt. */
  'aria-label': string
  variant?: IconButtonVariant
  size?: IconButtonSize
  className?: string
  /** Das Icon (z.B. aus @heroicons/react); bekommt Größe über den Icon-Slot. */
  children: React.ReactNode
} & Omit<Headless.ButtonProps, 'as' | 'className' | 'children'>

/** Quadratischer Button für Icon-only-Aktionen (z.B. Bearbeiten/Löschen in Tabellenzeilen). */
export const IconButton = forwardRef(function IconButton(
  { variant = 'ghost', size = 'md', className, children, ...props }: IconButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <Headless.Button
      {...props}
      ref={ref}
      className={clsx(
        className,
        'relative isolate inline-flex items-center justify-center rounded-lg transition-colors',
        'focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500',
        'data-[disabled]:opacity-50',
        '[&>[data-slot=icon]]:shrink-0',
        variantClasses[variant],
        sizeClasses[size]
      )}
    >
      <TouchTarget>{children}</TouchTarget>
    </Headless.Button>
  )
})
