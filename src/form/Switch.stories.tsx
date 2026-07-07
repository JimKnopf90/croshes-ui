import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Formulare/Switch',
  component: Switch,
};
export default meta;

type Story = StoryObj<typeof Switch>;

const SwitchBeispiel = ({ label, disabled }: { label?: string; disabled?: boolean }) => {
  const [checked, setChecked] = useState(true);
  return <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} label={label} disabled={disabled} />;
};

export const Standard: Story = {
  render: () => <SwitchBeispiel label="Benachrichtigungen aktivieren" />,
};

export const OhneLabel: Story = {
  render: () => <SwitchBeispiel />,
};

export const Deaktiviert: Story = {
  render: () => <SwitchBeispiel label="Nicht änderbar" disabled />,
};

export const Aus: Story = {
  render: () => <Switch checked={false} onChange={() => {}} label="Ausgeschaltet" />,
};
