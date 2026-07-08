# Design: FilterChip, Button-Pill-Form, RangeSlider

Datum: 2026-07-08 · Status: durch Nutzer beauftragt („ja mach die drei")

## Ziel

Die drei handgestrickten UI-Muster der breeding-ui-Übersichtsseite ins Design
System holen: Toggle-Pills (3× kopiert), Pill-förmige Header-Buttons und der
Dual-Thumb-Range-Slider. Keine neuen Dependencies.

## Komponenten

### FilterChip (`src/chip/FilterChip.tsx`)

Toggle-Pill für Filterzustände (Vorbild: ExternalFilter/DeactivationFilter/
AgeRangeFilter-Quick-Selects):

- `selected: boolean`, `onChange(selected: boolean)`, `children` (Label)
- `size?: 'sm' | 'md'` (sm = Quick-Select-Format text-xs, md = Standard)
- `icon?: ReactNode` (eigenes Icon, z.B. Funnel); ohne `icon` erscheint bei
  `selected` automatisch ein CheckIcon (`showCheck={false}` schaltet das ab)
- Stil wie in breeding-ui: aktiv `bg-primary/5` + `border-primary/40`,
  inaktiv weiß/zinc mit `hover:border-primary`; Headless.Button-Basis,
  Fokus-Ring primary, `disabled` mit opacity.

### Button: `shape`-Prop (`src/button/Button.tsx`)

`shape?: 'default' | 'pill'` — pill rendert `rounded-full` (deckt die
Header-Buttons „Bestandsregister"/„Exportieren" ab, kombinierbar mit allen
Varianten und `loading`). Umsetzung: Radius-Klassen aus base/solid in eine
shape-Map ziehen, damit keine Tailwind-Klassenkonflikte (rounded-lg vs.
rounded-full) entstehen.

### RangeSlider (`src/slider/RangeSlider.tsx`)

Dual-Thumb-Slider (Vorbild AgeRangeFilter, generisch und controlled):

- `min`, `max`, `step?` (Default 1), `value: [number, number]`,
  `onChange(value)`; optional `onChangeEnd(value)` beim Loslassen
  (für API-Calls nach dem Drag)
- Zwei überlagerte native `<input type="range">`, Thumbs weiß mit
  Primary-Rand (geteilte Klassen-Konstante statt Duplikat), aktiver
  Track in primary, `disabled` mit opacity
- Min-/Max-Thumb clampen sich gegenseitig auf `step`-Abstand
- Beschriftung unterhalb (z.B. „Alle Altersgruppen"/„30+") bleibt beim
  Konsumenten.

## Stories

- `Button/FilterChip`: Standard-Toggles (md), Quick-Selects (sm, Gruppe),
  eigenes Icon, disabled
- `Button/Button`: Story „Pill" (Sekundär- und Primary-Pill mit Icon)
- `Formulare/RangeSlider`: interaktiv mit Wertanzeige, disabled

## Verifikation

`npm run typecheck`, `npm run build`, Sichtprüfung per Screenshot im
laufenden Storybook (inkl. Drag-Interaktion am Slider).
