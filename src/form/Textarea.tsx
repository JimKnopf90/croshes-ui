import * as Headless from '@headlessui/react';
import clsx from 'clsx';
import React, { forwardRef, useState, useEffect } from 'react';

export type TextareaProps = {
  className?: string;
  label?: string;
  resizable?: boolean;
  maxLength?: number;
  value?: string;
  onChange?: (value: string) => void;
  /** Zähler-Vorlage, Platzhalter {current} und {max}. */
  counterText?: string;
} & Omit<Headless.TextareaProps, 'as' | 'className' | 'onChange'>;

/** Mehrzeiliges Textfeld mit optionalem Label, Zeichenlimit und Zeichen-Zähler. */
export const Textarea = forwardRef(function Textarea(
  {
    className,
    label,
    resizable = true,
    maxLength,
    value = '',
    onChange,
    counterText = '{current} / {max}',
    ...props
  }: TextareaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) {
  const [textValue, setTextValue] = useState(value);

  // Synchronisiert den lokalen State mit dem übergebenen Wert,
  // falls sich dieser ändert.
  useEffect(() => {
    setTextValue(value);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (!maxLength || inputValue.length <= maxLength) {
      setTextValue(inputValue);
      onChange?.(inputValue);
    } else {
      const truncatedValue = inputValue.slice(0, maxLength);
      if (truncatedValue !== textValue) {
        setTextValue(truncatedValue);
        onChange?.(truncatedValue);
      }
    }
  };

  return (
    <div className="textarea-wrapper">
      {label && (
        <label className="block text-sm/6 font-medium text-gray-900 dark:text-gray-300">
          {label}
        </label>
      )}
      <span
        data-slot="control"
        className={clsx([
          className,
          'relative block w-full mt-2',
          'before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow',
          'dark:before:hidden',
          'after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500',
          'has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none',
        ])}
      >
        <Headless.Textarea
          ref={ref}
          {...props}
          value={textValue}
          onChange={handleInputChange}
          className={clsx([
            'relative block h-full w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',
            'text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white',
            'border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20',
            'bg-transparent dark:bg-white/5',
            'focus:outline-none',
            'data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-600 data-[invalid]:data-[hover]:dark:border-red-600',
            'disabled:border-zinc-950/20 disabled:dark:border-white/15 disabled:dark:bg-white/[2.5%] dark:data-[hover]:disabled:border-white/15',
            resizable ? 'resize-y' : 'resize-none',
          ])}
        />
      </span>
      {maxLength !== undefined && (
        <p className="text-xs tracking-wider mt-1">
          {counterText
            .replace('{current}', String(textValue.length))
            .replace('{max}', String(maxLength))}
        </p>
      )}
    </div>
  );
});
