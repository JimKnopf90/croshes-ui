import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Link } from '../link/Link';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const AlleVarianten: Story = {
  render: () => (
    <div className="max-w-xl space-y-4">
      <Alert variant="success" title="Tier gespeichert" description="Fluffy wurde erfolgreich aktualisiert." />
      <Alert variant="error" title="Speichern fehlgeschlagen" description="Der Server ist nicht erreichbar. Bitte später erneut versuchen." />
      <Alert variant="warning" title="Impfung fällig" description="Luna ist seit 3 Tagen überfällig." />
      <Alert variant="info" title="Synchronisierung läuft" description="Die Daten werden im Hintergrund abgeglichen." />
    </div>
  ),
};

export const Schliessbar: Story = {
  render: () => (
    <div className="max-w-xl">
      <Alert variant="warning" title="Ungespeicherte Änderungen" description="Beim Verlassen der Seite gehen Änderungen verloren." onClose={() => {}} />
    </div>
  ),
};

export const MitEigenemInhalt: Story = {
  render: () => (
    <div className="max-w-xl">
      <Alert variant="error" title="3 Felder sind ungültig">
        <ul className="list-inside list-disc space-y-1">
          <li>Geburtsdatum liegt in der Zukunft</li>
          <li>Chip-Nummer ist bereits vergeben</li>
        </ul>
        <p className="mt-2">
          <Link href="#">Zur Hilfe-Seite</Link>
        </p>
      </Alert>
    </div>
  ),
};
