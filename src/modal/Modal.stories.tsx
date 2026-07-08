import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../button/Button';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Overlays/Modal',
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

const ModalBeispiel = (props: Partial<React.ComponentProps<typeof Modal>>) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Modal öffnen
      </Button>
      <Modal
        isVisible={open}
        title="Tier bearbeiten"
        onClose={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
        {...props}
      >
        {props.children ?? <p className="text-sm text-gray-700 dark:text-gray-300">Inhalt des Dialogs.</p>}
      </Modal>
    </>
  );
};

export const Standard: Story = {
  render: () => <ModalBeispiel />,
};

export const MitUntertitel: Story = {
  render: () => <ModalBeispiel subtitle="Ändere die Stammdaten des Tieres." />,
};

export const GrossesModal: Story = {
  render: () => <ModalBeispiel size="3xl" />,
};

export const OhneFooter: Story = {
  render: () => <ModalBeispiel hideFooter />,
};

export const ConfirmDeaktiviert: Story = {
  render: () => <ModalBeispiel disableConfirm confirmText="Speichern" />,
};

/** Löschbestätigung — ersetzt das frühere DeleteModal. */
export const Loeschbestaetigung: Story = {
  render: () => (
    <ModalBeispiel title="Löschen" confirmText="Löschen" confirmVariant="danger">
      <p className="text-sm text-gray-700 dark:text-gray-300">Eintrag wirklich löschen?</p>
    </ModalBeispiel>
  ),
};

export const ConfirmLaedt: Story = {
  render: () => <ModalBeispiel confirmText="Speichern…" confirmLoading />,
};
