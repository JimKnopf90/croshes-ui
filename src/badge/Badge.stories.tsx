import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Feedback/Badge',
  component: Badge,
};
export default meta;

type Story = StoryObj<typeof Badge>;

const GREEN = { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-800 dark:text-green-300', label: 'Bezahlt' };
const YELLOW = { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-800 dark:text-yellow-300', label: 'Ausstehend' };
const RED = { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-800 dark:text-red-300', label: 'Storniert' };
const BLUE = { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-800 dark:text-blue-300', label: 'Bestätigt' };

export const Standard: Story = { args: { config: GREEN } };

export const AlleFarben: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge config={GREEN} />
      <Badge config={YELLOW} />
      <Badge config={RED} />
      <Badge config={BLUE} />
    </div>
  ),
};

export const GroesseMd: Story = { args: { config: GREEN, size: 'md' } };
