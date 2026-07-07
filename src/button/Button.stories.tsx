import type { Meta, StoryObj } from '@storybook/react';
import { PlusIcon } from '@heroicons/react/16/solid';
import { Button, ButtonColor } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Aktionen/Button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

const ALLE_FARBEN: ButtonColor[] = [
  'dark/zinc',
  'light',
  'dark/white',
  'dark',
  'white',
  'zinc',
  'indigo',
  'cyan',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'sky',
  'blue',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

export const Standard: Story = {
  args: { children: 'Speichern' },
};

export const AlleFarben: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      {ALLE_FARBEN.map((color) => (
        <Button key={color} color={color}>
          {color}
        </Button>
      ))}
    </div>
  ),
};

export const Outline: Story = {
  args: { outline: true, children: 'Abbrechen' },
};

export const Plain: Story = {
  args: { plain: true, children: 'Mehr anzeigen' },
};

export const Deaktiviert: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button color="purple" disabled>
        Deaktiviert
      </Button>
      <Button outline disabled>
        Deaktiviert
      </Button>
      <Button plain disabled>
        Deaktiviert
      </Button>
    </div>
  ),
};

export const MitIcon: Story = {
  render: () => (
    <Button color="purple">
      <PlusIcon data-slot="icon" />
      Neu anlegen
    </Button>
  ),
};

export const AlsLink: Story = {
  render: () => (
    <Button href="https://alpaka.pro" target="_blank" color="purple">
      Zur Website
    </Button>
  ),
};
