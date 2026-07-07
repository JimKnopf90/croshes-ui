import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../badge/Badge';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Daten/Table',
  component: Table,
};
export default meta;

type Story = StoryObj<typeof Table>;

const STATUS_BADGES = {
  Aktiv: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-800 dark:text-green-300', label: 'Aktiv' },
  Verkauft: { bg: 'bg-zinc-100 dark:bg-zinc-800', text: 'text-zinc-600 dark:text-zinc-300', label: 'Verkauft' },
} as const;

const TIERE = [
  { name: 'Fluffy', rasse: 'Huacaya', geschlecht: 'Stute', status: 'Aktiv' },
  { name: 'Pablo', rasse: 'Suri', geschlecht: 'Hengst', status: 'Aktiv' },
  { name: 'Luna', rasse: 'Huacaya', geschlecht: 'Stute', status: 'Verkauft' },
] as const;

export const Standard: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Rasse</TableHead>
          <TableHead>Geschlecht</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TIERE.map((tier) => (
          <TableRow key={tier.name}>
            <TableCell className="font-medium">{tier.name}</TableCell>
            <TableCell>{tier.rasse}</TableCell>
            <TableCell>{tier.geschlecht}</TableCell>
            <TableCell>
              <Badge config={STATUS_BADGES[tier.status]} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const MitCaptionUndFooter: Story = {
  render: () => (
    <Table>
      <TableCaption>Bestand zum 07.07.2026</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Rasse</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TIERE.map((tier) => (
          <TableRow key={tier.name}>
            <TableCell className="font-medium">{tier.name}</TableCell>
            <TableCell>{tier.rasse}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Gesamt</TableCell>
          <TableCell>{TIERE.length} Tiere</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
