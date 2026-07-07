import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

export type TabsProps = { className?: string } & Omit<Headless.TabGroupProps, 'as' | 'className'>

/** Tab-Container mit Keyboard-Navigation; enthält `TabList` (mit `Tab`s) und `TabPanels` (mit `TabPanel`s). */
export const Tabs = ({ className, ...props }: TabsProps) => (
  <Headless.TabGroup {...props} className={className} />
)

export type TabListProps = { className?: string } & Omit<Headless.TabListProps, 'as' | 'className'>

/** Leiste der Tab-Schaltflächen mit unterer Trennlinie. */
export const TabList = ({ className, ...props }: TabListProps) => (
  <Headless.TabList
    {...props}
    className={clsx(className, 'flex gap-x-6 border-b border-zinc-950/10 dark:border-white/10')}
  />
)

export type TabProps = { className?: string } & Omit<Headless.TabProps, 'as' | 'className'>

/** Einzelner Tab im Unterstrich-Stil; ausgewählt in Primary-Farbe. */
export const Tab = ({ className, ...props }: TabProps) => (
  <Headless.Tab
    {...props}
    className={clsx(
      className,
      '-mb-px whitespace-nowrap border-b-2 border-transparent px-1 py-2.5 text-sm font-medium',
      'text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-200',
      'data-[selected]:border-primary data-[selected]:text-primary',
      'focus:outline-none data-[focus]:rounded-t data-[focus]:ring-2 data-[focus]:ring-primary/30',
      'data-[disabled]:opacity-50 data-[disabled]:hover:border-transparent data-[disabled]:hover:text-zinc-500'
    )}
  />
)

export type TabPanelsProps = { className?: string } & Omit<Headless.TabPanelsProps, 'as' | 'className'>

/** Container für die Tab-Inhalte. */
export const TabPanels = ({ className, ...props }: TabPanelsProps) => (
  <Headless.TabPanels {...props} className={className} />
)

export type TabPanelProps = { className?: string } & Omit<Headless.TabPanelProps, 'as' | 'className'>

/** Inhalt eines einzelnen Tabs. */
export const TabPanel = ({ className, ...props }: TabPanelProps) => (
  <Headless.TabPanel {...props} className={clsx(className, 'pt-4 focus:outline-none')} />
)
