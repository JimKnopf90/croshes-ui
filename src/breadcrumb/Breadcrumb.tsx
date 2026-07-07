import { ChevronRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import React from 'react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  /**
   * Komponente für verlinkte Einträge, z.B. next/link.
   * Default: natives `<a>`; bekommt `href` und `className`.
   */
  linkComponent?: React.ElementType
  className?: string
}

/** Brotkrumen-Navigation; der letzte Eintrag ist die aktuelle Seite (aria-current="page"). */
export const Breadcrumb = ({ items, linkComponent: LinkComponent = 'a', className }: BreadcrumbProps) => (
  <nav aria-label="Breadcrumb" className={clsx(className, 'flex items-center text-sm')}>
    <ol className="flex items-center">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <li key={`${item.label}-${index}`} className="flex items-center">
            {index > 0 && <ChevronRightIcon className="mx-2 size-4 shrink-0 text-gray-400 dark:text-gray-500" />}
            {item.href && !isLast ? (
              <LinkComponent
                href={item.href}
                className="max-w-[200px] truncate text-gray-500 transition-colors hover:text-gray-700 hover:underline dark:text-gray-400 dark:hover:text-gray-300"
              >
                {item.label}
              </LinkComponent>
            ) : (
              <span
                aria-current={isLast ? 'page' : undefined}
                className={clsx(
                  'max-w-[200px] truncate',
                  isLast ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                )}
              >
                {item.label}
              </span>
            )}
          </li>
        )
      })}
    </ol>
  </nav>
)
