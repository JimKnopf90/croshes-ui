import React from 'react';
import { Modal } from './Modal';

export interface DeleteModalProps {
  isVisible: boolean;
  onDelete: () => void;
  onClose: () => void;
  /** Titel des Dialogs. */
  title?: string;
  /** Sicherheitsabfrage im Dialog-Inhalt. */
  message?: string;
  /** Beschriftung des Lösch-Buttons. */
  confirmText?: string;
  /** Beschriftung des Abbrechen-Buttons. */
  cancelText?: string;
}

/** Bestätigungsdialog für Löschaktionen mit rotem Bestätigen-Button. */
export const DeleteModal = ({
  isVisible = false,
  onDelete,
  onClose,
  title = 'Löschen',
  message = 'Eintrag wirklich löschen?',
  confirmText = 'Löschen',
  cancelText = 'Abbrechen',
}: DeleteModalProps) => {
  return (
    <Modal
      isVisible={isVisible}
      title={title}
      onClose={onClose}
      onConfirm={onDelete}
      confirmText={confirmText}
      cancelText={cancelText}
      confirmColor="red"
      size="md"
    >
      <div className="text-left">
        <p className="text-gray-700">
          {message}
        </p>
      </div>
    </Modal>
  );
};
