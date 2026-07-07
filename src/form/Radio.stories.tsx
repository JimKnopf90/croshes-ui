import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio, RadioGroup } from './Radio';

const meta: Meta<typeof RadioGroup> = {
  title: 'Formulare/Radio',
  component: RadioGroup,
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

const GROESSEN = [
  { value: 's', label: 'Klein' },
  { value: 'm', label: 'Mittel', description: 'Empfohlen' },
  { value: 'l', label: 'Groß' },
];

const RadioBeispiel = ({ label, required, optional, disabled }: { label?: string; required?: boolean; optional?: boolean; disabled?: boolean }) => {
  const [value, setValue] = useState('m');
  return (
    <RadioGroup value={value} onChange={setValue} label={label} required={required} optional={optional} disabled={disabled}>
      {GROESSEN.map((groesse) => (
        <Radio key={groesse.value} value={groesse.value} label={groesse.label} description={groesse.description} />
      ))}
    </RadioGroup>
  );
};

export const Standard: Story = {
  render: () => <RadioBeispiel label="Größe" />,
};

export const Pflichtfeld: Story = {
  render: () => <RadioBeispiel label="Größe" required />,
};

export const Optional: Story = {
  render: () => <RadioBeispiel label="Größe" optional />,
};

export const OhneUeberschrift: Story = {
  render: () => <RadioBeispiel />,
};

export const Deaktiviert: Story = {
  render: () => <RadioBeispiel label="Größe" disabled />,
};

export const Fehlerhaft: Story = {
  render: () => (
    <RadioGroup value="" onChange={() => {}} label="Größe" required>
      {GROESSEN.map((groesse) => (
        <Radio key={groesse.value} value={groesse.value} label={groesse.label} invalid />
      ))}
    </RadioGroup>
  ),
};
