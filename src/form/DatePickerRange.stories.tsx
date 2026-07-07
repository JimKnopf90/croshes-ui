import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatePickerRange, DateRange } from './DatePickerRange';

const meta: Meta<typeof DatePickerRange> = {
  title: 'Formulare/DatePickerRange',
  component: DatePickerRange,
};
export default meta;

type Story = StoryObj<typeof DatePickerRange>;

const RangeBeispiel = ({ label }: { label?: string }) => {
  const [value, setValue] = useState<DateRange | undefined>({
    from: new Date(2026, 6, 1),
    to: new Date(2026, 6, 15),
  });
  return (
    <div className="max-w-sm">
      <DatePickerRange label={label} value={value} onChange={setValue} placeholder="Zeitraum wählen…" />
    </div>
  );
};

export const Standard: Story = {
  render: () => <RangeBeispiel label="Zeitraum" />,
};

export const Leer: Story = {
  render: () => {
    const LeerBeispiel = () => {
      const [value, setValue] = useState<DateRange | undefined>(undefined);
      return (
        <div className="max-w-sm">
          <DatePickerRange label="Zeitraum" value={value} onChange={setValue} placeholder="Zeitraum wählen…" />
        </div>
      );
    };
    return <LeerBeispiel />;
  },
};
