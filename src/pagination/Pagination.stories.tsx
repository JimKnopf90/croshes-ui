import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
};
export default meta;

type Story = StoryObj<typeof Pagination>;

const PaginationBeispiel = ({ align }: { align?: 'between' | 'center' }) => {
  const [page, setPage] = useState(0);
  return (
    <div className="max-w-md">
      <Pagination page={page} totalPages={5} onPageChange={setPage} align={align} />
    </div>
  );
};

export const Standard: Story = {
  render: () => <PaginationBeispiel />,
};

export const Zentriert: Story = {
  render: () => <PaginationBeispiel align="center" />,
};

export const EigeneLabels: Story = {
  render: () => (
    <div className="max-w-md">
      <Pagination page={1} totalPages={3} onPageChange={() => {}} previousLabel="Vorherige" nextLabel="Nächste" />
    </div>
  ),
};
