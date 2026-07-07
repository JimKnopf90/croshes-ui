import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Formulare/DatePicker',
  component: DatePicker,
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

const DatePickerBeispiel = ({ label, required, optional, disabled }: { label?: string; required?: boolean; optional?: boolean; disabled?: boolean }) => {
  const [value, setValue] = useState<Date | null>(new Date(2026, 6, 7));
  return (
    <div className="max-w-xs">
      <DatePicker label={label} required={required} optional={optional} disabled={disabled} value={value} onChange={setValue} placeholder="Datum wählen…" />
    </div>
  );
};

export const Standard: Story = {
  render: () => <DatePickerBeispiel label="Geburtsdatum" />,
};

export const Pflichtfeld: Story = {
  render: () => <DatePickerBeispiel label="Geburtsdatum" required />,
};

export const Optional: Story = {
  render: () => <DatePickerBeispiel label="Geburtsdatum" optional />,
};

export const Leer: Story = {
  render: () => {
    const LeerBeispiel = () => {
      const [value, setValue] = useState<Date | null>(null);
      return (
        <div className="max-w-xs">
          <DatePicker label="Geburtsdatum" value={value} onChange={setValue} placeholder="Datum wählen…" />
        </div>
      );
    };
    return <LeerBeispiel />;
  },
};

export const Deaktiviert: Story = {
  render: () => <DatePickerBeispiel label="Geburtsdatum" disabled />,
};
