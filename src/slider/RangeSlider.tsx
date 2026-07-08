import clsx from 'clsx'
import React from 'react'

const thumbInputClasses = clsx(
  'pointer-events-none absolute h-2 w-full appearance-none bg-transparent focus:outline-none',
  '[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none',
  '[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-solid [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:bg-white',
  '[&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110',
  '[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:appearance-none',
  '[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-solid [&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:bg-white',
  '[&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-md'
)

export interface RangeSliderProps {
  min: number
  max: number
  step?: number
  /** [von, bis] — controlled. */
  value: [number, number]
  /** Wird bei jeder Bewegung aufgerufen. */
  onChange: (value: [number, number]) => void
  /** Wird beim Loslassen eines Reglers aufgerufen (z.B. für API-Calls nach dem Drag). */
  onChangeEnd?: (value: [number, number]) => void
  disabled?: boolean
  className?: string
}

/** Bereichs-Slider mit zwei Reglern (z.B. Altersbereich); Beschriftung übernimmt der Konsument. */
export const RangeSlider = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  onChangeEnd,
  disabled = false,
  className,
}: RangeSliderProps) => {
  const [from, to] = value
  const percent = (v: number) => ((v - min) / (max - min)) * 100

  const handleFrom = (raw: number) => onChange([Math.min(raw, to - step), to])
  const handleTo = (raw: number) => onChange([from, Math.max(raw, from + step)])
  const handleEnd = () => onChangeEnd?.(value)

  return (
    <div className={clsx(className, 'py-1', disabled && 'pointer-events-none opacity-50')}>
      <div className="relative h-2 rounded-full bg-gray-200 dark:bg-zinc-700">
        <div
          className="absolute h-full rounded-full bg-primary"
          style={{ left: `${percent(from)}%`, width: `${percent(to) - percent(from)}%` }}
        />
        <input
          type="range"
          aria-label="Von"
          min={min}
          max={max}
          step={step}
          value={from}
          disabled={disabled}
          onChange={(e) => handleFrom(Number(e.target.value))}
          onMouseUp={handleEnd}
          onTouchEnd={handleEnd}
          onKeyUp={handleEnd}
          className={thumbInputClasses}
          style={{ zIndex: from > max - (max - min) / 6 ? 5 : 3 }}
        />
        <input
          type="range"
          aria-label="Bis"
          min={min}
          max={max}
          step={step}
          value={to}
          disabled={disabled}
          onChange={(e) => handleTo(Number(e.target.value))}
          onMouseUp={handleEnd}
          onTouchEnd={handleEnd}
          onKeyUp={handleEnd}
          className={thumbInputClasses}
          style={{ zIndex: 4 }}
        />
      </div>
    </div>
  )
}
