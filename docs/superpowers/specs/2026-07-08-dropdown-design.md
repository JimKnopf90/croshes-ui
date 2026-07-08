# Design: Dropdown-Menü

Datum: 2026-07-08 · Status: durch Nutzer beauftragt (Screenshots Kebab-Menü + „Hinzufügen"-Menü)

## Ziel

Ein komponierbares Dropdown auf `Headless.Menu`-Basis, das beide Muster aus
breeding-ui abdeckt: das Kebab-Aktionsmenü (ExpandableMenu.tsx, Icon + Label,
Danger-Eintrag) und das reiche „Hinzufügen"-Menü (WeightTab.tsx, Icon-Kachel +
Titel + Beschreibung). Keine neuen Dependencies.

## Komponenten (`src/dropdown/Dropdown.tsx`)

- **Dropdown**: `Headless.Menu`-Wrapper.
- **DropdownButton**: `Headless.MenuButton` mit `as`-Prop, Default `as={Button}`
  — damit funktionieren `<DropdownButton shape="pill">Hinzufügen…` und
  `<DropdownButton as={IconButton} aria-label="Aktionen">` direkt.
- **DropdownMenu**: `Headless.MenuItems` mit `anchor` (Default "bottom end"),
  Transition (fade/scale wie ExpandableMenu), `min-w-56`, rounded-xl,
  Shadow + Ring, Padding p-1.5; Breite via className erweiterbar (w-80 für
  reiche Menüs).
- **DropdownItem**: Button (oder `<a>` bei `href`), `destructive`-Prop
  (rot, roter Fokus-Hintergrund), `disabled`; Icon-Slot `data-slot="icon"`
  (size-4, zinc-500), Layout items-start für ein- und mehrzeilige Einträge.
- **DropdownLabel** / **DropdownDescription**: Titel (semibold bei
  vorhandener Description) und grauer Untertitel.
- **DropdownIconTile**: Icon-Kachel (size-9, rounded-lg,
  bg-surface-container-low, bei Fokus des Eintrags weiß/primary wie im
  Original) für das reiche Muster.
- **DropdownDivider**: Trennlinie.

## Stories (`Overlays/Dropdown`)

- Kebab-Menü: IconButton mit EllipsisVerticalIcon, Einträge mit Icons,
  „Löschen" destructive — Nachbau von Screenshot 1
- Hinzufügen-Menü: Pill-Button mit ChevronDown, Einträge mit Icon-Kachel,
  Titel und Beschreibung — Nachbau von Screenshot 2
- Deaktivierter Eintrag + Divider

## Verifikation

`npm run typecheck`, `npm run build`, Sichtprüfung per Screenshot mit
geöffneten Menüs im laufenden Storybook.
