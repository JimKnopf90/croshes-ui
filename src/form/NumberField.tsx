import React, { ChangeEventHandler } from 'react';

export interface NumberFieldProps {
  /** Sichtbarer Beschriftungstext über dem Feld. */
  label: string;
  id: string;
  value?: string;
  /** Optionaler Hinweistext unter dem Feld. */
  hintText?: string;
  readonly?: boolean;
  min?: number;
  max?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

/** Zahleneingabefeld ohne Spin-Buttons; blockiert die Eingabe von "e", "-" und "+". */
export const NumberField = ({ label, id, value, onChange, hintText, min, max, readonly = false }: NumberFieldProps) => {

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "e" || event.key === "-" || event.key === "+") {
      event.preventDefault();
    }
  }

  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-xs font-medium uppercase">
        <span className="text-dark-blue dark:text-dark">
          {label}
        </span>
      </label>
      <input
        className="bg-white border text-dark-blue dark:bg-dark dark:text-dark  text-sm rounded w-full p-2.5 focus:outline outline-1 outline-primary [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none read-only:bg-gray-50 read-only:outline-none"
        type={"number"}
        readOnly={readonly}
        min={min}
        max={max}
        value={value}
        id={id}
        onChange={onChange}
        onKeyDown={handleKeyPress}
      />
      {hintText !== undefined &&
        <div className="text-xs text-primary absolute tracking-wide pt-0.5">
          {hintText}
        </div>
      }
    </div>
  )
}
