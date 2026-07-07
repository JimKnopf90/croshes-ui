import * as Headless from '@headlessui/react'
import { ChevronUpDownIcon, XMarkIcon, CheckIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import React from 'react'

export type MultiSelectOption<T extends string | number> = {
  value: T
  label: string
}

export interface MultiSelectListboxProps<T extends string | number> {
  label: string
  placeholder: string
  options: MultiSelectOption<T>[]
  value: T[]
  onChange: (values: T[]) => void
  className?: string
  variant?: 'default' | 'pill'
}

/**
 * Mehrfachauswahl-Dropdown mit entfernbaren Tags (default) oder als Filter-Pill
 * mit Auswahl-Zähler (variant "pill").
 */
export function MultiSelectListbox<T extends string | number>({
  label,
  placeholder,
  options,
  value,
  onChange,
  className,
  variant = 'default',
}: MultiSelectListboxProps<T>) {
  const selectedOptions = options.filter(opt => value.includes(opt.value))
  const isPill = variant === 'pill'

  const handleRemove = (valueToRemove: T, e: React.MouseEvent) => {
    e.stopPropagation()
    onChange(value.filter(v => v !== valueToRemove))
  }

  const renderButtonContent = () => {
    if (isPill) {
      return (
        <span className="flex items-center gap-2 truncate">
          <span className="truncate">{label}</span>
          {selectedOptions.length > 0 && (
            <span className="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 rounded-full bg-primary text-white text-xs font-medium">
              {selectedOptions.length}
            </span>
          )}
        </span>
      )
    }

    if (selectedOptions.length === 0) {
      return (
        <span className="block truncate text-gray-400 dark:text-gray-500">
          {placeholder}
        </span>
      )
    }

    return (
      <span className="flex flex-wrap gap-1">
        {selectedOptions.map(option => (
          <span
            key={String(option.value)}
            className="inline-flex items-center gap-1 rounded bg-primary px-2 py-0.5 text-xs text-white"
          >
            {option.label}
            <button
              type="button"
              onClick={e => handleRemove(option.value, e)}
              className="hover:bg-primary-hover rounded-full p-0.5 transition"
            >
              <XMarkIcon className="h-3 w-3" />
            </button>
          </span>
        ))}
      </span>
    )
  }

  return (
    <div className={clsx(isPill ? '' : 'space-y-2', className)}>
      {!isPill && (
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <Headless.Listbox value={value} onChange={onChange} multiple>
        <div className="relative">
          <Headless.ListboxButton
            className={clsx(
              'relative cursor-pointer text-left text-sm transition',
              'border bg-white dark:bg-zinc-800',
              'hover:border-primary dark:hover:border-primary',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
              isPill
                ? [
                  'inline-flex items-center gap-2 pl-4 pr-9 py-1.5 rounded-full min-h-[2.25rem]',
                  selectedOptions.length > 0
                    ? 'border-primary/40 bg-primary/5 dark:bg-primary/10 text-gray-900 dark:text-white'
                    : 'border-gray-300 dark:border-zinc-600 text-gray-600 dark:text-gray-300',
                ]
                : [
                  'w-full rounded-lg py-2 pl-3 pr-10 min-h-[2.5rem]',
                  'border-gray-300 dark:border-zinc-600',
                ]
            )}
          >
            {renderButtonContent()}
            <span
              className={clsx(
                'pointer-events-none absolute inset-y-0 flex items-center',
                isPill ? 'right-0 pr-2.5' : 'right-0 pr-2'
              )}
            >
              <ChevronUpDownIcon
                className="h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Headless.ListboxButton>

          <Headless.ListboxOptions
            transition
            className={clsx(
              'absolute z-50 mt-1 max-h-60 overflow-auto rounded-xl py-1',
              isPill ? 'min-w-[14rem]' : 'w-full',
              'bg-white dark:bg-zinc-800',
              'shadow-lg ring-1 ring-black ring-opacity-5',
              'focus:outline-none',
              'transition duration-100 ease-out data-[closed]:opacity-0 data-[closed]:scale-95'
            )}
          >
            {options.map(option => (
              <Headless.ListboxOption
                key={String(option.value)}
                value={option.value}
                className={({ focus, selected }) =>
                  clsx(
                    'relative cursor-pointer select-none py-2 pl-10 pr-4 text-sm',
                    focus ? 'bg-primary/10 text-primary dark:bg-primary/20' : 'text-gray-900 dark:text-white',
                    selected && 'font-medium'
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <span className={clsx('block truncate', selected && 'font-medium')}>
                      {option.label}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Headless.ListboxOption>
            ))}
          </Headless.ListboxOptions>
        </div>
      </Headless.Listbox>
    </div>
  )
}
