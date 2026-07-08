import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'
import { Button } from '../button/Button'

/** Container des Menüs; enthält `MenuButton` und `MenuItems`. */
export const Menu = (props: Headless.MenuProps) => <Headless.Menu {...props} />

export type MenuButtonProps = {
  /** Gerenderte Komponente, Default: Button (z.B. auch IconButton). */
  as?: React.ElementType
} & Omit<Headless.MenuButtonProps, 'as'> &
  Record<string, unknown>

/** Auslöser des Menüs; rendert standardmäßig den Design-System-Button. */
export const MenuButton = ({ as = Button, ...props }: MenuButtonProps) => (
  <Headless.MenuButton as={as} {...props} />
)

export type MenuItemsProps = {
  className?: string
  anchor?: Headless.MenuItemsProps['anchor']
} & Omit<Headless.MenuItemsProps, 'as' | 'className' | 'anchor'>

/** Aufklappende Liste der Menüeinträge. Breite via className erweiterbar (z.B. `w-80`). */
export const MenuItems = ({ className, anchor = 'bottom end', ...props }: MenuItemsProps) => (
  <Headless.MenuItems
    transition
    anchor={anchor}
    {...props}
    className={clsx(
      className,
      'z-30 min-w-56 rounded-xl bg-white p-1.5 shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-zinc-900 dark:ring-white/10',
      '[--anchor-gap:theme(spacing.2)]',
      'transition duration-150 ease-out data-[closed]:-translate-y-1 data-[closed]:scale-95 data-[closed]:opacity-0'
    )}
  />
)

export type MenuItemProps = {
  className?: string
  /** Roter Eintrag für destruktive Aktionen (z.B. Löschen). */
  destructive?: boolean
  children: React.ReactNode
} & Omit<Headless.MenuItemProps, 'as' | 'className' | 'children'> &
  (
    | Omit<React.ComponentPropsWithoutRef<'button'>, 'className' | 'children'>
    | (Omit<React.ComponentPropsWithoutRef<'a'>, 'className' | 'children'> & { href: string })
  )

/** Einzelner Menüeintrag; mit `href` als Link, sonst als Button. */
export const MenuItem = ({ className, destructive = false, disabled, children, ...props }: MenuItemProps) => {
  const classes = clsx(
    className,
    'group flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors',
    'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
    '[&>[data-slot=icon]]:mt-0.5 [&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:shrink-0',
    destructive
      ? 'text-red-700 data-[focus]:bg-red-50 dark:text-red-400 dark:data-[focus]:bg-red-500/10'
      : clsx(
          'text-gray-700 data-[focus]:bg-gray-50 data-[focus]:text-gray-900 dark:text-zinc-300 dark:data-[focus]:bg-zinc-800 dark:data-[focus]:text-white',
          '[&>[data-slot=icon]]:text-gray-500 dark:[&>[data-slot=icon]]:text-gray-400'
        )
  )
  return 'href' in props ? (
    <Headless.MenuItem as="a" disabled={disabled} {...(props as Record<string, unknown>)} className={classes}>
      {children}
    </Headless.MenuItem>
  ) : (
    <Headless.MenuItem as="button" type="button" disabled={disabled} {...(props as Record<string, unknown>)} className={classes}>
      {children}
    </Headless.MenuItem>
  )
}

/** Titel eines Menüeintrags. */
export const MenuLabel = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div data-slot="label" {...props} className={clsx(className, 'text-gray-900 dark:text-white')} />
)

/** Grauer Untertitel unterhalb des Labels (macht den Eintrag „reich"). */
export const MenuDescription = ({ className, ...props }: React.ComponentPropsWithoutRef<'p'>) => (
  <p
    data-slot="description"
    {...props}
    className={clsx(className, 'mt-0.5 text-sm font-normal text-gray-600 dark:text-gray-400')}
  />
)

/** Icon-Kachel für reiche Menüeinträge (Icon mit farbigem Hintergrund). */
export const MenuIconTile = ({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) => (
  <span
    data-slot="icon-tile"
    {...props}
    className={clsx(
      className,
      'mt-0.5 flex size-9 flex-none items-center justify-center rounded-lg transition-colors',
      'bg-surface-container-low text-gray-600 dark:bg-zinc-700 dark:text-gray-300',
      'group-data-[focus]:bg-white group-data-[focus]:text-primary dark:group-data-[focus]:bg-zinc-600',
      '[&>svg]:size-5'
    )}
  />
)

/** Trennlinie zwischen Menü-Gruppen. */
export const MenuDivider = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div
    {...props}
    role="separator"
    className={clsx(className, 'mx-1.5 my-1.5 border-t border-gray-100 dark:border-zinc-800')}
  />
)
