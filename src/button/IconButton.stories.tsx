import type { Meta, StoryObj } from '@storybook/react';
import { PencilSquareIcon, PlusIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Button/IconButton',
  component: IconButton,
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const AlleVarianten: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <IconButton aria-label="Bearbeiten">
        <PencilSquareIcon data-slot="icon" />
      </IconButton>
      <IconButton aria-label="Hinzufügen" variant="primary">
        <PlusIcon data-slot="icon" />
      </IconButton>
      <IconButton aria-label="Schließen" variant="secondary">
        <XMarkIcon data-slot="icon" />
      </IconButton>
      <IconButton aria-label="Löschen" variant="danger">
        <TrashIcon data-slot="icon" />
      </IconButton>
    </div>
  ),
};

export const Klein: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <IconButton aria-label="Bearbeiten" size="sm">
        <PencilSquareIcon data-slot="icon" />
      </IconButton>
      <IconButton aria-label="Löschen" size="sm" variant="danger">
        <TrashIcon data-slot="icon" />
      </IconButton>
    </div>
  ),
};

export const Deaktiviert: Story = {
  render: () => (
    <IconButton aria-label="Löschen" variant="danger" disabled>
      <TrashIcon data-slot="icon" />
    </IconButton>
  ),
};
