import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox, CheckboxGroup } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Formulare/Checkbox',
  component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

const CheckboxBeispiel = (props: Omit<React.ComponentProps<typeof Checkbox>, 'checked' | 'onChange'>) => {
  const [checked, setChecked] = useState(true);
  return <Checkbox checked={checked} onChange={setChecked} {...props} />;
};

export const Standard: Story = {
  render: () => <CheckboxBeispiel label="AGB akzeptieren" />,
};

export const MitBeschreibung: Story = {
  render: () => <CheckboxBeispiel label="Newsletter" description="Maximal eine Mail pro Woche." />,
};

export const OhneLabel: Story = {
  render: () => <CheckboxBeispiel />,
};

export const Deaktiviert: Story = {
  render: () => (
    <div className="space-y-3">
      <Checkbox checked disabled onChange={() => {}} label="Nicht änderbar (an)" />
      <Checkbox checked={false} disabled onChange={() => {}} label="Nicht änderbar (aus)" />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => <Checkbox checked indeterminate onChange={() => {}} label="Alle auswählen" />,
};

export const Fehlerhaft: Story = {
  render: () => <Checkbox checked={false} invalid onChange={() => {}} label="AGB akzeptieren" />,
};

const GruppenBeispiel = () => {
  const [kanaele, setKanaele] = useState({ mail: true, push: false, sms: false });
  return (
    <CheckboxGroup label="Benachrichtigungen" required>
      <Checkbox checked={kanaele.mail} onChange={(v) => setKanaele({ ...kanaele, mail: v })} label="E-Mail" />
      <Checkbox checked={kanaele.push} onChange={(v) => setKanaele({ ...kanaele, push: v })} label="Push" description="Nur mit installierter App." />
      <Checkbox checked={kanaele.sms} onChange={(v) => setKanaele({ ...kanaele, sms: v })} label="SMS" />
    </CheckboxGroup>
  );
};

export const Gruppe: Story = {
  render: () => <GruppenBeispiel />,
};
