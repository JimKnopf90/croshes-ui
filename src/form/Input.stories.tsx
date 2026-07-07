import type { Meta, StoryObj } from '@storybook/react';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { Input, InputGroup } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Formulare/Input',
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Standard: Story = {
  args: { label: 'Name', placeholder: 'Name des Tieres' },
};

export const Pflichtfeld: Story = {
  args: { label: 'Name', required: true, placeholder: 'Pflichtangabe' },
};

export const Optional: Story = {
  args: { label: 'Spitzname', optional: true },
};

export const Readonly: Story = {
  args: { label: 'Registrierungsnummer', readonly: true, value: 'DE-123456' },
};

export const Deaktiviert: Story = {
  args: { label: 'Name', disabled: true, value: 'Nicht änderbar' },
};

export const Datum: Story = {
  args: { label: 'Geburtsdatum', type: 'date' },
};

export const MitIcon: Story = {
  render: () => (
    <div>
      <label className="block text-sm/6 font-medium text-gray-900 dark:text-white">Suche</label>
      <div className="mt-2">
        <InputGroup>
          <MagnifyingGlassIcon data-slot="icon" />
          <Input placeholder="Suchen…" aria-label="Suche" />
        </InputGroup>
      </div>
    </div>
  ),
};
