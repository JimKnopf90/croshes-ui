import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Combobox, ComboboxLabel, ComboboxOption } from './Combobox';

const meta: Meta<typeof Combobox> = {
  title: 'Formulare/Combobox',
  component: Combobox,
};
export default meta;

type Story = StoryObj<typeof Combobox>;

const TIERE = ['Amadeus', 'Bella', 'Carlos', 'Dolores', 'Emilio'];

const ComboboxBeispiel = ({ label, required, optional }: { label?: string; required?: boolean; optional?: boolean }) => {
  const [value, setValue] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const gefiltert = TIERE.filter((tier) => tier.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="max-w-xs">
      <Combobox
        label={label}
        required={required}
        optional={optional}
        placeholder="Tier suchen…"
        value={value}
        displayValue={(tier) => tier ?? ''}
        onChange={setValue}
        onInputChange={setQuery}
      >
        {gefiltert.map((tier) => (
          <ComboboxOption key={tier} value={tier}>
            <ComboboxLabel>{tier}</ComboboxLabel>
          </ComboboxOption>
        ))}
      </Combobox>
    </div>
  );
};

export const Standard: Story = {
  render: () => <ComboboxBeispiel label="Tier" />,
};

export const Pflichtfeld: Story = {
  render: () => <ComboboxBeispiel label="Tier" required />,
};

export const Optional: Story = {
  render: () => <ComboboxBeispiel label="Tier" optional />,
};

export const OhneLabel: Story = {
  render: () => <ComboboxBeispiel />,
};
