import React from 'react';
import { Dialog, Transition, DialogTitle, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button, ButtonColor, ButtonVariant } from '../button/Button';

export interface ModalProps {
  isVisible: boolean;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  /** Semantische Variante des Bestätigen-Buttons; "danger" für destruktive Dialoge (Löschen). */
  confirmVariant?: ButtonVariant;
  /** @deprecated `confirmVariant` verwenden. */
  confirmColor?: ButtonColor;
  cancelText?: string;
  disableConfirm?: boolean;
  /** Zeigt einen Spinner im Bestätigen-Button (z.B. während des Speicherns). */
  confirmLoading?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  hideFooter?: boolean;
  /** Erlaubt sichtbaren Overflow (nützlich für Dropdowns/Selektoren im Modal). */
  overflowVisible?: boolean;
}

/**
 * Standard-Dialog mit Header, scrollbarem Inhalt und Bestätigen/Abbrechen-Footer.
 * Für Löschbestätigungen `confirmVariant="danger"` setzen (ersetzt das frühere DeleteModal).
 */
export const Modal: React.FC<ModalProps> = ({
  isVisible,
  title,
  subtitle,
  children,
  onClose,
  onConfirm,
  confirmText = 'Bestätigen',
  confirmVariant = 'primary',
  confirmColor,
  cancelText = 'Abbrechen',
  disableConfirm = false,
  confirmLoading = false,
  hideFooter = false,
  size = 'md',
  overflowVisible = false,
}) => {
  const sizeClasses = {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl',
    '3xl': 'sm:max-w-3xl',
    '4xl': 'sm:max-w-4xl',
    '5xl': 'sm:max-w-5xl',
  };

  return (
    <Transition appear show={isVisible}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Backdrop */}
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity dark:bg-zinc-950/70" aria-hidden="true" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              className={`relative transform rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10 text-left transition-[opacity,transform] w-full ${sizeClasses[size]} ${overflowVisible ? '' : 'overflow-hidden'} data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in`}
            >
              {/* Header */}
              {title && (
                <div className="flex items-start justify-between px-6 py-5 border-b border-gray-100 dark:border-zinc-800">
                  <div>
                    <DialogTitle as="h3" className="text-lg font-semibold text-gray-900 dark:text-white">
                      {title}
                    </DialogTitle>
                    {subtitle && (
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
                    )}
                  </div>
                  <button
                    onClick={onClose}
                    className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-zinc-800 dark:hover:text-gray-200 transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Content */}
              <div className={`px-6 py-5 ${overflowVisible ? '' : 'max-h-[70vh] overflow-y-auto'}`}>{children}</div>

              {/* Footer */}
              {!hideFooter && (
                <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-800/30">
                  <Button
                    onClick={onClose}
                    variant="secondary"
                  >
                    {cancelText}
                  </Button>
                  {onConfirm && (
                    <Button
                      onClick={onConfirm}
                      disabled={disableConfirm}
                      loading={confirmLoading}
                      {...(confirmColor ? { color: confirmColor } : { variant: confirmVariant })}
                    >
                      {confirmText}
                    </Button>
                  )}
                </div>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
