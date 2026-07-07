# croshes-ui

Das Croshes Design-System: React-Komponenten mit Tailwind CSS, genutzt von
AlpakaPro (breeding-ui, admin-ui) und Alpaca-Store (store-ui, store-manager-ui).

## Installation

```bash
npm install croshes-ui
```

Tailwind-Preset einbinden (`tailwind.config.js` des Konsumenten):

```js
module.exports = {
  presets: [require('croshes-ui/tailwind-preset')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/croshes-ui/dist/**/*.js',
  ],
};
```

## Verwendung

```tsx
import { Button, Badge, EmptyState, Spinner } from 'croshes-ui';

<Button color="purple">Speichern</Button>
```

## Komponenten-Katalog

Storybook lokal starten:

```bash
npm run storybook
```

## Entwicklung

- `npm run build` – Bibliothek bauen (ESM + CJS + Typen via tsup)
- `npm run typecheck` – TypeScript prüfen
- `npm run build-storybook` – statisches Storybook bauen

## Release

Ein Git-Tag `v*` löst den Publish-Workflow aus (benötigt das Repo-Secret `NPM_TOKEN`).
