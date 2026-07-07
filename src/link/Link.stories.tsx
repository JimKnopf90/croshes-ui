import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Navigation/Link',
  component: Link,
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Standard: Story = {
  args: { href: '#', children: 'Zur Tierübersicht' },
};

export const ImFliesstext: Story = {
  render: () => (
    <p className="max-w-md text-sm text-gray-700 dark:text-gray-300">
      Die Buchung wurde storniert. Details findest du in der{' '}
      <Link href="#">Buchungsübersicht</Link> oder direkt beim{' '}
      <Link href="#">Tierprofil</Link>.
    </p>
  ),
};
