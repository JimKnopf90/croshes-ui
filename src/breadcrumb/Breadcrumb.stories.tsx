import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
};
export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Standard: Story = {
  args: {
    items: [
      { label: 'Start', href: '#' },
      { label: 'Herde', href: '#' },
      { label: 'Fluffy' },
    ],
  },
};

export const LangeLabels: Story = {
  args: {
    items: [
      { label: 'Start', href: '#' },
      { label: 'Ein sehr langer Zwischenschritt, der abgeschnitten wird, weil er zu lang ist', href: '#' },
      { label: 'Detailseite' },
    ],
  },
};
