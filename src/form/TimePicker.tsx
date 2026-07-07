import React from 'react'
import { Input, InputProps } from './Input'

export type TimePickerProps = Omit<InputProps, 'type'>

/** Zeitauswahl auf Basis des nativen `type="time"`-Inputs im Input-Look (Label, required/optional). */
export const TimePicker = (props: TimePickerProps) => <Input type="time" {...props} />
