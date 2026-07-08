import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RangeSlider } from './RangeSlider';

const meta: Meta<typeof RangeSlider> = {
  title: 'Formulare/RangeSlider',
  component: RangeSlider,
};
export default meta;

type Story = StoryObj<typeof RangeSlider>;

const SliderBeispiel = ({ disabled }: { disabled?: boolean }) => {
  const [value, setValue] = useState<[number, number]>([0, 30]);
  const [from, to] = value;
  return (
    <div className="max-w-md">
      <RangeSlider min={0} max={30} value={value} onChange={setValue} disabled={disabled} />
      <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {from === 0 && to === 30 ? 'Alle Altersgruppen' : `${from} - ${to === 30 ? '30+' : to}`}
        </span>
        <span>30+</span>
      </div>
    </div>
  );
};

export const Standard: Story = {
  render: () => <SliderBeispiel />,
};

export const Deaktiviert: Story = {
  render: () => <SliderBeispiel disabled />,
};
