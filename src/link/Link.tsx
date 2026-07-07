import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React, { forwardRef } from 'react'

export type LinkProps = React.ComponentPropsWithoutRef<'a'>

/**
 * Gestylter Textlink in Primary-Farbe. Rendert ein natives `<a>`;
 * für Client-Side-Routing (next/link etc.) wrappen Konsumenten selbst.
 */
export const Link = forwardRef(function Link(
  { className, ...props }: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive>
      <a
        {...props}
        ref={ref}
        className={clsx(
          className,
          'font-medium text-primary underline decoration-primary/30 underline-offset-2 transition-colors',
          'data-[hover]:text-primary-hover data-[hover]:decoration-primary-hover',
          'focus:outline-none data-[focus]:rounded data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-primary/50'
        )}
      />
    </Headless.DataInteractive>
  )
})
