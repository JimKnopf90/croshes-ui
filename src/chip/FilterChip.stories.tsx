import type { Meta, StoryObj } from '@storybook/react';
import { FunnelIcon } from '@heroicons/react/24/outline';
import { FunnelIcon as FunnelIconSolid } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { FilterChip } from './FilterChip';

const meta: Meta<typeof FilterChip> = {
  title: 'Button/FilterChip',
  component: FilterChip,
};
export default meta;

type Story = StoryObj<typeof FilterChip>;

const ToggleBeispiel = () => {
  const [extern, setExtern] = useState(true);
  const [ausgeschieden, setAusgeschieden] = useState(false);
  return (
    <div className="flex flex-wrap gap-2">
      <FilterChip selected={extern} onChange={setExtern}>
        Externe Tiere
      </FilterChip>
      <FilterChip selected={ausgeschieden} onChange={setAusgeschieden}>
        Ausgeschiedene Tiere
      </FilterChip>
    </div>
  );
};

export const Standard: Story = {
  render: () => <ToggleBeispiel />,
};

const QuickSelectBeispiel = () => {
  const [range, setRange] = useState('1-3');
  return (
    <div className="flex flex-wrap gap-2">
      {['0-1', '1-3', '3-10', '10+'].map((label) => (
        <FilterChip key={label} size="sm" showCheck={false} selected={range === label} onChange={() => setRange(label)}>
          {label}
        </FilterChip>
      ))}
    </div>
  );
};

export const SchnellauswahlKlein: Story = {
  render: () => <QuickSelectBeispiel />,
};

const IconBeispiel = () => {
  const [offen, setOffen] = useState(false);
  return (
    <FilterChip
      selected={offen}
      onChange={setOffen}
      icon={offen ? <FunnelIconSolid data-slot="icon" /> : <FunnelIcon data-slot="icon" />}
    >
      Erweiterte Suche
    </FilterChip>
  );
};

export const MitEigenemIcon: Story = {
  render: () => <IconBeispiel />,
};

export const Deaktiviert: Story = {
  render: () => (
    <div className="flex gap-2">
      <FilterChip selected disabled onChange={() => {}}>
        Nicht änderbar
      </FilterChip>
      <FilterChip selected={false} disabled onChange={() => {}}>
        Nicht änderbar
      </FilterChip>
    </div>
  ),
};
