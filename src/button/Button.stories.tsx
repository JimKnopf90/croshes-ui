import type { Meta, StoryObj } from '@storybook/react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'success', 'warning'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary', children: 'Speichern' } };

/** Die sechs semantischen Varianten — mehr gibt es bewusst nicht. */
export const AlleVarianten: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Speichern</Button>
      <Button variant="secondary">Abbrechen</Button>
      <Button variant="ghost">Zurücksetzen</Button>
      <Button variant="danger">Löschen</Button>
      <Button variant="success">Genehmigen</Button>
      <Button variant="warning">Trotzdem buchen</Button>
    </div>
  ),
};

export const Deaktiviert: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" disabled>Speichern</Button>
      <Button variant="secondary" disabled>Abbrechen</Button>
      <Button variant="danger" disabled>Löschen</Button>
    </div>
  ),
};

export const MitIcon: Story = {
  render: () => (
    <Button variant="primary">
      <PlusCircleIcon data-slot="icon" />
      Angebot erstellen
    </Button>
  ),
};

export const AlsLink: Story = {
  args: { variant: 'secondary', href: 'https://example.com', children: 'Zur Buchungsseite' },
};

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" loading>Speichern…</Button>
      <Button variant="secondary" loading>Laden…</Button>
      <Button variant="danger" loading>Löschen…</Button>
    </div>
  ),
};

export const Pill: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="secondary" shape="pill">
        Bestandsregister
      </Button>
      <Button variant="primary" shape="pill">
        <PlusCircleIcon data-slot="icon" />
        Exportieren
      </Button>
      <Button variant="primary" shape="pill" loading>
        Exportieren…
      </Button>
    </div>
  ),
};
