import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Formulare/Textarea',
  component: Textarea,
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Standard: Story = {
  args: { label: 'Beschreibung', placeholder: 'Notizen zum Tier…' },
};

export const MitZeichenlimit: Story = {
  args: { label: 'Kommentar', maxLength: 120, value: 'Sehr freundliches Tier.' },
};

export const NichtVergroesserbar: Story = {
  args: { label: 'Beschreibung', resizable: false },
};

export const Deaktiviert: Story = {
  args: { label: 'Beschreibung', disabled: true, value: 'Nicht änderbar' },
};
