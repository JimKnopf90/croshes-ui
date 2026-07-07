import type { Meta, StoryObj } from '@storybook/react';
import { CenteredSpinner } from './CenteredSpinner';

const meta: Meta<typeof CenteredSpinner> = {
  title: 'Feedback/CenteredSpinner',
  component: CenteredSpinner,
};
export default meta;

type Story = StoryObj<typeof CenteredSpinner>;

export const Standard: Story = {};
