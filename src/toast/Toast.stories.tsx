import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/Button';
import { ToastProvider, useToast } from './Toast';

const meta: Meta<typeof ToastProvider> = {
  title: 'Feedback/Toast',
  component: ToastProvider,
};
export default meta;

type Story = StoryObj<typeof ToastProvider>;

const ToastAusloeser = () => {
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => toast({ title: 'Tier gespeichert', description: 'Fluffy wurde aktualisiert.', variant: 'success' })}>
        Success
      </Button>
      <Button variant="danger" onClick={() => toast({ title: 'Speichern fehlgeschlagen', description: 'Bitte später erneut versuchen.', variant: 'error' })}>
        Error
      </Button>
      <Button variant="secondary" onClick={() => toast({ title: 'Synchronisierung läuft', variant: 'info' })}>
        Info
      </Button>
      <Button variant="warning" onClick={() => toast({ title: 'Impfung fällig', description: 'Luna ist seit 3 Tagen überfällig.', variant: 'warning' })}>
        Warning
      </Button>
      <Button variant="ghost" onClick={() => toast({ title: 'Bleibt stehen', description: 'duration: 0 — nur manuell schließbar.', variant: 'info', duration: 0 })}>
        Ohne Auto-Dismiss
      </Button>
    </div>
  );
};

export const Standard: Story = {
  render: () => (
    <ToastProvider>
      <ToastAusloeser />
    </ToastProvider>
  ),
};
