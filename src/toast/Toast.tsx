import { Transition } from '@headlessui/react'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'

export type ToastVariant = 'success' | 'error' | 'info' | 'warning'

export interface ToastOptions {
  title: string
  description?: string
  variant?: ToastVariant
  /** Anzeigedauer in Millisekunden; 0 deaktiviert das automatische Ausblenden. Default: 5000. */
  duration?: number
}

interface ToastEntry extends Required<Pick<ToastOptions, 'title' | 'variant' | 'duration'>> {
  id: number
  description?: string
  visible: boolean
}

interface ToastContextValue {
  /** Zeigt einen Toast an und liefert dessen id (z.B. für `dismiss`). */
  toast: (options: ToastOptions) => number
  /** Blendet den Toast mit der übergebenen id aus. */
  dismiss: (id: number) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

/** Hook für den Zugriff auf `toast`/`dismiss`; erfordert einen `ToastProvider` im Baum. */
export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast muss innerhalb eines <ToastProvider> verwendet werden.')
  return context
}

const variantConfig: Record<ToastVariant, { icon: typeof CheckCircleIcon; iconColor: string }> = {
  success: { icon: CheckCircleIcon, iconColor: 'text-green-500' },
  error: { icon: XCircleIcon, iconColor: 'text-red-500' },
  warning: { icon: ExclamationTriangleIcon, iconColor: 'text-amber-500' },
  info: { icon: InformationCircleIcon, iconColor: 'text-primary' },
}

const ToastCard = ({ entry, onDismiss, onRemove }: { entry: ToastEntry; onDismiss: () => void; onRemove: () => void }) => {
  const { icon: Icon, iconColor } = variantConfig[entry.variant]
  return (
    <Transition
      appear
      show={entry.visible}
      as="div"
      afterLeave={onRemove}
      className={clsx(
        'pointer-events-auto w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10',
        'transition data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in',
        'data-[closed]:translate-y-2 data-[closed]:opacity-0 sm:data-[closed]:translate-x-2 sm:data-[closed]:translate-y-0'
      )}
    >
      <div className="flex items-start gap-3 p-4">
        <Icon className={clsx('mt-0.5 size-5 shrink-0', iconColor)} aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-900 dark:text-white">{entry.title}</p>
          {entry.description && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{entry.description}</p>
          )}
        </div>
        <button
          type="button"
          onClick={onDismiss}
          className="flex size-6 shrink-0 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-zinc-800 dark:hover:text-gray-200"
        >
          <span className="sr-only">Schließen</span>
          <XMarkIcon className="size-4" aria-hidden="true" />
        </button>
      </div>
    </Transition>
  )
}

/** Stellt `useToast` bereit und rendert die Toasts unten rechts (mobil unten, volle Breite). */
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [entries, setEntries] = useState<ToastEntry[]>([])
  const nextId = useRef(1)

  const dismiss = useCallback((id: number) => {
    setEntries((current) => current.map((e) => (e.id === id ? { ...e, visible: false } : e)))
  }, [])

  const toast = useCallback(
    (options: ToastOptions) => {
      const id = nextId.current++
      const entry: ToastEntry = {
        id,
        title: options.title,
        description: options.description,
        variant: options.variant ?? 'info',
        duration: options.duration ?? 5000,
        visible: true,
      }
      setEntries((current) => [...current, entry])
      if (entry.duration > 0) setTimeout(() => dismiss(id), entry.duration)
      return id
    },
    [dismiss]
  )

  const remove = useCallback((id: number) => {
    setEntries((current) => current.filter((e) => e.id !== id))
  }, [])

  const value = useMemo(() => ({ toast, dismiss }), [toast, dismiss])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex flex-col items-center gap-3 p-4 sm:items-end sm:p-6"
      >
        {entries.map((entry) => (
          <ToastCard key={entry.id} entry={entry} onDismiss={() => dismiss(entry.id)} onRemove={() => remove(entry.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}
