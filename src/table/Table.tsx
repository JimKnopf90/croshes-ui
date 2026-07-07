import clsx from 'clsx'
import React, { forwardRef } from 'react'

/** Tabelle mit horizontalem Scroll-Container; komponiert mit TableHeader/TableBody/TableRow/TableHead/TableCell. */
export const Table = forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-x-auto">
      <table ref={ref} {...props} className={clsx(className, 'w-full caption-bottom text-sm')} />
    </div>
  )
)
Table.displayName = 'Table'

export const TableHeader = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} {...props} className={clsx(className, '[&_tr]:border-b [&_tr]:border-zinc-950/10 dark:[&_tr]:border-white/10 [&_tr]:hover:bg-transparent dark:[&_tr]:hover:bg-transparent')} />
  )
)
TableHeader.displayName = 'TableHeader'

export const TableBody = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} {...props} className={clsx(className, '[&_tr:last-child]:border-0')} />
  )
)
TableBody.displayName = 'TableBody'

export const TableFooter = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tfoot
      ref={ref}
      {...props}
      className={clsx(className, 'border-t border-zinc-950/10 bg-zinc-950/[0.025] font-medium dark:border-white/10 dark:bg-white/[0.025] [&>tr]:last:border-b-0')}
    />
  )
)
TableFooter.displayName = 'TableFooter'

export const TableRow = forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      {...props}
      className={clsx(
        className,
        'border-b border-zinc-950/5 transition-colors hover:bg-zinc-950/[0.025] dark:border-white/5 dark:hover:bg-white/[0.025]',
        'data-[state=selected]:bg-primary/5'
      )}
    />
  )
)
TableRow.displayName = 'TableRow'

export const TableHead = forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      {...props}
      className={clsx(
        className,
        'h-11 px-4 text-left align-middle text-sm font-medium text-zinc-500 dark:text-zinc-400 [&:has([role=checkbox])]:pr-0'
      )}
    />
  )
)
TableHead.displayName = 'TableHead'

export const TableCell = forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      {...props}
      className={clsx(className, 'px-4 py-3 align-middle text-zinc-950 dark:text-white [&:has([role=checkbox])]:pr-0')}
    />
  )
)
TableCell.displayName = 'TableCell'

export const TableCaption = forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => (
    <caption ref={ref} {...props} className={clsx(className, 'mt-4 text-sm text-zinc-500 dark:text-zinc-400')} />
  )
)
TableCaption.displayName = 'TableCaption'
