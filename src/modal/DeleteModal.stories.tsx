import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../button/Button';
import { DeleteModal } from './DeleteModal';

const meta: Meta<typeof DeleteModal> = {
  title: 'Overlays/DeleteModal',
  component: DeleteModal,
};
export default meta;

type Story = StoryObj<typeof DeleteModal>;

const DeleteModalBeispiel = (props: Partial<React.ComponentProps<typeof DeleteModal>>) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button color="red" onClick={() => setOpen(true)}>
        Löschen…
      </Button>
      <DeleteModal isVisible={open} onClose={() => setOpen(false)} onDelete={() => setOpen(false)} {...props} />
    </>
  );
};

export const Standard: Story = {
  render: () => <DeleteModalBeispiel />,
};

export const EigeneTexte: Story = {
  render: () => (
    <DeleteModalBeispiel
      title="Tier löschen"
      message="Soll das Tier wirklich unwiderruflich gelöscht werden?"
      confirmText="Endgültig löschen"
      cancelText="Doch nicht"
    />
  ),
};
