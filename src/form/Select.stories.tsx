import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Formulare/Select',
  component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

const optionen = (
  <>
    <option value="huacaya">Huacaya</option>
    <option value="suri">Suri</option>
    <option value="mix">Mischling</option>
  </>
);

export const Standard: Story = {
  render: () => <Select label="Rasse">{optionen}</Select>,
};

export const Pflichtfeld: Story = {
  render: () => (
    <Select label="Rasse" required>
      {optionen}
    </Select>
  ),
};

export const Optional: Story = {
  render: () => (
    <Select label="Rasse" optional>
      {optionen}
    </Select>
  ),
};

export const OhneLabel: Story = {
  render: () => <Select aria-label="Rasse">{optionen}</Select>,
};

export const Mehrfachauswahl: Story = {
  render: () => (
    <Select label="Rassen" multiple>
      {optionen}
    </Select>
  ),
};

export const Deaktiviert: Story = {
  render: () => (
    <Select label="Rasse" disabled>
      {optionen}
    </Select>
  ),
};
