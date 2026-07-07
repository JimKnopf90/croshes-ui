import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Standard: Story = {
  render: () => (
    <Card className="max-w-md">
      <p className="text-sm text-gray-700 dark:text-gray-300">Inhalt der Karte.</p>
    </Card>
  ),
};

export const MitZusatzklassen: Story = {
  render: () => (
    <Card className="max-w-md text-center">
      <p className="text-sm text-gray-700 dark:text-gray-300">Zentrierter Inhalt.</p>
    </Card>
  ),
};
