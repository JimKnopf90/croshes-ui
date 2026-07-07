import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import React from 'react'

export type AlertVariant = 'success' | 'error' | 'info' | 'warning'

const variantConfig: Record<
  AlertVariant,
  { icon: typeof CheckCircleIcon; container: string; icon_: string; title: string; body: string }
> = {
  success: {
    icon: CheckCircleIcon,
    container: 'border-green-200 bg-green-50 dark:border-green-500/20 dark:bg-green-500/10',
    icon_: 'text-green-500 dark:text-green-400',
    title: 'text-green-800 dark:text-green-300',
    body: 'text-green-700 dark:text-green-300/80',
  },
  error: {
    icon: XCircleIcon,
    container: 'border-red-200 bg-red-50 dark:border-red-500/20 dark:bg-red-500/10',
    icon_: 'text-red-500 dark:text-red-400',
    title: 'text-red-800 dark:text-red-300',
    body: 'text-red-700 dark:text-red-300/80',
  },
  warning: {
    icon: ExclamationTriangleIcon,
    container: 'border-amber-200 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/10',
    icon_: 'text-amber-500 dark:text-amber-400',
    title: 'text-amber-800 dark:text-amber-300',
    body: 'text-amber-700 dark:text-amber-300/80',
  },
  info: {
    icon: InformationCircleIcon,
    container: 'border-primary-200 bg-primary-50 dark:border-primary/20 dark:bg-primary/10',
    icon_: 'text-primary dark:text-primary-400',
    title: 'text-primary-800 dark:text-primary-300',
    body: 'text-primary-700 dark:text-primary-300/80',
  },
}

export interface AlertProps {
  variant?: AlertVariant
  title: string
  /** Fließtext unterhalb des Titels; alternativ/zusätzlich `children` für eigenes Markup. */
  description?: string
  children?: React.ReactNode
  /** Rendert einen Schließen-Button und wird bei Klick aufgerufen. */
  onClose?: () => void
  className?: string
}

/** Inline-Hinweisbox (kein Overlay) für Erfolgs-, Fehler-, Info- und Warnmeldungen. */
export const Alert = ({ variant = 'info', title, description, children, onClose, className }: AlertProps) => {
  const config = variantConfig[variant]
  const Icon = config.icon
  return (
    <div role="alert" className={clsx(className, 'rounded-xl border p-4', config.container)}>
      <div className="flex items-start gap-3">
        <Icon className={clsx('mt-0.5 size-5 shrink-0', config.icon_)} aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <p className={clsx('text-sm font-semibold', config.title)}>{title}</p>
          {description && <p className={clsx('mt-1 text-sm', config.body)}>{description}</p>}
          {children && <div className={clsx('mt-2 text-sm', config.body)}>{children}</div>}
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className={clsx(
              'flex size-6 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-black/5 dark:hover:bg-white/10',
              config.icon_
            )}
          >
            <span className="sr-only">Schließen</span>
            <XMarkIcon className="size-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  )
}
