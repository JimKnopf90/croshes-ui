# Design: Checkbox & Radio

Datum: 2026-07-07 · Status: freigegeben

## Ziel

Checkbox- und Radio-Komponenten für croshes-ui, konsistent mit den bestehenden
Headless-UI-v2-Form-Komponenten (Input, Listbox, Combobox) im Catalyst-Stil,
aber mit den Komfort-Props des Hauses (`label`, `required`, `optional`).

## Dateien & Exporte

- `src/form/Checkbox.tsx` → `Checkbox`, `CheckboxGroup`, `CheckboxField`
- `src/form/Radio.tsx` → `Radio`, `RadioGroup`, `RadioField`
- Stories: `Checkbox.stories.tsx`, `Radio.stories.tsx` (Titel `Formulare/…`)
- Exporte inkl. Props-Typen in `src/index.ts`

## API

```tsx
<Checkbox checked={agb} onChange={setAgb} label="AGB akzeptieren" />
<Checkbox label="Newsletter" description="Maximal eine Mail pro Woche" />

<CheckboxGroup label="Benachrichtigungen">
  <Checkbox label="E-Mail" … />
  <Checkbox label="Push" … />
</CheckboxGroup>

<RadioGroup value={size} onChange={setSize} label="Größe" required>
  <Radio value="s" label="Klein" />
  <Radio value="m" label="Mittel" description="Empfohlen" />
</RadioGroup>
```

- Basis: `Headless.Checkbox` bzw. `Headless.RadioGroup`/`Headless.Radio` (v2.2).
- `label`/`description`/`disabled`/`invalid` an Checkbox und Radio.
  Mit `label` wird intern ein `CheckboxField`/`RadioField` (Headless.Field,
  Grid-Layout) gerendert; `disabled` wandert auf das Field, damit auch das
  Label den Disabled-Zustand bekommt. Ohne `label` rendert nur das Control.
- `CheckboxGroup` (einfaches `div` mit Abstand) und `RadioGroup` tragen
  `label`, `required`, `optional` — Kennzeichnung identisch zum Input
  (rotes `*`, graues `OPTIONAL`).
- Checkbox unterstützt `indeterminate` (Strich statt Häkchen).
- `CheckboxField`/`RadioField` werden exportiert für eigenes Markup mit
  `Headless.Label`/`Headless.Description` (`data-slot`-basiertes Grid).

## Styling

- Checked-Zustand `primary` (#7366F0) wie beim Switch; Focus-Ring
  `ring-primary/30` (dark: `ring-primary`); Dark-Mode via `dark:`-Klassen.
- Checkbox: abgerundetes Quadrat (~18 px, sm: 16 px) mit weißem SVG-Häkchen
  bzw. Indeterminate-Strich. Radio: Kreis mit weißem Innenpunkt.
- Zustände über Headless-Data-Attribute: `data-[checked]`,
  `data-[indeterminate]`, `data-[disabled]` (opacity-50), `data-[focus]`,
  `data-[hover]`; `invalid`-Prop setzt roten Rand + `aria-invalid`.

## Stories

Default, mit Description, Disabled, Indeterminate, Invalid, Gruppe
(Checkbox-Gruppe und Radio-Gruppe mit required/optional). Dark Mode über das
vorhandene Theme-Addon.

## Verifikation

Kein Unit-Test-Setup im Repo — Verifikation über `npm run typecheck`,
`npm run build` und Sichtprüfung in Storybook.
