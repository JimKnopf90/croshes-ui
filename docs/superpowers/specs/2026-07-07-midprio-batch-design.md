# Design: Search, Alert, Breadcrumb, Link, IconButton, Button-loading, Field (Mid-Prio-Batch)

Datum: 2026-07-07 · Status: durch Nutzer beauftragt („mach die Mittlere Priorität")

## Ziel

Die Komponenten mittlerer Priorität aus der Fehlt-Liste, wieder mit den
App-Implementierungen (breeding-ui) als API-Vorbild, bereinigt um
react-intl/Redux/next-Abhängigkeiten. Keine neuen Dependencies.

## Komponenten

### Button: `loading`-Prop (`src/button/Button.tsx`)

Ersetzt InProgressButton aus breeding-ui. `loading?: boolean` zeigt einen
kleinen Inline-Spinner (SVG mit `data-slot="icon"`, erbt Größe/Farbe über die
bestehenden Icon-Slots) vor dem Label und deaktiviert den Button. Gilt für
die Button-Variante; bei `href`-Links wird nur der Spinner gezeigt.

### IconButton (`src/button/IconButton.tsx`)

Quadratischer Button für Icon-only-Aktionen. `aria-label` ist Pflicht.
Varianten `ghost` (Default) | `secondary` | `primary` | `danger`,
Größen `sm | md`. Eigene, schlanke Styles (kein CSS-Var-Apparat des großen
Buttons), TouchTarget für 44px-Trefferfläche, Headless.Button-Basis.

### Link (`src/link/Link.tsx`)

Gestylter `<a>` (forwardRef) in `Headless.DataInteractive`: primary-farben
mit dezentem Unterstrich, Hover kräftiger. Kein next/link im Design System —
Konsumenten wrappen bei Bedarf selbst (breeding-ui behält seinen Wrapper).

### Breadcrumb (`src/breadcrumb/Breadcrumb.tsx`)

`items: { label, href? }[]`; Chevron-Separatoren, letzter Eintrag
`aria-current="page"` + font-medium, Einträge mit `href` als Link.
`linkComponent`-Prop (Default `'a'`) für die Integration mit next/link & Co.
Kein react-intl — Labels sind fertige Strings.

### Search (`src/form/Search.tsx`)

Controlled: `value: string`, `onChange(value: string)` (bereinigt um Redux).
Lupe links, Clear-Button (X) sobald Wert vorhanden, `rounded-full`,
Fokus-Ring in primary, sr-only-Label (Default „Suche"), `placeholder`,
`disabled`.

### Field / Label / Description / ErrorMessage (`src/form/Field.tsx`)

Catalyst-Muster auf `Headless.Field`-Basis für frei komponierte Formularfelder:
Field verdrahtet Label/Description/Control automatisch (ids, aria-describedby)
und regelt Abstände über `data-slot`-Selektoren. `Label` mit
`required`/`optional`-Kennzeichnung wie beim Input, `ErrorMessage` in Rot
(data-slot="error"). Bestehende Komponenten behalten ihre `label`-Props —
Field ist die Basis für Sonderfälle und künftige Fehleranzeige.

## Stories

`Button/Button` (Loading-Story ergänzt), `Button/IconButton`,
`Navigation/Link`, `Navigation/Breadcrumb`, `Formulare/Search`,
`Formulare/Field` (Input mit ErrorMessage), `Feedback/Alert`.

### Alert (`src/alert/Alert.tsx`)

Inline-Hinweisbox (kein Overlay): Varianten `success | error | info | warning`
mit denselben Heroicons wie Toast, Titel + optionale Description/children,
optional schließbar (`onClose`), farbige Hintergrund-/Rahmen-Töne mit
Dark-Mode.

## Verifikation

`npm run typecheck`, `npm run build`, Sichtprüfung aller Stories per
Screenshot im laufenden Storybook.
