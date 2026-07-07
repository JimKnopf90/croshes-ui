import type { Meta, StoryObj } from '@storybook/react';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { EmptyState } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Feedback/EmptyState',
  component: EmptyState,
};
export default meta;

type Story = StoryObj<typeof EmptyState>;

export const MitIcon: Story = {
  args: {
    icon: ClipboardDocumentListIcon,
    title: 'Keine Buchungen vorhanden',
    description: 'Sobald Kunden buchen, erscheinen die Buchungen hier.',
  },
};

export const NurText: Story = {
  args: { title: 'Keine Einträge' },
};

export const MitAktion: Story = {
  args: {
    icon: ClipboardDocumentListIcon,
    title: 'Noch keine Angebote',
    description: 'Erstellen Sie Ihr erstes Angebot.',
    action: (
      <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-hover">
        Angebot erstellen
      </button>
    ),
  },
};
