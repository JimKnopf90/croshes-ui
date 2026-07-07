# Design: DatePicker/TimePicker, Table, Toast, Tabs (High-Prio-Batch)

Datum: 2026-07-07 · Status: durch Nutzer beauftragt („mach mal alle mit hoher prio")

## Ziel

Die vier Komponenten-Gruppen, die die Migration von breeding-ui/admin-ui auf
croshes-ui blockieren. API-Vorbilder sind die bestehenden App-Implementierungen,
angepasst an den Haus-Stil (Headless UI v2, Tailwind mit `primary`, Dark-Mode).

## Neue Dependencies

`react-day-picker@^9` und `date-fns@^4` — breeding-ui nutzt react-day-picker
bereits; date-fns wird intern geteilt (dedupe). Konsumenten müssen
`react-day-picker/style.css` global importieren (wie heute in breeding-ui);
der Storybook-Preview importiert es ebenfalls.

## Komponenten

### DatePicker / DatePickerRange / TimePicker (`src/form/`)

- **DatePicker**: Popover (Headless) mit readonly Input im Input-Look
  (CalendarDaysIcon rechts) + `DayPicker mode="single"`,
  `captionLayout="dropdown"`. Bereinigte API statt String-Werten:
  `value: Date | null`, `onChange(date: Date)`, `label/required/optional/
  disabled/placeholder`, `displayFormat` (Default `dd.MM.yyyy`), `locale`
  (Default `de`). Popover schließt nach Auswahl.
- **DatePickerRange**: gleiche Hülle, Anzeige „von – bis",
  `mode="range"`, `value?: DateRange`, `onChange(range: DateRange | undefined)`,
  schließt, sobald `to` gesetzt ist. Kein react-intl (Footer via date-fns).
- **TimePicker**: dünner Wrapper um das bestehende `Input` mit `type="time"`
  — gleiche Label-/required-/optional-Mechanik, kein neues Styling.

### Table (`src/table/Table.tsx`)

Kompositions-API mit den Namen aus admin-ui (Drop-in-Migration):
`Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell,
TableCaption` — forwardRef, `className` durchgereicht. Styling im Haus-Stil:
zinc-Border/Hover statt shadcn-Token, Dark-Mode, Scroll-Container im
Table-Wrapper.

### Toast (`src/toast/Toast.tsx`)

Eigenbau ohne Radix (kein neuer Dependency-Baum): `ToastProvider` (hält
State, rendert Viewport fixed unten rechts) + `useToast()` →
`toast({ title, description?, variant?, duration? })` und `dismiss(id)`.
Varianten `success | error | info | warning` mit Heroicons, Schließen-Button,
Auto-Dismiss (Default 5 s), Ein-/Ausblenden über Headless `Transition`
(Pattern wie Modal).

### Tabs (`src/tabs/Tabs.tsx`)

Dünne Wrapper um `Headless.TabGroup`: `Tabs, TabList, Tab, TabPanels,
TabPanel`. Unterstrich-Stil: `data-[selected]` → `border-primary`/
`text-primary`, sonst zinc mit Hover.

## Stories

- `Formulare/DatePicker`, `Formulare/DatePickerRange`, `Formulare/TimePicker`
- `Daten/Table` (Standard, mit Caption/Footer)
- `Feedback/Toast` (Buttons lösen alle Varianten aus, im Provider)
- `Navigation/Tabs` (Standard, viele Tabs)

## Verifikation

`npm run typecheck`, `npm run build`, Sichtprüfung aller Stories per
Screenshot im laufenden Storybook.
