import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TimePicker } from './TimePicker';

const meta: Meta<typeof TimePicker> = {
  title: 'Formulare/TimePicker',
  component: TimePicker,
};
export default meta;

type Story = StoryObj<typeof TimePicker>;

const TimePickerBeispiel = ({ label, required, optional }: { label?: string; required?: boolean; optional?: boolean }) => {
  const [value, setValue] = useState('14:30');
  return (
    <div className="max-w-xs">
      <TimePicker label={label} required={required} optional={optional} value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export const Standard: Story = {
  render: () => <TimePickerBeispiel label="Uhrzeit" />,
};

export const Pflichtfeld: Story = {
  render: () => <TimePickerBeispiel label="Uhrzeit" required />,
};
