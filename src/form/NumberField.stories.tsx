import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { NumberField } from './NumberField';

const meta: Meta<typeof NumberField> = {
  title: 'Formulare/NumberField',
  component: NumberField,
};
export default meta;

type Story = StoryObj<typeof NumberField>;

const NumberFieldBeispiel = (props: { label: string; hintText?: string; readonly?: boolean }) => {
  const [value, setValue] = useState('42');
  return (
    <div className="max-w-xs">
      <NumberField id="gewicht" value={value} onChange={(e) => setValue(e.target.value)} min={0} max={200} {...props} />
    </div>
  );
};

export const Standard: Story = {
  render: () => <NumberFieldBeispiel label="Gewicht (kg)" />,
};

export const MitHinweis: Story = {
  render: () => <NumberFieldBeispiel label="Gewicht (kg)" hintText="Zwischen 0 und 200 kg" />,
};

export const Readonly: Story = {
  render: () => <NumberFieldBeispiel label="Gewicht (kg)" readonly />,
};
