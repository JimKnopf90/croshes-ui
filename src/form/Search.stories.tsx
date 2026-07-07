import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Search } from './Search';

const meta: Meta<typeof Search> = {
  title: 'Formulare/Search',
  component: Search,
};
export default meta;

type Story = StoryObj<typeof Search>;

const SearchBeispiel = ({ initial = '', disabled }: { initial?: string; disabled?: boolean }) => {
  const [value, setValue] = useState(initial);
  return (
    <div className="max-w-sm">
      <Search value={value} onChange={setValue} placeholder="Tiere durchsuchen…" disabled={disabled} />
    </div>
  );
};

export const Standard: Story = {
  render: () => <SearchBeispiel />,
};

export const MitWert: Story = {
  render: () => <SearchBeispiel initial="Fluffy" />,
};

export const Deaktiviert: Story = {
  render: () => <SearchBeispiel disabled />,
};
