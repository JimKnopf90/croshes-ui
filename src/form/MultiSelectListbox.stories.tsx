import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MultiSelectListbox, MultiSelectOption } from './MultiSelectListbox';

const meta: Meta<typeof MultiSelectListbox> = {
  title: 'Formulare/MultiSelectListbox',
  component: MultiSelectListbox,
};
export default meta;

type Story = StoryObj<typeof MultiSelectListbox>;

const OPTIONEN: MultiSelectOption<string>[] = [
  { value: 'huacaya', label: 'Huacaya' },
  { value: 'suri', label: 'Suri' },
  { value: 'mix', label: 'Mischling' },
];

const Beispiel = ({ variant }: { variant?: 'default' | 'pill' }) => {
  const [value, setValue] = useState<string[]>(['huacaya']);
  return (
    <div className="max-w-xs">
      <MultiSelectListbox
        label="Rassen"
        placeholder="Rassen wählen…"
        options={OPTIONEN}
        value={value}
        onChange={setValue}
        variant={variant}
      />
    </div>
  );
};

export const Standard: Story = {
  render: () => <Beispiel />,
};

export const AlsPill: Story = {
  render: () => <Beispiel variant="pill" />,
};

export const Leer: Story = {
  render: () => {
    const LeerBeispiel = () => {
      const [value, setValue] = useState<string[]>([]);
      return (
        <div className="max-w-xs">
          <MultiSelectListbox
            label="Rassen"
            placeholder="Rassen wählen…"
            options={OPTIONEN}
            value={value}
            onChange={setValue}
          />
        </div>
      );
    };
    return <LeerBeispiel />;
  },
};
