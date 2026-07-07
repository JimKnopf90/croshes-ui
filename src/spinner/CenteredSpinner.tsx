import React from 'react';

/** Zentrierter Ladeindikator für Listen- und Tab-Inhalte. */
export const CenteredSpinner = () => (
  <div className="flex justify-center items-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
  </div>
);
