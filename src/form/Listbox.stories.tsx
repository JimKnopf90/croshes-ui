import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Listbox, ListboxLabel, ListboxOption } from './Listbox';

const meta: Meta<typeof Listbox> = {
  title: 'Formulare/Listbox',
  component: Listbox,
};
export default meta;

type Story = StoryObj<typeof Listbox>;

const RASSEN = ['Huacaya', 'Suri', 'Mischling'];

const ListboxBeispiel = ({ label, required, optional }: { label: string; required?: boolean; optional?: boolean }) => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div className="max-w-xs">
      <Listbox label={label} required={required} optional={optional} placeholder="Bitte wählen…" value={value} onChange={setValue}>
        {RASSEN.map((rasse) => (
          <ListboxOption key={rasse} value={rasse}>
            <ListboxLabel>{rasse}</ListboxLabel>
          </ListboxOption>
        ))}
      </Listbox>
    </div>
  );
};

export const Standard: Story = {
  render: () => <ListboxBeispiel label="Rasse" />,
};

export const Pflichtfeld: Story = {
  render: () => <ListboxBeispiel label="Rasse" required />,
};

export const Optional: Story = {
  render: () => <ListboxBeispiel label="Rasse" optional />,
};

const MehrfachBeispiel = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="max-w-xs">
      <Listbox label="Rassen" multiple placeholder="Bitte wählen…" value={value} onChange={setValue}>
        {RASSEN.map((rasse) => (
          <ListboxOption key={rasse} value={rasse}>
            <ListboxLabel>{rasse}</ListboxLabel>
          </ListboxOption>
        ))}
      </Listbox>
    </div>
  );
};

export const Mehrfachauswahl: Story = {
  render: () => <MehrfachBeispiel />,
};
