import type { Meta, StoryObj } from '@storybook/react';
import { CardTitle } from './CardTitle';

const meta: Meta<typeof CardTitle> = {
  title: 'Layout/CardTitle',
  component: CardTitle,
};
export default meta;

type Story = StoryObj<typeof CardTitle>;

export const Standard: Story = {
  render: () => (
    <div className="max-w-md">
      <CardTitle title="Herdenübersicht">
        <p className="text-sm text-gray-700 dark:text-gray-300">Inhalt unterhalb der Titelzeile.</p>
      </CardTitle>
    </div>
  ),
};
