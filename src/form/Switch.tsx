import React, { ChangeEventHandler } from 'react';

export interface SwitchProps {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  /** Sichtbarer Beschriftungstext rechts neben dem Schalter. */
  label?: string;
  disabled?: boolean;
  /** Tooltip-Text (wird als data-tooltip-content gesetzt, z.B. für react-tooltip). */
  toolTipText?: string;
}

/** Umschalter (Toggle) auf Checkbox-Basis mit optionalem Label und Tooltip. */
export const Switch = ({ checked, onChange, label, disabled = false, toolTipText }: SwitchProps) => {
  return (
    <div {...(toolTipText ? { 'data-tooltip-id': 'tooltip', 'data-tooltip-content': toolTipText } : {})}>
      <label className="relative inline-flex items-center cursor-pointer">
        <input disabled={disabled} type="checkbox" checked={checked} className="sr-only peer" onChange={onChange} />
        <div className={`w-11 h-6 bg-gray-200 rounded-full peer dark:bg-zinc-800 peer-focus:ring-2 peer-focus:ring-primary/30 dark:peer-focus:ring-primary peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary ${disabled ? 'opacity-20' : 'opacity-100'} `} />
        {label && (
          <span className={`ml-3 text-sm font-medium text-gray-900 dark:text-white ${!disabled ? 'text-gray-900' : 'text-gray-900 opacity-10'} `}>
            {label}
          </span>
        )}
      </label>
    </div>
  )
}
