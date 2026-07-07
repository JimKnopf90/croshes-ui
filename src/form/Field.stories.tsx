import type { Meta, StoryObj } from '@storybook/react';
import { Description, ErrorMessage, Field, Label } from './Field';
import { Input } from './Input';

const meta: Meta<typeof Field> = {
  title: 'Formulare/Field',
  component: Field,
};
export default meta;

type Story = StoryObj<typeof Field>;

export const MitBeschreibung: Story = {
  render: () => (
    <div className="max-w-xs">
      <Field>
        <Label required>Chip-Nummer</Label>
        <Description>15-stellige Nummer vom Transponder.</Description>
        <Input name="chip" />
      </Field>
    </div>
  ),
};

export const MitFehler: Story = {
  render: () => (
    <div className="max-w-xs">
      <Field>
        <Label required>Chip-Nummer</Label>
        <Input name="chip" invalid defaultValue="276-abc" />
        <ErrorMessage>Die Chip-Nummer darf nur Ziffern enthalten.</ErrorMessage>
      </Field>
    </div>
  ),
};

export const Deaktiviert: Story = {
  render: () => (
    <div className="max-w-xs">
      <Field disabled>
        <Label>Chip-Nummer</Label>
        <Input name="chip" defaultValue="276097201234567" />
        <Description>Kann nach der Registrierung nicht geändert werden.</Description>
      </Field>
    </div>
  ),
};
